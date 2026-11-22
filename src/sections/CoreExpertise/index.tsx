import React from 'react';
import {
  LuFileText,
  LuFileCheck,
  LuTruck,
  LuShieldCheck,
  LuDollarSign,
  LuNavigation,
  LuBuilding2,
  LuGlobe,
  LuLayers,
  LuCheck,
} from 'react-icons/lu';
import { SectionHeader } from '../../components/common/SectionHeader';
import { CORE_EXPERTISE, ExpertiseItem } from '../../data/portfolioData';

export const CoreExpertise: React.FC = () => {
  const getExpertiseIcon = (iconName: string) => {
    switch (iconName) {
      case 'file-text':
        return <LuFileText className="w-6 h-6 text-[#F07832]" />;
      case 'file-check':
        return <LuFileCheck className="w-6 h-6 text-[#38BDF8]" />;
      case 'truck':
        return <LuTruck className="w-6 h-6 text-[#10B981]" />;
      case 'shield':
        return <LuShieldCheck className="w-6 h-6 text-[#F59E0B]" />;
      case 'dollar-sign':
        return <LuDollarSign className="w-6 h-6 text-[#16A34A]" />;
      case 'navigation':
        return <LuNavigation className="w-6 h-6 text-[#6366F1]" />;
      case 'building-bank':
        return <LuBuilding2 className="w-6 h-6 text-[#0D9488]" />;
      case 'globe':
        return <LuGlobe className="w-6 h-6 text-[#38BDF8]" />;
      default:
        return <LuLayers className="w-6 h-6 text-[#38BDF8]" />;
    }
  };

  const getCategoryBadge = (category: ExpertiseItem['category']) => {
    switch (category) {
      case 'documentation':
        return 'Trade Documentation';
      case 'operations':
        return 'Freight Operations';
      case 'compliance':
        return 'Statutory Compliance';
      case 'finance':
        return 'Banking & Reconciliations';
      default:
        return 'Core Function';
    }
  };

  return (
    <section id="expertise" className="py-20 md:py-28 bg-[#0A2542] text-white border-t border-[#1E4D7A]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Specialized Capabilities"
          badgeIcon={<LuLayers className="w-4 h-4" />}
          title="Core"
          highlight="Expertise"
          subtitle="Comprehensive operational competencies across cross-border freight execution, statutory customs regulations, and international banking closure."
        />

        {/* 8 Expertise Visual Cards - with h-full flex flex-col justify-between for matching heights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {CORE_EXPERTISE.map((item) => (
            <div
              key={item.id}
              className="bg-[#071C33]/90 rounded-2xl p-6 border border-[#1E4D7A] shadow-xl hover:shadow-2xl hover:border-[#38BDF8]/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group backdrop-blur-sm"
            >
              <div>
                {/* Header: Icon & Category */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-[#0E335C] border border-[#1E4D7A] flex items-center justify-center group-hover:border-[#F07832] transition-colors">
                    {getExpertiseIcon(item.iconName)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#38BDF8] bg-[#0E335C] px-2.5 py-1 rounded-md border border-[#1E4D7A]">
                    {getCategoryBadge(item.category)}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-[#38BDF8] transition-colors mb-2.5">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#CBD5E1] leading-relaxed mb-5">
                  {item.description}
                </p>
              </div>

              {/* Deliverables / Scope */}
              <div className="pt-4 border-t border-[#1E4D7A]/60 space-y-2">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#38BDF8]">
                  Key Deliverables
                </div>
                <ul className="space-y-1.5">
                  {item.deliverables.map((deliv, dIdx) => (
                    <li
                      key={dIdx}
                      className="flex items-start gap-1.5 text-xs text-[#E2EEFF]"
                    >
                      <LuCheck className="w-3.5 h-3.5 text-[#F07832] shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
