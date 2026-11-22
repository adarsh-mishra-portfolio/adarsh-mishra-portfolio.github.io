import React from 'react';
import {
  LuWrench,
  LuLanguages,
  LuShieldAlert,
  LuFileSpreadsheet,
  LuMessageSquare,
  LuBrain,
  LuHandshake,
  LuFileText,
  LuCheck,
  LuGlobe,
} from 'react-icons/lu';
import { SectionHeader } from '../../components/common/SectionHeader';
import { SKILLS, LANGUAGES, COMPLIANCE_FRAMEWORKS } from '../../data/portfolioData';

export const Skills: React.FC = () => {
  const getSkillIcon = (name: string) => {
    switch (name) {
      case 'Export Documentation':
      case 'Import/Export Documentation':
        return <LuFileText className="w-4 h-4 text-[#F07832]" />;
      case 'Logistics Management':
        return <LuGlobe className="w-4 h-4 text-[#38BDF8]" />;
      case 'Customs Clearance':
        return <LuShieldAlert className="w-4 h-4 text-[#10B981]" />;
      case 'Problem Solving':
        return <LuBrain className="w-4 h-4 text-[#F59E0B]" />;
      case 'Freight Negotiation':
        return <LuHandshake className="w-4 h-4 text-[#6366F1]" />;
      case 'Communication Skills':
        return <LuMessageSquare className="w-4 h-4 text-[#EC4899]" />;
      case 'MS Office / ERP':
        return <LuFileSpreadsheet className="w-4 h-4 text-[#0D9488]" />;
      default:
        return <LuCheck className="w-4 h-4 text-[#38BDF8]" />;
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#0A2542] text-white border-t border-[#1E4D7A]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Professional Competencies"
          badgeIcon={<LuWrench className="w-4 h-4" />}
          title="Skills &"
          highlight="Languages"
          subtitle="Operational competencies, regulatory frameworks, and multilingual communication capabilities."
        />

        {/* 2-Column Grid with items-stretch for identical height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 items-stretch">
          {/* Left Column: Core Industry Skills & Compliance Card */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full bg-[#071C33]/90 rounded-2xl p-6 sm:p-8 border border-[#1E4D7A] shadow-xl backdrop-blur-sm">
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#0E335C] text-[#F07832] border border-[#1E4D7A] flex items-center justify-center shadow-sm">
                  <LuWrench className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Core Industry Skills
                  </h3>
                  <p className="text-xs text-[#CBD5E1]">
                    Documented competencies from professional trade experience
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {SKILLS.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-[#0E335C]/60 border border-[#1E4D7A] shadow-sm hover:border-[#38BDF8]/60 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#071C33] flex items-center justify-center shrink-0 group-hover:bg-[#38BDF8] group-hover:text-[#071C33] transition-colors">
                      {getSkillIcon(skill.name)}
                    </div>
                    <span className="text-sm font-semibold text-white group-hover:text-[#38BDF8] transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Regulatory & Compliance Frameworks */}
            <div className="pt-6 border-t border-[#1E4D7A]/60">
              <div className="flex items-center gap-2 mb-3">
                <LuShieldAlert className="w-4 h-4 text-[#F07832]" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                  Statutory & Regulatory Frameworks
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {COMPLIANCE_FRAMEWORKS.map((rule, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs text-[#CBD5E1] p-2 rounded-lg bg-[#0E335C]/40 border border-[#1E4D7A]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F07832] shrink-0" />
                    <span className="font-medium text-white">{rule}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Languages & Multilingual Proficiency Card (matching full height) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full bg-[#071C33]/90 rounded-2xl p-6 sm:p-8 border border-[#1E4D7A] shadow-xl backdrop-blur-sm">
            <div>
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#0E335C] text-[#38BDF8] border border-[#1E4D7A] flex items-center justify-center shadow-sm">
                  <LuLanguages className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Languages
                  </h3>
                  <p className="text-xs text-[#CBD5E1]">
                    Multilingual trade communication
                  </p>
                </div>
              </div>

              {/* Language list */}
              <div className="space-y-3 mb-6">
                {LANGUAGES.map((lang) => (
                  <div
                    key={lang.name}
                    className="bg-[#0E335C]/60 rounded-xl p-4 border border-[#1E4D7A] flex items-center justify-between"
                  >
                    <div>
                      <div className="text-base font-bold text-white">
                        {lang.name}
                      </div>
                      <div className="text-xs text-[#CBD5E1] mt-0.5">
                        International & domestic client coordination
                      </div>
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        lang.proficiency === 'Native'
                          ? 'bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/40'
                          : 'bg-[#38BDF8]/20 text-[#38BDF8] border border-[#38BDF8]/40'
                      }`}
                    >
                      {lang.proficiency}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Strengths & Communication Note */}
            <div className="pt-6 border-t border-[#1E4D7A]/60">
              <div className="flex items-center gap-2 mb-2">
                <LuMessageSquare className="w-4 h-4 text-[#F07832]" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#38BDF8]">
                  Trade Communication Strengths
                </h4>
              </div>
              <p className="text-xs text-[#CBD5E1] leading-relaxed">
                Proficient in direct verbal and written correspondence with overseas buyers, domestic transporters, port authorities, shipping liners, and custom brokers. Ensures smooth resolution of discrepancies and uninterrupted logistics movement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
