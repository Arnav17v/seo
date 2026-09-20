import {
  Search,
  ArrowUpRight,
  Check,
  CalendarDays,
  FileText,
  Link2,
  Globe,
  ChevronDown,
  CircleCheck,
  SlidersHorizontal,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

export function ProductStates({ stage }: { stage: number }) {
  return (
    <div className="product-state" data-product-state={stage}>
      {stage === 0 && (
        <>
          <div className="product-title">
            <div>
              <span className="app-breadcrumb">KEYWORD DISCOVERY</span>
              <strong className="mock-title">Find your next opportunity</strong>
            </div>
            <span className="ui-chip">
              <Globe size={12} /> Northstar Studio
            </span>
          </div>
          <div className="app-tabs">
            <span className="selected">Organic keywords</span>
            <span>Competitor keywords</span>
            <span>Search Console</span>
          </div>
          <div className="table-tools">
            <span>
              <Search size={13} /> workspace planning
            </span>
            <SlidersHorizontal size={14} />
          </div>
          <div className="keyword-table">
            <div className="table-row table-head">
              <span>Keyword</span>
              <span>Intent</span>
              <span>Fit</span>
            </div>
            {[
              "workspace planning guide",
              "office space planning",
              "hybrid workspace design",
            ].map((word, i) => (
              <div
                className={`table-row ${i === 0 ? "highlight-row" : ""}`}
                key={word}
              >
                <span>
                  <span className="row-check">
                    {i === 0 && <Check size={10} />}
                  </span>
                  {word}
                </span>
                <span className="intent">
                  {i === 1 ? "Commercial" : "Informational"}
                </span>
                <span className="fit">
                  <i style={{ width: `${80 - i * 13}%` }} />
                </span>
              </div>
            ))}
          </div>
          <div className="product-bottom">
            <span>
              <span className="tiny-dot" /> Opportunity found
            </span>
            <span>
              Evaluate opportunity <ArrowRight size={12} />
            </span>
          </div>
        </>
      )}
      {stage === 1 && (
        <>
          <div className="product-title">
            <div>
              <span className="app-breadcrumb">OPPORTUNITY REVIEW</span>
              <strong className="mock-title">Choose what matters next</strong>
            </div>
            <span className="ui-chip">Keyword discovery</span>
          </div>
          <div className="opportunity-keyword">
            <Search size={18} />
            <span>workspace planning guide</span>
            <span className="intent">Informational</span>
          </div>
          <div className="evidence-grid">
            <div>
              <span>Search intent</span>
              <strong>Learn & explore</strong>
              <p>People looking for practical guidance.</p>
            </div>
            <div>
              <span>Business relevance</span>
              <strong>Core expertise</strong>
              <p>Aligned with workspace consulting.</p>
            </div>
            <div>
              <span>Content format</span>
              <strong>Blog article</strong>
              <p>A guide with room for useful detail.</p>
            </div>
          </div>
          <div className="context-note">
            <Check size={16} />
            <div>
              <strong>A topic worth planning</strong>
              <p>Relevant to your audience. Room to share what you know.</p>
            </div>
          </div>
          <div className="product-bottom">
            <span>Northstar Studio</span>
            <span className="ui-primary">
              Add to content plan <ArrowRight size={12} />
            </span>
          </div>
        </>
      )}
      {stage === 2 && (
        <>
          <div className="product-title">
            <div>
              
              <strong className="mock-title">A plan you can work from</strong>
            </div>
            <span className="ui-chip">
              <CalendarDays size={12} /> October
            </span>
          </div>
          <div className="calendar-grid">
            {["MON", "TUE", "WED", "THU", "FRI"].map((d) => (
              <span className="calendar-day" key={d}>
                {d}
              </span>
            ))}
            {[12, 13, 14, 15, 16, 19, 20, 21, 22, 23].map((date, i) => (
              <div
                className={`calendar-cell ${i === 2 ? "scheduled-cell" : ""}`}
                key={date}
              >
                <span>{date}</span>
                {i === 2 && (
                  <div className="calendar-item">
                    <FileText size={12} />
                    <strong>Workspace planning guide</strong>
                    <small>Blog article</small>
                    <span className="planned-label">Planned</span>
                  </div>
                )}
                {i === 6 && (
                  <div className="calendar-quiet">Editorial review</div>
                )}
              </div>
            ))}
          </div>
          <div className="product-bottom">
            <span>
              <Check size={12} /> Added to your calendar
            </span>
            <span>
              Prepare content <ArrowRight size={12} />
            </span>
          </div>
        </>
      )}
      {stage === 3 && (
        <>
          <div className="product-title">
            <div>
              <span className="app-breadcrumb">CONTENT STUDIO</span>
              <strong className="mock-title">
                Bring your context to the page
              </strong>
            </div>
            <span className="ui-chip">Blog article</span>
          </div>
          <div className="editor-grid">
            <div className="editor-paper">
              <span className="doc-label">CONTENT BRIEF</span>
              <strong className="document-heading">
                A practical guide to workspace planning
              </strong>
              <p>Build a workspace around the people who use it.</p>
              <div className="document-lines">
                <i />
                <i />
                <i />
                <i />
              </div>
              <strong className="document-subhead">
                Start with how your team works
              </strong>
              <div className="document-lines short">
                <i />
                <i />
                <i />
              </div>
            </div>
            <aside className="context-panel">
              <span>PROJECT CONTEXT</span>
              <p>
                <CircleCheck size={13} /> Target audience
              </p>
              <p>
                <CircleCheck size={13} /> Brand brief
              </p>
              <p>
                <CircleCheck size={13} /> Live research
              </p>
              <p>
                <Link2 size={13} /> Internal links
              </p>
              <div className="context-tone">
                Tone<strong>Clear & educational</strong>
              </div>
            </aside>
          </div>
          <div className="product-bottom">
            <span>workspace planning guide</span>
            <span>
              Review & create <ArrowRight size={12} />
            </span>
          </div>
        </>
      )}
      {stage === 4 && (
        <>
          <div className="product-title">
            <div>
              <span className="app-breadcrumb">RANK TRACKER</span>
              <strong className="mock-title">
                Listen to what search tells you
              </strong>
            </div>
            <span className="ui-chip">
              28 days <ChevronDown size={12} />
            </span>
          </div>
          <div className="metric-labels">
            <div>
              <span className="metric-dot" />
              Clicks<strong>Search activity</strong>
            </div>
            <div>
              <span className="metric-dot green" />
              Impressions<strong>Content visibility</strong>
            </div>
            <span className="example-label">Illustrative data</span>
          </div>
          <div
            className="chart"
            role="img"
            aria-label="Illustrative search activity chart, not customer results"
          >
            <div className="chart-grid" />
            <div className="chart-bars">
              {[
                22, 35, 28, 42, 38, 30, 49, 55, 43, 59, 51, 66, 61, 57, 73, 66,
                79, 69, 84, 80, 74, 90, 83, 94,
              ].map((h, i) => (
                <i key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="chart-axis">
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Week 3</span>
              <span>Week 4</span>
            </div>
          </div>
          <div className="product-bottom">
            <span>
              <Globe size={12} /> Google Search Console
            </span>
            <span>
              Review content <ArrowRight size={12} />
            </span>
          </div>
        </>
      )}
      {stage === 5 && (
        <>
          <div className="product-title">
            <div>
              <span className="app-breadcrumb">CONTENT AUDIT</span>
              <strong className="mock-title">
                The next improvement is in view
              </strong>
            </div>
            <span className="ui-chip">
              <ShieldCheck size={12} /> Page review
            </span>
          </div>
          <div className="audit-document">
            <FileText size={20} />
            <div>
              <strong>Workspace planning guide</strong>
              <span>Northstar Studio / Journal</span>
            </div>
            <ArrowUpRight size={16} />
          </div>
          <div className="audit-list">
            <div>
              <span className="audit-marker amber" />
              <span>
                <strong>Add supporting detail</strong>
                <small>Expand the practical examples in your guide.</small>
              </span>
              <span className="audit-kind">Content</span>
            </div>
            <div>
              <span className="audit-marker" />
              <span>
                <strong>Connect related pages</strong>
                <small>
                  Use relevant internal links to help readers explore.
                </small>
              </span>
              <span className="audit-kind">Links</span>
            </div>
            <div>
              <span className="audit-marker green" />
              <span>
                <strong>Keep the audience in focus</strong>
                <small>Carry your project context into the next version.</small>
              </span>
              <span className="audit-kind">Context</span>
            </div>
          </div>
          <div className="product-bottom">
            <span>
              <TrendingUp size={12} /> A clear next step
            </span>
            <span>
              Back to the growth loop <ArrowRight size={12} />
            </span>
          </div>
        </>
      )}
    </div>
  );
}
