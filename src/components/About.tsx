import React from 'react';
import { Award, BookOpen, CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { AGENCY_INFO } from '../data';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-bg-ivory border-t border-primary/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1.5 rounded-full mb-3">
            <span>পরিচয় ও বিশ্বাস</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight">
            আমাদের সম্পর্কে
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-3 rounded-full" />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Director Profile Card & Image */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-accent/30 shadow-md relative overflow-hidden group">
              <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                {/* Director Profile Image with HTML <img> tag */}
                <div className="relative shrink-0">
                  <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-accent shadow-md bg-white">
                    <img
                      src={AGENCY_INFO.director.image}
                      alt={`${AGENCY_INFO.director.name} — ${AGENCY_INFO.director.designation}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white p-1.5 rounded-lg shadow-xs">
                    <Award className="w-4 h-4 text-accent" />
                  </div>
                </div>

                {/* Director Details */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-secondary uppercase tracking-wide">
                    কাফেলা প্রধান ও রাহনুমা
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-primary leading-snug">
                    {AGENCY_INFO.director.name}
                  </h3>
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 text-sm font-semibold text-text-main/90">
                    <BookOpen className="w-4 h-4 text-accent shrink-0" />
                    <span>{AGENCY_INFO.director.education}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-main/70 font-medium">
                    {AGENCY_INFO.director.designation}
                  </p>
                </div>
              </div>

              {/* Quote / Message */}
              <div className="mt-6 pt-6 border-t border-primary/15 text-sm sm:text-base text-text-main/80 italic relative bg-white/60 p-4 rounded-xl">
                <span className="text-2xl text-accent font-serif leading-none mr-1">“</span>
                {AGENCY_INFO.director.quote}
                <span className="text-2xl text-accent font-serif leading-none ml-1">”</span>
              </div>

              {/* Quick Contact With Director */}
              <div className="mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <a
                  href={AGENCY_INFO.contact.phoneTel}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold text-white bg-primary hover:bg-secondary transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-accent" />
                  <span>সরাসরি কথা বলুন</span>
                </a>
                <a
                  href={AGENCY_INFO.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold text-primary bg-primary/10 hover:bg-primary/20 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp বার্তা</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Core Value Propositions */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary leading-snug">
              স্বচ্ছতা, বিশ্বস্ততা ও সুন্নাহ সম্মত উমরাহ ব্যবস্থাপনায় আমরা প্রতিশ্রুতিবদ্ধ
            </h3>

            <p className="text-base sm:text-lg text-text-main/85 leading-relaxed">
              আল-আফরা হজ্ব ও ওমরা কাফেলা পবিত্র হজ্ব ও ওমরা যাত্রার প্রয়োজনীয় সেবা ও তথ্য প্রদানের লক্ষ্যে কাজ করে। 
              আমাদের উদ্দেশ্য হলো যাত্রীদের প্যাকেজ সম্পর্কে পরিষ্কার ধারণা দেওয়া এবং প্রয়োজনীয় যোগাযোগের ব্যবস্থা সহজ করা।
            </p>

            <p className="text-base text-text-main/75 leading-relaxed">
              উমরাহ কোনো সাধারণ ভ্রমণ নয়, এটি মহান আল্লাহর সান্নিধ্য লাভের এক পুণ্যময় ইবাদত। তাই শুরু থেকে শেষ পর্যন্ত 
              যাত্রীদের সার্বিক নিরাপত্তা, নির্বিঘ্ন ইবাদতের সুযোগ এবং নির্ভরযোগ্য কাফেলার দিকনির্দেশনা আমরা অগ্রাধিকার দিয়ে থাকি।
            </p>

            {/* Core Values Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-primary/10 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-primary">আলেমের সার্বক্ষণিক সঙ্গ</h4>
                  <p className="text-xs text-text-main/70">আমল ও মাসয়ালা-মাসায়েল সহজে শিখিয়ে দেওয়া হয়</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-primary/10 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-primary">শতভাগ স্বচ্ছতা</h4>
                  <p className="text-xs text-text-main/70">কোনো অদৃশ্য বা গোপন চার্জ নেই</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-primary/10 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-primary">সরাসরি ফ্লাইট নিশ্চয়তা</h4>
                  <p className="text-xs text-text-main/70">কোনো ট্রানজিট ঝামেলা ছাড়া সময়মতো পৌঁছানো</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-primary/10 shadow-2xs">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-primary">হারামের সন্নিকটে হোটেল</h4>
                  <p className="text-xs text-text-main/70">পাঁচ ওয়াক্ত নামাজ জামাতে আদায়ের সুবিধা</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
