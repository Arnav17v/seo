"use client";

import Image from "next/image";
import {
  ArrowRight,
  Play,
  RotateCw,
  TrendingUp,
  Users,
  Search,
  Globe,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { useState, useEffect, useRef, type CSSProperties } from "react";
import { motion, AnimatePresence } from "motion/react";
import { assets, links } from "@/content/landing";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import { LineShadowText } from "@/components/ui/line-shadow-text";
import { cn } from "@/lib/utils";

const baseMetrics = [
  {
    label: "Visitors",
    baseTarget: 84700,
    boostedTarget: 124800,
    format: "compact" as const,
    change: "+38%",
    boostedChange: "+58%",
    state: "primary",
  },
  {
    label: "Leads",
    baseTarget: 2418,
    boostedTarget: 3892,
    format: "number" as const,
    change: "+24%",
    boostedChange: "+42%",
    state: "",
  },
  {
    label: "Ranked terms",
    baseTarget: 1206,
    boostedTarget: 1840,
    format: "number" as const,
    change: "+19%",
    boostedChange: "+33%",
    state: "",
  },
  {
    label: "Revenue intent",
    baseTarget: 186000,
    boostedTarget: 294000,
    format: "currency-compact" as const,
    change: "+31%",
    boostedChange: "+62%",
    state: "",
  },
];

const visitorBars = [42, 58, 51, 74, 69, 83, 78, 96];
const boostedVisitorBars = [62, 75, 68, 88, 82, 94, 91, 100];

const liveSignals = [
  "workspace planning guide",
  "office layout planning",
  "hybrid workspace design",
];

const visitorStream = [
  { country: "US", source: "Google Organic", query: "seo workflow automation", time: "2s ago", count: "+18" },
  { country: "UK", source: "AI Overviews", query: "enterprise ranking system", time: "5s ago", count: "+34" },
  { country: "DE", source: "Google Organic", query: "programmatic content growth", time: "9s ago", count: "+12" },
  { country: "CA", source: "Direct", query: "projectrankup.com/pricing", time: "14s ago", count: "+6" },
];

const formatMetricValue = (
  numericTarget: number,
  progress: number,
  format: "compact" | "number" | "currency-compact"
) => {
  const currentVal = numericTarget * progress;
  if (format === "compact") {
    return `${(currentVal / 1000).toFixed(currentVal >= 10000 ? 1 : 0)}K`;
  }
  if (format === "currency-compact") {
    return `$${Math.round(currentVal / 1000)}K`;
  }
  return new Intl.NumberFormat("en-US").format(Math.round(currentVal));
};

export function Hero() {
  const [activeView, setActiveView] = useState<"dashboard" | "visitors">("dashboard");
  const [isBoosted, setIsBoosted] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [countProgress, setCountProgress] = useState(1);
  const countAnimRef = useRef<number | null>(null);

  const triggerCountAnimation = (duration = 900) => {
    if (countAnimRef.current) {
      cancelAnimationFrame(countAnimRef.current);
    }
    const start = performance.now();
    setCountProgress(0);

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(1, elapsed / duration);
      // Smooth cubic-out easing curve
      const eased = 1 - Math.pow(1 - progress, 3);
      setCountProgress(eased);

      if (progress < 1) {
        countAnimRef.current = requestAnimationFrame(step);
      }
    };
    countAnimRef.current = requestAnimationFrame(step);
  };

  const [cursorPhase, setCursorPhase] = useState<
    | "center"
    | "to_refresh"
    | "click_refresh"
    | "to_visitors"
    | "click_visitors"
    | "on_visitors_page"
    | "to_refresh_back"
    | "click_refresh_back"
  >("center");
  const [isClicking, setIsClicking] = useState(false);

  // Automated cursor sequence loop
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const runSequence = () => {
      // Step 1: Start at center (1.0s)
      setCursorPhase("center");
      timeout = setTimeout(() => {
        // Step 2: Move smoothly to top-right refresh button (1.3s)
        setCursorPhase("to_refresh");
        timeout = setTimeout(() => {
          // Step 3: Click refresh button & increment numbers from 0
          setIsClicking(true);
          setIsSpinning(true);
          setIsBoosted(true);
          triggerCountAnimation(900);
          setCursorPhase("click_refresh");

          timeout = setTimeout(() => {
            setIsClicking(false);
            setIsSpinning(false);

            // Step 4: Move down to the Visitors card (1.3s)
            setCursorPhase("to_visitors");
            timeout = setTimeout(() => {
              // Step 5: Click on Visitors card
              setIsClicking(true);
              setCursorPhase("click_visitors");

              timeout = setTimeout(() => {
                setIsClicking(false);
                // Step 6: Fade transition into Visitors page & count up big number
                setActiveView("visitors");
                triggerCountAnimation(1000);
                setCursorPhase("on_visitors_page");

                // Stay on Visitors page showing huge number for 3.2s
                timeout = setTimeout(() => {
                  // Step 7: Move to top-right refresh/back button
                  setCursorPhase("to_refresh_back");

                  timeout = setTimeout(() => {
                    // Step 8: Click refresh to return home
                    setIsClicking(true);
                    setIsSpinning(true);
                    setCursorPhase("click_refresh_back");

                    timeout = setTimeout(() => {
                      setIsClicking(false);
                      setIsSpinning(false);
                      setIsBoosted(false);
                      // Fade back to Dashboard view and animate numbers
                      setActiveView("dashboard");
                      triggerCountAnimation(800);
                      setCursorPhase("center");

                      // Loop again after 1s rest
                      timeout = setTimeout(runSequence, 1200);
                    }, 600);
                  }, 1200);
                }, 3200);
              }, 400);
            }, 1200);
          }, 600);
        }, 1300);
      }, 1000);
    };

    runSequence();

    return () => {
      clearTimeout(timeout);
      if (countAnimRef.current) cancelAnimationFrame(countAnimRef.current);
    };
  }, []);

  // Cursor Coordinates mapping based on phase
  const cursorCoords = {
    center: { x: "46%", y: "48%" },
    to_refresh: { x: "94%", y: "4.5%" },
    click_refresh: { x: "94%", y: "4.5%" },
    to_visitors: { x: "24%", y: "24%" },
    click_visitors: { x: "24%", y: "24%" },
    on_visitors_page: { x: "50%", y: "42%" },
    to_refresh_back: { x: "94%", y: "4.5%" },
    click_refresh_back: { x: "94%", y: "4.5%" },
  }[cursorPhase];

  return (
    <div className="hero-grid hero-composition relative overflow-hidden">
      <StripedPattern className="[mask-image:radial-gradient(ellipse_75%_55%_at_50%_15%,#000_25%,transparent_100%)] text-neutral-600/40 opacity-60 pointer-events-none -z-0" />
      <div className="hero-copy relative z-10">
        <h1>
          Turn visibility into{" "}
          <LineShadowText className="italic" shadowColor="#5c55f2">
            growth.
          </LineShadowText>
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

      <div className="hero-product-scene relative" aria-hidden="true">
        <div className="hero-lighting" />
        <div className="product-system-frame relative overflow-hidden">
          {/* Topbar */}
          <div className="system-topbar bg-white/80 border-b border-neutral-200/80">
            <span className="text-neutral-900 font-semibold">
              <Image src={assets.rankupMark} alt="" width={18} height={18} />
              Rankup Studio
            </span>
            <div className="flex items-center gap-3">
              <small className="hidden sm:inline-block text-neutral-500">Opportunity workspace</small>
              {/* Refresh Button on Top Right */}
              <button
                id="hero-refresh-btn"
                onClick={() => {
                  setIsSpinning(true);
                  setIsBoosted((b) => !b);
                  triggerCountAnimation(900);
                  if (activeView === "visitors") setActiveView("dashboard");
                  setTimeout(() => setIsSpinning(false), 700);
                }}
                className={cn(
                  "relative flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono font-medium text-neutral-800 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-300 transition-all duration-300 shadow-xs cursor-pointer",
                  isClicking && (cursorPhase === "click_refresh" || cursorPhase === "click_refresh_back") && "bg-neutral-200 scale-95 border-indigo-500 ring-2 ring-indigo-400/30"
                )}
              >
                <RotateCw
                  className={cn(
                    "size-3.5 text-neutral-700 transition-transform duration-700",
                    isSpinning && "rotate-360 text-indigo-600"
                  )}
                />
                <span className="hidden sm:inline text-neutral-800">Refresh</span>
              </button>
            </div>
          </div>

          <div className="system-body relative bg-white">
            <aside className="system-sidebar bg-neutral-50/50 border-r border-neutral-200/70">
              {[
                { name: "Overview", id: "dashboard" },
                { name: "Keywords", id: "keywords" },
                { name: "Visitors", id: "visitors" },
                { name: "Studio", id: "studio" },
                { name: "Tracker", id: "tracker" },
              ].map((item) => (
                <span
                  className={cn(
                    "transition-all duration-200",
                    (activeView === "visitors" && item.id === "visitors") ||
                    (activeView === "dashboard" && item.id === "Overview")
                      ? "!text-indigo-600 !bg-indigo-50/90 font-semibold shadow-xs"
                      : "!text-neutral-600 hover:!text-neutral-900"
                  )}
                  key={item.name}
                >
                  {item.name}
                </span>
              ))}
            </aside>

            {/* Main Surface with Smooth Fade Transition between Dashboard and Visitors View */}
            <div className="opportunity-surface relative flex-1 min-w-0 bg-white">
              <AnimatePresence mode="wait">
                {activeView === "dashboard" ? (
                  <motion.div
                    key="dashboard-view"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col h-full"
                  >
                    <div className="surface-heading">
                      <span className="mini-label !text-neutral-500 font-mono text-[10px] uppercase tracking-wider block mb-1">
                        Growth dashboard
                      </span>
                      <strong className="!text-neutral-950 font-bold text-2xl leading-tight block">
                        Watch visibility turn into visits, leads, and pipeline.
                      </strong>
                    </div>

                    <div className="opportunity-toolbar !text-neutral-800 !bg-neutral-50/80 !border-neutral-200">
                      <span className="font-semibold text-neutral-800">Rankup Studio</span>
                      <span className="flex items-center gap-1.5 font-medium text-emerald-700">
                        <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        {isBoosted ? "Live Sync Active" : "Last 30 days"}
                      </span>
                    </div>

                    <div className="hero-dashboard">
                      <div className="metric-grid">
                        {baseMetrics.map((item) => {
                          const target = isBoosted ? item.boostedTarget : item.baseTarget;
                          return (
                            <div
                              className={cn(
                                "metric-card transition-all duration-300 !bg-white !border-neutral-200/90 shadow-xs",
                                item.state === "primary" && "!border-indigo-200 !bg-indigo-50/20",
                                item.label === "Visitors" && isClicking && cursorPhase === "click_visitors" && "!ring-2 !ring-indigo-500 scale-[102%] !bg-indigo-50/40"
                              )}
                              key={item.label}
                            >
                              <span className="!text-neutral-500 font-mono text-[10px] uppercase tracking-wider block">
                                {item.label}
                              </span>
                              <strong className="!text-neutral-950 font-extrabold transition-all duration-500 tabular-nums text-3xl">
                                {formatMetricValue(target, countProgress, item.format)}
                              </strong>
                              <small className="!text-emerald-700 !bg-emerald-50 border border-emerald-200/80 font-medium transition-all duration-500">
                                {isBoosted ? item.boostedChange : item.change}
                              </small>
                            </div>
                          );
                        })}
                      </div>

                      <div className="visitor-panel !bg-white !border-neutral-200/90 shadow-xs">
                        <div className="visitor-panel-top">
                          <span>
                            <small className="!text-neutral-500 font-mono text-[10px] uppercase tracking-wider">
                              Live visitors
                            </small>
                            <strong className="!text-neutral-950 font-extrabold tabular-nums text-2xl block mt-0.5">
                              {new Intl.NumberFormat("en-US").format(
                                Math.round((isBoosted ? 19842 : 12486) * countProgress)
                              )}
                            </strong>
                          </span>
                          <span className="growth-pill !text-indigo-700 !bg-indigo-50 border border-indigo-200/80 font-medium">
                            {isBoosted ? "+58% Surge" : "Growing"}
                          </span>
                        </div>
                        <div className="visitor-bars !border-neutral-200">
                          {(isBoosted ? boostedVisitorBars : visitorBars).map((height, index) => (
                            <i
                              key={`${height}-${index}`}
                              style={{ "--bar-height": `${height * countProgress}%` } as CSSProperties}
                            />
                          ))}
                        </div>
                      </div>

                      <div className="live-signal-list">
                        {liveSignals.map((signal, index) => (
                          <span key={signal} className="!text-neutral-800 !bg-white !border-neutral-200 shadow-2xs font-medium">
                            <i className="!bg-indigo-600 !text-white">{index + 1}</i>
                            {signal}
                            <small className="!text-emerald-700 !bg-emerald-50 font-semibold">
                              +{(index + (isBoosted ? 4 : 2)) * 11}% traffic
                            </small>
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="visitors-view"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col h-full gap-5"
                  >
                    <div className="surface-heading mb-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="mini-label !text-indigo-600 font-mono text-xs uppercase tracking-wider font-semibold">
                          Live Traffic Intelligence
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium text-emerald-800 bg-emerald-50 border border-emerald-200">
                          <span className="size-1.5 rounded-full bg-emerald-500 animate-ping" /> Realtime
                        </span>
                      </div>
                      <strong className="!text-neutral-950 font-bold text-2xl sm:text-3xl block">
                        Total Visitors & Audience Reach
                      </strong>
                    </div>

                    {/* REALLY BIG NUMBER DISPLAY */}
                    <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 shadow-md">
                      <div className="flex flex-col gap-1.5">
                        <span className="text-xs font-mono font-semibold text-neutral-500 uppercase tracking-wider">
                          Active Monthly Visitors
                        </span>
                        <div className="flex items-baseline gap-4">
                          <span className="text-6xl sm:text-7xl font-black tracking-tight text-neutral-950 tabular-nums">
                            {new Intl.NumberFormat("en-US").format(Math.round(124860 * countProgress))}
                          </span>
                          <span className="inline-flex items-center text-lg font-bold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-200">
                            <TrendingUp className="mr-1 size-5" /> +58.4%
                          </span>
                        </div>
                        <p className="text-xs text-neutral-600 mt-1 font-medium">
                          +40,160 net-new organic search visitors compared to last cycle
                        </p>
                      </div>

                      {/* Sparkline chart bars */}
                      <div className="mt-5 flex items-end gap-1.5 h-16 w-full pt-2">
                        {[35, 42, 48, 55, 62, 70, 68, 78, 85, 92, 98, 100].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-t-sm bg-gradient-to-t from-indigo-500 to-indigo-600 transition-all duration-500"
                            style={{ height: `${h * countProgress}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Live stream list */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {visitorStream.map((item) => (
                        <div
                          key={item.query}
                          className="flex items-center justify-between p-2.5 rounded-lg border border-neutral-200 bg-white text-xs shadow-2xs"
                        >
                          <div className="flex items-center gap-2 overflow-hidden">
                            <span className="px-1.5 py-0.5 rounded bg-neutral-100 font-mono text-[10px] font-bold text-neutral-800 border border-neutral-200">
                              {item.country}
                            </span>
                            <span className="truncate text-neutral-900 font-medium">{item.query}</span>
                          </div>
                          <span className="font-mono font-bold text-emerald-600 flex-shrink-0 ml-2">
                            {item.count}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Decision sidebar */}
            <div className="decision-layer bg-neutral-50/50 border-l border-neutral-200/80">
              <div className="decision-header">
                <span className="mini-label !text-neutral-500 font-mono text-[10px] uppercase">Momentum</span>
                <span className="decision-score !text-indigo-700 !bg-indigo-50 !border-indigo-200 font-bold">
                  {isBoosted ? "+58%" : "+38%"}
                </span>
              </div>
              <strong className="!text-neutral-950 font-bold block mt-1">Visitor growth is compounding.</strong>
              <p className="!text-neutral-600 text-xs mt-1.5 leading-relaxed">
                Rankings, clicks, and qualified demand move together as the
                content system keeps shipping.
              </p>
              <div className="decision-stack mt-3">
                <span className="!text-neutral-800 !bg-white !border-neutral-200 font-medium">
                  <small className="!text-neutral-500 font-mono">Top channel</small>
                  Organic search
                </span>
                <span className="!text-neutral-800 !bg-white !border-neutral-200 font-medium">
                  <small className="!text-neutral-500 font-mono">Conversion</small>
                  {isBoosted ? "11.4%" : "8.6%"}
                </span>
                <span className="!text-neutral-800 !bg-white !border-neutral-200 font-medium">
                  <small className="!text-neutral-500 font-mono">Pipeline lift</small>
                  {isBoosted ? "$64K this month" : "$42K this month"}
                </span>
              </div>
              <div className="decision-next !text-neutral-900 !bg-neutral-100/80 !border-neutral-200">
                <span className="!text-neutral-500 font-mono">Next step</span>
                <strong className="!text-neutral-950">Double down on winners</strong>
              </div>
            </div>
          </div>

          {/* SIMULATED ANIMATED CURSOR */}
          <motion.div
            className="pointer-events-none absolute z-50 transition-transform duration-100"
            initial={{ left: "46%", top: "48%" }}
            animate={{
              left: cursorCoords.x,
              top: cursorCoords.y,
            }}
            transition={{
              duration: 1.1,
              ease: [0.25, 1, 0.5, 1], // Natural cubic-bezier mouse trajectory easing
            }}
          >
            {/* Click Ripple Effect */}
            {isClicking && (
              <motion.div
                initial={{ scale: 0.4, opacity: 0.9 }}
                animate={{ scale: 2.2, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute -top-3 -left-3 size-8 rounded-full bg-indigo-400/40 ring-2 ring-indigo-400"
              />
            )}

            {/* SVG Mouse Pointer */}
            <motion.div
              animate={{
                scale: isClicking ? 0.82 : 1,
              }}
              transition={{ duration: 0.15 }}
              className="relative drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 3.5L18.5 10.5L11.5 12.5L8.5 19.5L5.5 3.5Z"
                  fill="#5c55f2"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

