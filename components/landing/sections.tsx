import Image from "next/image";
import { MorphingText } from "@/components/ui/morphing-text";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiShopify, SiStrapi, SiWordpress } from "react-icons/si";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart2,
  BarChart3,
  BookOpen,
  Check,
  Compass,
  FileChartColumn,
  FileText,
  Image as ImageIcon,
  Layers,
  Link2,
  PenLine,
  Plus,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { assets, links, testimonials, faqs } from "@/content/landing";
import { AnimatedList } from "@/components/ui/animated-list";

const texts = [
  "Google",
  "AI"
]
const contentFormats = [
  {
    name: "Blog",
    title: "Answer what your customers are searching for and bring them to your business.",
    icon: FileText,
  },
  {
    name: "Ebook",
    title: "Turn interested visitors into leads with something worth downloading.",
    icon: BookOpen,
  },
  {
    name: "Whitepaper",
    title: "Build authority with the research and expertise your buyers trust.",
    icon: FileChartColumn,
  },
  {
    name: "LinkedIn",
    title: "Reach potential customers where they already discover ideas and businesses.",
    icon: Link2,
  },
];

const publishingPlatforms = [
  { name: "LinkedIn", icon: FaLinkedinIn, className: "platform-linkedin" },
  { name: "WordPress", icon: SiWordpress, className: "platform-wordpress" },
  { name: "Shopify", icon: SiShopify, className: "platform-shopify" },
  { name: "Strapi", icon: SiStrapi, className: "platform-strapi" },
];

const workloadItems = [
  {
    name: "Keyword research",
    description: "High-intent queries & search volume discovered",
    time: "15m ago",
    icon: Search,
    color: "#5c55f2",
  },
  {
    name: "Competitor gaps",
    description: "3 high-value keyword opportunities detected",
    time: "10m ago",
    icon: BarChart3,
    color: "#3b82f6",
  },
  {
    name: "Content briefs",
    description: "Structured outline & target headings prepared",
    time: "6m ago",
    icon: FileText,
    color: "#10b981",
  },
  {
    name: "Search intent",
    description: "Informational & commercial intent mapped",
    time: "4m ago",
    icon: Compass,
    color: "#f59e0b",
  },
  {
    name: "Internal links",
    description: "4 contextual link connections suggested",
    time: "2m ago",
    icon: Link2,
    color: "#8b5cf6",
  },
  {
    name: "Rank tracking",
    description: "Positions updated across search engines",
    time: "Just now",
    icon: TrendingUp,
    color: "#06b6d4",
  },
  {
    name: "Traffic decay",
    description: "Identified pages needing content refresh",
    time: "Just now",
    icon: RefreshCw,
    color: "#ec4899",
  },
  {
    name: "Topic clusters",
    description: "Connected authority pillar strategy organized",
    time: "Just now",
    icon: Layers,
    color: "#14b8a6",
  },
  {
    name: "AI citations",
    description: "Perplexity & ChatGPT source readiness verified",
    time: "Just now",
    icon: Sparkles,
    color: "#6366f1",
  },
  {
    name: "Performance audits",
    description: "Actionable technical & content health score",
    time: "Just now",
    icon: ShieldCheck,
    color: "#10b981",
  },
];

function WorkflowItemCard({
  name,
  description,
  icon: Icon,
  color,
  time,
}: {
  name: string;
  description: string;
  icon: typeof Search;
  color: string;
  time: string;
}) {
  return (
    <figure className="relative mx-auto min-h-fit w-full cursor-pointer overflow-hidden rounded-2xl p-4 sm:p-5 transition-all duration-200 ease-in-out hover:scale-[101%] bg-white shadow-[0_4px_24px_-4px_rgba(0,0,0,0.07),0_2px_8px_-2px_rgba(0,0,0,0.04)] border border-neutral-200/90">
      <div className="flex flex-row items-center gap-4">
        <div
          className="flex size-12 items-center justify-center rounded-xl flex-shrink-0"
          style={{ backgroundColor: `${color}15`, color: color }}
        >
          <Icon size={22} />
        </div>
        <div className="flex flex-col overflow-hidden flex-1 min-w-0">
          <figcaption className="flex flex-row items-center justify-between text-sm sm:text-base text-neutral-900 gap-2">
            <span className="truncate font-semibold">{name}</span>
            <span className="text-xs text-neutral-400 font-mono flex-shrink-0">{time}</span>
          </figcaption>
          <p className="text-xs sm:text-sm text-neutral-500 truncate mt-1">{description}</p>
        </div>
      </div>
    </figure>
  );
}

