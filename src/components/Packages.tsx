import React from 'react';
import { Calendar, Plane, Check, MessageCircle, PhoneCall, Sparkles } from 'lucide-react';
import { PACKAGES, AGENCY_INFO, PackageItem } from '../data';

interface PackagesProps {
  onSelectPackageForInquiry: (pkg: PackageItem) => void;
}

export const Packages: React.FC<PackagesProps> = ({ onSelectPackageForInquiry }) => {
  const getWhatsAppMessage = (pkg: PackageItem) => {
    const text = `আসসালামু আলাইকুম, আমি আল-আফরা "${pkg.name}" (${pkg.price}) সম্পর্কে বিস্তারিত জানতে ও বুকিং করতে আগ্রহী।`;
    return `${AGENCY_INFO.contact.whatsappMessagePrefix}${encodeURIComponent(text)}`;
  };

  return (
    <section id="packages" className="py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#075E45] bg-[#075E45]/10 px-3.5 py-1.5 rounded-full mb-3">
            <span>সুলভ ও বিশ্বস্ত আয়োজন</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#075E45] tracking-tight">
            আমাদের উমরাহ প্যাকেজ
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#202820]/75">
            নির্ধারিত ফ্লাইট ও সরাসরি কাফেলা। আপনার পছন্দ অনুযায়ী সেরা প্যাকেজ নির্বাচন করুন।
          </p>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
        </div>

        {/* 3 Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {PACKAGES.map((pkg) => {
            const isFeatured = pkg.isPopular;

            return (
              <div
                key={pkg.id}
                className={`flex flex-col rounded-2xl overflow-hidden transition-all duration-300 relative bg-white ${
                  isFeatured
                    ? 'border-2 border-[#D4AF37] shadow-xl md:-translate-y-2 ring-4 ring-[#D4AF37]/15'
                    : 'border border-[#075E45]/15 shadow-md hover:shadow-lg hover:border-[#075E45]/30'
                }`}
              >
                {/* Featured Badge */}
                {isFeatured && (
                  <div className="bg-[#D4AF37] text-[#202820] text-center py-1.5 px-4 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-xs">
                    <Sparkles className="w-3.5 h-3.5 fill-[#202820]" />
                    <span>{pkg.badge || 'জনপ্রিয় ও প্রস্তাবিত প্যাকেজ'}</span>
                  </div>
                )}

                {/* Package Image */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-slate-100">
                  <img
                    src={pkg.image}
                    alt={`${pkg.name} — আল-আফরা হজ্ব ও ওমরা কাফেলা`}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold text-white bg-[#075E45]/90 backdrop-blur-xs border border-white/20">
                      <Plane className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>{pkg.flightType}</span>
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-xl sm:text-2xl font-bold drop-shadow-sm">
                      {pkg.name}
                    </h3>
                  </div>
                </div>

                {/* Package Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Price block */}
                    <div className="pb-5 border-b border-[#075E45]/10 flex items-baseline justify-between">
                      <div>
                        <span className="text-xs text-[#202820]/70 font-semibold block">প্যাকেজ মূল্য</span>
                        <div className="text-3xl font-bold text-[#075E45] tracking-tight">
                          {pkg.price}
                        </div>
                      </div>
                      <span className="text-xs font-bold text-[#0B8063] bg-[#075E45]/10 px-2.5 py-1 rounded-md">
                        {pkg.duration}
                      </span>
                    </div>

                    {/* Schedule / Dates */}
                    <div className="py-4 border-b border-[#075E45]/10 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-[#075E45] uppercase">
                        <Calendar className="w-4 h-4 text-[#D4AF37]" />
                        <span>যাত্রার নির্ধারিত সময়সূচি:</span>
                      </div>
                      <div className="space-y-1.5 pl-6">
                        {pkg.dates.map((dateStr, dIdx) => (
                          <div
                            key={dIdx}
                            className="text-sm font-bold text-[#202820] flex items-center justify-between bg-[#FAF9F4] px-3 py-1.5 rounded-lg border border-[#075E45]/10"
                          >
                            <span>{dateStr}</span>
                            <span className="text-[11px] font-semibold text-[#075E45] bg-[#075E45]/10 px-2 py-0.5 rounded">
                              কনফার্মড
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Feature items */}
                    <div className="py-4 space-y-2.5">
                      <p className="text-xs font-bold text-[#202820]/80">প্যাকেজে অন্তর্ভুক্ত সুবিধাসমূহ:</p>
                      <ul className="space-y-2 text-xs sm:text-sm text-[#202820]/85">
                        {pkg.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <Check className="w-4 h-4 text-[#075E45] shrink-0 mt-0.5" />
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-6 border-t border-[#075E45]/10 space-y-2.5 mt-auto">
                    <a
                      href={getWhatsAppMessage(pkg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-colors ${
                        isFeatured
                          ? 'bg-[#075E45] hover:bg-[#0B8063] text-white shadow-md'
                          : 'bg-[#075E45] hover:bg-[#0B8063] text-white'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                      <span>WhatsApp-এ বুকিং করুন</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => onSelectPackageForInquiry(pkg)}
                      className="w-full py-2.5 px-4 rounded-xl font-semibold text-xs text-[#075E45] bg-[#075E45]/5 hover:bg-[#075E45]/10 border border-[#075E45]/20 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>বিস্তারিত তথ্য জানতে ফর্ম পূরণ করুন</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Custom inquiry note */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#075E45]/5 border border-[#075E45]/15 max-w-2xl mx-auto">
          <p className="text-sm font-medium text-[#202820]">
            পরিবার বা দলের জন্য বিশেষ কাস্টমাইজড উমরাহ প্যাকেজ বা অন্য তারিখে যাওয়ার প্রয়োজন হলে সরাসরি আমাদের সাথে কথা বলুন।
          </p>
          <div className="mt-3 flex items-center justify-center gap-3">
            <a
              href={AGENCY_INFO.contact.phoneTel}
              className="text-xs sm:text-sm font-bold text-[#075E45] hover:underline"
            >
              📞 {AGENCY_INFO.contact.phone}
            </a>
            <span className="text-[#075E45]/40">|</span>
            <a
              href={AGENCY_INFO.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-bold text-[#075E45] hover:underline"
            >
              💬 WhatsApp: {AGENCY_INFO.contact.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
