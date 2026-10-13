import React from 'react';
import { Compass, Phone, MessageCircle, MapPin } from 'lucide-react';
import { AGENCY_INFO } from '../data';

export const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#075E45] text-white pt-16 pb-12 border-t border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Agency Intro */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
       <div>
            <img  className="h-12 w-auto object-contain" src="../../public/images/logo1.png" alt="" />
          </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {AGENCY_INFO.name}
              </h3>
            </div>

            <p className="text-sm text-white/80 leading-relaxed pr-4">
              আল-আফরা হজ্ব ও ওমরা কাফেলা পবিত্র হজ্ব ও ওমরা যাত্রীদের প্রয়োজনীয় সেবা ও সঠিক দিকনির্দেশনা প্রদানের লক্ষ্যে নিয়োজিত। 
              সুন্নাহ ভিত্তিক আমল ও সর্বোচ্চ আন্তরিকতায় আমরা আপনাদের সেবায় প্রস্তুত।
            </p>

            <div className="text-xs text-[#D4AF37] font-medium pt-1">
              পরিচালনায়: {AGENCY_INFO.director.name}
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
              দরকারী লিংক
            </h4>
            <ul className="space-y-2.5 text-sm text-white/80">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleScroll(e, '#home')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  হোম
                </a>
              </li>
              <li>
                <a
                  href="#packages"
                  onClick={(e) => handleScroll(e, '#packages')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  ওমরা প্যাকেজ
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  যোগাযোগ ও বুকিং
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleScroll(e, '#about')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  আমাদের সম্পর্কে
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleScroll(e, '#services')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  সেবাসমূহ
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleScroll(e, '#gallery')}
                  className="hover:text-white hover:underline transition-colors"
                >
                  মক্কা ও মদিনা গ্যালারি
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
              যোগাযোগ ও ঠিকানা
            </h4>
            <ul className="space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{AGENCY_INFO.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={AGENCY_INFO.contact.phoneTel}
                  className="hover:text-white hover:underline"
                >
                  {AGENCY_INFO.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={AGENCY_INFO.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white hover:underline"
                >
                  WhatsApp: {AGENCY_INFO.contact.whatsapp}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/70 gap-4">
          <p>© ২০২৬ আল-আফরা হজ্ব ও ওমরা কাফেলা। সর্বস্বত্ব সংরক্ষিত।</p>
          <p className="flex items-center gap-1.5">
            <span>পবিত্র কাবা ও রওজা মোবারকের খাদেম হিসেবে নিবেদিত</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
