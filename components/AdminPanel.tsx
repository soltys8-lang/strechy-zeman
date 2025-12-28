import React, { useState, useEffect } from 'react';
import { Category, GalleryItem } from '../types';
import { storage } from '../services/storage';

interface AdminPanelProps {
  onLogout?: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ onLogout }) => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<Category>(Category.TASKA);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadGallery();
  }, []);

  const loadGallery = async () => {
    setIsLoading(true);
    const galleryItems = await storage.getGallery();
    setItems(galleryItems);
    setIsLoading(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile || !title) return;

    setIsUploading(true);

    try {
      const storageId = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const newItem = {
        id: storageId,
        category,
        title,
        date: Date.now(),
      };

      await storage.addItem(newItem, imageFile);
      await loadGallery();
      
      setTitle('');
      setImageFile(null);
      setIsUploading(false);
      (e.target as HTMLFormElement).reset();
      
      alert('Fotografie byla úspěšně nahrána!');
    } catch (error) {
      console.error('Upload error:', error);
      alert('Chyba při nahrávání fotografie. Zkuste to znovu.');
      setIsUploading(false);
    }
  };

  const handleDelete = async (firestoreId: string, storageId: string) => {
    if (confirm('Opravdu chcete tuto fotografii smazat?')) {
      try {
        await storage.removeItem(firestoreId, storageId);
        await loadGallery();
        alert('Fotografie byla smazána');
      } catch (error) {
        console.error('Delete error:', error);
        alert('Chyba při mazání fotografie');
      }
    }
  };

  const handleLogout = () => {
    if (confirm('Opravdu se chcete odhlásit?')) {
      if (onLogout) {
        onLogout();
      } else {
        window.location.hash = '#/';
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Administrace galerie</h1>
        <button
          onClick={handleLogout}
          className="px-6 py-2 bg-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-300 transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Odhlásit se
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 mb-12">
        <div className="bg-slate-800 px-8 py-6 text-white">
          <h2 className="text-2xl font-bold">Přidat novou fotografii</h2>
          <p className="text-slate-400 text-sm">Nahrajte novou realizaci do své galerie.</p>
        </div>
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Název projektu</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                placeholder="Např. Střecha RD Brno"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Kategorie</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
              >
                {Object.values(Category).map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Fotografie</label>
            <input
              type="file"
              required
              accept="image/*"
              onChange={handleFileChange}
              className="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-50 file:text-amber-700 hover:file:bg-amber-100 transition-all cursor-pointer"
            />
          </div>
          <button
            type="submit"
            disabled={isUploading}
            className={`w-full py-3 bg-amber-700 text-white rounded-lg font-bold shadow-lg transition-all ${
              isUploading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-amber-800'
            }`}
          >
            {isUploading ? 'Nahrávám...' : 'Přidat do galerie'}
          </button>
        </form>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-800 mb-6">Správa nahraných fotografií</h3>
        {isLoading ? (
          <div className="text-center py-12 text-slate-400">Načítám...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map(item => (
              <div key={item.id} className="flex items-center space-x-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <img src={item.url} alt={item.title} className="w-20 h-20 object-cover rounded-lg" />
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 truncate">{item.title}</h4>
                  <p className="text-xs text-slate-500">{item.category}</p>
                </div>
                <button
                  onClick={() => handleDelete(item.id, item.id)}
                  className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                  title="Smazat"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
