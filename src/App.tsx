/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Packages } from './components/Packages';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PackageItem } from './data';
import { HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';

const FAQS = [
  {
    q: 'উমরাহ পালনের জন্য পাসপোর্টের মেয়াদ কতদিন থাকা বাধ্যতামূলক?',
    a: 'সৌদি হজ্ব ও উমরাহ মন্ত্রণালয়ের নির্দেশনা অনুযায়ী, ভ্রমণের তারিখ থেকে পাসপোর্টের মেয়াদ ন্যূনতম ৬ মাস থাকা আবশ্যক।',
  },
  {
    q: 'কাফেলার সাথে কি আলেম সার্বক্ষণিক উপস্থিত থাকবেন?',
    a: 'জি, আল-আফরা কাফেলার সকল সফরে পরিচালক মাওলানা কেফায়েত উল্লাহ (কাসফী) স্বয়ং বা অভিজ্ঞ আলেম কাফেলার সাথে সার্বক্ষণিক থাকেন এবং প্রতিটি রুকন ও দোয়া হাতে-কলমে শিখিয়ে দেন।',
  },
  {
    q: 'প্যাকেজে কি সরাসরি (Direct Flight) ফ্লাইট দেওয়া হয়?',
    a: 'জি, আল-আফরা কাফেলার প্রতিটি প্যাকেজেই ডিরেক্ট ফ্লাইটের টিকিট দেওয়া হয়, যাতে সম্মানিত হাজ্বী সাহেবদের কোনো ট্রানজিট ভোগান্তি না পোহাতে হয়।',
  },
  {
    q: 'রিয়াজুল জান্নাহর পারমিটের ব্যাপারে কাফেলা কীভাবে সহযোগিতা করে?',
    a: 'সৌদি সরকারি নুসুক (Nusuk) অ্যাপের মাধ্যমে নির্ধারিত সময়ে রিয়াজুল জান্নাহে নামাজ ও রওজা শরিফ জিয়ারতের স্লট সংগ্রহ এবং প্রবেশের সার্বিক তদারকি আমরা করে থাকি।',
  },
];

export default function App() {
  const [selectedPackageId, setSelectedPackageId] = useState<string>('premium');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleSelectPackageForInquiry = (pkg: PackageItem) => {
    setSelectedPackageId(pkg.id);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F4] text-[#202820]">
      {/* 1. Sticky Navigation Bar */}
      <Navbar onSelectPackage={(id) => setSelectedPackageId(id)} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 2. Hero Section (Banner) */}
        <Hero />

        {/* 3. Packages Section (Right after Banner) */}
        <Packages onSelectPackageForInquiry={handleSelectPackageForInquiry} />

        {/* 4. Contact & Booking Section (Right below Umrah Packages as requested) */}
        <Contact selectedPackageId={selectedPackageId} />

        {/* 5. About Section */}
        <About />

        {/* 6. Services Section */}
        <Services />

        {/* 7. Makkah & Madinah Gallery Section */}
        <Gallery />

        {/* 8. Frequently Asked Questions (FAQ) Section */}
        <section className="py-16 lg:py-20 bg-[#FAF9F4] border-t border-[#075E45]/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#075E45] bg-[#075E45]/10 px-3 py-1 rounded-full mb-2">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>প্রয়োজনীয় তথ্য</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#075E45]">
                উমরাহ যাত্রীগণের সাধারণ জিজ্ঞাসা
              </h2>
            </div>

            <div className="space-y-3">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-[#075E45]/15 overflow-hidden transition-colors"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#075E45] hover:text-[#0B8063]"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 shrink-0 transition-transform duration-200 text-[#075E45] ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-[#202820]/80 leading-relaxed border-t border-slate-100 pt-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#075E45] shrink-0 mt-0.5" />
                          <span>{faq.a}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* 10. Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
