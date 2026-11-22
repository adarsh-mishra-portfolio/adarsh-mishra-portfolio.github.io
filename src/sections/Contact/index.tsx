import React, { useState } from 'react';
import {
  LuPhone,
  LuMail,
  LuDownload,
  LuMessageSquare,
  LuCircleCheck,
  LuClock,
} from 'react-icons/lu';
import { FaWhatsapp } from 'react-icons/fa6';
import { SectionHeader } from '../../components/common/SectionHeader';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    inquiryType: 'Import Documentation & Customs Clearance',
    message: '',
  });

  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const handleSubmitEmail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `[Trade Inquiry] ${formData.inquiryType} - ${formData.name || 'Executive Inquiry'}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nContact: ${formData.contact}\nInquiry Type: ${formData.inquiryType}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmittedMessage('Opening your email client to send this message to Adarsh Mishra...');
  };

  const handleSendWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Adarsh,\n\nMy name is *${formData.name || 'a visitor'}*.\n*Inquiry Type:* ${formData.inquiryType}\n*Contact Details:* ${formData.contact || 'Not provided'}\n\n*Message:* ${formData.message || 'I would like to discuss an export/import inquiry with you.'}`
    );
    window.open(`https://wa.me/919695142996?text=${text}`, '_blank');
    setSubmittedMessage('Connecting to WhatsApp chat with Adarsh Mishra (+91 96951 42996)...');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#0B2545] border-t border-[#1E4D7A]/50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get in Touch"
          badgeIcon={<LuMessageSquare className="w-4 h-4" />}
          title="Contact"
          highlight="Adarsh Mishra"
          subtitle="Available for full-time opportunities, cargo freight consulting, customs documentation, and trade coordination."
        />

        {/* 2-Column Grid with items-stretch for identical height on both cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto mt-12 items-stretch">
          {/* Left Column: Direct Contacts Card (matching full height) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full bg-[#071C33]/90 rounded-2xl p-6 sm:p-8 border border-[#1E4D7A] shadow-xl backdrop-blur-sm">
            <div>
              {/* Header */}
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#F07832]">
                  Executive Contact Information
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {PERSONAL_INFO.name}
                </h3>
                <p className="text-xs font-semibold text-[#38BDF8] uppercase tracking-wider mt-0.5">
                  {PERSONAL_INFO.title}
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-3.5">
                {/* Phone Click-to-call */}
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#0E335C]/60 border border-[#1E4D7A] hover:border-[#38BDF8] hover:bg-[#0E335C] transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#071C33] border border-[#1E4D7A] flex items-center justify-center text-[#38BDF8] group-hover:text-[#F07832] transition-colors shrink-0 shadow-sm">
                    <LuPhone className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-[#CBD5E1]">Phone / Direct Call</div>
                    <div className="text-sm sm:text-base font-bold text-white truncate font-mono">
                      {PERSONAL_INFO.displayPhone}
                    </div>
                  </div>
                </a>

                {/* Email Click-to-email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#0E335C]/60 border border-[#1E4D7A] hover:border-[#38BDF8] hover:bg-[#0E335C] transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#071C33] border border-[#1E4D7A] flex items-center justify-center text-[#F07832] group-hover:scale-105 transition-transform shrink-0 shadow-sm">
                    <LuMail className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-[#CBD5E1]">Email / Direct Inquiries</div>
                    <div className="text-xs sm:text-sm font-bold text-white truncate">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </a>

                {/* WhatsApp Direct Chat */}
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 hover:border-[#25D366] hover:bg-[#25D366]/25 transition-all group"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#071C33] border border-[#25D366]/40 flex items-center justify-center text-[#25D366] group-hover:scale-105 transition-transform shrink-0 shadow-sm">
                    <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-[#25D366] font-semibold">Direct WhatsApp Chat</div>
                    <div className="text-xs sm:text-sm font-bold text-white truncate">
                      +91 96951 42996
                    </div>
                  </div>
                </a>
              </div>

              {/* Quick Availability Snippet */}
              <div className="mt-4 p-3.5 rounded-xl bg-[#0E335C]/40 border border-[#1E4D7A] flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30 flex items-center justify-center shrink-0">
                  <LuClock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Prompt Executive Response</div>
                  <div className="text-[11px] text-[#CBD5E1]">Typically answered within standard business hours (IST).</div>
                </div>
              </div>
            </div>

            {/* Download CV Action at bottom */}
            <div className="mt-6 pt-5 border-t border-[#1E4D7A]">
              <div className="text-xs text-[#CBD5E1] mb-2.5">
                Need a comprehensive copy of my credentials?
              </div>
              <a
                href={PERSONAL_INFO.cvPath}
                download={PERSONAL_INFO.cvFileName}
                className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-xl bg-[#F07832] hover:bg-[#D96320] text-white font-semibold text-sm shadow-lg shadow-[#F07832]/30 hover:shadow-xl transition-all cursor-pointer"
              >
                <LuDownload className="w-4 h-4" />
                <span>Download Verified CV (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct Trade Inquiry Form Card (matching full height) */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full bg-[#071C33]/90 rounded-2xl p-6 sm:p-8 border border-[#1E4D7A] shadow-xl backdrop-blur-sm">
            <div>
              <div className="mb-6">
                <span className="text-xs font-semibold text-[#F07832] uppercase tracking-wider">
                  Direct Inquiries & Collaboration
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  Send a Trade Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-[#CBD5E1] mt-1">
                  Fill in your details below to dispatch your message directly via Email or instant WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmitEmail} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#38BDF8] uppercase tracking-wider mb-1.5">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe / Company Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#1E4D7A] focus:outline-none focus:border-[#F07832] focus:ring-1 focus:ring-[#F07832] bg-[#0E335C]/60 text-white placeholder-[#94A3B8]"
                    />
                  </div>

                  {/* Phone or Email */}
                  <div>
                    <label className="block text-xs font-bold text-[#38BDF8] uppercase tracking-wider mb-1.5">
                      Phone Number or Email
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. +91 9876543210 or name@company.com"
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#1E4D7A] focus:outline-none focus:border-[#F07832] focus:ring-1 focus:ring-[#F07832] bg-[#0E335C]/60 text-white placeholder-[#94A3B8]"
                    />
                  </div>
                </div>

                {/* Inquiry Type */}
                <div>
                  <label className="block text-xs font-bold text-[#38BDF8] uppercase tracking-wider mb-1.5">
                    Subject / Area of Interest
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#1E4D7A] focus:outline-none focus:border-[#F07832] focus:ring-1 focus:ring-[#F07832] bg-[#0E335C] text-white"
                  >
                    <option value="Import Documentation & Customs Clearance" className="bg-[#071C33] text-white">
                      Import Documentation & Customs Clearance (BOE, BL, Duty)
                    </option>
                    <option value="Export Documentation & Compliance" className="bg-[#071C33] text-white">
                      Export Documentation & Shipping Bill Compliance
                    </option>
                    <option value="Freight Negotiation & Liner Coordination" className="bg-[#071C33] text-white">
                      Freight Negotiation & Carrier/Liner Rates
                    </option>
                    <option value="IDPMS / BOE Banking Closure" className="bg-[#071C33] text-white">
                      IDPMS / BOE Bank Reconciliation & Closure
                    </option>
                    <option value="Full-time Executive Position" className="bg-[#071C33] text-white">
                      Full-time Executive Career Opportunity
                    </option>
                    <option value="General Trade Consultation" className="bg-[#071C33] text-white">
                      General International Trade Consultation
                    </option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-[#38BDF8] uppercase tracking-wider mb-1.5">
                    Message / Cargo Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Provide details regarding your shipment, port of loading/discharge, consignments, or executive opening..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#1E4D7A] focus:outline-none focus:border-[#F07832] focus:ring-1 focus:ring-[#F07832] bg-[#0E335C]/60 text-white placeholder-[#94A3B8]"
                  />
                </div>

                {/* Status Message */}
                {submittedMessage && (
                  <div className="p-3 rounded-lg bg-[#10B981]/20 border border-[#10B981]/40 text-xs text-[#10B981] flex items-center gap-2">
                    <LuCircleCheck className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span>{submittedMessage}</span>
                  </div>
                )}

                {/* Submission Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0E335C] hover:bg-[#1E4D7A] text-white font-semibold text-sm border border-[#1E4D7A] shadow-md transition-all cursor-pointer"
                  >
                    <LuMail className="w-4 h-4 text-[#38BDF8]" />
                    <span>Send via Email</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold text-sm shadow-md transition-all cursor-pointer"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
