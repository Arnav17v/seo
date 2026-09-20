import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  FileText,
  Link2,
  PenLine,
  Plus,
  RefreshCw,
  Search,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import { assets, links, testimonials, faqs } from "@/content/landing";

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

export function WorkflowContext() {
  return (
    <section
      className="overload-section section-space"
      data-motion-section="overload"
      aria-labelledby="overload-title"
    >
      <div className="wrap overload-inner">
        <div className="overload-copy">
          <span>GROWING SHOULDN&apos;T MEAN DOING EVERYTHING YOURSELF</span>
          <h2 id="overload-title">
            Growing your traffic shouldn't become another full-time job.
          </h2>
          <p>
            Keyword research, competitor analysis, content briefs, writing, internal linking, rank tracking, and performance audits—all competing for your time. Rankup connects the entire workflow so you can focus on growth, not the busywork.
          </p>
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
          <h2 id="formats-title">Get found on Google and AI search organically.</h2>
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
          <span>SEE WHAT'S WORKING</span>
          <h2 id="performance-title">
            See how your content performs after you publish.
          </h2>
          <p>
            Rankup tracks your rankings, clicks, impressions, and content performance so you can see what's growing and what needs attention.
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
          <h2 id="compound-title">
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
        <h2 id="proof-title">Proof from teams already doing the work.</h2>
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
          <h2 id="faq-title">Questions worth answering.</h2>
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
          <h2>
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
        <Image src={assets.rankupMark} alt="" width={22} height={22} />
        <span>
          project<span className="brand-light">rankup</span>
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
