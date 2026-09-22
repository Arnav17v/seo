export const links = {
  signup: "https://projectrankup.com/sign-up",
  signin: "https://projectrankup.com/sign-in",
  pricing: "https://projectrankup.com/#pricing",
};
export const assets = {
  rankupMark: "/assets/brand/project-rankup/project-rankup-mark-color.webp",
  taggdLogo: "/assets/brand/customers/taggd/taggd-logo-light.png",
  jaipurMark:
    "/assets/brand/customers/jaipurstuffs/jaipurstuffs-mark-color.png",
};
export const hero = {
  eyebrow: "The organic-growth platform",
  headline: "Turn visibility into growth.",
  description:
    "Project Rankup finds where your business should show up, helps you create the content to get there, and learns from performance to show you what to do next.",
};
export const stages = [
  {
    name: "Discover",
    title: "Find your next opening.",
    description:
      "Explore search demand and competitor gaps to find the topics that matter to your business.",
    detail: "Keyword discovery",
  },
  {
    name: "Prioritize",
    title: "Choose with evidence.",
    description:
      "Bring search intent, difficulty, and business fit into the same decision.",
    detail: "Opportunity selection",
  },
  {
    name: "Plan",
    title: "Give good ideas a place.",
    description:
      "Turn selected opportunities into an editorial calendar your team can work from.",
    detail: "Content calendar",
  },
  {
    name: "Create",
    title: "Start with context. Not a blank page.",
    description:
      "Prepare content with your audience, project brief, research, and internal links in view.",
    detail: "Content studio",
  },
  {
    name: "Measure",
    title: "See what happens next.",
    description:
      "Follow clicks, impressions, and search position with connected Search Console data.",
    detail: "Rank tracker",
  },
  {
    name: "Improve",
    title: "Make the next version count.",
    description:
      "Use content audits and performance evidence to decide what deserves another look.",
    detail: "Content audit",
  },
] as const;
export const testimonials = [
  {
    quote:
      "Project Rankup streamlined our entire SEO workflow. Keyword research to published content in a fraction of the time - our organic traffic has grown consistently since we started.",
    name: "Taggd",
    domain: "Taggd.in",
    category: "HR Tech Platform",
    mark: "t",
    logo: assets.taggdLogo,
    logoWidth: 263,
    logoHeight: 79,
    // Wordmark is already white, so it sits straight on the dark brand field.
    logoPlate: false,
    result: "Organic traffic climbing month over month",
  },
  {
    quote:
      "The content studio and editorial calendar changed how we plan content. We publish more, rank faster, and spend less time on manual research.",
    name: "JaipurStuffs",
    domain: "JaipurStuffs.in",
    category: "E-Commerce",
    mark: "js",
    logo: assets.jaipurMark,
    logoWidth: 394,
    logoHeight: 392,
    // Orange mark would vanish into the orange field, so it gets a white plate.
    logoPlate: true,
    result: "More published, less manual research",
  },
];
export const faqs = [
  {
    question: "What can I do with the Free plan?",
    answer:
      "Start with one active project, 20 SEO keywords lifetime, 20 AI keyword ideas, 30 AI helper credits, and 10 blog posts lifetime. Premium content formats are not included.",
  },
  {
    question: "Does Project Rankup publish directly to my website?",
    answer:
      "Not yet. You can plan your content in the editorial calendar and prepare it in the content studio, then export it for publishing. Direct CMS publishing is planned.",
  },
  {
    question: "Agent Mode — Coming Soon: what does that mean?",
    answer:
      "It has not been implemented yet. Today, Project Rankup connects the workflow with you in control. In the future, it will increasingly automate that workflow.",
  },
  {
    question: "Can I work on content I already have?",
    answer:
      "Yes. Content Audit Studio accepts a page URL or uploaded content, so you can review existing work as well as create new content.",
  },
  {
    question: "How do I see whether my content is working?",
    answer:
      "Connect Google Search Console to follow search clicks, impressions, average position, and click-through rate. Use that evidence alongside content audits to inform your next step.",
  },
];
