export interface ArticleSection {
  type: "paragraph" | "heading" | "list";
  text?: string;
  items?: string[];
}
export interface Article {
  slug: string;
  type: string;
  tag: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: string;
  authorTitle: string;
  image: string;
  color: string;
  cover: string;
  sections: ArticleSection[];
}
const defaults = {
  date: "29 September 2026",
  author: "Sovern Perspectives",
  authorTitle: "Ideas for a more thoughtful world of work",
};
export const articles: Article[] = [
  {
    ...defaults,
    slug: "ceo-agenda-2025",
    type: "Perspective",
    tag: "Leadership",
    title: "Good leadership starts with better questions.",
    excerpt:
      "Finding clarity when the path ahead isn’t obvious. A practical way to turn uncertainty into a more useful leadership conversation.",
    readTime: "3 min read",
    image: "/images/workspace.jpg",
    color: "peach",
    cover: "The next good question.",
    sections: [
      {
        type: "paragraph",
        text: "When the pressure is on, leaders can feel expected to have an answer before they have fully understood the question. A quick decision may create momentum, but it can also carry an untested assumption into every action that follows. Taking time to ask a better question is part of the work of leading.",
      },
      { type: "heading", text: "Start with the decision, not the noise" },
      {
        type: "paragraph",
        text: "A useful first question is: what decision actually needs to be made? A conversation about an underperforming business unit might really be about priorities, capability, accountability or the way success is measured. Naming the decision helps the team separate the immediate symptoms from the underlying issue.",
      },
      {
        type: "paragraph",
        text: "Ask each person to describe the problem in a sentence. Where the descriptions differ, explore the difference before moving to solutions. Agreement on a solution has limited value if the team has not agreed on the problem it is meant to address.",
      },
      { type: "heading", text: "Make your assumptions visible" },
      {
        type: "paragraph",
        text: "An assumption does not become a fact because it has been repeated. Put the main assumptions behind a proposal on the table and ask which are supported by direct observation, which are interpretations and which are still unknown. This creates space for a more honest discussion without requiring perfect information.",
      },
      {
        type: "list",
        items: [
          "What do we know from direct evidence?",
          "What are we assuming about customers, colleagues or the market?",
          "Whose perspective would challenge our current view?",
          "What would make us change our mind?",
        ],
      },
      { type: "heading", text: "Choose a useful next step" },
      {
        type: "paragraph",
        text: "A good conversation should end with more than interesting questions. Decide what can be done now, who will do it and what you need to learn. Where possible, distinguish between a reversible next step and a commitment that will be difficult to change.",
      },
      {
        type: "paragraph",
        text: "The aim is not to remove uncertainty. It is to help the team make a considered decision, understand its reasoning and recognise when new information requires a different response. That is a more useful form of confidence than pretending to know everything.",
      },
    ],
  },
  {
    ...defaults,
    slug: "board-diversity",
    type: "Practical guide",
    tag: "Executive search",
    title: "Look beyond the familiar. Find the exceptional.",
    excerpt:
      "How a clearer brief, a broader search and consistent questions can make a leadership shortlist more thoughtful.",
    readTime: "3 min read",
    image: "/images/team-collaboration.jpg",
    color: "lime",
    cover: "Different views. More possibility.",
    sections: [
      {
        type: "paragraph",
        text: "It is easy for an executive search to begin with a picture of the person who held the role before. The same title, a familiar employer, a conventional career path. That picture may feel reassuring, but it can narrow the search before the organisation has considered what its next chapter requires.",
      },
      { type: "heading", text: "Describe the work that needs to happen" },
      {
        type: "paragraph",
        text: "Begin with outcomes. What will this person need to understand, decide, build or change? What does the organisation need from the role in its first year? These questions make the brief more useful than a long list of experiences that may be only loosely related to success.",
      },
      {
        type: "paragraph",
        text: "Separate essential capabilities from preferences. Some qualifications or experiences may be necessary; others are simply familiar. Be prepared to explain why each requirement belongs in the brief.",
      },
      {
        type: "heading",
        text: "Look for relevant evidence in unfamiliar places",
      },
      {
        type: "paragraph",
        text: "A person from a different sector may have worked through a similar operating challenge. Someone with a less conventional career path may bring valuable experience of building teams or navigating uncertainty. The task is to investigate the relevance, rather than assuming that familiarity is the same as suitability.",
      },
      {
        type: "list",
        items: [
          "Ask what the person was responsible for, not only where they worked.",
          "Explore the context behind achievements and the contribution they personally made.",
          "Discuss what they learned when an approach did not work.",
          "Give candidates a clear picture of the role so they can assess the fit too.",
        ],
      },
      {
        type: "heading",
        text: "Use consistent questions and considered judgement",
      },
      {
        type: "paragraph",
        text: "Agree the evaluation criteria before reviewing the shortlist. Use a shared set of core questions, make space for individual follow-ups and record evidence against the brief. This gives the decision-making team a clearer basis for discussion.",
      },
      {
        type: "paragraph",
        text: "A broader search is not a reason to lower expectations. It is a reason to be more precise about them. The goal is to find a person who can do the work well and add something valuable to the organisation, even if their background is not the one you first imagined.",
      },
    ],
  },
  {
    ...defaults,
    slug: "ai-ready-leader",
    type: "Practical guide",
    tag: "Leadership",
    title: "Hiring for change, not just experience.",
    excerpt:
      "Past achievements are useful. Understanding how a person learns, adapts and brings others along is just as important in a changing business.",
    readTime: "3 min read",
    image: "/images/people-at-work.jpg",
    color: "lavender",
    cover: "Ready for what comes next.",
    sections: [
      {
        type: "paragraph",
        text: "A strong track record deserves attention, but a leadership appointment is a decision about the future. The conditions a person will face may be different from those in which they built their reputation. A useful assessment explores both what they have done and how they respond when the situation changes.",
      },
      { type: "heading", text: "Explore the context behind the achievement" },
      {
        type: "paragraph",
        text: "Ask the candidate to describe the starting point, the constraints and the choices available. What was already working? What needed to change? Who else contributed? This helps you understand the nature of their experience rather than relying on the headline outcome.",
      },
      { type: "heading", text: "Ask about learning, not only success" },
      {
        type: "paragraph",
        text: "An account of a difficult lesson can reveal a great deal about a person’s judgement. Look for a clear explanation of what they believed at the time, what evidence challenged that belief and what they changed as a result. A polished story is less useful than specific reflection.",
      },
      {
        type: "list",
        items: [
          "Tell us about a decision you revised after listening to someone else.",
          "Describe a time when your existing experience was not enough.",
          "How did you learn what the organisation needed?",
          "What did you do to help other people understand the change?",
        ],
      },
      { type: "heading", text: "Connect the conversation to the real role" },
      {
        type: "paragraph",
        text: "Share a realistic business challenge and explore how the candidate would begin to understand it. Avoid treating the conversation as a test with a hidden perfect answer. The value is in their questions, the assumptions they notice and how they balance action with learning.",
      },
      {
        type: "paragraph",
        text: "Bring the discussion back to your organisation’s context: decision authority, team capability, stakeholder expectations and the support available. A capable leader needs an environment in which they can act effectively. Hiring well includes being honest about that environment.",
      },
    ],
  },
  {
    ...defaults,
    slug: "culture-eats-strategy",
    type: "Perspective",
    tag: "Culture",
    title: "Your culture lives in the everyday.",
    excerpt:
      "Culture takes shape in the decisions, conversations and habits people experience. Start there if you want it to change.",
    readTime: "3 min read",
    image: "/images/people-at-work.jpg",
    color: "lavender",
    cover: "Culture is what we do.",
    sections: [
      {
        type: "paragraph",
        text: "An organisation can describe its values beautifully and still create a very different experience for the people who work there. Culture is shaped less by the words on a wall than by the patterns people notice: what gets attention, how decisions are made and what happens when someone speaks up.",
      },
      { type: "heading", text: "Look at a normal working week" },
      {
        type: "paragraph",
        text: "Choose a few ordinary situations. How does a team meeting work? Who is heard? How is a competing priority resolved? What happens when a deadline slips? These moments reveal the expectations people learn through experience.",
      },
      {
        type: "paragraph",
        text: "Ask people in different roles to describe what happens, not simply whether they like the culture. Specific examples help separate an isolated incident from a pattern and make the conversation more useful.",
      },
      { type: "heading", text: "Notice what the organisation rewards" },
      {
        type: "paragraph",
        text: "People pay attention to what leads to recognition, promotion or greater influence. If collaboration is a stated value but individual results are rewarded without regard for how they were achieved, the message is mixed. Culture work includes looking at the practical choices that reinforce behaviour.",
      },
      {
        type: "list",
        items: [
          "Which behaviours are recognised publicly?",
          "What do people avoid saying in meetings?",
          "How are mistakes discussed and learned from?",
          "Where do the stated values and daily experience differ?",
        ],
      },
      { type: "heading", text: "Make one change people can experience" },
      {
        type: "paragraph",
        text: "Begin with a behaviour that has a clear owner and a visible place in everyday work. It might be how decisions are explained, how quieter voices are invited into discussion or how a team reviews a difficult outcome. Define what will change and why.",
      },
      {
        type: "paragraph",
        text: "Return to the people affected and ask whether their experience has changed. That feedback matters more than announcing a new initiative. A culture becomes more credible when people can point to something that is different in the work itself.",
      },
    ],
  },
  {
    ...defaults,
    slug: "underdeveloping-top-50",
    type: "Practical guide",
    tag: "Leadership",
    title: "Make leadership development part of the work.",
    excerpt:
      "A development plan becomes useful when it connects to real decisions, working relationships and opportunities to practise.",
    readTime: "3 min read",
    image: "/images/team-collaboration.jpg",
    color: "peach",
    cover: "Potential needs practice.",
    sections: [
      {
        type: "paragraph",
        text: "Leadership development can easily become a separate activity: a workshop, a reading list, a set of goals revisited at the next annual review. The intention may be good, but the connection to daily work can be weak. A more practical starting point is the challenge the leader is already trying to navigate.",
      },
      { type: "heading", text: "Choose a specific development priority" },
      {
        type: "paragraph",
        text: "A goal such as becoming a better communicator is difficult to act on. A more useful priority might be explaining a difficult decision clearly, giving timely feedback or listening before proposing a solution. Specific behaviour makes practice and feedback possible.",
      },
      { type: "heading", text: "Find the right place to practise" },
      {
        type: "paragraph",
        text: "Look for a recurring situation where the behaviour matters. A weekly team meeting, a stakeholder conversation or a project review can become a practical development opportunity. Decide what the leader will try and what they will pay attention to.",
      },
      {
        type: "list",
        items: [
          "Name the behaviour and why it matters to the work.",
          "Choose an upcoming situation in which to practise.",
          "Ask a trusted colleague for specific, timely feedback.",
          "Reflect on what changed and what still felt difficult.",
          "Repeat with a small adjustment.",
        ],
      },
      { type: "heading", text: "Create support around the effort" },
      {
        type: "paragraph",
        text: "A leader should not have to guess whether progress is visible. Agree who can provide relevant feedback and how often to reflect on it. Be clear about the boundaries of confidentiality and the purpose of any development conversations.",
      },
      {
        type: "paragraph",
        text: "Development is not a promise that every difficulty will disappear. It is a deliberate way of building greater awareness and a wider range of useful responses. When it is connected to real work, the leader can see why the effort matters and the organisation can better understand the support required.",
      },
    ],
  },
  {
    ...defaults,
    slug: "rise-of-interim-executive",
    type: "Practical guide",
    tag: "On-demand talent",
    title: "An interim leader needs a clear beginning and ending.",
    excerpt:
      "Before you bring in interim experience, agree the mandate, decision authority and handover that will make the assignment useful.",
    readTime: "3 min read",
    image: "/images/workspace.jpg",
    color: "lime",
    cover: "A clear brief. A useful impact.",
    sections: [
      {
        type: "paragraph",
        text: "Interim leadership can be useful during a transition, a defined project or a period of change. But experience alone is not enough. The assignment needs a clear purpose and an organisation ready to work with the person it brings in.",
      },
      { type: "heading", text: "Define the result you need" },
      {
        type: "paragraph",
        text: "Describe the outcome in terms the business can recognise. Is the priority continuity, a decision, a project milestone or a capability the team does not currently have? Avoid an open-ended expectation to fix everything. Agree what is in scope and what is not.",
      },
      { type: "heading", text: "Make authority and access practical" },
      {
        type: "paragraph",
        text: "An interim leader needs to know which decisions they can make, who sponsors the work and where they can find information. Explain the assignment to the team so people understand the role and how it relates to their own responsibilities.",
      },
      {
        type: "list",
        items: [
          "Who owns the brief and can resolve competing priorities?",
          "Which decisions sit with the interim leader?",
          "What people, information and resources will be available?",
          "How will progress be reviewed?",
          "What should be different by the end of the assignment?",
        ],
      },
      { type: "heading", text: "Plan the handover from the start" },
      {
        type: "paragraph",
        text: "Decide who will take ownership of the work when the assignment ends. Build time for documentation, knowledge transfer and conversations with the team. A handover should explain the reasoning behind decisions as well as the current status.",
      },
      {
        type: "paragraph",
        text: "Review the scope as the situation develops. New information may reveal a different challenge, but changes should be discussed rather than silently absorbed. A clear mandate helps both the organisation and the interim leader make a focused, useful contribution.",
      },
    ],
  },
];
export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
export function getArticleHref(article: { slug: string }) {
  return `/insights/${article.slug}`;
}
