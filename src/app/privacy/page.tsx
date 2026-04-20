import Link from "next/link";

export default function PrivacyPage() {
  return (
    <div>
      <section className="bg-[#0A1628] pt-40 pb-20 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-4">Legal</p>
          <h1 className="font-['Cormorant_Garamond'] text-5xl font-light text-white">Privacy Notice</h1>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="font-['DM_Sans'] text-xs text-[#6B6B6B] mb-8">Last updated: January 1, 2025</p>
          <div className="prose prose-sm max-w-none font-['DM_Sans'] text-[#1C1C1E] leading-relaxed space-y-8">
            {[
              { title: "1. Introduction", body: "Sovern Partners ('we', 'us', 'our') is committed to protecting your personal information. This Privacy Notice explains how we collect, use, disclose, and safeguard your personal data when you interact with us, visit our website, or engage with our services." },
              { title: "2. Data We Collect", body: "We collect information you provide directly (name, email, CV, employment history), information collected automatically (browser type, IP address, usage data), and information from third-party sources (professional networks, referrals, public records) for the purposes of executive search and leadership advisory services." },
              { title: "3. How We Use Your Data", body: "We use your personal data to provide executive search and talent services, to communicate with you about relevant opportunities, to improve our services, and to comply with legal obligations. We do not sell your data to third parties." },
              { title: "4. Data Retention", body: "We retain candidate data for up to 5 years from the date of your last active engagement with us, unless you request deletion or applicable law requires a different period." },
              { title: "5. Your Rights", body: "Depending on your location, you may have rights to access, correct, delete, or restrict processing of your personal data. To exercise these rights, please contact privacy@sovernpartners.com." },
              { title: "6. Contact", body: "For privacy-related inquiries, contact our Data Protection Officer at privacy@sovernpartners.com or write to Sovern Partners, 399 Park Avenue, New York, NY 10022." },
            ].map((section) => (
              <div key={section.title}>
                <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0A1628] mb-3">{section.title}</h2>
                <p className="text-[#6B6B6B]">{section.body}</p>
              </div>
            ))}
            <div>
              <Link href="/privacy/information-security" className="text-[#C9A84C] hover:underline font-medium">→ Information Security Policy</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
