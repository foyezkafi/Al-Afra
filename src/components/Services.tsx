import React from 'react';
import { 
  FileCheck2, 
  Plane, 
  Building2, 
  Compass, 
  Bus, 
  Sparkles,
  CheckCircle 
} from 'lucide-react';
import { SERVICES } from '../data';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCheck':
        return <FileCheck2 className="w-7 h-7 text-[#075E45]" />;
      case 'Plane':
        return <Plane className="w-7 h-7 text-[#075E45]" />;
      case 'Building':
        return <Building2 className="w-7 h-7 text-[#075E45]" />;
      case 'Compass':
        return <Compass className="w-7 h-7 text-[#075E45]" />;
      case 'Bus':
        return <Bus className="w-7 h-7 text-[#075E45]" />;
      case 'Sparkles':
        return <Sparkles className="w-7 h-7 text-[#075E45]" />;
      default:
        return <CheckCircle className="w-7 h-7 text-[#075E45]" />;
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 bg-white/70 border-y border-[#075E45]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#075E45] bg-[#075E45]/10 px-3.5 py-1.5 rounded-full mb-3">
            <span>সর্বাঙ্গীণ সুবিধা</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#075E45] tracking-tight">
            আমাদের সেবাসমূহ
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#202820]/75">
            উমরাহ সফরের শুরু থেকে দেশে প্রত্যাবর্তন পর্যন্ত প্রতিটি পদক্ষেপে আমাদের দায়িত্বশীল সেবা।
          </p>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
        </div>

        {/* 6 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-[#FAF9F4] rounded-2xl p-7 border border-[#075E45]/15 hover:border-[#075E45]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-white border border-[#075E45]/15 flex items-center justify-center shadow-xs group-hover:bg-[#075E45]/10 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="text-xs font-bold text-[#075E45] bg-[#075E45]/10 px-2.5 py-1 rounded-md">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#075E45] mb-2.5 group-hover:text-[#0B8063] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#202820]/80 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="pt-5 mt-5 border-t border-[#075E45]/10 flex items-center text-xs font-semibold text-[#0B8063]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mr-2" />
                <span>নিশ্চিত সেবা ও সার্বক্ষণিক সাপোর্ট</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
