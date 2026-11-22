import React from 'react';
import {
  LuBriefcase,
  LuCalendar,
  LuBuilding2,
  LuCircleCheck,
} from 'react-icons/lu';
import { SectionHeader } from '../../components/common/SectionHeader';
import { EXPERIENCES } from '../../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-[#0B2545] border-y border-[#1E4D7A]/50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Work History"
          badgeIcon={<LuBriefcase className="w-4 h-4" />}
          title="Professional"
          highlight="Experience"
          subtitle="A track record of managing end-to-end import and export operations, shipping compliance, customs clearance, and global logistics."
        />

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto mt-12">
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-[#1E4D7A]" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Central Node / Marker */}
                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10 flex items-center justify-center">
                    <div
                      className={`w-9 h-9 rounded-full border-4 border-[#0B2545] flex items-center justify-center shadow-lg ${
                        exp.isCurrent
                          ? 'bg-[#F07832] text-white animate-pulse'
                          : 'bg-[#0E335C] text-[#38BDF8]'
                      }`}
                    >
                      <LuBriefcase className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                      isEven ? 'md:mr-auto' : 'md:ml-auto'
                    }`}
                  >
                    <div className="bg-[#071C33]/90 rounded-2xl p-6 sm:p-7 border border-[#1E4D7A] shadow-xl hover:shadow-2xl hover:border-[#38BDF8]/60 transition-all backdrop-blur-sm">
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            exp.isCurrent
                              ? 'bg-[#F07832]/20 text-[#F07832] border border-[#F07832]/40'
                              : 'bg-[#0E335C] text-[#38BDF8] border border-[#1E4D7A]'
                          }`}
                        >
                          {exp.period}
                        </span>

                        <div className="flex items-center gap-1.5 text-xs text-[#CBD5E1] font-medium">
                          <LuCalendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                          <span>{exp.duration}</span>
                        </div>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-sm font-semibold text-[#38BDF8] mt-1 mb-4">
                        <LuBuilding2 className="w-4 h-4 text-[#F07832]" />
                        <span>{exp.company}</span>
                      </div>

                      <div className="text-xs text-[#CBD5E1] italic mb-4 pb-3 border-b border-[#1E4D7A]/60">
                        {exp.type}
                      </div>

                      {/* Responsibilities list */}
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#38BDF8] mb-3">
                        Key Responsibilities:
                      </h4>
                      <ul className="space-y-2.5">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <li
                            key={rIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-[#E2EEFF] leading-relaxed"
                          >
                            <LuCircleCheck className="w-4 h-4 text-[#F07832] shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Key Tags */}
                      <div className="mt-5 pt-4 border-t border-[#1E4D7A]/60 flex flex-wrap gap-1.5">
                        {exp.keyTags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-[#0E335C]/80 text-[#38BDF8] border border-[#1E4D7A]"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
