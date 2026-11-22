import React from 'react';
import {
  LuGraduationCap,
  LuCalendar,
  LuMapPin,
  LuAward,
} from 'react-icons/lu';
import { SectionHeader } from '../../components/common/SectionHeader';
import { EDUCATION } from '../../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 bg-[#0B2545] border-y border-[#1E4D7A]/50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Academic Background"
          badgeIcon={<LuGraduationCap className="w-4 h-4" />}
          title="Education &"
          highlight="Credentials"
          subtitle="Foundational academic qualifications and formal educational background."
        />

        {/* 3 Education Cards - with items-stretch and h-full for matching height */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12 items-stretch">
          {EDUCATION.map((edu, index) => (
            <div
              key={edu.id}
              className="bg-[#071C33]/90 rounded-2xl p-6 sm:p-7 border border-[#1E4D7A] shadow-xl hover:shadow-2xl hover:border-[#38BDF8]/60 transition-all flex flex-col justify-between h-full group backdrop-blur-sm"
            >
              <div>
                {/* Header with Icon and Order */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#0E335C] border border-[#1E4D7A] flex items-center justify-center text-[#38BDF8] group-hover:border-[#F07832] transition-colors">
                    <LuGraduationCap className="w-6 h-6 text-[#F07832]" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#38BDF8] bg-[#0E335C] px-2.5 py-1 rounded-md border border-[#1E4D7A]">
                    0{index + 1}
                  </span>
                </div>

                {/* Degree Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#38BDF8] transition-colors mb-2">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <div className="flex items-start gap-1.5 text-xs sm:text-sm font-medium text-[#CBD5E1] mb-4">
                  <LuMapPin className="w-4 h-4 text-[#F07832] shrink-0 mt-0.5" />
                  <span>{edu.institution}</span>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 text-xs text-[#94A3B8] mb-5">
                  <LuCalendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>{edu.duration}</span>
                </div>
              </div>

              {/* Grade Badge */}
              <div className="pt-4 border-t border-[#1E4D7A]/60 flex items-center justify-between">
                <div className="text-xs font-medium text-[#CBD5E1]">
                  {edu.gradeType}
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#F07832]/20 border border-[#F07832]/40 text-[#F07832] font-mono font-bold text-sm">
                  <LuAward className="w-4 h-4" />
                  <span>{edu.grade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
