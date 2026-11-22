import React from 'react';
import {
  LuShip,
  LuArrowUp,
  LuPhone,
  LuMail,
  LuDownload,
  LuShieldCheck,
} from 'react-icons/lu';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa6';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071C33] text-white border-t border-[#1E4D7A] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12 border-b border-[#1E4D7A]/60">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0E335C] border border-[#1E4D7A] flex items-center justify-center text-[#38BDF8] shadow-sm">
                <LuShip className="w-5 h-5 text-[#38BDF8]" />
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-white block">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-xs font-semibold tracking-wider text-[#F07832] uppercase block">
                  {PERSONAL_INFO.title}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed max-w-sm">
              Dedicated to optimizing cross-border trade operations, ocean & air freight logistics, port operations, and statutory customs compliance.
            </p>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#0A66C2]/20 text-[#38BDF8] border border-[#0A66C2]/40 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-all shadow-sm"
                title="Connect on LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all shadow-sm"
                title="Chat on WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-9 h-9 rounded-xl bg-[#0E335C] text-[#38BDF8] border border-[#1E4D7A] flex items-center justify-center hover:bg-[#38BDF8] hover:text-[#071C33] transition-all shadow-sm"
                title="Send Email"
              >
                <LuMail className="w-4 h-4" />
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="w-9 h-9 rounded-xl bg-[#0E335C] text-[#F07832] border border-[#1E4D7A] flex items-center justify-center hover:bg-[#F07832] hover:text-white transition-all shadow-sm"
                title="Call Directly"
              >
                <LuPhone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#CBD5E1]">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Me
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  Professional Experience
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-white transition-colors">
                  Core Expertise
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-white transition-colors">
                  Education & Credentials
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Skills & Languages
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Operations & CV Download */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
              Document Downloads
            </h4>
            <p className="text-xs text-[#CBD5E1] leading-relaxed">
              Official curriculum vitae detailing professional tenure at Neptune Petrochemicals, Asian Granito, and V Care Group.
            </p>

            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={PERSONAL_INFO.cvWordPath}
                download={PERSONAL_INFO.cvWordFileName}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F07832] hover:bg-[#D96320] text-white text-xs font-semibold shadow-md transition-all cursor-pointer"
                title="Download CV in Word (.docx) Format"
              >
                <LuDownload className="w-3.5 h-3.5" />
                <span>Download CV (Word)</span>
              </a>

              <a
                href={PERSONAL_INFO.cvPdfPath}
                download={PERSONAL_INFO.cvPdfFileName}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#0E335C] hover:bg-[#1E4D7A] text-[#38BDF8] hover:text-white text-xs font-semibold border border-[#1E4D7A] transition-all cursor-pointer"
                title="Download CV in PDF Format"
              >
                <LuDownload className="w-3.5 h-3.5" />
                <span>PDF</span>
              </a>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-[#CBD5E1] pt-1">
              <LuShieldCheck className="w-4 h-4 text-[#10B981]" />
              <span>Verified Export & Import Executive Profile</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#CBD5E1]">
          <p>© 2026 Adarsh Mishra. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#38BDF8] hover:text-[#F07832] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <LuArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
