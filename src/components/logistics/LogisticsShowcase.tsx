import React, { useState } from 'react';
import { LuShip, LuPlane, LuTrainTrack, LuCircleCheck, LuArrowRight } from 'react-icons/lu';
import { LOGISTICS_MODES } from '../../data/portfolioData';

export const LogisticsShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getIcon = (icon: string) => {
    switch (icon) {
      case 'ship':
        return <LuShip className="w-5 h-5 text-[#38BDF8]" />;
      case 'plane':
        return <LuPlane className="w-5 h-5 text-[#F07832]" />;
      case 'train':
        return <LuTrainTrack className="w-5 h-5 text-[#10B981]" />;
      default:
        return <LuShip className="w-5 h-5 text-[#38BDF8]" />;
    }
  };

  return (
    <div className="w-full bg-[#071C33] text-white rounded-2xl border border-[#1E4D7A] overflow-hidden shadow-xl">
      {/* Top Banner / Mode Switcher */}
      <div className="bg-[#0B2545] px-4 py-3 sm:px-6 border-b border-[#1E4D7A] flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
          <span className="text-xs font-semibold tracking-wider text-[#38BDF8] uppercase">
            Global Cargo Transport Modes
          </span>
        </div>

        <div className="flex items-center gap-1.5 bg-[#071C33] p-1 rounded-xl border border-[#1E4D7A]">
          {LOGISTICS_MODES.map((mode, idx) => (
            <button
              key={mode.mode}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                activeTab === idx
                  ? 'bg-[#F07832] text-white shadow-sm font-semibold'
                  : 'text-[#CBD5E1] hover:text-white hover:bg-[#0E335C]'
              }`}
            >
              {getIcon(mode.icon)}
              <span className="hidden sm:inline">
                {idx === 0 ? 'Ocean Cargo' : idx === 1 ? 'Air Freight' : 'Rail & Road'}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Mode Content Grid - with items-stretch for identical height */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
        {/* Visual Image Side */}
        <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[380px] h-full overflow-hidden group bg-[#0A223E]">
          <img
            src={LOGISTICS_MODES[activeTab].image}
            alt={LOGISTICS_MODES[activeTab].mode}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071C33] via-transparent to-transparent" />
          
          {/* Badge over image */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F07832] text-white shadow-md">
              {LOGISTICS_MODES[activeTab].badge}
            </span>
            <span className="text-xs font-mono text-[#38BDF8] bg-[#071C33]/90 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-[#1E4D7A]">
              Standard Operating Procedure
            </span>
          </div>
        </div>

        {/* Details Side - matching full height */}
        <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between h-full bg-[#071C33]">
          <div>
            <div className="flex items-center gap-2.5 mb-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#0E335C] border border-[#1E4D7A] flex items-center justify-center shrink-0">
                {getIcon(LOGISTICS_MODES[activeTab].icon)}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {LOGISTICS_MODES[activeTab].mode}
              </h3>
            </div>
            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed mb-6">
              {LOGISTICS_MODES[activeTab].description}
            </p>

            <h4 className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] mb-3">
              Operational Focus & Documentation
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
              {LOGISTICS_MODES[activeTab].highlights.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs sm:text-sm text-white bg-[#0E335C]/60 px-3 py-2 rounded-xl border border-[#1E4D7A]"
                >
                  <LuCircleCheck className="w-4 h-4 text-[#F07832] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#1E4D7A] flex items-center justify-between text-xs text-[#CBD5E1]">
            <span>Seamless Multi-Modal Coordination</span>
            <a
              href="#expertise"
              className="text-[#F07832] font-semibold hover:text-[#D96320] inline-flex items-center gap-1 group cursor-pointer"
            >
              <span>Explore Core Expertise</span>
              <LuArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
