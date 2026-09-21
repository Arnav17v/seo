"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Search,
  ListFilter,
  CalendarDays,
  FileText,
  ChartNoAxesCombined,
  RefreshCw,
  ArrowUpRight,
} from "lucide-react";
import { stages } from "@/content/landing";
import { ProductStates } from "./product-states";
const icons = [
  Search,
  ListFilter,
  CalendarDays,
  FileText,
  ChartNoAxesCombined,
  RefreshCw,
];

export function GrowthLoop() {
  const root = useRef<HTMLDivElement>(null);
  const panel = useRef<HTMLDivElement>(null);
  const engine = useRef<typeof import("gsap").gsap | null>(null);
  const [active, setActive] = useState(0);
  const [mode, setMode] = useState<
    "static" | "desktop" | "discrete" | "reduced"
  >("static");
  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};
    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ gsap }, { ScrollTrigger }]) => {
        if (disposed) return;
        gsap.registerPlugin(ScrollTrigger);
        engine.current = gsap;
        const media = gsap.matchMedia();
        media.add(
          {
            desktop: "(min-width: 1100px) and (min-height: 760px)",
            reduced: "(prefers-reduced-motion: reduce)",
            all: "all",
          },
          (context) => {
            const { desktop, reduced } = context.conditions!;
            setMode(reduced ? "reduced" : desktop ? "desktop" : "discrete");
            if (reduced || !desktop) return;
            // Reversible scroll narrative; direct navigation never depends on completing it.
            let previous = -1;
            ScrollTrigger.create({
              id: "growth-loop",
              trigger: root.current,
              start: "top 200px",
              end: () =>
                `+=${
                  ((root.current?.closest(".goal-loop-section") as HTMLElement | null)
                    ?.offsetHeight ?? 1200) - 300
                }`,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                const next = Math.min(5, Math.floor(self.progress * 6));
                if (next !== previous) {
                  previous = next;
                  setActive(next);
                }
              },
            });
          },
          root,
        );
        cleanup = () => {
          media.revert();
          engine.current = null;
        };
      },
    );
    return () => {
      disposed = true;
      cleanup();
    };
  }, []);
  useLayoutEffect(() => {
    const gsap = engine.current;
    if (!gsap || mode === "reduced" || mode === "static" || !panel.current)
      return;
    const context = gsap.context(() => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline.fromTo(
        panel.current,
        { y: 18, opacity: 0.25 },
        { y: 0, opacity: 1, duration: 0.6 },
      );
      timeline.fromTo(
        ".product-state > :not(.product-title):not(.product-bottom)",
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.06, duration: 0.65 },
        0.08,
      );
      const bars = panel.current?.querySelectorAll(".chart-bars i");
      if (bars?.length)
        timeline.fromTo(
          bars,
          { scaleY: 0, transformOrigin: "bottom" },
          { scaleY: 1, stagger: 0.018, duration: 0.8 },
          0.12,
        );
    }, panel);
    return () => context.revert();
  }, [active, mode]);
  return (
    <div
      className="growth-loop wrap"
      ref={root}
      data-active-stage={stages[active].name}
      data-motion={mode}
    >
      <div className="loop-intro">
        <span>
          <span className="tiny-dot" /> ONE OPPORTUNITY. EVERY NEXT STEP.
        </span>
        <span className="demo-label">Illustrative product walkthrough</span>
      </div>
      <div className="loop-shell">
        <aside className="app-sidebar" aria-hidden="true">
          <div className="workspace-monogram">R</div>
          <span className="workspace-name">
            Rankup Studio <span>Workspace consulting</span>
          </span>
          <div className="sidebar-rule" />
          {stages.map((s, i) => {
            const Icon = icons[i];
            return (
              <div
                key={s.name}
                className={`sidebar-item ${i === active ? "is-active" : ""}`}
              >
                <Icon size={14} />
                <span>{s.detail}</span>
              </div>
            );
          })}
          <div className="sidebar-project">
            <span className="tiny-dot" /> Project context connected
          </div>
        </aside>
        <div className="main-product">
          <div className="product-chrome">
            <span>
              Rankup Studio <span className="slash">/</span>{" "}
              {stages[active].detail}
            </span>
            <span className="avatar">R</span>
          </div>
          <div className="product-stage-window">
            <div ref={panel} className="animated-panel">
              <ProductStates stage={active} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="loop-controls"
        role="tablist"
        aria-label="Growth Loop stages"
      >
        {stages.map((s, i) => (
          <button
            key={s.name}
            role="tab"
            tabIndex={active === i ? 0 : -1}
            aria-selected={active === i}
            aria-controls="stage-description"
            id={`stage-${i}`}
            className={active === i ? "stage-tab active" : "stage-tab"}
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              const next =
                e.key === "Home"
                  ? 0
                  : e.key === "End"
                    ? 5
                    : e.key === "ArrowRight"
                      ? (i + 1) % 6
                      : e.key === "ArrowLeft"
                        ? (i + 5) % 6
                        : null;
              if (next !== null) {
                e.preventDefault();
                setActive(next);
                document.getElementById(`stage-${next}`)?.focus();
              }
            }}
          >
            <span className="stage-number">0{i + 1}</span>
            <span>{s.name}</span>
            <span className="tab-track" />
          </button>
        ))}
      </div>
      <div className="loop-caption">
        <div
          id="stage-description"
          role="tabpanel"
          tabIndex={0}
          aria-labelledby={`stage-${active}`}
        >
          <strong>{stages[active].title}</strong>
          <p>{stages[active].description}</p>
        </div>
        <span className="loop-counter">0{active + 1} / 06</span>
      </div>
      <div className={`loop-close ${active === 5 ? "is-complete" : ""}`}>
        <RefreshCw size={13} />
        <span>Every improvement informs the next opportunity.</span>
        <ArrowUpRight size={13} />
      </div>
    </div>
  );
}
