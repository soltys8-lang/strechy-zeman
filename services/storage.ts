import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { collection, addDoc, getDocs, deleteDoc, doc, query, orderBy } from 'firebase/firestore';
import { storage as firebaseStorage, db } from '../firebase';
import { GalleryItem } from '../types';

const GALLERY_COLLECTION = 'gallery';

export const storage = {
  // Get all gallery items from Firestore
  getGallery: async (): Promise<GalleryItem[]> => {
    try {
      const q = query(collection(db, GALLERY_COLLECTION), orderBy('date', 'desc'));
      const querySnapshot = await getDocs(q);
      const items: GalleryItem[] = [];
      
      querySnapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id } as GalleryItem);
      });
      
      return items;
    } catch (error) {
      console.error('Error loading gallery:', error);
      return [];
    }
  },

  // Add new item with Firebase upload
  addItem: async (item: Omit<GalleryItem, 'url'>, file: File): Promise<GalleryItem> => {
    try {
      const storageId = item.id; // This is the storage filename
      
      // Upload to Firebase Storage
      const storageRef = ref(firebaseStorage, `gallery/${storageId}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      
      // Save metadata to Firestore (including storageId)
      const fullItem = { 
        ...item,
        url,
        storageId // Save storage ID for later deletion
      };
      
      const docRef = await addDoc(collection(db, GALLERY_COLLECTION), fullItem);
      
      return { ...fullItem, id: docRef.id };
    } catch (error) {
      console.error('Error uploading to Firebase:', error);
      throw error;
    }
  },

  // Remove item
  removeItem: async (id: string, storageId: string): Promise<void> => {
    try {
      // Delete from Firebase Storage
      const storageRef = ref(firebaseStorage, `gallery/${storageId}`);
      await deleteObject(storageRef);
      
      // Delete from Firestore
      await deleteDoc(doc(db, GALLERY_COLLECTION, id));
    } catch (error) {
      console.error('Error deleting from Firebase:', error);
      throw error;
    }
  }
};
