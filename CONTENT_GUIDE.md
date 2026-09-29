# Sovern Partners content guide

The redesign preserves all existing page URLs and uses original copy inspired by the warm, personal tone of the supplied reference, without reproducing its layout or wording.

## Edit the content

- `src/lib/site-content.ts`: the enquiry email address, detailed service copy, company principles, industry descriptions and FAQs.
- `src/lib/articles.ts`: six full editorial articles. Existing article URLs have been retained so old links continue to work.
- `src/app/people/page.tsx`: team names, roles and biographies. Venkat G and the existing photo were retained from the original project; the biography is draft copy. Victoria Hartwell and James Okoro are explicitly illustrative profiles.
- `src/app/page.tsx`: homepage headlines and section copy.
- `src/components/Nav.tsx` and `Footer.tsx`: navigation labels and links.
- `src/app/globals.css`: shared colours, typography, layouts, animation and responsive styles.
- `src/components/ContactForm.tsx`: contact, candidate and concern forms.

## Content to confirm before a public launch

Replace or approve draft team biographies. Supply the business's legal entity, registration and office information, and review the privacy notice against actual operations. The current notices explicitly identify the missing business details. Confirm the current enquiry address (`officialvenkatg@gmail.com`), retained from the old site's real form destination, or replace it centrally. No fabricated testimonials, placement statistics, certifications, client logos or addresses are presented as facts.

There are no verified live vacancies, news announcements or recorded podcast episodes in the project. Their pages explain the current availability and provide relevant next steps. Stock photography illustrates the world of work and is not used as a named employee or client endorsement.

## Form behaviour

All three forms use native validation and prepare an email draft. The visitor sends it from their own email application. No message is submitted to a backend, no account is created, and no file is uploaded. A copy-message fallback is provided when an email application does not open. Candidate CVs can be attached in the visitor's email application. This is stated beside the forms and in the privacy notice.

## Local development

```sh
npm ci
npm run dev
npm run lint
npm run build
```

The normal Next.js runtime and its existing server API routes are retained. The redesigned pages do not call the legacy news or speech APIs.

## Private Sites preview

`.openai/hosting.json` identifies the private review site. `scripts/build-sites.mjs` creates a separate Next.js static export with local images and excludes the unused server-only APIs only from that preview build. The normal project is not converted to a static-only application.

```sh
NEXT_PUBLIC_SITE_URL=https://your-preview-origin node scripts/build-sites.mjs
```

Set `NEXT_PUBLIC_SITE_URL` to the final origin when deploying somewhere other than the default `https://sovernpartners.com`. This keeps canonical URLs, article image URLs, social metadata, sitemap and robots information consistent.

## Assets

- `public/images/team-collaboration.jpg`: Unsplash image `photo-1522071820081-009f0129c71c`.
- `public/images/people-at-work.jpg`: Unsplash image `photo-1521737711867-e3b97375f902`.
- `public/images/workspace.jpg`: Unsplash image `photo-1497366754035-f200968a6e72`.
- `public/team/venkat.jpg`: existing project asset.
- `public/og.png`: original generated social card for this redesign.

Images are served locally so the redesigned pages do not rely on third-party image requests. The site supports keyboard focus, a skip link, labelled forms, mobile navigation, reduced motion and native expandable FAQs.
