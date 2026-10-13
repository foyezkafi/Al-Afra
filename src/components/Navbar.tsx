import React, { useState, useEffect } from 'react';
import { Menu, X, Compass, PhoneCall } from 'lucide-react';
import { AGENCY_INFO } from '../data';

interface NavbarProps {
  onSelectPackage?: (packageId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'packages', 'contact', 'about', 'services', 'gallery'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'হোম', href: '#home', id: 'home' },
    { name: 'ওমরা প্যাকেজ', href: '#packages', id: 'packages' },
    { name: 'যোগাযোগ ও বুকিং', href: '#contact', id: 'contact' },
    { name: 'আমাদের সম্পর্কে', href: '#about', id: 'about' },
    { name: 'সেবাসমূহ', href: '#services', id: 'services' },
    { name: 'গ্যালারি', href: '#gallery', id: 'gallery' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F4]/95 backdrop-blur-md shadow-sm border-b border-[#075E45]/10 py-3'
          : 'bg-[#FAF9F4] border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4 lg:gap-6">
          {/* Brand Logo & Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 sm:gap-3 text-left group min-w-0 shrink"
          >
          <div>
            <img  className="h-12 w-auto object-contain" src="../../public/images/logo1.png" alt="" />
          </div>
            <div className="flex flex-col min-w-0">
              <span className="font-bold text-sm sm:text-base md:text-lg lg:text-xl text-[#075E45] tracking-tight leading-none whitespace-nowrap truncate group-hover:text-[#0B8063] transition-colors">
                {AGENCY_INFO.name}
              </span>
              <span className="hidden md:block text-[11px] sm:text-xs text-[#202820]/70 font-medium whitespace-nowrap mt-1">
                {AGENCY_INFO.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-semibold transition-colors whitespace-nowrap relative py-1 ${
                    isActive
                      ? 'text-[#075E45]'
                      : 'text-[#202820]/80 hover:text-[#075E45]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#075E45] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <a
              href="#packages"
              onClick={(e) => handleNavClick(e, '#packages')}
              className="inline-flex items-center justify-center px-2.5 py-1.5 sm:px-4 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold text-white bg-[#075E45] hover:bg-[#0B8063] active:bg-[#054835] shadow-xs transition-colors whitespace-nowrap"
            >
              প্যাকেজ দেখুন
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-lg text-[#075E45] hover:bg-[#075E45]/10 focus:outline-none transition-colors"
              aria-label={mobileMenuOpen ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF9F4] border-b border-[#075E45]/15 px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1.5">
            {/* Quick Prominent Package CTA inside drawer */}
            <a
              href="#packages"
              onClick={(e) => handleNavClick(e, '#packages')}
              className="w-full py-2.5 px-4 rounded-xl font-bold text-sm text-white bg-[#075E45] hover:bg-[#0B8063] flex items-center justify-center gap-2 shadow-xs mb-2"
            >
              <span>উমরাহ প্যাকেজসমূহ দেখুন</span>
            </a>

            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 rounded-lg text-sm sm:text-base font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-[#075E45]/10 text-[#075E45]'
                      : 'text-[#202820] hover:bg-black/5 hover:text-[#075E45]'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#075E45]" />}
                </a>
              );
            })}
            <div className="pt-3 border-t border-[#075E45]/10 flex flex-col gap-2">
              <a
                href={AGENCY_INFO.contact.phoneTel}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold text-[#075E45] bg-[#075E45]/10 hover:bg-[#075E45]/20"
              >
                <PhoneCall className="w-4 h-4" />
                <span>সরাসরি কল: {AGENCY_INFO.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
