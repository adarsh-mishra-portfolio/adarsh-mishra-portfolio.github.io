import React from 'react';
import {
  LuShip,
  LuPlane,
  LuTrainTrack,
  LuDownload,
  LuPhoneCall,
  LuShieldCheck,
  LuFileCheck,
  LuArrowDown,
  LuAnchor,
  LuFileText,
} from 'react-icons/lu';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa6';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { HolographicCargoShowcase } from '../../components/logistics/HolographicCargoShowcase';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 bg-gradient-to-b from-[#0B2545] via-[#0D3358] to-[#0A223E] text-white overflow-hidden"
    >
      {/* Ocean Ambient Wave Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 ocean-wave-glow pointer-events-none" />
      <div className="absolute top-24 right-0 w-96 h-96 bg-[#38BDF8]/10 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#F07832]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Introduction & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Industry Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0E335C]/80 border border-[#1E4D7A] text-xs sm:text-sm font-medium text-[#D0E2F5] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#F07832] animate-pulse" />
              <span className="font-semibold text-white">International Trade</span>
              <span className="text-[#38BDF8]">•</span>
              <span className="text-[#CBD5E1]">Cross-Border Logistics & Shipping</span>
            </div>

            {/* Name & Professional Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase">
                {PERSONAL_INFO.name}
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="h-0.5 w-8 bg-[#F07832] hidden sm:inline-block" />
                <h2 className="text-lg sm:text-2xl md:text-3xl font-bold tracking-wider text-[#F07832] uppercase">
                  {PERSONAL_INFO.title}
                </h2>
              </div>
            </div>

            {/* Professional Introduction */}
            <p className="text-base sm:text-lg md:text-xl text-[#CBD5E1] leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              {PERSONAL_INFO.heroIntro}
            </p>

            {/* Primary Action Buttons - All 4 in one row on desktop */}
            <div className="pt-2 flex flex-wrap sm:flex-nowrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5">
              {/* 1. Download CV (Word .DOCX with PDF quick-access) */}
              <div className="inline-flex rounded-xl shadow-lg shadow-[#F07832]/25 overflow-hidden shrink-0">
                <a
                  href={PERSONAL_INFO.cvWordPath}
                  download={PERSONAL_INFO.cvWordFileName}
                  className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-2.5 sm:py-3 bg-[#F07832] hover:bg-[#D96320] text-white font-semibold text-xs sm:text-sm transition-all focus:outline-none cursor-pointer whitespace-nowrap"
                  title="Download CV in Word (.docx) Format"
                >
                  <LuDownload className="w-4 h-4 shrink-0" />
                  <span>Download CV (Word)</span>
                </a>
                <a
                  href={PERSONAL_INFO.cvPdfPath}
                  download={PERSONAL_INFO.cvPdfFileName}
                  className="inline-flex items-center gap-1 px-2.5 py-2.5 sm:py-3 bg-[#D96320] hover:bg-[#C2410C] text-white font-semibold text-[11px] sm:text-xs border-l border-white/20 transition-all focus:outline-none cursor-pointer whitespace-nowrap"
                  title="Download as PDF"
                >
                  <LuFileText className="w-3.5 h-3.5 shrink-0" />
                  <span>PDF</span>
                </a>
              </div>

              {/* 2. Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-[#0E335C] hover:bg-[#1E4D7A] text-white font-semibold text-xs sm:text-sm border border-[#1E4D7A] shadow-sm transition-all transform hover:-translate-y-0.5 focus:outline-none cursor-pointer shrink-0 whitespace-nowrap"
              >
                <LuPhoneCall className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>Contact Me</span>
              </a>

              {/* 3. WhatsApp Quick Chat */}
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] font-semibold text-xs sm:text-sm border border-[#25D366]/40 transition-all transform hover:-translate-y-0.5 cursor-pointer shrink-0 whitespace-nowrap"
                title="Direct WhatsApp Inquiry"
              >
                <FaWhatsapp className="w-4 h-4 text-[#25D366] shrink-0" />
                <span>WhatsApp</span>
              </a>

              {/* 4. LinkedIn Profile */}
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-2.5 sm:py-3 rounded-xl bg-[#0A66C2]/20 hover:bg-[#0A66C2]/35 text-[#38BDF8] font-semibold text-xs sm:text-sm border border-[#0A66C2]/40 transition-all transform hover:-translate-y-0.5 cursor-pointer shrink-0 whitespace-nowrap"
                title="Connect on LinkedIn"
              >
                <FaLinkedin className="w-4 h-4 text-[#38BDF8] shrink-0" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Core Trade Modes Mini-Bar */}
            <div className="pt-6 border-t border-[#1E4D7A]/60 grid grid-cols-3 gap-3 text-center sm:text-left">
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#0E335C]/60 border border-[#1E4D7A] shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#071C33] border border-[#1E4D7A] flex items-center justify-center text-[#38BDF8] shrink-0">
                  <LuShip className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white uppercase truncate">Ocean Cargo</div>
                  <div className="text-[11px] text-[#CBD5E1] truncate">FCL / LCL Transit</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#0E335C]/60 border border-[#1E4D7A] shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#071C33] border border-[#1E4D7A] flex items-center justify-center text-[#F07832] shrink-0">
                  <LuPlane className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white uppercase truncate">Air Freight</div>
                  <div className="text-[11px] text-[#CBD5E1] truncate">AWB & Priority</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-[#0E335C]/60 border border-[#1E4D7A] shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-[#071C33] border border-[#1E4D7A] flex items-center justify-center text-[#10B981] shrink-0">
                  <LuTrainTrack className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white uppercase truncate">Rail & Road</div>
                  <div className="text-[11px] text-[#CBD5E1] truncate">ICD Dry Ports</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Holographic Cargo Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative bg-[#071C33] rounded-2xl border border-[#1E4D7A] overflow-hidden shadow-2xl">
                {/* Holographic Auto-changing Export & Cargo Showcase */}
                <HolographicCargoShowcase />

                {/* Operations Key Highlights Card Body */}
                <div className="p-5 sm:p-6 space-y-3.5 bg-[#071C33]">
                  <div className="space-y-2.5">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0E335C]/60 border border-[#1E4D7A]">
                      <LuFileCheck className="w-5 h-5 text-[#38BDF8] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-white">Complete Import & Export Documentation</div>
                        <div className="text-[11px] text-[#CBD5E1] mt-0.5">
                          BOE, Invoice, Packing List, BL/AWB, COO & Customs Compliance
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0E335C]/60 border border-[#1E4D7A]">
                      <LuShieldCheck className="w-5 h-5 text-[#F07832] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-white">Customs & Regulatory Governance</div>
                        <div className="text-[11px] text-[#CBD5E1] mt-0.5">
                          DGFT Foreign Trade Policy, Customs Tariffs, and RBI Guidelines
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-xl bg-[#0E335C]/60 border border-[#1E4D7A]">
                      <LuAnchor className="w-5 h-5 text-[#10B981] shrink-0 mt-0.5" />
                      <div>
                        <div className="text-xs font-bold text-white">Port & Demurrage Mitigation</div>
                        <div className="text-[11px] text-[#CBD5E1] mt-0.5">
                          Free-time optimization, port handling, and IDPMS bank closures
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Snippet */}
                  <div className="pt-3 border-t border-[#1E4D7A] flex items-center justify-between text-xs">
                    <span className="text-[#CBD5E1]">Executive Contact Line:</span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="font-mono font-bold text-[#38BDF8] hover:text-[#F07832] transition-colors"
                    >
                      {PERSONAL_INFO.displayPhone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Down Arrow Indicator */}
      <div className="mt-8 text-center">
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-1 text-[#CBD5E1] hover:text-white text-xs font-medium transition-colors"
          aria-label="Scroll to About section"
        >
          <span>Explore Professional Background</span>
          <LuArrowDown className="w-4 h-4 animate-bounce text-[#F07832]" />
        </a>
      </div>
    </section>
  );
};
