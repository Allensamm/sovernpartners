export const contactEmail = "officialvenkatg@gmail.com";
export type Feature = { title: string; text: string };
export type FAQ = { question: string; answer: string };
export type EditorialContent = {
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  color?: string;
  image?: string;
  introTitle: string;
  paragraphs: string[];
  featuresTitle: string;
  features: Feature[];
  steps?: Feature[];
  faqs?: FAQ[];
  related?: { label: string; href: string }[];
};
export const serviceContent: Record<string, EditorialContent> = {
  "executive-search": {
    eyebrow: "Executive search",
    title: "The right person.",
    accent: "A world of difference.",
    intro:
      "An important hire deserves a thoughtful search. We connect you with leaders who understand your ambition and have the ability to move it forward.",
    color: "peach",
    image: "/images/team-collaboration.jpg",
    introTitle: "Start with the challenge. Find the person.",
    paragraphs: [
      "The strongest search begins well before a shortlist. We explore your business, the team around the role, and what success should look like. Together, we turn that understanding into a clear, useful brief.",
      "From board appointments and C-suite searches to functional leadership, we look at experience, judgement, motivation, and the environment in which a person does their best work.",
    ],
    featuresTitle: "A search built around your needs.",
    features: [
      {
        title: "Board & C-suite",
        text: "Chief executives, board directors and senior leadership appointments, with a clear view of governance, strategic priorities and stakeholder expectations.",
      },
      {
        title: "Functional leadership",
        text: "Finance, people, operations, technology and commercial leaders who can translate business goals into meaningful action.",
      },
      {
        title: "Succession & talent mapping",
        text: "An informed view of the talent landscape to help you plan ahead, explore alternatives and make decisions with greater clarity.",
      },
    ],
    steps: [
      {
        title: "Understand",
        text: "Agree the business context, role outcomes, selection criteria, scope and communication rhythm.",
      },
      {
        title: "Explore",
        text: "Research the market, approach relevant people and test the brief against what we learn.",
      },
      {
        title: "Evaluate",
        text: "Use structured conversations and consistent criteria to explore experience, motivation and fit.",
      },
      {
        title: "Connect",
        text: "Support interviews, references and offer conversations, then agree how to stay connected through the transition.",
      },
    ],
    faqs: [
      {
        question: "How long does an executive search take?",
        answer:
          "The timeline depends on the role, location, market and decision process. We agree an indicative plan before starting and discuss changes as the search develops, rather than promising a universal deadline.",
      },
      {
        question: "How are fees agreed?",
        answer:
          "Scope, fees, milestones and any expenses are discussed before an engagement begins and recorded in a written agreement. Contact us with your brief for a tailored conversation.",
      },
      {
        question: "Can we discuss a confidential replacement?",
        answer:
          "Yes. Start with a high-level description and we can agree an appropriate way to discuss sensitive information before any market outreach.",
      },
    ],
  },
  leadership: {
    eyebrow: "Leadership advisory",
    title: "Good leaders grow.",
    accent: "So do great teams.",
    intro:
      "Help the people leading your business become more self-aware, more connected and more effective in the moments that matter.",
    color: "lavender",
    image: "/images/people-at-work.jpg",
    introTitle: "Development with a real-world purpose.",
    paragraphs: [
      "Leadership development works best when it is connected to the work. We start with the decisions, relationships and challenges your leaders are navigating, then shape an approach around them.",
      "Whether a leader is stepping into a new role or a team needs to work better together, the aim is practical progress: clearer priorities, better conversations and behaviours that support the business.",
    ],
    featuresTitle: "Bring your leadership potential to life.",
    features: [
      {
        title: "Leadership assessment",
        text: "Explore strengths, development priorities and role readiness through structured dialogue and agreed assessment methods.",
      },
      {
        title: "Executive development",
        text: "Create a focused development agenda, with reflection and practical actions connected to the leader’s responsibilities.",
      },
      {
        title: "Team effectiveness",
        text: "Work on the conversations, shared goals, accountabilities and decision-making habits that help leadership teams deliver together.",
      },
    ],
    steps: [
      {
        title: "Listen",
        text: "Understand the leader or team, the business context and what needs to change.",
      },
      {
        title: "Reflect",
        text: "Build a shared picture of strengths, blind spots and priorities using relevant feedback.",
      },
      {
        title: "Practise",
        text: "Turn insights into manageable actions that can be used in real work.",
      },
      {
        title: "Review",
        text: "Revisit progress against the agreed objectives and adjust the development plan.",
      },
    ],
    faqs: [
      {
        question: "Is this for individual leaders or whole teams?",
        answer:
          "Both. The scope can focus on a specific leadership transition, an individual development need or the effectiveness of a whole leadership team.",
      },
      {
        question: "How do you measure progress?",
        answer:
          "We agree the outcomes at the beginning. They may include observable behaviours, stakeholder feedback, clearer decisions or progress against a specific business challenge.",
      },
    ],
  },
  "on-demand-talent": {
    eyebrow: "On-demand talent",
    title: "Big moment.",
    accent: "The right experience.",
    intro:
      "When a business challenge can’t wait, experienced interim and project leaders can help you keep moving with purpose.",
    color: "lime",
    image: "/images/workspace.jpg",
    introTitle: "Flexible leadership. A clear mandate.",
    paragraphs: [
      "Sometimes the need is immediate. A key leader is leaving, a project requires specialist experience, or the business is entering unfamiliar territory. A permanent appointment may not be the right first step.",
      "We help define the assignment, the decisions the leader will own, and the outcomes the engagement should deliver. The focus is useful expertise with a clear start, purpose and handover.",
    ],
    featuresTitle: "Experience for the work ahead.",
    features: [
      {
        title: "Interim leadership",
        text: "Maintain continuity during a transition with experienced executive and functional leadership.",
      },
      {
        title: "Project specialists",
        text: "Bring focused expertise to a defined programme, integration, operational challenge or business initiative.",
      },
      {
        title: "Fractional support",
        text: "Explore part-time senior capability where the business needs leadership input without a full-time role.",
      },
    ],
    steps: [
      {
        title: "Define the need",
        text: "Clarify the challenge, urgency, scope, decision authority and working arrangement.",
      },
      {
        title: "Find the experience",
        text: "Identify available people whose background is relevant to the assignment.",
      },
      {
        title: "Set up for success",
        text: "Agree objectives, reporting, key stakeholders and practical onboarding needs.",
      },
      {
        title: "Plan the handover",
        text: "Build knowledge transfer and a sustainable transition into the engagement.",
      },
    ],
    faqs: [
      {
        question: "How quickly can someone start?",
        answer:
          "Availability varies by skill set, location and scope. We discuss urgency openly and confirm realistic options during the initial conversation.",
      },
      {
        question: "How long are interim assignments?",
        answer:
          "There is no single standard duration. The engagement is shaped around the business objective, with a defined review point and an agreed handover plan.",
      },
    ],
  },
  "corporate-transformation": {
    eyebrow: "Corporate transformation",
    title: "Change is a constant.",
    accent: "Progress is a choice.",
    intro:
      "Connect your business ambition with the people, leadership and ways of working needed to make change happen.",
    color: "peach",
    image: "/images/workspace.jpg",
    introTitle: "Make the human side of change count.",
    paragraphs: [
      "A new strategy changes little until people can act on it. We help leaders examine the talent, team structures and behaviours needed to turn a business direction into day-to-day progress.",
      "The work starts with a clear picture of what needs to change and why. From there, we focus on priorities, leadership alignment, practical accountabilities and the capability to sustain the change.",
    ],
    featuresTitle: "Build the conditions for progress.",
    features: [
      {
        title: "Leadership alignment",
        text: "Help the team agree the purpose of change, the decisions required and how they will work together.",
      },
      {
        title: "Talent & capability",
        text: "Identify the leadership skills the next chapter requires and explore how to develop or bring them into the business.",
      },
      {
        title: "Change in practice",
        text: "Connect new priorities to roles, communication, ownership and review routines people can use.",
      },
    ],
    steps: [
      {
        title: "Understand the starting point",
        text: "Listen to stakeholders and build a realistic picture of the organisation.",
      },
      {
        title: "Choose the priorities",
        text: "Agree the people and leadership issues with the greatest relevance to the change.",
      },
      {
        title: "Put the plan to work",
        text: "Translate priorities into actions, owners and a practical sequence.",
      },
      {
        title: "Learn and adjust",
        text: "Review what is working, address barriers and refine the approach.",
      },
    ],
    faqs: [
      {
        question: "Do you replace our transformation team?",
        answer:
          "The work is designed around the support you need. We can help leaders with the people and organisation dimensions while your internal team retains ownership of the wider programme.",
      },
    ],
  },
  "organization-culture": {
    eyebrow: "Organisation & culture",
    title: "A place to belong.",
    accent: "Room to do your best.",
    intro:
      "Build the structures, shared expectations and everyday behaviours that help your people and your business thrive together.",
    color: "lavender",
    image: "/images/people-at-work.jpg",
    introTitle: "Culture lives in what people experience.",
    paragraphs: [
      "An organisation’s culture shows up in meetings, decisions, recognition and the way difficult conversations happen. We help you explore the gap between the culture you describe and the one people experience.",
      "We connect that understanding to how work is organised: who makes decisions, where responsibility sits and how teams collaborate. The aim is a clearer, more purposeful environment for good work.",
    ],
    featuresTitle: "Make your values part of the everyday.",
    features: [
      {
        title: "Culture discovery",
        text: "Listen to experiences across the business to understand the patterns helping or holding back progress.",
      },
      {
        title: "Organisation design",
        text: "Explore roles, accountabilities and team interfaces in the context of your strategy.",
      },
      {
        title: "Belonging & behaviour",
        text: "Turn broad values into practical expectations for leadership, communication and participation.",
      },
    ],
    steps: [
      {
        title: "Listen widely",
        text: "Gather perspectives from people with different roles and experiences.",
      },
      {
        title: "Find the patterns",
        text: "Identify the behaviours and organisational choices that shape the culture.",
      },
      {
        title: "Make it practical",
        text: "Choose changes that can be owned, communicated and put into practice.",
      },
      {
        title: "Keep learning",
        text: "Create space for feedback and review whether the changes are being experienced.",
      },
    ],
    faqs: [
      {
        question:
          "Can culture change without changing the organisation structure?",
        answer:
          "Sometimes. The right starting point depends on the issue. We consider both behaviour and structure so the approach addresses the causes of friction.",
      },
    ],
  },
};
export const aboutContent: Record<string, EditorialContent> = {
  heritage: {
    eyebrow: "Our story",
    title: "Built on a simple idea.",
    accent: "People change things.",
    intro:
      "Sovern Partners brings a personal, thoughtful approach to the decisions that shape organisations and careers.",
    color: "peach",
    image: "/images/people-at-work.jpg",
    introTitle: "A partnership begins with paying attention.",
    paragraphs: [
      "The idea behind Sovern is straightforward: important people decisions deserve time, curiosity and care. An effective search is a conversation about where a business is going and who can help it get there.",
      "That belief shapes our approach across executive search, leadership advisory and organisational work. We want to understand the person as well as the position, and the ambition as well as the immediate need.",
    ],
    featuresTitle: "The story we want to keep writing.",
    features: [
      {
        title: "Listen before advising",
        text: "Every organisation has its own context. We make understanding it the starting point.",
      },
      {
        title: "Connect with intention",
        text: "Introductions should have a clear purpose and respect the ambitions of both sides.",
      },
      {
        title: "Keep the relationship human",
        text: "Clarity, consideration and honest conversations matter from the first meeting onward.",
      },
    ],
    related: [
      { label: "Meet our people", href: "/people" },
      { label: "Explore our values", href: "/about/purpose-vision-values" },
    ],
  },
  "purpose-vision-values": {
    eyebrow: "Purpose, vision & values",
    title: "Clear in our purpose.",
    accent: "Human in our approach.",
    intro:
      "Help good people and ambitious organisations find more possibility in each other.",
    color: "lime",
    introTitle: "Our ambition is better people decisions.",
    paragraphs: [
      "We believe thoughtful leadership can create the conditions for people to do their best work. Our purpose is to help organisations find and develop that leadership.",
      "Our vision is a more considered world of work, where potential is recognised, decisions are explained and relationships are treated with care.",
    ],
    featuresTitle: "Values you should be able to recognise.",
    features: [
      {
        title: "Curiosity",
        text: "Ask good questions. Listen without jumping to conclusions. Stay open to a different point of view.",
      },
      {
        title: "Candour",
        text: "Be clear about what we know, what we are still exploring and where a challenge needs a different approach.",
      },
      {
        title: "Care",
        text: "Respect people’s time, ambitions, information and experience of the process.",
      },
      {
        title: "Thoughtfulness",
        text: "Make considered decisions. Look beyond the familiar. Connect advice to the real situation.",
      },
    ],
    related: [
      { label: "How we work", href: "/services" },
      { label: "Inclusion & belonging", href: "/about/inclusion-belonging" },
    ],
  },
  "inclusion-belonging": {
    eyebrow: "Inclusion & belonging",
    title: "Different perspectives.",
    accent: "Greater possibility.",
    intro:
      "A broader view of talent starts with being curious about who we might be overlooking.",
    color: "lavender",
    image: "/images/team-collaboration.jpg",
    introTitle: "Belonging starts long before the first day.",
    paragraphs: [
      "The language of a role, the places you look and the questions you ask all shape who gets considered. We encourage a thoughtful approach at every stage, with requirements that reflect the work rather than assumptions about a typical candidate.",
      "We aim to create space for different experiences, communication styles and career paths. If you need an adjustment to take part in a conversation or selection process, tell us what would help.",
    ],
    featuresTitle: "Intentions become useful through action.",
    features: [
      {
        title: "Challenge the brief",
        text: "Separate essential capabilities from preferences that may unnecessarily narrow the search.",
      },
      {
        title: "Widen the conversation",
        text: "Explore relevant experience across different backgrounds, organisations and career paths.",
      },
      {
        title: "Evaluate consistently",
        text: "Use clear criteria and structured questions so decisions can be explained.",
      },
      {
        title: "Make room to participate",
        text: "Discuss practical adjustments and communication needs early in the process.",
      },
    ],
    faqs: [
      {
        question: "How can I request an adjustment?",
        answer:
          "Contact us and describe what would make the process work better for you. You do not need to share a medical diagnosis to begin that conversation.",
      },
    ],
  },
  sustainability: {
    eyebrow: "Our responsibilities",
    title: "A longer view.",
    accent: "A more thoughtful impact.",
    intro:
      "The choices organisations make today shape the opportunities people have tomorrow.",
    color: "lime",
    image: "/images/workspace.jpg",
    introTitle: "Progress includes how we get there.",
    paragraphs: [
      "We see responsible business as a set of everyday choices. That includes how we use resources, how we work with people and how we encourage leaders to consider the longer-term consequences of their decisions.",
      "Our approach is to be practical and honest: use remote conversations where they make sense, avoid unnecessary materials, and discuss environmental and social responsibilities when they are relevant to a leadership brief.",
    ],
    featuresTitle: "A practical direction of travel.",
    features: [
      {
        title: "Thoughtful ways of working",
        text: "Consider remote collaboration and purposeful travel, based on what each engagement needs.",
      },
      {
        title: "Responsible leadership",
        text: "Explore how leaders balance business goals with responsibilities to people and the wider world.",
      },
      {
        title: "Honest communication",
        text: "Describe actions clearly. Publish environmental figures or certifications only when they can be substantiated.",
      },
    ],
  },
};
export const industries = [
  {
    id: "financial",
    name: "Financial services",
    category: "Business & capital",
    text: "Leadership for organisations balancing commercial ambition, trust, risk and a changing customer landscape.",
    roles: "Finance, risk, operations, technology and people leadership.",
  },
  {
    id: "tech",
    name: "Technology & digital",
    category: "Innovation & growth",
    text: "People who can translate technical possibilities into useful products, sustainable teams and a business ready for its next stage.",
    roles: "Technology, product, commercial and executive leadership.",
  },
  {
    id: "healthcare",
    name: "Healthcare & life sciences",
    category: "People & impact",
    text: "Leaders who connect scientific and operational expertise with a clear commitment to patients, people and responsible growth.",
    roles: "Executive, operations, commercial and functional leadership.",
  },
  {
    id: "pe",
    name: "Private equity",
    category: "Business & capital",
    text: "Leadership conversations shaped around the investment thesis, the business context and the pace of change.",
    roles: "Portfolio CEOs, CFOs, operating leaders and interim executives.",
  },
  {
    id: "consumer",
    name: "Consumer markets",
    category: "Innovation & growth",
    text: "Leaders with an instinct for customers and the ability to connect brands, channels, operations and commercial performance.",
    roles: "General management, marketing, commercial and supply chain.",
  },
  {
    id: "industrial",
    name: "Industrial & infrastructure",
    category: "Business & capital",
    text: "People who can guide complex operations, modernise ways of working and build capable teams around long-term priorities.",
    roles: "Operations, engineering, finance and transformation leadership.",
  },
  {
    id: "professional",
    name: "Professional services",
    category: "People & impact",
    text: "Leadership for people-led businesses where expertise, relationships and culture sit at the heart of performance.",
    roles: "Managing partners, practice leaders and business services.",
  },
  {
    id: "social",
    name: "Social impact",
    category: "People & impact",
    text: "Purposeful appointments that connect a clear mission with the judgement, governance and capability to deliver it.",
    roles: "Chief executives, trustees and functional leaders.",
  },
];
