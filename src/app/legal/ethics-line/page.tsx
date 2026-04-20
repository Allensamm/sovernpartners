"use client";
import { useState } from "react";
import { Shield, ArrowRight } from "lucide-react";

export default function EthicsLinePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <section className="bg-[#0A1628] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-6">Ethics & Compliance</p>
          <h1 className="font-['Cormorant_Garamond'] text-6xl font-light text-white leading-[1.05] max-w-3xl mb-8">
            Report a concern<br /><em className="text-[#C9A84C]">confidentially.</em>
          </h1>
          <div className="w-14 h-px bg-[#C9A84C] mb-8" />
          <p className="font-['DM_Sans'] text-[#9BA8B8] text-lg max-w-xl leading-relaxed">
            Our Ethics Line allows employees, clients, candidates, and third parties to report concerns about unethical behavior, legal violations, or policy breaches — safely and anonymously.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F2ED] py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Shield size={24} className="text-[#C9A84C]" />
              <h2 className="font-['Cormorant_Garamond'] text-3xl font-light text-[#0A1628]">Your report is protected.</h2>
            </div>
            <div className="space-y-5">
              {[
                "Reports are reviewed by our independent compliance team",
                "Anonymous reporting is fully supported",
                "Retaliation against reporters is strictly prohibited",
                "All reports are investigated thoroughly and fairly",
                "You may provide contact details to receive a status update",
              ].map(p => (
                <div key={p} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0 mt-2" />
                  <p className="font-['DM_Sans'] text-sm text-[#6B6B6B] leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-[#E8E4DE] p-10 rounded-sm">
            {submitted ? (
              <div className="text-center py-8">
                <Shield size={32} className="text-[#C9A84C] mx-auto mb-4" />
                <h3 className="font-['Cormorant_Garamond'] text-3xl font-light text-[#0A1628] mb-3">Report Received</h3>
                <p className="font-['DM_Sans'] text-sm text-[#6B6B6B]">Your report has been submitted to our independent compliance team. If you provided contact details, you will receive an acknowledgement within 5 business days.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-5">
                <p className="font-['Jost'] uppercase tracking-widest text-[#C9A84C] text-xs mb-6">Submit a Report</p>
                <div>
                  <label className="block font-['Jost'] uppercase tracking-widest text-xs text-[#6B6B6B] mb-2">Nature of Concern *</label>
                  <select required className="w-full border border-[#E8E4DE] px-4 py-3 font-['DM_Sans'] text-sm focus:outline-none focus:border-[#C9A84C] rounded-sm bg-white">
                    <option value="">Select...</option>
                    {["Conflict of Interest","Fraud or Financial Misconduct","Harassment or Discrimination","Data Privacy Violation","Bribery or Corruption","Other Ethical Concern"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block font-['Jost'] uppercase tracking-widest text-xs text-[#6B6B6B] mb-2">Description *</label>
                  <textarea required rows={5} className="w-full border border-[#E8E4DE] px-4 py-3 font-['DM_Sans'] text-sm focus:outline-none focus:border-[#C9A84C] rounded-sm resize-none" placeholder="Please describe the concern in as much detail as possible..." />
                </div>
                <div>
                  <label className="block font-['Jost'] uppercase tracking-widest text-xs text-[#6B6B6B] mb-2">Contact Email (optional — for status updates)</label>
                  <input type="email" className="w-full border border-[#E8E4DE] px-4 py-3 font-['DM_Sans'] text-sm focus:outline-none focus:border-[#C9A84C] rounded-sm" />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 py-4 bg-[#0A1628] text-white font-['Jost'] uppercase tracking-widest text-xs font-semibold hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all rounded-sm">
                  Submit Report <ArrowRight size={13} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
