export default function InfoSecurityPage() {
  return (
    <div>
      <section className="bg-[#0A1628] pt-40 pb-20 relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent opacity-60" />
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-['Jost'] uppercase tracking-[0.2em] text-[#C9A84C] text-xs font-medium mb-4">Legal</p>
          <h1 className="font-['Cormorant_Garamond'] text-5xl font-light text-white">Information Security</h1>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6 font-['DM_Sans'] text-[#6B6B6B] leading-relaxed space-y-8">
          <p className="font-['Cormorant_Garamond'] text-2xl text-[#0A1628]">Protecting your data is fundamental to the trust our clients place in us.</p>
          {[
            { title: "Security Standards", body: "Sovern Partners maintains information security practices aligned with ISO 27001 standards. We conduct regular third-party security audits and penetration testing of our systems." },
            { title: "Data Encryption", body: "All candidate and client data is encrypted at rest (AES-256) and in transit (TLS 1.3). Access to sensitive data is restricted on a need-to-know basis with multi-factor authentication required for all staff." },
            { title: "Incident Response", body: "In the event of a data breach that affects your personal data, we will notify you and relevant authorities within 72 hours as required by applicable data protection law." },
            { title: "Vendor Management", body: "All third-party vendors who access personal data are subject to rigorous security assessments and contractual data protection obligations." },
          ].map(s => (
            <div key={s.title}>
              <h2 className="font-['Cormorant_Garamond'] text-2xl font-semibold text-[#0A1628] mb-2">{s.title}</h2>
              <p>{s.body}</p>
            </div>
          ))}
          <p>To report a security concern, contact: <a href="mailto:security@sovernpartners.com" className="text-[#C9A84C] hover:underline">security@sovernpartners.com</a></p>
        </div>
      </section>
    </div>
  );
}
