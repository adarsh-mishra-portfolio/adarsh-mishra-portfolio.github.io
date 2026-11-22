import React from 'react';
import {
  LuShip,
  LuCompass,
  LuGlobe,
  LuShieldCheck,
  LuLink2,
  LuFileText,
  LuCircleCheck,
} from 'react-icons/lu';
import { SectionHeader } from '../../components/common/SectionHeader';
import { LogisticsShowcase } from '../../components/logistics/LogisticsShowcase';
import { TradeLifecycle } from '../../components/logistics/TradeLifecycle';
import { PERSONAL_INFO, CORE_PILLARS } from '../../data/portfolioData';

export const About: React.FC = () => {
  const getPillarIcon = (icon: string) => {
    switch (icon) {
      case 'ship':
        return <LuShip className="w-5 h-5 text-[#38BDF8]" />;
      case 'route':
        return <LuCompass className="w-5 h-5 text-[#F07832]" />;
      case 'globe':
        return <LuGlobe className="w-5 h-5 text-[#10B981]" />;
      case 'border':
        return <LuShieldCheck className="w-5 h-5 text-[#F59E0B]" />;
      case 'chain':
        return <LuLink2 className="w-5 h-5 text-[#6366F1]" />;
      case 'procedure':
        return <LuFileText className="w-5 h-5 text-[#38BDF8]" />;
      default:
        return <LuCircleCheck className="w-5 h-5 text-[#38BDF8]" />;
    }
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-[#0A2542] relative overflow-hidden text-white border-t border-[#1E4D7A]/40">
      {/* Subtle World Map / Global Trade Routes Background Element */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.06] flex items-center justify-center">
        <svg
          viewBox="0 0 1000 500"
          className="w-full max-w-6xl h-auto"
          fill="none"
          stroke="#38BDF8"
          strokeWidth="1.2"
        >
          {/* Subtle World Map Outlines & Trade Shipping Lanes */}
          <path d="M150,120 Q220,100 280,140 T420,130 T550,110 T700,160 T850,180" strokeDasharray="4 4" />
          <path d="M180,240 Q260,280 340,260 T480,290 T640,270 T780,310" strokeDasharray="4 4" />
          <path d="M220,180 Q360,190 500,220 T720,240 T880,200" strokeDasharray="6 6" strokeWidth="1.5" stroke="#F07832" />
          {/* Global Trade Hub Port Nodes */}
          <circle cx="200" cy="150" r="4" fill="#38BDF8" />
          <circle cx="340" cy="200" r="4" fill="#38BDF8" />
          <circle cx="510" cy="220" r="5" fill="#F07832" />
          <circle cx="680" cy="180" r="4" fill="#38BDF8" />
          <circle cx="790" cy="220" r="4" fill="#38BDF8" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Professional Background"
          badgeIcon={<LuCompass className="w-4 h-4" />}
          title="About"
          highlight="Adarsh Mishra"
          subtitle="Specializing in international trade operations, customs statutory compliance, and multi-modal logistics coordination."
        />

        {/* Executive Summary Card */}
        <div className="bg-[#0E335C]/80 border border-[#1E4D7A] rounded-2xl p-6 sm:p-10 shadow-xl mb-16 relative overflow-hidden backdrop-blur-sm">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-6 bg-[#F07832] rounded-full" />
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Executive Professional Summary
              </h3>
            </div>

            <blockquote className="text-base sm:text-lg md:text-xl text-[#E2EEFF] leading-relaxed font-normal pl-4 border-l-2 border-[#F07832] italic">
              "{PERSONAL_INFO.professionalSummary}"
            </blockquote>

            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
              With hands-on experience navigating the complex ecosystems of seaports, air cargo terminals, and inland container depots, Adarsh bridges international buyers, suppliers, Custom House Agents (CHA), shipping lines, and regulatory authorities to ensure zero-delay cross-border trade execution.
            </p>
          </div>
        </div>

        {/* 6 Core Highlighted Pillars */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-semibold text-[#38BDF8] uppercase tracking-wider bg-[#0E335C] px-3.5 py-1.5 rounded-full border border-[#1E4D7A]">
              Core Operational Competencies
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-3">
              Six Pillars of Trade Excellence
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-[#071C33]/90 rounded-2xl p-6 border border-[#1E4D7A] shadow-md hover:shadow-xl hover:border-[#38BDF8]/60 transition-all group backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0E335C] border border-[#1E4D7A] flex items-center justify-center mb-4 group-hover:border-[#F07832] transition-colors">
                  {getPillarIcon(pillar.icon)}
                </div>
                <h4 className="text-lg font-bold text-white group-hover:text-[#38BDF8] transition-colors mb-2">
                  {pillar.title}
                </h4>
                <p className="text-sm text-[#CBD5E1] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Multi-modal Cargo Transport Showcase (Ship, Plane, Train) */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-semibold text-[#F07832] uppercase tracking-wider">
              Multi-Modal Freight Coordination
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
              Ocean Vessels, Air Cargo & Rail Freight
            </h3>
            <p className="text-sm text-[#CBD5E1] mt-2">
              Coordinating multi-modal freight movements across international sea routes, airport customs terminals, and inland dry ports.
            </p>
          </div>

          <LogisticsShowcase />
        </div>

        {/* End-to-End Trade Lifecycle */}
        <TradeLifecycle />
      </div>
    </section>
  );
};
