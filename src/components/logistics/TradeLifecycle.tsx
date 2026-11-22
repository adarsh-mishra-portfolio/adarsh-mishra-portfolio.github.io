import React from 'react';
import { TRADE_LIFECYCLE_STEPS } from '../../data/portfolioData';

export const TradeLifecycle: React.FC = () => {
  return (
    <div className="w-full mt-14">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-xs font-semibold text-[#F07832] uppercase tracking-wider">
          End-to-End Trade Lifecycle
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
          Export & Import Operational Workflow
        </h3>
        <p className="text-sm text-[#CBD5E1] mt-2">
          From purchase order verification to customs assessment, multi-modal transit, and final IDPMS bank closure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {TRADE_LIFECYCLE_STEPS.map((step, idx) => (
          <div
            key={step.step}
            className="relative bg-[#071C33]/90 rounded-2xl p-6 border border-[#1E4D7A] shadow-md hover:shadow-xl hover:border-[#38BDF8]/60 transition-all group backdrop-blur-sm"
          >
            <div className="flex items-center justify-between mb-3.5">
              <span className="text-3xl font-black text-[#F07832]/40 group-hover:text-[#F07832] transition-colors font-mono">
                {step.step}
              </span>
              <span className="text-[11px] font-semibold text-[#38BDF8] bg-[#0E335C] px-2.5 py-1 rounded-lg border border-[#1E4D7A]">
                Phase 0{idx + 1}
              </span>
            </div>

            <h4 className="text-base font-bold text-white group-hover:text-[#38BDF8] transition-colors mb-2">
              {step.title}
            </h4>
            <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
