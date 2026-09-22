"use client";

import Image from "next/image";
import { useRef } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiShopify, SiStrapi, SiWordpress } from "react-icons/si";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { assets } from "@/content/landing";
import { cn } from "@/lib/utils";

/* ─── individual icon node ─── */
function PlatformNode({
  nodeRef,
  icon: Icon,
  label,
  colorRgb,
  className,
}: {
  nodeRef: React.RefObject<HTMLDivElement | null>;
  icon: React.ElementType;
  label: string;
  colorRgb: string;
  className?: string;
}) {
  return (
    <div
      ref={nodeRef}
      className={cn("conn-node", className)}
      style={{ "--node-rgb": colorRgb } as React.CSSProperties}
    >
      <span className="conn-node-icon">
        <Icon />
      </span>
      <strong className="conn-node-label">{label}</strong>
    </div>
  );
}

/* ─── RankUp hub node (center) ─── */
function HubNode({ hubRef }: { hubRef: React.RefObject<HTMLDivElement | null> }) {
  return (
    <div ref={hubRef} className="conn-hub">
      <span className="conn-hub-icon">
        <Image src={assets.rankupMark} alt="Project Rankup" width={28} height={28} />
      </span>
    </div>
  );
}

/* ─── main exported component ─── */
export function ConnectionsBeam() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hubRef = useRef<HTMLDivElement>(null);

  // Left column refs
  const linkedInRef = useRef<HTMLDivElement>(null);
  const wordpressRef = useRef<HTMLDivElement>(null);

  // Right column refs
  const shopifyRef = useRef<HTMLDivElement>(null);
  const strapiRef = useRef<HTMLDivElement>(null);

  const beamProps = {
    containerRef,
    toRef: hubRef,
    pathColor: "#d1d5db",
    pathWidth: 1.5,
    pathOpacity: 0.35,
    gradientStartColor: "#818cf8",
    gradientStopColor: "#6366f1",
    duration: 4,
    curvature: 0,
  };

  return (
    <div ref={containerRef} className="conn-container" aria-label="Publishing platforms">
      {/* ── Left column ── */}
      <div className="conn-col conn-col-left z-30">
        <PlatformNode
          nodeRef={linkedInRef}
          icon={FaLinkedinIn}
          label="LinkedIn"
          colorRgb="10 102 194"
        />
        <PlatformNode
          nodeRef={wordpressRef}
          icon={SiWordpress}
          label="WordPress"
          colorRgb="33 117 155"
        />
      </div>

      {/* ── Centre: text + invisible hub dot ── */}
      <div className="conn-center">
        <h2 id="connections-title" className="conn-heading">
          Publish in just one click.
        </h2>
        <p className="conn-body">
          Connect the platforms you already use, and RankUp will handle
          publishing your content for you.
        </p>
        {/* tiny hub that beams anchor to */}
        <HubNode hubRef={hubRef} />
      </div>

      {/* ── Right column ── */}
      <div className="conn-col conn-col-right z-30">
        <PlatformNode
          nodeRef={shopifyRef}
          icon={SiShopify}
          label="Shopify"
          colorRgb="86 135 36"
        />
        <PlatformNode
          nodeRef={strapiRef}
          icon={SiStrapi}
          label="Strapi"
          colorRgb="73 69 255"
        />
      </div>

      {/* ── Animated beams ── */}
      <AnimatedBeam {...beamProps} fromRef={linkedInRef} curvature={-30} delay={0} />
      <AnimatedBeam {...beamProps} fromRef={wordpressRef} curvature={30} delay={0.8} />
      <AnimatedBeam {...beamProps} fromRef={shopifyRef} curvature={-30} delay={0.4} reverse />
      <AnimatedBeam {...beamProps} fromRef={strapiRef} curvature={30} delay={1.2} reverse />
    </div>
  );
}
