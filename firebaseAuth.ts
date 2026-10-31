import { getAuth } from 'firebase/auth';
import { app } from './firebase';

// Přihlášení potřebuje jen administrace, veřejná galerie ho nenačítá
export const auth = getAuth(app);
