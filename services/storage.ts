import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';
import { storage as firebaseStorage } from '../firebase';
import { GalleryItem } from '../types';

const STORAGE_KEY = 'zeman_gallery_metadata';

// Helper to store metadata in localStorage (just IDs and metadata, not images)
const saveMetadata = (items: GalleryItem[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
};

const getMetadata = (): GalleryItem[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const storage = {
  // Get all gallery items
  getGallery: (): GalleryItem[] => {
    return getMetadata();
  },

  // Add new item with Firebase upload
  addItem: async (item: Omit<GalleryItem, 'url'>, file: File): Promise<GalleryItem> => {
    try {
      // Create reference in Firebase Storage
      const storageRef = ref(firebaseStorage, `gallery/${item.id}`);
      
      // Upload file
      await uploadBytes(storageRef, file);
      
      // Get download URL
      const url = await getDownloadURL(storageRef);
      
      // Create full item with URL
      const fullItem: GalleryItem = { ...item, url };
      
      // Save metadata
      const items = getMetadata();
      const newItems = [fullItem, ...items];
      saveMetadata(newItems);
      
      return fullItem;
    } catch (error) {
      console.error('Error uploading to Firebase:', error);
      throw error;
    }
  },

  // Remove item
  removeItem: async (id: string): Promise<void> => {
    try {
      // Delete from Firebase Storage
      const storageRef = ref(firebaseStorage, `gallery/${id}`);
      await deleteObject(storageRef);
      
      // Remove from metadata
      const items = getMetadata();
      const newItems = items.filter(i => i.id !== id);
      saveMetadata(newItems);
    } catch (error) {
      console.error('Error deleting from Firebase:', error);
      throw error;
    }
  },

  // Save gallery (for compatibility)
  saveGallery: (items: GalleryItem[]): void => {
    saveMetadata(items);
  }
};
