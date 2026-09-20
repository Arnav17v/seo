"use client";

import { useEffect } from "react";

export function LandingEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const numberFormatter = new Intl.NumberFormat("en-US");

    const formatScrollNumber = (value: number, format: string | null) => {
      if (format === "compact") {
        return `${(value / 1000).toFixed(value >= 10000 ? 1 : 0)}K`;
      }

      if (format === "currency-compact") {
        return `$${Math.round(value / 1000)}K`;
      }

      return numberFormatter.format(Math.round(value));
    };

    const dashboard = document.querySelector<HTMLElement>(".hero-dashboard");
    const countTargets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-count-to]"),
    ).map((element) => ({
      element,
      format: element.dataset.countFormat ?? null,
      target: Number(element.dataset.countTo ?? "0"),
    }));

    let dashboardFrame = 0;
    const updateDashboardProgress = () => {
      if (!dashboard) return;

      cancelAnimationFrame(dashboardFrame);
      dashboardFrame = requestAnimationFrame(() => {
        const rect = dashboard.getBoundingClientRect();
        const viewport = window.innerHeight || document.documentElement.clientHeight;
        const rawProgress = 1 - rect.top / (viewport * 0.82);
        const progress = reducedMotion
          ? 1
          : Math.min(1, Math.max(0, rawProgress));
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        dashboard.style.setProperty(
          "--hero-progress",
          easedProgress.toFixed(3),
        );

        countTargets.forEach(({ element, format, target }) => {
          element.textContent = formatScrollNumber(target * easedProgress, format);
        });
      });
    };

    updateDashboardProgress();
    window.addEventListener("scroll", updateDashboardProgress, { passive: true });
    window.addEventListener("resize", updateDashboardProgress);

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-motion-section]"),
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { rootMargin: "-18% 0px -24%", threshold: 0.2 },
    );
    sections.forEach((section) => observer.observe(section));

    const pointerTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".hero-product-scene, .tactile-card",
      ),
    );
    const cleanups = pointerTargets.map((target) => {
      if (reducedMotion) return () => {};
      let frame = 0;
      const onMove = (event: PointerEvent) => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          const rect = target.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          target.style.setProperty("--mx", x.toFixed(3));
          target.style.setProperty("--my", y.toFixed(3));
        });
      };
      const onLeave = () => {
        target.style.setProperty("--mx", "0");
        target.style.setProperty("--my", "0");
      };
      target.addEventListener("pointermove", onMove);
      target.addEventListener("pointerleave", onLeave);
      return () => {
        cancelAnimationFrame(frame);
        target.removeEventListener("pointermove", onMove);
        target.removeEventListener("pointerleave", onLeave);
      };
    });

    return () => {
      cancelAnimationFrame(dashboardFrame);
      window.removeEventListener("scroll", updateDashboardProgress);
      window.removeEventListener("resize", updateDashboardProgress);
      observer.disconnect();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
