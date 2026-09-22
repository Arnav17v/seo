import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiShopify, SiStrapi, SiWordpress } from "react-icons/si";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart2,
  Check,
  Compass,
  EyeOff,
  FileClock,
  FileText,
  Hourglass,
  Image as ImageIcon,
  Layers,
  Link2,
  PenLine,
  Plus,
  Search,
  SearchX,
  ShieldAlert,
  Sparkles,
  TrendingDown,
  TriangleAlert,
  Unlink,
} from "lucide-react";
import { assets, links, testimonials, faqs } from "@/content/landing";
import { AnimatedList } from "@/components/ui/animated-list";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { ConnectionsBeam } from "@/components/landing/connections-beam";
import { CompoundLoop } from "@/components/landing/compound-loop";
import { FormatSpread } from "@/components/landing/format-spread";

const publishingPlatforms = [
  { name: "LinkedIn", icon: FaLinkedinIn, className: "platform-linkedin" },
  { name: "WordPress", icon: SiWordpress, className: "platform-wordpress" },
  { name: "Shopify", icon: SiShopify, className: "platform-shopify" },
  { name: "Strapi", icon: SiStrapi, className: "platform-strapi" },
];

/**
 * The backlog you inherit without RankUp: every one of these is manual work
 * already running late, so the queue reads as debt piling up rather than a
 * feed of things getting done.
 */
const workloadItems = [
  {
    name: "Keyword research",
    description: "Still no list for next month's content",
    status: "Overdue",
    time: "11d late",
    icon: SearchX,
    severity: "critical",
  },
  {
    name: "Traffic decay",
    description: "18 pages quietly slipping down page two",
    status: "Dropping",
    time: "6 wks",
    icon: TrendingDown,
    severity: "critical",
  },
  {
    name: "Content briefs",
    description: "9 posts stuck waiting on an outline",
    status: "Blocked",
    time: "no owner",
    icon: FileClock,
    severity: "critical",
  },
  {
    name: "Internal links",
    description: "31 orphan pages with nothing pointing at them",
    status: "Unfixed",
    time: "never run",
    icon: Unlink,
    severity: "warning",
  },
  {
    name: "Competitor gaps",
    description: "4 rivals outranking you on the terms that pay",
    status: "Losing",
    time: "daily",
    icon: TriangleAlert,
    severity: "critical",
  },
  {
    name: "Rank tracking",
    description: "Last checked by hand, in a spreadsheet",
    status: "Stale",
    time: "21d old",
    icon: Hourglass,
    severity: "warning",
  },
  {
    name: "AI citations",
    description: "ChatGPT keeps citing them, never you",
    status: "Invisible",
    time: "ongoing",
    icon: EyeOff,
    severity: "critical",
  },
  {
    name: "Search intent",
    description: "Half your posts answer the wrong question",
    status: "Mismatched",
    time: "unreviewed",
    icon: Compass,
    severity: "warning",
  },
  {
    name: "Topic clusters",
    description: "Pillar plan is still a doc nobody opened",
    status: "Untouched",
    time: "4 months",
    icon: Layers,
    severity: "warning",
  },
  {
    name: "Technical audit",
    description: "Crawl errors from the last run, still unread",
    status: "Ignored",
    time: "6 mo late",
    icon: ShieldAlert,
    severity: "critical",
  },
] as const;

type WorkloadSeverity = (typeof workloadItems)[number]["severity"];

const severityStyles: Record<
  WorkloadSeverity,
  { card: string; rail: string; tile: string; chip: string; time: string }
> = {
  critical: {
    card: "border-red-200/80 bg-[#fff6f5] shadow-[0_4px_22px_-8px_rgba(220,38,38,0.28)]",
    rail: "bg-red-500",
    tile: "bg-red-100 text-red-600",
    chip: "bg-red-600 text-white",
    time: "text-red-400",
  },
  warning: {
    card: "border-amber-200/80 bg-[#fffaf0] shadow-[0_4px_22px_-8px_rgba(217,119,6,0.24)]",
    rail: "bg-amber-500",
    tile: "bg-amber-100 text-amber-600",
    chip: "bg-amber-500 text-white",
    time: "text-amber-500",
  },
};

