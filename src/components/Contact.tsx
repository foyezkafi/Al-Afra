import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Building,
  Clock
} from 'lucide-react';
import { AGENCY_INFO, PACKAGES } from '../data';

interface ContactProps {
  selectedPackageId?: string;
}

export const Contact: React.FC<ContactProps> = ({ selectedPackageId }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    packageId: selectedPackageId || 'premium',
    datePreference: '১০ নভেম্বর – ২৩ নভেম্বর',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedWhatsAppLink, setGeneratedWhatsAppLink] = useState('');

  // Update form if selectedPackageId changes
  React.useEffect(() => {
    if (selectedPackageId) {
      setFormData((prev) => ({ ...prev, packageId: selectedPackageId }));
    }
  }, [selectedPackageId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedPkg = PACKAGES.find((p) => p.id === formData.packageId);
    const pkgName = selectedPkg ? selectedPkg.name : 'সাধারণ অনুসন্ধান';

    const waText = `আসসালামু আলাইকুম।\nআমি ${formData.name}।\nমোবাইল: ${formData.phone}\nপ্যাকেজ: ${pkgName}\nতারিখ: ${formData.datePreference}\nবার্তা: ${formData.message || 'উমরাহ প্যাকেজ সম্পর্কে বিস্তারিত তথ্য ও বুকিং জানতে চাই।'}`;
    const link = `${AGENCY_INFO.contact.whatsappMessagePrefix}${encodeURIComponent(waText)}`;
    
    setGeneratedWhatsAppLink(link);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      packageId: 'premium',
      datePreference: '১০ নভেম্বর – ২৩ নভেম্বর',
      message: '',
    });
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white/70 border-t border-[#075E45]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#075E45] bg-[#075E45]/10 px-3.5 py-1.5 rounded-full mb-3">
            <span>সরাসরি যোগাযোগ ও বুকিং</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#075E45] tracking-tight">
            উমরাহ প্যাকেজ সম্পর্কে জানতে যোগাযোগ করুন
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#202820]/75">
            সরাসরি কাফেলা প্রধানের সাথে কথা বলে আপনার মনের সকল সংশয় দূর করুন।
          </p>
          <div className="w-16 h-1 bg-[#D4AF37] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Contact Cards & Details */}
          <div className="lg:col-span-5 space-y-6">
            {/* Person Profile Box */}
            <div className="bg-[#FAF9F4] rounded-2xl p-6 sm:p-7 border-2 border-[#D4AF37]/30 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#075E45] shadow-xs bg-white shrink-0">
                  <img
                    src={AGENCY_INFO.director.image}
                    alt={AGENCY_INFO.director.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#0B8063] block">যোগাযোগকারী:</span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#075E45]">
                    {AGENCY_INFO.director.name}
                  </h3>
                  <p className="text-xs text-[#202820]/70">
                    {AGENCY_INFO.director.education}
                  </p>
                  <p className="text-xs text-[#202820]/80 font-medium">
                    {AGENCY_INFO.director.designation}
                  </p>
                </div>
              </div>

              {/* Action Buttons for Phone & WhatsApp as required */}
              <div className="space-y-3 pt-3 border-t border-[#075E45]/10">
                <a
                  href={AGENCY_INFO.contact.phoneTel}
                  className="w-full py-3 px-4 rounded-xl font-bold text-sm sm:text-base text-white bg-[#075E45] hover:bg-[#0B8063] active:bg-[#054835] transition-colors flex items-center justify-center gap-3 shadow-sm"
                >
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                  <span>ফোন করুন: {AGENCY_INFO.contact.phone}</span>
                </a>

                <a
                  href={AGENCY_INFO.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl font-bold text-sm sm:text-base text-[#075E45] bg-white border-2 border-[#075E45] hover:bg-[#075E45]/5 transition-colors flex items-center justify-center gap-3 shadow-xs"
                >
                  <MessageCircle className="w-5 h-5 text-[#075E45]" />
                  <span>WhatsApp: {AGENCY_INFO.contact.whatsapp}</span>
                </a>
              </div>
            </div>

            {/* Office Address Card */}
            <div className="bg-[#FAF9F4] rounded-2xl p-6 border border-[#075E45]/15 shadow-sm space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#075E45]/10 text-[#075E45] flex items-center justify-center shrink-0 mt-0.5">
                  <Building className="w-5 h-5 text-[#075E45]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#075E45] uppercase tracking-wide">
                    অফিস ঠিকানা:
                  </h4>
                  <p className="text-base font-semibold text-[#202820] mt-1 leading-snug">
                    {AGENCY_INFO.contact.address}
                  </p>
                  <p className="text-xs text-[#202820]/70 mt-1">
                    সাক্ষাতের জন্য পূর্বে ফোনে যোগাযোগ করে আসার অনুরোধ করা হচ্ছে।
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 pt-3 border-t border-[#075E45]/10">
                <div className="w-10 h-10 rounded-xl bg-[#075E45]/10 text-[#075E45] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-[#075E45]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#075E45]">সেবার সময়সূচি:</h4>
                  <p className="text-sm text-[#202820]/80 mt-0.5">
                    শনিবার – বৃহস্পতিবার: সকাল ৯:০০ – রাত ৯:০০ (শুক্রবার জুমার বিরতি)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Frontend-Only Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF9F4] rounded-2xl p-4 sm:p-7 md:p-8 border border-[#075E45]/20 shadow-md">
              <div className="mb-5 sm:mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[#075E45]">
                  আপনার তথ্য ও প্যাকেজ আগ্রহ পাঠান
                </h3>
                <p className="text-xs sm:text-sm text-[#202820]/75 mt-1">
                  ফর্মটি পূরণ করলে আমরা খুব দ্রুত আপনার সাথে সরাসরি ফোনে অথবা WhatsApp-এ যোগাযোগ করব।
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-white rounded-xl p-6 sm:p-8 border-2 border-[#075E45] text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#075E45]/10 text-[#075E45] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-[#075E45]" />
                  </div>
                  <h4 className="text-xl font-bold text-[#075E45]">
                    ধন্যবাদ, {formData.name}!
                  </h4>
                  <p className="text-sm sm:text-base text-[#202820]/85 max-w-md mx-auto leading-relaxed">
                    আপনার উমরাহ সংক্রান্ত তথ্যটি সফলভাবে গৃহীত হয়েছে। খুব শীঘ্রই আমাদের পরিচালক 
                    <strong className="text-[#075E45]"> {AGENCY_INFO.director.name} </strong> 
                    আপনার মোবাইল নম্বরে যোগাযোগ করবেন।
                  </p>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={generatedWhatsAppLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#075E45] hover:bg-[#0B8063] transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-[#D4AF37]" />
                      <span>সরাসরি WhatsApp-এ পাঠান</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="w-full sm:w-auto px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-[#202820]/80 bg-slate-100 hover:bg-slate-200 transition-colors"
                    >
                      নতুন বার্তা লিখুন
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#202820] mb-1.5">
                      আপনার নাম <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="যেমন: মো. আবদুল্লাহ"
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white border border-[#075E45]/20 focus:border-[#075E45] focus:ring-2 focus:ring-[#075E45]/20 text-[#202820] text-base sm:text-sm outline-none transition-all placeholder:text-gray-400"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-[#202820] mb-1.5">
                        মোবাইল নম্বর <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="01XXXXXXXXX"
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white border border-[#075E45]/20 focus:border-[#075E45] focus:ring-2 focus:ring-[#075E45]/20 text-[#202820] text-base sm:text-sm outline-none transition-all placeholder:text-gray-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-bold text-[#202820] mb-1.5">
                        পছন্দের প্যাকেজ
                      </label>
                      <select
                        value={formData.packageId}
                        onChange={(e) => setFormData({ ...formData, packageId: e.target.value })}
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white border border-[#075E45]/20 focus:border-[#075E45] focus:ring-2 focus:ring-[#075E45]/20 text-[#202820] text-base sm:text-sm outline-none transition-all"
                      >
                        {PACKAGES.map((pkg) => (
                          <option key={pkg.id} value={pkg.id}>
                            {pkg.name} ({pkg.price})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#202820] mb-1.5">
                      যাত্রার সম্ভাব্য সময়সূচি
                    </label>
                    <select
                      value={formData.datePreference}
                      onChange={(e) => setFormData({ ...formData, datePreference: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white border border-[#075E45]/20 focus:border-[#075E45] focus:ring-2 focus:ring-[#075E45]/20 text-[#202820] text-base sm:text-sm outline-none transition-all"
                    >
                      <option value="১০ নভেম্বর – ২৩ নভেম্বর">১০ নভেম্বর – ২৩ নভেম্বর (২০২৬)</option>
                      <option value="১৪ ডিসেম্বর – ২৭ ডিসেম্বর">১৪ ডিসেম্বর – ২৭ ডিসেম্বর (২০২৬)</option>
                      <option value="অন্য তারিখে যেতে চাই">অন্য তারিখে কাস্টমাইজড কাফেলা</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-[#202820] mb-1.5">
                      আপনার বিশেষ জিজ্ঞাসা বা মন্তব্য (ঐচ্ছিক)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="যাত্রী সংখ্যা, বয়স্ক বা বাচ্চাদের সুবিধা সম্পর্কে কোনো জিজ্ঞাসা থাকলে লিখুন..."
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white border border-[#075E45]/20 focus:border-[#075E45] focus:ring-2 focus:ring-[#075E45]/20 text-[#202820] text-base sm:text-sm outline-none transition-all placeholder:text-gray-400 resize-none"
                    />
                  </div>

                  <p className="text-[11px] text-[#202820]/60">
                    * আপনার প্রদত্ত তথ্য শুধুমাত্র উমরাহ সংক্রান্ত আলোচনার জন্য সংরক্ষিত থাকবে। কোনো তথ্য তৃতীয় পক্ষের সাথে শেয়ার করা হয় না।
                  </p>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl font-bold text-base text-white bg-[#075E45] hover:bg-[#0B8063] active:bg-[#054835] transition-colors shadow-md flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-0.5 transition-transform" />
                    <span>তথ্য পাঠান</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
