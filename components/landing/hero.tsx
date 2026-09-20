import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import type { CSSProperties } from "react";
import { assets, links } from "@/content/landing";

const heroMetrics = [
  {
    label: "Visitors",
    value: "84.7K",
    countTo: "84700",
    format: "compact",
    change: "+38%",
    state: "primary",
  },
  {
    label: "Leads",
    value: "2,418",
    countTo: "2418",
    format: "number",
    change: "+24%",
    state: "",
  },
  {
    label: "Ranked terms",
    value: "1,206",
    countTo: "1206",
    format: "number",
    change: "+19%",
    state: "",
  },
  {
    label: "Revenue intent",
    value: "$186K",
    countTo: "186000",
    format: "currency-compact",
    change: "+31%",
    state: "",
  },
];

const visitorBars = [42, 58, 51, 74, 69, 83, 78, 96];

const liveSignals = [
  "workspace planning guide",
  "office layout planning",
  "hybrid workspace design",
];

export function Hero() {
  return (
    <div className="hero-grid hero-composition">
      <div className="hero-copy">
        <h1 >
          Turn visibility into <span>growth.</span>
        </h1>
        <div className="hero-actions">
          <a className="button button-light" href={links.signup}>
            Start free <ArrowRight size={16} />
          </a>
          <a className="button button-ghost" href="#workflow">
            <Play size={13} fill="currentColor" /> See how it works
          </a>
        </div>
      </div>

      <div className="hero-product-scene" aria-hidden="true">
        <div className="hero-lighting" />
        <div className="product-system-frame">
          <div className="system-topbar">
            <span>
              <Image src={assets.rankupMark} alt="" width={18} height={18} />
              Northstar Studio
            </span>
            <small>Opportunity workspace</small>
          </div>

          <div className="system-body">
            <aside className="system-sidebar">
              {["Overview", "Keywords", "Calendar", "Studio", "Tracker"].map(
                (item) => (
                  <span
                    className={item === "Keywords" ? "is-active" : ""}
                    key={item}
                  >
                    {item}
                  </span>
                ),
              )}
            </aside>

            <div className="opportunity-surface">
              <div className="surface-heading">
                <span className="mini-label">Growth dashboard</span>
                <strong>Watch visibility turn into visits, leads, and pipeline.</strong>
              </div>

              <div className="opportunity-toolbar">
                <span>Northstar Studio</span>
                <span>Last 30 days</span>
              </div>

              <div className="hero-dashboard">
                <div className="metric-grid">
                  {heroMetrics.map((item) => (
                    <div className={`metric-card ${item.state}`} key={item.label}>
                      <span>{item.label}</span>
                      <strong
                        data-count-format={item.format}
                        data-count-to={item.countTo}
                      >
                        {item.value}
                      </strong>
                      <small>{item.change}</small>
                    </div>
                  ))}
                </div>

                <div className="visitor-panel">
                  <div className="visitor-panel-top">
                    <span>
                      <small>Live visitors</small>
                      <strong data-count-format="number" data-count-to="12486">
                        12,486
                      </strong>
                    </span>
                    <span className="growth-pill">Growing</span>
                  </div>
                  <div className="visitor-bars">
                    {visitorBars.map((height, index) => (
                      <i
                        key={`${height}-${index}`}
                        style={{ "--bar-height": `${height}%` } as CSSProperties}
                      />
                    ))}
                  </div>
                </div>

                <div className="live-signal-list">
                  {liveSignals.map((signal, index) => (
                    <span key={signal}>
                      <i>{index + 1}</i>
                      {signal}
                      <small>+{(index + 2) * 11}% traffic</small>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="decision-layer">
              <div className="decision-header">
                <span className="mini-label">Momentum</span>
                <span className="decision-score">+38%</span>
              </div>
              <strong>Visitor growth is compounding.</strong>
              <p>
                Rankings, clicks, and qualified demand move together as the
                content system keeps shipping.
              </p>
              <div className="decision-stack">
                <span>
                  <small>Top channel</small>
                  Organic search
                </span>
                <span>
                  <small>Conversion</small>
                  8.6%
                </span>
                <span>
                  <small>Pipeline lift</small>
                  $42K this month
                </span>
              </div>
              <div className="decision-next">
                <span>Next step</span>
                <strong>Double down on winners</strong>
              </div>
            </div>
          </div>

          <div className="continuation-rail">
            {["Prioritize", "Plan", "Create", "Measure", "Improve"].map(
              (item, index) => (
                <span className={index === 1 ? "is-next" : ""} key={item}>
                  <i />
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
