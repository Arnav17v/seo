import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { GrowthLoop } from "@/components/landing/growth-loop/growth-loop";
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
        <section
          id="workflow"
          className="goal-loop-section"
          data-motion-section="goal-loop"
          aria-labelledby="goal-loop-title"
        >
          <div className="wrap goal-loop-heading">
            <span>01 / ONE OPPORTUNITY THROUGH THE SYSTEM</span>
            <h2 id="goal-loop-title">
              Give Rankup the goal.
              <br />
              It handles the workflow.
            </h2>
            <p>
              Watch a selected opportunity move from discovery through
              prioritization, planning, content preparation, measurement, and
              improvement.
            </p>
          </div>
          <GrowthLoop />
        </section>
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
