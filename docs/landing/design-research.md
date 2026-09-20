# Premium Design and Motion Direction

## Reference hierarchy

1. **Primary:** [Linear](https://linear.app/) for product-led composition, typography, subtle depth, restrained color, information density, transitions, and interaction quality.
2. **Secondary:** [Squarespace](https://www.squarespace.com/) for whitespace, premium presentation, and editorial pacing.
3. **Secondary:** [Stripe](https://stripe.com/) for hierarchy, platform breadth, trust, and evidence.

These are principles to study, not visual templates to clone.

## Desired character

Extremely polished, technical but approachable, restrained, modern, confident, safe, and mature. The page must support a $249/month Pro and $499/month Enterprise product without feeling like a lightweight AI writer.

## Why Linear is the primary reference

- Product UI is the main proof rather than decoration.
- Large compositions make complex workflows understandable without a feature-card wall.
- Restrained color and thin borders allow information density to feel calm.
- Subtle shadows, masks, and layers create depth without visual noise.
- Section transitions change the product story while preserving one coherent visual system.
- Agent behavior is represented as bounded work inside the product.
- Motion explains state and relationship; it is not applied uniformly to every element.

## Visual system direction

- Neutral near-black and warm-white foundations with disciplined contrast.
- Existing indigo used selectively for action, active state, and the energy moving through the workflow.
- Compact product typography paired with confident, literal display headlines.
- Fine borders, limited radii, and shallow depth rather than soft floating cards.
- One large product composition per narrative beat.
- Authentic, purpose-built product states; no fake prompts, generic AI imagery, or abstract glowing brains.
- Full-width bands or unframed layouts for major sections. Cards only for genuinely repeated content.

## Motion reference analysis

The supplied 11-second reference shows a stack of thin outlined planes transforming between compressed, fanned, and peaked arrangements.

What makes it feel expensive:

- **One transformation carries the idea.** The geometry changes state instead of unrelated objects entering and leaving.
- **Sequencing is staggered but cohesive.** Adjacent planes follow one another closely enough to read as a single material system.
- **Acceleration is controlled.** Movement gains momentum, decelerates into the key pose, and reverses without a hard snap.
- **Depth is structural.** Perspective, overlap, and consistent line weight create space without heavy effects.
- **Masking keeps the composition clean.** Elements appear to emerge from and return to a bounded system.
- **Attention has one destination.** Copy remains steady while motion demonstrates the concept beside it.
- **Restraint increases impact.** A dark field, near-monochrome lines, and one interaction make small changes feel significant.

The capture is a phone recording, so exact frame timing and easing curves cannot be inferred reliably. Implementation should pursue the perceived qualities rather than reproduce the object.

## Selected major motion direction

### The Growth Loop

1. **Story:** one opportunity moves through discovery, prioritization, planning, creation, measurement, and an improvement recommendation.
2. **Real capabilities:** keyword discovery, evidence fields, calendar, assisted brief, content generation, rank tracking, and audit.
3. **Visitor takeaway:** Project Rankup is one continuous organic-growth workflow rather than a collection of unrelated AI tools.
4. **Required states:** opportunity discovered, evidence evaluated, opportunity prioritized, plan/calendar placement, content prepared, performance measured, and next improvement identified.
5. **Needed from the founder:** an approved demo keyword/project and believable demo values for every current product state.
6. **Mobile:** a vertically pinned sequence with one stage visible at a time; no miniature desktop dashboard.
7. **Reduced motion:** static six-stage composition with the active stage visually highlighted.
8. **Likely implementation:** React components with CSS transforms/masks and a GSAP timeline; product-state layers use HTML so text remains crisp and responsive.
9. **Performance:** moderate. Limit animated layers, use transform/opacity, lazy-start after hero readiness, and avoid continuous looping.

The loop should close visibly: the improvement state reconnects to discovery without implying that this transition currently happens autonomously.

## Agent Mode — Coming Soon treatment

Agent Mode should be visually exciting without appearing to be shipped UI. Continue the established Growth Loop composition into a distinct future layer:

- Keep today's product states solid, detailed, and interactive.
- Represent the Coming Soon layer as a precise connective signal, progressive trace, or change in continuity across the existing loop.
- Pair the treatment with the fixed label **Agent Mode — Coming Soon**.
- Use only the broad future statement: “Agent Mode will increasingly automate the organic-growth workflow.”
- Do not display invented tasks, controls, schedules, triggers, permissions, approvals, or completed runs.
- Make the visual distinction understandable without relying on animation alone.

## Motion rules

- One hero-level sequence and, at most, one secondary product transition.
- No universal fade-up system, decorative parallax, bouncing icons, cursor theater, or perpetual ambient motion.
- Motion must explain state, causality, or shared context.
- Prefer 600-1100ms transitions for meaningful state changes with shorter 120-220ms response cues.
- Use transform and opacity; tightly limit blur, filters, and large repaints.
- Pause the sequence after the key outcome rather than looping constantly.
- Respect `prefers-reduced-motion` from the first implementation pass.
