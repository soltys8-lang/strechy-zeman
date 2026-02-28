import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD3YjrGseT0OYOBUEsFqNlfjcacXivM8y8",
  authDomain: "zeman-strechy.firebaseapp.com",
  projectId: "zeman-strechy",
  storageBucket: "zeman-strechy.firebasestorage.app",
  messagingSenderId: "986965339138",
  appId: "1:986965339138:web:ba36727d2e4250ec368b1b",
  measurementId: "G-8JHTWD8FN8"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
