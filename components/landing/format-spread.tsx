import { ArrowUpRight, Search, ThumbsUp, MessageCircle, Repeat2 } from "lucide-react";
import { MorphingText } from "@/components/ui/morphing-text";

const morphingTexts = ["Google", "AI"];

/**
 * Editorial spread rather than a card row: each format gets its own alignment,
 * scale and artifact. Desktop positions are percentages of a fixed-aspect
 * canvas (1120 x 660 design units), so the composition stays proportional at
 * any width; below 900px it collapses to a stacked reading order.
 */
export function FormatSpread() {
  return (
    <section
      className="spread-section section-space"
      id="product"
      data-motion-section="formats"
      aria-labelledby="formats-title"
    >
      <div className="wrap">
        <div
          id="formats-title"
          className="spread-heading text-5xl font-medium tracking-tight text-black leading-[1.1]"
        >
          Get found organically on <MorphingText texts={morphingTexts} className="spread-morph" /> Searches
        </div>

        <div className="spread-canvas">
          {/* One opportunity threading through every format. */}
          <svg
            className="spread-thread"
            viewBox="0 0 1120 660"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="spread-thread-line"
              pathLength={1}
              d="M 330 222 C 400 252 540 232 610 172 C 556 296 382 292 300 382 C 398 352 556 368 700 428"
            />
            <circle className="spread-node spread-node-1" cx="330" cy="222" r="4" />
            <circle className="spread-node spread-node-2" cx="610" cy="172" r="4" />
            <circle className="spread-node spread-node-3" cx="300" cy="382" r="4" />
            <circle className="spread-node spread-node-4" cx="700" cy="428" r="4" />
          </svg>

          <span className="spread-note spread-note-1" aria-hidden="true">
            Search demand
          </span>
          <span className="spread-note spread-note-2" aria-hidden="true">
            Deeper content
          </span>
          <span className="spread-note spread-note-3" aria-hidden="true">
            Distribution
          </span>

          {/* ── Blog ── */}
          <div className="spread-block spread-blog-text">
            <h3 className="spread-format">Blog</h3>
            <p className="spread-lede">Capture search demand.</p>
            <p className="spread-copy">
              Answer what your customers are already searching for.
            </p>
          </div>

          <div className="spread-art spread-blog-art" aria-hidden="true">
            <div className="art-query">
              <Search className="art-query-icon" />
              <span>organic seo strategies</span>
            </div>
            <p className="art-headline">
              10 Organic SEO Strategies That Actually Work
            </p>
            <div className="art-lines">
              <i />
              <i />
              <i />
              <i />
            </div>
            <div className="art-rank">
              <ArrowUpRight className="art-rank-icon" />
              <span>#4</span>
              <b>+6</b>
            </div>
          </div>

          {/* ── Ebook ── */}
          <div className="spread-art spread-ebook-art" aria-hidden="true">
            <span className="art-book-spine" />
            <span className="art-book-pages" />
            <span className="art-cover-kicker">The practical guide</span>
            <p className="art-cover-title">
              Content
              <br />
              that
              <br />
              compounds
            </p>
            <div className="art-cover-rule" />
            <span className="art-cover-foot">Project RankUp</span>
          </div>

          <div className="spread-block spread-ebook-text">
            <h3 className="spread-format">Ebook</h3>
            <p className="spread-lede">Turn interest into leads.</p>
            <p className="spread-copy">
              Go deeper on valuable topics and give interested visitors
              something worth downloading.
            </p>
          </div>

          {/* ── Whitepaper ── */}
          <div className="spread-block spread-paper-text">
            <h3 className="spread-format">Whitepaper</h3>
            <p className="spread-lede">Build authority.</p>
            <p className="spread-copy">
              Turn original research and expertise into something buyers trust.
            </p>
          </div>

          <div className="spread-art spread-paper-art" aria-hidden="true">
            <div className="art-doc-bar">
              <span>Research summary</span>
              <b>Verified</b>
            </div>
            <div className="art-doc-chart">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
            <span className="art-doc-label">Key finding</span>
            <p className="art-doc-finding">
              Demand is shifting toward specific, expert-led answers.
            </p>
          </div>

          {/* ── LinkedIn ── */}
          <div className="spread-art spread-social-art" aria-hidden="true">
            <div className="art-social-head">
              <span className="art-avatar">R</span>
              <div>
                <b>RankUp</b>
                <i>2h ago</i>
              </div>
            </div>
            <p className="art-social-copy">
              Small SEO changes can lead to big results. Here are 3 lessons we
              learned this quarter &darr;
            </p>
            <div className="art-social-stats">
              <span>
                <ThumbsUp className="art-social-icon" />
                214
              </span>
              <span>
                <MessageCircle className="art-social-icon" />
                38
              </span>
              <span>
                <Repeat2 className="art-social-icon" />
                12
              </span>
            </div>
          </div>

          <div className="spread-block spread-social-text">
            <h3 className="spread-format">LinkedIn</h3>
            <p className="spread-lede">Extend your reach.</p>
            <p className="spread-copy">
              Turn useful insights into conversations where your audience
              already spends time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
