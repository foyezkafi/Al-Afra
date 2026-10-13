import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Plane, Building2, FileCheck2 } from 'lucide-react';
import { AGENCY_INFO, HERO_HIGHLIGHTS } from '../data';

export const Hero: React.FC = () => {
  const handleScrollToPackages = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('packages');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* Subtle decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#075E45_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Text Content & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Arabic Bismillah & Trust Badge */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <span className="font-serif text-lg sm:text-xl text-[#075E45] font-semibold tracking-wider font-['Amiri']">
                {AGENCY_INFO.bismillah}
              </span>
              <span className="hidden sm:inline-block text-[#D4AF37]">✦</span>
              <span className="text-xs sm:text-sm font-semibold text-[#075E45] bg-[#075E45]/8 px-3 py-1 rounded-full border border-[#075E45]/15">
                আলেমে দ্বীনের প্রত্যক্ষ পরিচালনায় কাফেলা
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[26px] xs:text-3xl sm:text-5xl lg:text-6xl font-bold text-[#075E45] leading-[1.25] tracking-tight text-balance">
              পবিত্র উমরাহ পালনে আপনার{' '}
              <span className="text-[#0B8063] relative inline-block">
                বিশ্বস্ত সঙ্গী
                <span className="absolute bottom-1.5 left-0 w-full h-2.5 bg-[#D4AF37]/25 -z-10 rounded-sm" />
              </span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-lg text-[#202820]/80 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              আল-আফরা হজ্ব ও ওমরা কাফেলার সঙ্গে পরিকল্পনা করুন আপনার পবিত্র উমরাহ যাত্রা। 
              সঠিক সুন্নত তরিকায় উমরাহ সম্পন্নে সার্বক্ষণিক রাহনুমা, নির্ভরযোগ্য কাফেলা ও প্রিমিয়াম আতিথেয়তা।
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#packages"
                onClick={handleScrollToPackages}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-7 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base text-white bg-[#075E45] hover:bg-[#0B8063] active:bg-[#054835] shadow-md shadow-[#075E45]/20 transition-all duration-200 group"
              >
                <span>উমরাহ প্যাকেজ দেখুন</span>
                <ArrowRight className="w-5 h-5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={AGENCY_INFO.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-[#075E45] bg-white border-2 border-[#075E45] hover:bg-[#075E45]/5 transition-all duration-200 shadow-xs"
              >
                <MessageCircle className="w-5 h-5 text-[#075E45] fill-[#075E45]/10" />
                <span>WhatsApp-এ যোগাযোগ করুন</span>
              </a>
            </div>

            {/* Quick Guarantees & Features */}
            <div className="pt-4 border-t border-[#075E45]/15 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              {HERO_HIGHLIGHTS.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/70 border border-[#075E45]/10 shadow-xs"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#075E45]/10 text-[#075E45] flex items-center justify-center shrink-0">
                    {idx === 0 && <FileCheck2 className="w-5 h-5 text-[#075E45]" />}
                    {idx === 1 && <Plane className="w-5 h-5 text-[#075E45]" />}
                    {idx === 2 && <Building2 className="w-5 h-5 text-[#075E45]" />}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-[#075E45] truncate">{item.title}</p>
                    <p className="text-xs text-[#202820]/70 truncate">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Holy Kaaba Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Gold border accent card frame */}
              <div className="absolute -inset-2.5 rounded-2xl bg-gradient-to-tr from-[#D4AF37]/30 via-transparent to-[#075E45]/20 blur-xs -z-10" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#D4AF37]/40 bg-white">
                <img
                  src="../../public/images/person.jpeg"
                  alt="পবিত্র কাবা শরীফ ও তাওয়াফ প্রাঙ্গণ - আল-আফরা হজ্ব ও ওমরা কাফেলা"
                  className="w-full h-80 sm:h-96 lg:h-[430px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  loading="eager"
                />

                {/* Overlay Floating Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 sm:p-4 border border-[#075E45]/15 shadow-lg flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#075E45] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div>
                      <p className="text-xs text-[#202820]/70 font-medium">নির্ধারিত সফর ২০২৬</p>
                      <p className="text-sm sm:text-base font-bold text-[#075E45]">১০ নভেম্বর ও ১৪ ডিসেম্বর</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold text-[#D4AF37] bg-[#075E45] px-2.5 py-1 rounded-md">
                      ডিরেক্ট ফ্লাইট
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