export function WorkflowContext() {
  return (
    <section
      id="workflow"
      className="overload-section section-space"
      data-motion-section="overload"
      aria-labelledby="overload-title"
    >
      <div className="wrap overload-inner">
        <div className="flex max-w-[540px] flex-col items-start text-left">
          <span className="mb-[18px] block font-mono text-[10px] uppercase tracking-[0.09em] text-neutral-400">
            GROWING SHOULDN&apos;T MEAN DOING EVERYTHING YOURSELF
          </span>
          <h2
            id="overload-title"
            className="text-6xl font-medium tracking-tight text-black leading-[1.1]"
          >
            Growing your traffic shouldn&apos;t become another full-time job.
          </h2>
          <div className="seo-sticky-note" aria-label="SEO work reminder">
            <span>On your desk today</span>
            <p>
              Find keywords. Brief writers. Check rankings. Add links. Update
              old pages. Repeat before anything actually grows.
            </p>
          </div>
        </div>

        <div className="relative flex w-full max-w-[520px] flex-col overflow-hidden h-[480px] [mask-image:linear-gradient(to_bottom,black_65%,transparent_100%)] justify-self-end">
          <AnimatedList delay={1400} className="w-full gap-4">
            {workloadItems.map((item) => (
              <WorkflowItemCard {...item} key={item.name} />
            ))}
          </AnimatedList>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section
      className="section-space relative overflow-hidden bg-white py-24 sm:py-32"
      id="how-it-works"
      aria-labelledby="how-it-works-title"
    >
      <div className="wrap mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400 block mb-3">
            HOW IT WORKS
          </span>
          <h2
            id="how-it-works-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 leading-[1.12]"
          >
            You don&apos;t have to manage the process. RankUp does.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            From finding the opportunity to creating the content and growing
            your traffic, RankUp handles the entire workflow.
          </p>
        </div>

        {/* 3 Bento Cards Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {/* Card 1: DISCOVER */}
          <article className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-blue-100/90 bg-gradient-to-b from-[#eef5ff] via-[#f7faff] to-[#ffffff] p-7 sm:p-8 shadow-[0_4px_24px_-4px_rgba(59,130,246,0.06)] min-h-[540px]">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center rounded-full bg-blue-100 px-2.5 py-0.5 font-mono text-xs font-bold text-blue-700">
                  01
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-800">
                  DISCOVER
                </span>
              </div>
              <h3 className="mt-4 text-2xl sm:text-[26px] font-bold tracking-tight text-neutral-950 leading-snug">
                We find what&apos;s worth creating.
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                RankUp scans your niche, competitors and existing content to
                surface high-potential opportunities &mdash; before you have to
                look for them.
              </p>
            </div>

            {/* Illustration 1 */}
            <div className="relative mt-8 flex flex-col items-center justify-end pt-4" aria-hidden="true">
              {/* Floating search bar */}
              <div className="relative z-10 flex w-full items-center justify-between gap-2 rounded-full border border-neutral-200/90 bg-white px-4 py-2.5 shadow-[0_4px_16px_rgba(0,0,0,0.05)]">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Search className="size-4 text-neutral-400 shrink-0" />
                  <span className="text-xs sm:text-[13px] font-medium text-neutral-800 truncate">
                    hybrid work best practices
                  </span>
                </div>
                <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 text-white shadow-xs">
                  <Sparkles className="size-3.5 fill-white" />
                </div>
              </div>

              {/* Dotted animated connector lines SVG */}
              <div className="relative w-full h-12 my-[-2px] overflow-visible pointer-events-none">
                <svg className="w-full h-full overflow-visible" viewBox="0 0 260 48" fill="none">
                  {/* Outer Left Flow */}
                  <path
                    d="M 40,48 C 50,16 130,16 130,0"
                    stroke="#93c5fd"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="animate-flow-search opacity-75"
                  />
                  {/* Inner Left Flow */}
                  <path
                    d="M 85,48 C 85,20 130,20 130,0"
                    stroke="#60a5fa"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="animate-flow-search"
                  />
                  {/* Inner Right Flow */}
                  <path
                    d="M 175,48 C 175,20 130,20 130,0"
                    stroke="#60a5fa"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="animate-flow-search"
                  />
                  {/* Outer Right Flow */}
                  <path
                    d="M 220,48 C 210,16 130,16 130,0"
                    stroke="#93c5fd"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    className="animate-flow-search opacity-75"
                  />
                </svg>
              </div>

              {/* 4 Intent Chips Grid (2x2) */}
              <div className="grid grid-cols-2 gap-2.5 w-full relative z-10">
                <div className="flex items-center gap-2 rounded-xl border border-neutral-200/90 bg-white p-2.5 shadow-xs">
                  <div className="flex size-5 items-center justify-center rounded bg-emerald-50 text-emerald-600">
                    <BarChart2 className="size-3.5" />
                  </div>
                  <span className="text-[11px] font-semibold text-neutral-800">Search volume</span>
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-neutral-200/90 bg-white p-2.5 shadow-xs">
                  <div className="flex size-5 items-center justify-center rounded bg-amber-50 text-amber-600">
                    <BarChart2 className="size-3.5" />
                  </div>
                  <span className="text-[11px] font-semibold text-neutral-800">Low competition</span>
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-neutral-200/90 bg-white p-2.5 shadow-xs">
                  <div className="flex size-5 items-center justify-center rounded bg-purple-50 text-purple-600">
                    <Sparkles className="size-3.5" />
                  </div>
                  <span className="text-[11px] font-semibold text-neutral-800">Competitor gap</span>
                </div>

                <div className="flex items-center gap-2 rounded-xl border border-neutral-200/90 bg-white p-2.5 shadow-xs">
                  <div className="flex size-5 items-center justify-center rounded bg-rose-50 text-rose-600">
                    <Compass className="size-3.5" />
                  </div>
                  <span className="text-[11px] font-semibold text-neutral-800">High intent</span>
                </div>
              </div>
            </div>
          </article>

          {/* Card 2: CREATE */}
          <article className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-purple-100/90 bg-gradient-to-b from-[#f7f3ff] via-[#faf8ff] to-[#ffffff] p-7 sm:p-8 shadow-[0_4px_24px_-4px_rgba(168,85,247,0.06)] min-h-[540px]">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center rounded-full bg-purple-100 px-2.5 py-0.5 font-mono text-xs font-bold text-purple-700">
                  02
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-800">
                  CREATE
                </span>
              </div>
              <h3 className="mt-4 text-2xl sm:text-[26px] font-bold tracking-tight text-neutral-950 leading-snug">
                We turn opportunities into content.
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                RankUp creates SEO-optimized articles, supporting assets and
                social posts &mdash; with the right structure and context, ready to
                publish.
              </p>
            </div>

            {/* Illustration 2 */}
            <div className="relative mt-8 flex flex-col justify-end pt-4" aria-hidden="true">
              {/* Background Sparkles with pulse */}
              <div className="absolute top-0 right-4 flex items-center gap-1.5 animate-pulse">
                <Sparkles className="size-4 text-purple-400 fill-purple-300" />
                <Sparkles className="size-3 text-purple-300 fill-purple-200" />
              </div>

              {/* Overlapping Content Cards with Skeleton Loading Animations */}
              <div className="relative w-full pb-2">
                {/* Back card: Blog post */}
                <div className="w-[84%] rounded-2xl border border-neutral-200/90 bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:scale-[101%]">
                  <div className="flex items-center gap-2 pb-2.5 border-b border-neutral-100">
                    <div className="flex size-5 items-center justify-center rounded bg-purple-50 text-purple-600">
                      <FileText className="size-3.5" />
                    </div>
                    <span className="text-xs font-bold text-neutral-800">Blog post</span>
                  </div>
                  {/* Skeleton lines with shimmer animation */}
                  <div className="mt-3 flex flex-col gap-2">
                    <div className="h-2.5 w-3/4 rounded-full bg-neutral-200/90 skeleton-shimmer" />
                    <div className="h-2 w-full rounded-full bg-neutral-100 skeleton-shimmer" />
                    <div className="h-2 w-5/6 rounded-full bg-neutral-100 skeleton-shimmer" />
                  </div>
                  {/* Image placeholder with shimmer */}
                  <div className="mt-3 flex h-14 w-full items-center justify-center rounded-lg border border-dashed border-neutral-200 bg-neutral-50/80 skeleton-shimmer">
                    <ImageIcon className="size-4 text-neutral-300" />
                  </div>
                </div>

                {/* Front card: LinkedIn post (overlapping) */}
                <div className="absolute -bottom-1 right-0 w-[74%] rounded-2xl border border-neutral-200/90 bg-white p-3.5 shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:scale-[102%]">
                  <div className="flex items-center gap-2 pb-2 border-b border-neutral-100">
                    <span className="flex size-4 items-center justify-center rounded bg-[#0a66c2] text-[10px] font-bold text-white">
                      in
                    </span>
                    <span className="text-xs font-bold text-neutral-800">LinkedIn post</span>
                  </div>
                  {/* Skeleton lines with shimmer animation */}
                  <div className="mt-2.5 flex flex-col gap-1.5">
                    <div className="h-2 w-full rounded-full bg-neutral-200/90 skeleton-shimmer" />
                    <div className="h-1.5 w-4/5 rounded-full bg-neutral-100 skeleton-shimmer" />
                  </div>
                  {/* Image placeholder with shimmer */}
                  <div className="mt-2.5 flex h-10 w-full items-center justify-center rounded-lg border border-neutral-100 bg-neutral-50/80 skeleton-shimmer">
                    <ImageIcon className="size-3.5 text-neutral-300" />
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Card 3: GROW */}
          <article className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-emerald-100/90 bg-gradient-to-b from-[#eefbf3] via-[#f7fdf9] to-[#ffffff] p-7 sm:p-8 shadow-[0_4px_24px_-4px_rgba(168,85,247,0.06)] min-h-[540px]">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 font-mono text-xs font-bold text-emerald-700">
                  03
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-neutral-800">
                  GROW
                </span>
              </div>
              <h3 className="mt-4 text-2xl sm:text-[26px] font-bold tracking-tight text-neutral-950 leading-snug">
                We help you grow.
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm text-neutral-600 leading-relaxed">
                Your content gets published, gains visibility, and keeps
                climbing &mdash; while RankUp continues to find the next
                opportunity.
              </p>
            </div>

            {/* Illustration 3 */}
            <div className="relative mt-8 flex flex-col justify-end pt-4" aria-hidden="true">
              <div className="relative w-full rounded-2xl border border-neutral-200/90 bg-white p-4 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
                {/* Top bar */}
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-[13px] font-bold text-neutral-900">
                    Organic traffic
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                    <ArrowUpRight className="size-3.5 stroke-[2.5]" /> +128%
                  </span>
                </div>

                {/* Growth Chart Area */}
                <div className="relative mt-4 h-28 w-full">
                  {/* SVG Chart with animated curved stroke and gradient area fill */}
                  <svg className="h-20 w-full overflow-visible" viewBox="0 0 240 80" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="growthAreaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Area fill */}
                    <path
                      className="growth-area-animate"
                      d="M 0,65 Q 40,55 80,60 T 160,35 T 240,15 L 240,80 L 0,80 Z"
                      fill="url(#growthAreaGrad)"
                    />
                    {/* Line stroke */}
                    <path
                      className="growth-line-animate"
                      d="M 0,65 Q 40,55 80,60 T 160,35 T 240,15"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    {/* Glowing end point */}
                    <circle className="growth-dot-animate" cx="240" cy="15" r="4" fill="#10b981" />
                    <circle className="growth-dot-animate" cx="240" cy="15" r="7" fill="#10b981" fillOpacity="0.3" />
                  </svg>


                  {/* Month labels */}
                  <div className="mt-2 flex justify-between text-[10px] font-medium text-neutral-400">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export function ProductStory() {
  return (
    <section
      className="format-section section-space"
      id="product"
      data-motion-section="formats"
      aria-labelledby="formats-title"
    >
      <div className="wrap format-inner">
        <div className="format-header flex">
          <div id="formats-title" className="text-5xl font-medium tracking-tight text-black leading-[1.1]">
            Get found organically on <MorphingText texts={texts} /><br /> Searches
          </div>

        </div>

        <div className="format-gallery">
          {contentFormats.map((format, index) => {
            const FormatIcon = format.icon;

            return (
              <article
                className={`format-panel format-${index}`}
                key={format.name}
                tabIndex={0}
              >
                <div className="format-title">
                  <div className="format-label">
                    <span className="format-mark" aria-hidden="true">
                      <FormatIcon size={10} />
                    </span>
                    <span>{format.name}</span>
                  </div>
                  <span className="format-arrow" aria-hidden="true">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <div className="format-output">
                  <strong>{format.title}</strong>

                  <div className="format-ui-preview" aria-hidden="true">
                    {index === 0 && (
                      <div className="format-blog-preview">
                        <div className="format-preview-bar">
                          <span>Article brief</span>
                          <b>Ready</b>
                        </div>
                        <p>Hybrid work planning guide</p>
                        <div className="format-copy-lines">
                          <i />
                          <i />
                          <i />
                        </div>
                        <div className="format-preview-meta">
                          <span>8 internal links</span>
                          <span>Intent matched</span>
                        </div>
                      </div>
                    )}

                    {index === 1 && (
                      <div className="format-ebook-preview">
                        <div className="format-ebook-cover">
                          <BookOpen size={20} />
                          <span>The practical guide</span>
                          <b>Content that compounds</b>
                        </div>
                        <div className="format-chapter-list">
                          <span><i>01</i>Opportunity</span>
                          <span><i>02</i>Strategy</span>
                          <span><i>03</i>Distribution</span>
                        </div>
                      </div>
                    )}

                    {index === 2 && (
                      <div className="format-report-preview">
                        <div className="format-preview-bar">
                          <span>Research summary</span>
                          <b>Verified</b>
                        </div>
                        <div className="format-report-body">
                          <div className="format-chart-bars">
                            <i />
                            <i />
                            <i />
                            <i />
                            <i />
                          </div>
                          <div className="format-findings">
                            <span>Key finding</span>
                            <b>Demand is shifting toward specific, expert-led answers.</b>
                          </div>
                        </div>
                      </div>
                    )}

                    {index === 3 && (
                      <div className="format-linkedin-preview">
                        <div className="format-social-head">
                          <span>R</span>
                          <div>
                            <b>Project RankUp</b>
                            <i>Founder insight</i>
                          </div>
                          <Link2 size={17} />
                        </div>
                        <div className="format-copy-lines">
                          <i />
                          <i />
                          <i />
                        </div>
                        <div className="format-carousel-beats">
                          <span>01</span>
                          <span>02</span>
                          <span>03</span>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function MeasureImprove() {
  return (
    <section
      className="connections-section section-space"
      id="improve"
      aria-labelledby="connections-title"
    >
      <div className="wrap connections-inner">
        <div className="connections-copy">
          <h2 id="connections-title">
            Connect in just one click.
          </h2>
          <p>
            Connect the platforms you already use, and RankUp will handle
            publishing your content for you.
          </p>
        </div>

        <div className="platform-grid" aria-label="Publishing platforms">
          {publishingPlatforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <article
                className={`platform-card ${platform.className}`}
                key={platform.name}
              >
                <span className="platform-icon" aria-hidden="true">
                  <Icon />
                </span>
                <strong>{platform.name}</strong>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function AgentMode() {
  return (
    <section
      className="compound-section section-space"
      id="agent-mode"
      data-motion-section="compound"
      aria-labelledby="compound-title"
    >
      <div className="wrap compound-inner">
        <div className="compound-copy">
          <span>EVERY RESULT MAKES THE NEXT MOVE CLEARER</span>
          <h2 id="compound-title" className="!text-6xl font-medium tracking-tight text-black leading-[1.1]">
            The loop compounds
            <br />
            as the system learns.
          </h2>
          <p>
            Discoveries, content, and performance signals feed the next
            opportunity instead of disappearing into separate tools.
          </p>
          <small>
            Agent Mode — Coming Soon will increasingly automate the
            organic-growth workflow.
          </small>
        </div>

        <div
          className="compound-orbit"
          role="img"
          aria-label="Compounding feedback loop across discovery, creation, measurement, and improvement"
        >
          <div className="orbit-ring orbit-one" />
          <div className="orbit-ring orbit-two" />
          <div className="orbit-center">
            <Image src={assets.rankupMark} alt="" width={42} height={42} />
          </div>

          <div className="orbit-track">
            {[
              ["Discover", Search],
              ["Create", FileText],
              ["Measure", BarChart3],
              ["Improve", RefreshCw],
            ].map(([label, Icon], index) => {
              const OrbitIcon = Icon as typeof Search;
              return (
                <div
                  className={`orbit-item orbit-item-${index}`}
                  key={label as string}
                >
                  <span className="orbit-object">
                    <OrbitIcon size={15} />
                    {label as string}
                  </span>
                </div>
              );
            })}
          </div>

          <span className="orbit-feedback">next opportunity</span>
        </div>
      </div>
    </section>
  );
}

export function Proof() {
  const taggd = testimonials[0];
  const jaipur = testimonials[1];
  return (
    <section
      className="proof-editorial-section section-space"
      id="customers"
      data-motion-section="proof"
      aria-labelledby="proof-title"
    >
      <div className="wrap proof-editorial">
        <h2 id="proof-title" className="!text-6xl font-medium tracking-tight text-black leading-[1.1]">
          Proof from teams already doing the work.
        </h2>
        <div className="testimonial-transition">
          <figure className="testimonial-pane testimonial-taggd">
            <div className="testimonial-logo">
              <Image
                src={assets.taggdLogo}
                alt="Taggd"
                width={263}
                height={79}
              />
            </div>
            <blockquote>&ldquo;{taggd.quote}&rdquo;</blockquote>
            <figcaption>
              {taggd.domain} / {taggd.category}
            </figcaption>
          </figure>
          <figure className="testimonial-pane testimonial-jaipur">
            <div className="testimonial-logo">
              <Image
                src={assets.jaipurMark}
                alt="JaipurStuffs"
                width={394}
                height={392}
              />
            </div>
            <blockquote>&ldquo;{jaipur.quote}&rdquo;</blockquote>
            <figcaption>
              {jaipur.domain} / {jaipur.category}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export function FaqAndCta() {
  return (
    <>
      <section
        className="faq-section"
        id="faq"
        data-motion-section="faq"
        aria-labelledby="faq-title"
      >
        <div className="wrap faq-inner">
          <h2 id="faq-title" className="!text-6xl font-medium tracking-tight text-black leading-[1.1]">
            Questions worth answering.
          </h2>
          <div className="faq-list">
            {faqs.map((f) => (
              <details key={f.question}>
                <summary>
                  {f.question}
                  <Plus size={22} />
                </summary>
                <p>{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-echo-section" data-motion-section="final-echo">
        <div className="product-echo" aria-hidden="true">
          <span className="echo-card echo-keywords">
            <Search size={14} /> Keywords
          </span>
          <span className="echo-card echo-content">
            <PenLine size={14} /> Content
          </span>
          <span className="echo-card echo-links">
            <Link2 size={14} /> Links
          </span>
          <span className="echo-card echo-audit">
            <Check size={14} /> Audit
          </span>
        </div>
        <div className="wrap final-cta">
          <h2 className="!text-6xl font-medium tracking-tight text-black leading-[1.1]">
            Grow your traffic without
            <br />
            growing your workload.
          </h2>
          <a className="button button-light" href={links.signup}>
            Start free <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="wrap site-footer">
      <a href="#main" className="brand">
        <Image src={assets.rankupMark} alt="" width={42} height={42} />
        <span className="brand-wordmark" aria-label="Project Rankup">
          <span className="brand-project">Project</span>
          <span className="brand-rank">
            Rank<span className="brand-light">up</span>
          </span>
        </span>
      </a>
      <span>Visibility is just the beginning.</span>
      <nav aria-label="Footer">
        <a href="https://projectrankup.com/privacy">Privacy</a>
        <a href="https://projectrankup.com/terms">Terms</a>
        <a href="https://projectrankup.com/contact">
          Contact <ArrowUpRight size={12} />
        </a>
      </nav>
    </footer>
  );
}
