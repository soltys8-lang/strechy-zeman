import React, { useState, useEffect } from 'react';
import { Category, GalleryItem } from '../types';
import { storage } from '../services/storage';

const Gallery: React.FC = () => {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [filter, setFilter] = useState<Category | 'Vše'>('Vše');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
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

  const filteredItems = filter === 'Vše' 
    ? items 
    : items.filter(item => item.category === filter);

  const categories = ['Vše', ...Object.values(Category)];

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    if (touchStart - touchEnd > 50) {
      nextImage();
    }
    if (touchStart - touchEnd < -50) {
      prevImage();
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, filteredItems.length]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">Naše realizace</h2>
        <div className="w-20 h-1 bg-amber-600 mx-auto"></div>
      </div>

      <div className="mb-12 overflow-x-auto pb-2 -mx-4 px-4">
        <div className="flex gap-3 justify-center min-w-max md:min-w-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                filter === cat
                  ? 'bg-amber-700 text-white shadow-lg'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {isLoading ? (
        <div className="text-center py-20 text-slate-400">Načítám galerii...</div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer active:scale-95"
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-amber-700/90 text-white px-3 py-1 text-xs rounded-full backdrop-blur-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="font-bold text-base md:text-lg text-slate-800 mb-1">{item.title}</h3>
                  {item.description && <p className="text-sm text-slate-500 line-clamp-2">{item.description}</p>}
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && !isLoading && (
            <div className="text-center py-20 text-slate-400">
              V této kategorii zatím nejsou žádné fotografie.
            </div>
          )}
        </>
      )}

      {lightboxOpen && filteredItems.length > 0 && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-amber-500 transition-colors z-10 p-2"
            aria-label="Zavřít"
          >
            <svg className="w-7 h-7 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="absolute top-4 left-4 text-white text-sm md:text-base font-medium bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm">
            {currentIndex + 1} / {filteredItems.length}
          </div>

          {filteredItems.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-500 transition-colors bg-black/50 hover:bg-black/70 rounded-full p-2 md:p-3 cursor-pointer z-20"
              aria-label="Předchozí"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {filteredItems.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 text-white hover:text-amber-500 transition-colors bg-black/50 hover:bg-black/70 rounded-full p-2 md:p-3 cursor-pointer z-20"
              aria-label="Další"
            >
              <svg className="w-6 h-6 md:w-8 md:h-8 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          <div className="relative w-full h-full flex flex-col items-center justify-center p-4 md:p-8">
            <img
              src={filteredItems[currentIndex].url}
              alt={filteredItems[currentIndex].title}
              className="max-w-full max-h-[70vh] md:max-h-[80vh] object-contain rounded-lg"
            />
            
            <div className="mt-4 md:absolute md:bottom-8 md:left-1/2 md:-translate-x-1/2 bg-black/70 backdrop-blur-md rounded-xl px-6 py-4 max-w-2xl w-full md:w-auto">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-amber-700 text-white px-3 py-1 text-xs md:text-sm rounded-full font-medium">
                  {filteredItems[currentIndex].category}
                </span>
              </div>
              <h3 className="text-white font-bold text-lg md:text-xl">
                {filteredItems[currentIndex].title}
              </h3>
              {filteredItems[currentIndex].description && (
                <p className="text-slate-300 text-sm md:text-base mt-1">
                  {filteredItems[currentIndex].description}
                </p>
              )}
            </div>

            {filteredItems.length > 1 && (
              <div className="md:hidden absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-xs flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
                <span>Přejeďte pro další</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
