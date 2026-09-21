"use client";

import { useEffect } from "react";

export function LandingEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const numberFormatter = new Intl.NumberFormat("en-US");

    const formatNumber = (value: number, format: string | null) => {
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
    countTargets.forEach(({ element, format }) => {
      element.textContent = formatNumber(0, format);
    });

    let countFrame = 0;
    let countStarted = false;
    const renderCounts = (progress: number) => {
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      dashboard?.style.setProperty("--hero-progress", easedProgress.toFixed(3));
      countTargets.forEach(({ element, format, target }) => {
        element.textContent = formatNumber(target * easedProgress, format);
      });
    };
    const startCountAnimation = () => {
      if (countStarted) return;
      countStarted = true;

      if (reducedMotion) {
        renderCounts(1);
        return;
      }

      const duration = 900;
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min(1, (now - start) / duration);
        renderCounts(progress);

        if (progress < 1) {
          countFrame = requestAnimationFrame(tick);
        }
      };

      countFrame = requestAnimationFrame(tick);
    };
    const countObserver =
      dashboard && countTargets.length > 0
        ? new IntersectionObserver(
            (entries) => {
              if (entries.some((entry) => entry.isIntersecting)) {
                startCountAnimation();
                countObserver?.disconnect();
              }
            },
            { rootMargin: "0px 0px -18%", threshold: 0.35 },
          )
        : null;

    if (countObserver && dashboard) {
      countObserver.observe(dashboard);
    } else {
      startCountAnimation();
    }

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
        ".tactile-card, .overload-section, .final-echo-section",
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
      cancelAnimationFrame(countFrame);
      countObserver?.disconnect();
      observer.disconnect();
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return null;
}
