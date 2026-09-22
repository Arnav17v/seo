import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { StripedPattern } from "@/components/magicui/striped-pattern";
import {
  WorkflowContext,
  HowItWorks,
  ProductStory,
  MeasureImprove,
  AgentMode,
  Proof,
  FaqAndCta,
  SiteFooter,
} from "@/components/landing/sections";
import { LandingEffects } from "@/components/landing/landing-effects";
export default function Page() {
  return (
    <>
      <LandingEffects />
      <SiteHeader />
      <main id="main">
        <section className="hero-section" aria-label="Project Rankup">
          <StripedPattern className="[mask-image:radial-gradient(ellipse_75%_55%_at_50%_15%,#000_25%,transparent_100%)] text-neutral-600/40 opacity-60 pointer-events-none -z-0" />
          <Hero />
        </section>
        <WorkflowContext />
        <HowItWorks />
        <ProductStory />
        <MeasureImprove />
        <AgentMode />
        <Proof />
        <FaqAndCta />
      </main>
      <SiteFooter />
    </>
  );
}
