import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Compass,
  FileText,
  Layers,
  Link2,
  PenLine,
  Plus,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { assets, links, testimonials, faqs } from "@/content/landing";
import { AnimatedList } from "@/components/ui/animated-list";

const contentFormats = [
  {
    name: "Blog",
    title: "Answer what your customers are searching for and bring them to your business.",
    lines: ["Audience", "Intent", "Internal links", "Review notes"],
  },
  {
    name: "Ebook",
    title: "Turn interested visitors into leads with something worth downloading.",
    lines: ["Chapters", "FAQ", "Proof points", "Download structure"],
  },
  {
    name: "Whitepaper",
    title: "Build authority with the research and expertise your buyers trust.",
    lines: ["Summary", "Method", "Findings", "Recommendations"],
  },
  {
    name: "LinkedIn",
    title: "Reach potential customers where they already discover ideas and businesses.",
    lines: ["Hook", "Narrative", "Carousel beats", "Founder voice"],
  },
];

const performancePages = [
  {
    name: "Workspace planning guide",
    status: "climbing",
    metric: "+",
    icon: TrendingUp,
  },
  {
    name: "Hybrid office checklist",
    status: "stagnating",
    metric: "~",
    icon: BarChart3,
  },
  {
    name: "Old layout article",
    status: "falling",
    metric: "-",
    icon: TrendingDown,
  },
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

export function ProductStory() {
  return (
    <section
      className="format-section section-space"
      id="product"
      data-motion-section="formats"
      aria-labelledby="formats-title"
    >
      <div className="wrap format-inner">
        <div className="format-header">
          <h2 id="formats-title" className="!text-6xl font-medium tracking-tight text-black leading-[1.1]">
            Get found on Google and AI search organically.
          </h2>
        </div>

        <div className="format-gallery">
          {contentFormats.map((format, index) => (
            <article
              className={`format-panel format-${index}`}
              key={format.name}
              tabIndex={0}
            >
              <div className="format-title">
                <span>{format.name}</span>
                <ArrowUpRight size={17} />
              </div>
              <div className="format-output">
                <strong>{format.title}</strong>
                <div className="format-lines">
                  {format.lines.map((line) => (
                    <span key={line}>
                      <i />
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MeasureImprove() {
  return (
    <section
      className="performance-section section-space"
      id="improve"
      data-motion-section="performance"
      aria-labelledby="performance-title"
    >
      <div className="wrap performance-inner">
        <div className="performance-copy">
          <span>SEE WHAT&apos;S WORKING</span>
          <h2 id="performance-title" className="!text-6xl font-medium tracking-tight text-black leading-[1.1]">
            See how your content performs after you publish.
          </h2>
          <p>
            Rankup tracks your rankings, clicks, impressions, and content performance so you can see what&apos;s growing and what needs attention.
          </p>
        </div>

        <div className="performance-canvas" aria-hidden="true">
          <div className="signal-grid" />
          {performancePages.map((page) => {
            const Icon = page.icon;
            return (
              <div
                className={`performance-node performance-${page.status}`}
                key={page.name}
              >
                <Icon size={15} />
                <strong>{page.name}</strong>
                <span>{page.status}</span>
                <i>{page.metric}</i>
              </div>
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
