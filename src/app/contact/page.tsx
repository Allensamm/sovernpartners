"use client";
import { useState } from "react";
import { MapPin, Mail, Phone, ArrowRight } from "lucide-react";

const regions = ["Americas", "EMEA", "Asia Pacific"];
const services = ["Executive Search", "Leadership Advisory", "On-Demand Talent", "Corporate Transformation", "Organization & Culture", "Other"];
const titles = ["CEO / President","Board Director","CHRO / CPO","CFO","CTO / CIO","COO","CMO","CLO","Other C-Suite","VP / Director","Private Equity Partner","Consultant / Advisor","Other"];

export default function ContactPage() {
  const [form, setForm] = useState({ first: "", last: "", email: "", company: "", title: "", region: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Sovern Partners Inquiry — ${form.service || "General"}`);
    const body = encodeURIComponent(
      `Name: ${form.first} ${form.last}\n` +
      `Email: ${form.email}\n` +
      `Company: ${form.company}\n` +
      `Title: ${form.title}\n` +
      `Region: ${form.region}\n` +
      `Service of Interest: ${form.service}\n\n` +
      `Message:\n${form.message}`
    );
    window.location.href = `mailto:officialvenkatg@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div>
      <section className="bg-[#0A1628] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-6">Get in Touch</p>
          <h1 className="font-['Cormorant_Garamond'] text-6xl md:text-7xl font-light text-white leading-[1.05] max-w-3xl mb-8">
            Let&apos;s start<br /><em className="text-[#C9A84C]">a conversation.</em>
          </h1>
          <div className="w-14 h-px bg-[#C9A84C] mb-8" />
          <p className="font-['DM_Sans'] text-[#9BA8B8] text-lg max-w-2xl leading-relaxed">
            Whether you&apos;re looking to hire an exceptional leader, develop your team, or transform your organization — we&apos;re ready to help.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F2ED] py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white border border-[#C9A84C] p-12 rounded-sm text-center">
                <div className="w-12 h-px bg-[#C9A84C] mx-auto mb-6" />
                <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#0A1628] mb-4">Thank you for reaching out.</h2>
                <p className="font-['DM_Sans'] text-[#6B6B6B] leading-relaxed mb-6">A member of our team will be in touch within one business day.</p>
                <button onClick={() => setSubmitted(false)} className="font-['Jost'] uppercase tracking-widest text-xs text-[#C9A84C] border-b border-[#C9A84C] pb-1">Send Another Message</button>
              </div>
            ) : (
              <div className="bg-white p-10 border border-[#E8E4DE] rounded-sm">
                <p className="font-['Jost'] uppercase tracking-[0.18em] text-[#C9A84C] text-xs font-medium mb-6">General Inquiry</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-['Jost'] uppercase tracking-widest text-xs text-[#6B6B6B] mb-2">First Name *</label>
                      <input required value={form.first} onChange={e => setForm({...form, first: e.target.value})}
                        className="w-full border border-[#E8E4DE] px-4 py-3 font-['DM_Sans'] text-sm focus:outline-none focus:border-[#C9A84C] rounded-sm transition-colors" />
                    </div>
                    <div>
                      <label className="block font-['Jost'] uppercase tracking-widest text-xs text-[#6B6B6B] mb-2">Last Name *</label>
                      <input required value={form.last} onChange={e => setForm({...form, last: e.target.value})}
                        className="w-full border border-[#E8E4DE] px-4 py-3 font-['DM_Sans'] text-sm focus:outline-none focus:border-[#C9A84C] rounded-sm transition-colors" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-['Jost'] uppercase tracking-widest text-xs text-[#6B6B6B] mb-2">Email *</label>
                      <input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                        className="w-full border border-[#E8E4DE] px-4 py-3 font-['DM_Sans'] text-sm focus:outline-none focus:border-[#C9A84C] rounded-sm transition-colors" />
                    </div>
                    <div>
                      <label className="block font-['Jost'] uppercase tracking-widest text-xs text-[#6B6B6B] mb-2">Company / Organization</label>
                      <input value={form.company} onChange={e => setForm({...form, company: e.target.value})}
                        className="w-full border border-[#E8E4DE] px-4 py-3 font-['DM_Sans'] text-sm focus:outline-none focus:border-[#C9A84C] rounded-sm transition-colors" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-['Jost'] uppercase tracking-widest text-xs text-[#6B6B6B] mb-2">Job Title</label>
                      <select value={form.title} onChange={e => setForm({...form, title: e.target.value})}
                        className="w-full border border-[#E8E4DE] px-4 py-3 font-['DM_Sans'] text-sm focus:outline-none focus:border-[#C9A84C] rounded-sm bg-white text-[#1C1C1E] transition-colors">
                        <option value="">Select...</option>
                        {titles.map(t => <option key={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block font-['Jost'] uppercase tracking-widest text-xs text-[#6B6B6B] mb-2">Region</label>
                      <select value={form.region} onChange={e => setForm({...form, region: e.target.value})}
                        className="w-full border border-[#E8E4DE] px-4 py-3 font-['DM_Sans'] text-sm focus:outline-none focus:border-[#C9A84C] rounded-sm bg-white text-[#1C1C1E] transition-colors">
                        <option value="">Select...</option>
                        {regions.map(r => <option key={r}>{r}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block font-['Jost'] uppercase tracking-widest text-xs text-[#6B6B6B] mb-2">Service of Interest</label>
                    <select value={form.service} onChange={e => setForm({...form, service: e.target.value})}
                      className="w-full border border-[#E8E4DE] px-4 py-3 font-['DM_Sans'] text-sm focus:outline-none focus:border-[#C9A84C] rounded-sm bg-white text-[#1C1C1E] transition-colors">
                      <option value="">Select...</option>
                      {services.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block font-['Jost'] uppercase tracking-widest text-xs text-[#6B6B6B] mb-2">Message</label>
                    <textarea rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                      placeholder="Tell us about your leadership challenge or inquiry..."
                      className="w-full border border-[#E8E4DE] px-4 py-3 font-['DM_Sans'] text-sm focus:outline-none focus:border-[#C9A84C] rounded-sm resize-none transition-colors" />
                  </div>
                  <button type="submit"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A1628] text-white font-['Jost'] uppercase tracking-widest text-xs font-semibold hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all rounded-sm">
                    Send Message <ArrowRight size={13} />
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="space-y-6">
            <div className="bg-[#0A1628] p-8 rounded-sm">
              <p className="font-['Jost'] uppercase tracking-widest text-[#C9A84C] text-xs mb-5">Global Headquarters</p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <MapPin size={15} className="text-[#C9A84C] shrink-0 mt-0.5" />
                  <p className="font-['DM_Sans'] text-sm text-[#9BA8B8] leading-relaxed">399 Park Avenue, 27th Floor<br />New York, NY 10022, USA</p>
                </div>
                <div className="flex gap-3">
                  <Phone size={15} className="text-[#C9A84C] shrink-0 mt-0.5" />
                  <p className="font-['DM_Sans'] text-sm text-[#9BA8B8]">+1 212 555 0100</p>
                </div>
                <div className="flex gap-3">
                  <Mail size={15} className="text-[#C9A84C] shrink-0 mt-0.5" />
                  <p className="font-['DM_Sans'] text-sm text-[#9BA8B8]">info@sovernpartners.com</p>
                </div>
              </div>
            </div>

            {[
              { title: "Media & Press", email: "press@sovernpartners.com", desc: "Interview requests, press releases, and media inquiries." },
              { title: "Leadership Network", email: "network@sovernpartners.com", desc: "Join our network of world-class leaders as an executive candidate." },
              { title: "Careers", email: "careers@sovernpartners.com", desc: "Explore opportunities to join the Sovern Partners team." },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-[#E8E4DE] p-6 rounded-sm">
                <h3 className="font-['Cormorant_Garamond'] text-lg font-semibold text-[#0A1628] mb-2">{item.title}</h3>
                <p className="font-['DM_Sans'] text-xs text-[#6B6B6B] mb-3">{item.desc}</p>
                <a href={`mailto:${item.email}`} className="font-['DM_Sans'] text-sm text-[#C9A84C] hover:underline">{item.email}</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
