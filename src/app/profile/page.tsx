"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, User, Lock } from "lucide-react";

export default function ProfilePage() {
  const [mode, setMode] = useState<"register" | "login">("register");

  return (
    <div>
      <section className="bg-[#0A1628] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-6">Leader Network</p>
          <h1 className="font-['Cormorant_Garamond'] text-6xl md:text-7xl font-light text-white leading-[1.05] max-w-3xl mb-8">
            Join our network of<br /><em className="text-[#C9A84C]">world-class leaders.</em>
          </h1>
          <div className="w-14 h-px bg-[#C9A84C] mb-8" />
          <p className="font-['DM_Sans'] text-[#9BA8B8] text-lg max-w-2xl leading-relaxed">
            Create a profile to connect with our consultants and be considered for opportunities that match your expertise — confidentially and on your terms.
          </p>
        </div>
      </section>

      <section className="bg-[#F5F2ED] py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          {/* Benefits */}
          <div>
            <p className="font-['Jost'] uppercase tracking-[0.18em] text-[#C9A84C] text-xs font-medium mb-6">Why Create a Profile?</p>
            <h2 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#0A1628] mb-8">Be found by the firms that deserve your talent.</h2>
            <div className="space-y-6">
              {[
                { icon: User, title: "Confidential Visibility", desc: "Your profile is only visible to Sovern Partners consultants — never shared without your explicit consent." },
                { icon: ArrowRight, title: "Matched Opportunities", desc: "Our consultants match your profile to relevant searches — across industries, functions, and geographies." },
                { icon: Lock, title: "Full Control", desc: "Update your preferences, pause your visibility, or withdraw your profile at any time." },
              ].map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.title} className="flex gap-5">
                    <div className="w-10 h-10 rounded-full bg-[#0A1628] flex items-center justify-center shrink-0">
                      <Icon size={16} className="text-[#C9A84C]" />
                    </div>
                    <div>
                      <h3 className="font-['Cormorant_Garamond'] text-xl font-semibold text-[#0A1628] mb-1">{b.title}</h3>
                      <p className="font-['DM_Sans'] text-sm text-[#6B6B6B] leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white border border-[#E8E4DE] p-10 rounded-sm">
            <div className="flex gap-0 mb-8 border border-[#E8E4DE] rounded-sm overflow-hidden">
              <button onClick={() => setMode("register")}
                className={`flex-1 py-3 font-['Jost'] uppercase tracking-widest text-xs font-medium transition-all ${mode === "register" ? "bg-[#0A1628] text-white" : "bg-white text-[#6B6B6B] hover:bg-[#F5F2ED]"}`}>
                Create Profile
              </button>
              <button onClick={() => setMode("login")}
                className={`flex-1 py-3 font-['Jost'] uppercase tracking-widest text-xs font-medium transition-all ${mode === "login" ? "bg-[#0A1628] text-white" : "bg-white text-[#6B6B6B] hover:bg-[#F5F2ED]"}`}>
                Sign In
              </button>
            </div>

            {mode === "register" ? (
              <form className="space-y-4">
                <p className="font-['Jost'] uppercase tracking-widest text-[#C9A84C] text-xs mb-4">New Leader Profile</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-['Jost'] uppercase tracking-widest text-xs text-[#6B6B6B] mb-2">First Name *</label>
                    <input required className="w-full border border-[#E8E4DE] px-4 py-3 font-['DM_Sans'] text-sm focus:outline-none focus:border-[#C9A84C] rounded-sm" />
                  </div>
                  <div>
                    <label className="block font-['Jost'] uppercase tracking-widest text-xs text-[#6B6B6B] mb-2">Last Name *</label>
                    <input required className="w-full border border-[#E8E4DE] px-4 py-3 font-['DM_Sans'] text-sm focus:outline-none focus:border-[#C9A84C] rounded-sm" />
                  </div>
                </div>
                <div>
                  <label className="block font-['Jost'] uppercase tracking-widest text-xs text-[#6B6B6B] mb-2">Email *</label>
                  <input type="email" required className="w-full border border-[#E8E4DE] px-4 py-3 font-['DM_Sans'] text-sm focus:outline-none focus:border-[#C9A84C] rounded-sm" />
                </div>
                <div>
                  <label className="block font-['Jost'] uppercase tracking-widest text-xs text-[#6B6B6B] mb-2">Current Title</label>
                  <input className="w-full border border-[#E8E4DE] px-4 py-3 font-['DM_Sans'] text-sm focus:outline-none focus:border-[#C9A84C] rounded-sm" />
                </div>
                <div>
                  <label className="block font-['Jost'] uppercase tracking-widest text-xs text-[#6B6B6B] mb-2">Current Organization</label>
                  <input className="w-full border border-[#E8E4DE] px-4 py-3 font-['DM_Sans'] text-sm focus:outline-none focus:border-[#C9A84C] rounded-sm" />
                </div>
                <div>
                  <label className="block font-['Jost'] uppercase tracking-widest text-xs text-[#6B6B6B] mb-2">Password *</label>
                  <input type="password" required className="w-full border border-[#E8E4DE] px-4 py-3 font-['DM_Sans'] text-sm focus:outline-none focus:border-[#C9A84C] rounded-sm" />
                </div>
                <p className="font-['DM_Sans'] text-xs text-[#6B6B6B]">By creating a profile, you agree to our <Link href="/privacy" className="text-[#C9A84C] hover:underline">Privacy Notice</Link> and confirm that your information will be held confidentially.</p>
                <button type="submit" className="w-full flex items-center justify-center gap-2 py-4 bg-[#0A1628] text-white font-['Jost'] uppercase tracking-widest text-xs font-semibold hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all rounded-sm">
                  Create My Profile <ArrowRight size={13} />
                </button>
              </form>
            ) : (
              <form className="space-y-4">
                <p className="font-['Jost'] uppercase tracking-widest text-[#C9A84C] text-xs mb-4">Returning Leaders</p>
                <div>
                  <label className="block font-['Jost'] uppercase tracking-widest text-xs text-[#6B6B6B] mb-2">Email</label>
                  <input type="email" required className="w-full border border-[#E8E4DE] px-4 py-3 font-['DM_Sans'] text-sm focus:outline-none focus:border-[#C9A84C] rounded-sm" />
                </div>
                <div>
                  <label className="block font-['Jost'] uppercase tracking-widest text-xs text-[#6B6B6B] mb-2">Password</label>
                  <input type="password" required className="w-full border border-[#E8E4DE] px-4 py-3 font-['DM_Sans'] text-sm focus:outline-none focus:border-[#C9A84C] rounded-sm" />
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 py-4 bg-[#0A1628] text-white font-['Jost'] uppercase tracking-widest text-xs font-semibold hover:bg-[#C9A84C] hover:text-[#0A1628] transition-all rounded-sm">
                  Sign In <ArrowRight size={13} />
                </button>
                <p className="text-center font-['DM_Sans'] text-xs text-[#6B6B6B]">
                  <a href="#" className="text-[#C9A84C] hover:underline">Forgot your password?</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
