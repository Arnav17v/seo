import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import {
  WorkflowContext,
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
          <Hero />
        </section>
        <WorkflowContext />
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
