import React, { useState, useEffect } from 'react';
import {
  LuShip,
  LuDownload,
  LuMenu,
  LuX,
  LuPhone,
  LuFileText,
} from 'react-icons/lu';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa6';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'expertise', label: 'Core Expertise', href: '#expertise' },
  { id: 'education', label: 'Education', href: '#education' },
  { id: 'skills', label: 'Skills & Tools', href: '#skills' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 140;

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const section = document.getElementById(NAV_ITEMS[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#071C33]/95 backdrop-blur-md shadow-lg shadow-[#071C33]/30 border-b border-[#1E4D7A]/50 py-3'
          : 'bg-[#0B2545]/90 backdrop-blur-sm border-b border-[#1E4D7A]/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Adarsh Mishra - Export & Import Executive"
          >
            <div className="w-10 h-10 rounded-xl bg-[#0E335C] border border-[#1E4D7A] flex items-center justify-center text-[#38BDF8] shadow-sm group-hover:border-[#F07832] transition-colors">
              <LuShip className="w-5 h-5 text-[#38BDF8] group-hover:text-[#F07832] transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-white group-hover:text-[#38BDF8] transition-colors leading-tight">
                ADARSH MISHRA
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider text-[#F07832] uppercase">
                Export & Import Executive
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all relative ${
                    isActive
                      ? 'text-white font-semibold bg-[#0E335C]'
                      : 'text-[#CBD5E1] hover:text-white hover:bg-[#0E335C]/60'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#F07832] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden lg:flex items-center gap-2">
            {/* LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-[#0A66C2]/20 hover:bg-[#0A66C2]/35 text-[#38BDF8] border border-[#0A66C2]/40 transition-all hover:scale-102"
              title="View LinkedIn Profile"
            >
              <FaLinkedin className="w-4 h-4 text-[#38BDF8]" />
              <span className="hidden xl:inline">LinkedIn</span>
            </a>

            {/* WhatsApp Quick Chat */}
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 transition-all hover:scale-102"
              title="Chat on WhatsApp"
            >
              <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-white hover:bg-[#0E335C] border border-[#1E4D7A] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <LuX className="w-5 h-5" /> : <LuMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071C33] border-b border-[#1E4D7A] px-4 pt-3 pb-6 space-y-2 mt-3 shadow-xl animate-fadeIn">
          <div className="grid grid-cols-1 gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-xl text-sm font-medium flex items-center justify-between ${
                    isActive
                      ? 'bg-[#0E335C] text-white font-semibold border-l-4 border-[#F07832]'
                      : 'text-[#CBD5E1] hover:bg-[#0E335C]/60 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#F07832]" />}
                </a>
              );
            })}
          </div>

          <div className="pt-4 mt-2 border-t border-[#1E4D7A] grid grid-cols-3 gap-2">
            <a
              href={`tel:${PERSONAL_INFO.phone}`}
              className="flex items-center justify-center gap-1.5 px-2 py-2.5 text-xs font-semibold rounded-xl bg-[#0E335C] text-white border border-[#1E4D7A]"
            >
              <LuPhone className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>Call</span>
            </a>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-2 py-2.5 text-xs font-semibold rounded-xl bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40"
            >
              <FaWhatsapp className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-2 py-2.5 text-xs font-semibold rounded-xl bg-[#0A66C2]/20 text-[#38BDF8] border border-[#0A66C2]/40"
            >
              <FaLinkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="pt-2 grid grid-cols-2 gap-2">
            <a
              href={PERSONAL_INFO.cvPdfPath}
              download={PERSONAL_INFO.cvPdfFileName}
              className="flex items-center justify-center gap-1.5 px-2 py-2 text-xs font-semibold rounded-xl bg-[#D96320] text-white"
              title="Download CV in PDF Format"
            >
              <LuFileText className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <a
              href={PERSONAL_INFO.cvWordPath}
              download={PERSONAL_INFO.cvWordFileName}
              className="flex items-center justify-center gap-1.5 px-2 py-2 text-xs font-semibold rounded-xl bg-[#F07832] text-white"
              title="Download CV in Word (.docx) Format"
            >
              <LuDownload className="w-3.5 h-3.5" />
              <span>Download Word</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
