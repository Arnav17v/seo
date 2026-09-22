"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { Search, FileText, BarChart3, RefreshCw } from "lucide-react";
import { Ripple } from "@/components/ui/ripple";
import { assets } from "@/content/landing";

// One full turn of the loop. The stage circles rotate clockwise at this speed
// and each one counter-rotates at the same speed so its label stays upright.
const ORBIT_DURATION = "60s";

// Stage circles are 144px, so `calc(<ring %> - 72px)` puts their centre — not
// their corner — on the ring. 17% / 83% match the r=198 circle in the 600 viewBox.
const loopStages = [
  {
    id: "discover",
    label: "Discover",
    detail: "Find opportunities",
    icon: Search,
    orbitClass: "md:top-[calc(17%_-_72px)] md:left-[calc(50%_-_72px)]",
  },
  {
    id: "create",
    label: "Create",
    detail: "Publish content",
    icon: FileText,
    orbitClass: "md:top-[calc(50%_-_72px)] md:left-[calc(83%_-_72px)]",
  },
  {
    id: "measure",
    label: "Measure",
    detail: "Track results",
    icon: BarChart3,
    orbitClass: "md:top-[calc(83%_-_72px)] md:left-[calc(50%_-_72px)]",
  },
  {
    id: "improve",
    label: "Improve",
    detail: "Apply what works",
    icon: RefreshCw,
    orbitClass: "md:top-[calc(50%_-_72px)] md:left-[calc(17%_-_72px)]",
  },
];

// Arrowheads at the four 45° points of the ring, rotated to the clockwise
// tangent — they keep the direction readable when motion is reduced.
const flowArrows = [
  { x: 440, y: 160, rotate: 45 },
  { x: 440, y: 440, rotate: 135 },
  { x: 160, y: 440, rotate: 225 },
  { x: 160, y: 160, rotate: 315 },
];

export function CompoundLoop() {
  return (
    <section
      className="relative overflow-hidden bg-white py-20 sm:py-[100px]"
      id="agent-mode"
      aria-labelledby="compound-title"
    >
      <div className="wrap relative grid items-center gap-14 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        {/* ── Left column: copy ── */}
        <div className="flex flex-col items-start">
          <span className="text-[11px] font-semibold tracking-[0.14em] text-indigo-600 uppercase">
            The compounding loop
          </span>

          <h2
            id="compound-title"
            className="mt-4 max-w-[460px] text-balance text-4xl font-semibold tracking-tight text-[#0a0d1d] sm:text-5xl lg:text-[56px] lg:leading-[1.05]"
          >
            The loop compounds as the system learns.
          </h2>

          <p className="mt-5 max-w-[460px] text-base leading-relaxed text-slate-600 sm:text-[17px]">
            Discoveries, content, and performance signals feed the next
            opportunity instead of disappearing into separate tools.
          </p>

          <p className="mt-4 flex max-w-[460px] flex-wrap items-center gap-x-2 gap-y-1.5 text-[13.5px] leading-relaxed text-slate-500">
            <span className="rounded-full border border-slate-200 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-slate-600 uppercase">
              Coming soon
            </span>
            Agent Mode will run more of this loop for you.
          </p>
        </div>

        {/* ── Right column: the loop ──
            Below md this is a plain 2×2 grid of circles; from md up the same
            circles are placed on the ring and orbit. One DOM, no duplication. */}
        <div className="relative mx-auto grid w-full max-w-[320px] grid-cols-2 gap-5 md:block md:aspect-square md:max-w-[520px]">
          {/* Subtle pulse behind the hub. Overriding --foreground tints the
              ripple indigo; the inline mask keeps the fade centred. */}
          <Ripple
            className="z-0 hidden md:block"
            mainCircleSize={120}
            mainCircleOpacity={0.14}
            numCircles={3}
            style={
              {
                "--foreground": "#6366f1",
                "--duration": "6s",
                maskImage: "radial-gradient(circle, white, transparent 70%)",
                WebkitMaskImage:
                  "radial-gradient(circle, white, transparent 70%)",
              } as CSSProperties
            }
          />

          {/* Static track + direction arrows */}
          <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            viewBox="0 0 600 600"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="300"
              cy="300"
              r="198"
              stroke="#c7d2fe"
              strokeWidth="1.5"
            />
            {flowArrows.map(({ x, y, rotate }) => (
              <path
                key={`${x}-${y}`}
                d="M -5 -3 L 0 0 L -5 3"
                transform={`translate(${x}, ${y}) rotate(${rotate})`}
                stroke="#818cf8"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}
          </svg>

          {/* Centre hub */}
          <div className="absolute top-1/2 left-1/2 z-10 hidden h-[128px] w-[128px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-indigo-100 bg-white p-4 text-center shadow-[0_10px_30px_rgba(15,23,42,0.06)] md:flex">
            <Image
              src={assets.rankupMark}
              alt=""
              width={32}
              height={32}
              className="rounded-lg"
            />
            <strong className="mt-2 text-[13px] font-bold tracking-[0.12em] text-slate-900 uppercase">
              RANK<span className="text-indigo-600">UP</span>
            </strong>
          </div>

          {/* Orbit carrier: `contents` on mobile so the circles stay grid items */}
          <div
            className="contents md:absolute md:inset-0 md:z-20 md:block md:animate-spin"
            style={{ animationDuration: ORBIT_DURATION }}
          >
            {loopStages.map(({ id, label, detail, icon: Icon, orbitClass }) => (
              <div
                key={id}
                className={`mx-auto flex h-[144px] w-[144px] flex-col items-center justify-center rounded-full border border-slate-200 bg-white px-5 text-center shadow-[0_8px_24px_-6px_rgba(15,23,42,0.1)] md:absolute md:animate-spin ${orbitClass}`}
                style={{
                  animationDuration: ORBIT_DURATION,
                  animationDirection: "reverse",
                }}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
                  <Icon size={18} />
                </div>
                <strong className="mt-2.5 block text-[14px] font-semibold text-slate-900">
                  {label}
                </strong>
                <span className="mt-1 block text-[11.5px] leading-snug text-slate-500">
                  {detail}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
