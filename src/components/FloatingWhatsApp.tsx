import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { AGENCY_INFO } from '../data';

export const FloatingWhatsApp: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultMessage = encodeURIComponent(
    'আসসালামু আলাইকুম, আমি আল-আফরা হজ্ব ও ওমরা কাফেলার উমরাহ প্যাকেজ সম্পর্কে জানতে চাই।'
  );
  const whatsappUrl = `${AGENCY_INFO.contact.whatsappMessagePrefix}${defaultMessage}`;

  return (
    <aside
      aria-label="হোয়াটসঅ্যাপে যোগাযোগ"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-2 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip on larger screens */}
      <span
        className={`hidden sm:inline-block bg-[#075E45] text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg border border-[#D4AF37]/40 transition-all duration-200 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        WhatsApp-এ কথা বলুন
      </span>

      {/* Floating Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp-এ যোগাযোগ করুন"
        className="w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba5a] active:scale-95 text-white rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 border-2 border-white transition-all duration-300 relative focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-[#25D366]" />

        {/* Subtle Online Badge */}
        <span className="absolute top-0 right-0 w-3 h-3 sm:w-3.5 sm:h-3.5 bg-emerald-400 border-2 border-white rounded-full" />
      </a>
    </aside>
  );
};