function WorkflowItemCard({
  name,
  description,
  icon: Icon,
  status,
  time,
  severity,
}: {
  name: string;
  description: string;
  icon: typeof Search;
  status: string;
  time: string;
  severity: WorkloadSeverity;
}) {
  const tone = severityStyles[severity];

  return (
    <figure
      className={`relative mx-auto min-h-fit w-full cursor-pointer overflow-hidden rounded-2xl border p-4 pl-5 sm:p-5 sm:pl-6 transition-all duration-200 ease-in-out hover:scale-[101%] ${tone.card}`}
    >
      <span
        className={`absolute inset-y-0 left-0 w-[3px] ${tone.rail}`}
        aria-hidden="true"
      />
      <div className="flex flex-row items-center gap-4">
        <div
          className={`flex size-12 sm:size-14 items-center justify-center rounded-xl flex-shrink-0 ${tone.tile}`}
        >
          <Icon size={24} strokeWidth={2} />
        </div>
        <div className="flex flex-col overflow-hidden flex-1 min-w-0">
          <figcaption className="flex flex-row items-center justify-between gap-2 text-[15px] sm:text-[17px] text-neutral-900">
            <span className="flex min-w-0 items-center gap-2">
              <span className="truncate font-semibold">{name}</span>
              <span
                className={`flex-shrink-0 rounded-full px-2 py-[3px] font-mono text-[9px] font-bold uppercase tracking-[0.06em] ${tone.chip}`}
              >
                {status}
              </span>
            </span>
            {/* Secondary to the status chip, so it yields on narrow screens. */}
            <span
              className={`hidden sm:inline flex-shrink-0 font-mono text-[11px] ${tone.time}`}
            >
              {time}
            </span>
          </figcaption>
          <p className="mt-1 truncate text-[13px] sm:text-sm text-neutral-600">
            {description}
          </p>
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

        <div className="relative flex w-full max-w-[540px] flex-col overflow-hidden h-[520px] sm:h-[620px] [mask-image:linear-gradient(to_bottom,black_88%,transparent_100%)] justify-self-end">
          <AnimatedList delay={1400} className="w-full gap-4">
            {workloadItems.map((item) => (
              <WorkflowItemCard {...item} key={item.name} />
            ))}
          </AnimatedList>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/70 to-transparent" />
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
  return <FormatSpread />;
}

export function MeasureImprove() {
  return (
    <section
      className="connections-section section-space relative overflow-hidden"
      id="improve"
      aria-labelledby="connections-title"
    >
      <StripedPattern
        direction="left"
        width={15}
        height={15}
        strokeWidth={1}
        className="text-neutral-900/40 opacity-20 pointer-events-none z-0"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%)",
        }}
      />
      <StripedPattern
        direction="right"
        width={15}
        height={15}
        strokeWidth={1}
        className="text-neutral-900/40 opacity-20 pointer-events-none z-0"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, #000 18%, #000 82%, transparent 100%)",
        }}
      />
      <div className="wrap relative z-10">
        <ConnectionsBeam />
      </div>
    </section>
  );
}

export function AgentMode() {
  return <CompoundLoop />;
}

export function Proof() {
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

        <div className="proof-gallery">
          {testimonials.map((testimonial, index) => (
            <figure
              className={`proof-panel proof-${index}`}
              key={testimonial.name}
              tabIndex={0}
            >
              <div className="proof-panel-head">
                <span
                  className={`proof-logo${testimonial.logoPlate ? " proof-logo-plate" : ""}`}
                >
                  <Image
                    src={testimonial.logo}
                    alt={testimonial.name}
                    width={testimonial.logoWidth}
                    height={testimonial.logoHeight}
                  />
                </span>
                <span className="proof-arrow" aria-hidden="true">
                  <ArrowUpRight size={16} />
                </span>
              </div>

              <blockquote>&ldquo;{testimonial.quote}&rdquo;</blockquote>

              <div className="proof-panel-foot">
                <span className="proof-result" aria-hidden="true">
                  <ArrowUpRight size={13} />
                  {testimonial.result}
                </span>
                <figcaption>
                  {testimonial.domain} / {testimonial.category}
                </figcaption>
              </div>
            </figure>
          ))}
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
