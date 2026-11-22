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
} from 'react-icons/lu';
import { FaWhatsapp } from 'react-icons/fa6';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { getAssetUrl } from '../../utils/asset';

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

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3.5 sm:gap-4">
              {/* Download CV */}
              <a
                href={PERSONAL_INFO.cvPath}
                download={PERSONAL_INFO.cvFileName}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#F07832] hover:bg-[#D96320] text-white font-semibold text-sm sm:text-base shadow-lg shadow-[#F07832]/30 hover:shadow-xl transition-all transform hover:-translate-y-0.5 focus:outline-none cursor-pointer"
              >
                <LuDownload className="w-5 h-5" />
                <span>Download CV</span>
              </a>

              {/* Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0E335C] hover:bg-[#1E4D7A] text-white font-semibold text-sm sm:text-base border border-[#1E4D7A] shadow-sm transition-all transform hover:-translate-y-0.5 focus:outline-none cursor-pointer"
              >
                <LuPhoneCall className="w-5 h-5 text-[#38BDF8]" />
                <span>Contact Me</span>
              </a>

              {/* WhatsApp Quick Chat */}
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] font-semibold text-sm sm:text-base border border-[#25D366]/40 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                title="Direct WhatsApp Inquiry"
              >
                <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
                <span>WhatsApp</span>
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

          {/* Right Column: Visual Logistics Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative bg-[#071C33] rounded-2xl border border-[#1E4D7A] overflow-hidden shadow-2xl">
                {/* Visual Header Image: Container Ship */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-[#0A223E]">
                  <img
                    src={getAssetUrl('assets/images/cargo-ship.jpg')}
                    alt="International Container Cargo Ship"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071C33] via-[#071C33]/40 to-transparent" />
                  
                  {/* Floating Live Badge */}
                  <div className="absolute top-3 right-3 bg-[#0B2545]/90 backdrop-blur-md px-3 py-1 rounded-full border border-[#1E4D7A] flex items-center gap-2 text-xs font-mono text-[#38BDF8] shadow-md">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    <span className="font-semibold text-white">PORT OPERATIONS</span>
                  </div>

                  <div className="absolute bottom-3 left-4">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider bg-[#F07832] text-white">
                      Cross-Border Trade
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1">
                      International Logistics Hub
                    </h3>
                  </div>
                </div>

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
