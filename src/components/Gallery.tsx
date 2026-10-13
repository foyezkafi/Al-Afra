import React, { useState } from 'react';
import { MapPin, Maximize2, X } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data';

export const Gallery: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#075E45] bg-[#075E45]/10 px-3.5 py-1.5 rounded-full mb-3">
            <span>পবিত্র জিয়ারাহ ও দৃশ্য</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#075E45] tracking-tight">
            পবিত্র মক্কা ও মদিনা
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#202820]/75">
            হারামাইন শরিফাইনের বরকতময় স্মৃতি ও ঐতিহাসিক দৃশ্যপট।
          </p>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-[#075E45]/15 shadow-md cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => setSelectedItem(item)}
            >
              {/* Image using HTML <img> tag */}
              <div className="h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Gradient Overlay & Captions */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[#D4AF37]">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#D4AF37] transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-xs text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <p className="text-xs text-white/80 mt-1 line-clamp-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#FAF9F4] rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/50"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/80 flex items-center justify-center transition-colors"
              aria-label="বন্ধ করুন"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Image */}
            <div className="max-h-[70vh] bg-black overflow-hidden flex items-center justify-center">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>

            {/* Modal Content */}
            <div className="p-5 sm:p-6 bg-white">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#0B8063] mb-1">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>{selectedItem.location}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#075E45]">
                {selectedItem.title}
              </h3>
              <p className="text-sm sm:text-base text-[#202820]/80 mt-2">
                {selectedItem.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
