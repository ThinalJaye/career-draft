"use client";

import { useEffect } from "react";

export default function ExperienceEffects() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const revealElements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    let observer: IntersectionObserver | null = null;

    if (prefersReducedMotion) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
    } else {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          });
        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -8% 0px",
        },
      );

      revealElements.forEach((element) => observer?.observe(element));
    }

    const header = document.querySelector<HTMLElement>(".site-header");
    const progressBar = document.querySelector<HTMLElement>(
      ".scroll-progress__bar",
    );

    let scrollFrame = 0;

    const updateScrollState = () => {
      if (scrollFrame) return;

      scrollFrame = window.requestAnimationFrame(() => {
        const scrollTop = window.scrollY;
        const scrollable = Math.max(
          document.documentElement.scrollHeight - window.innerHeight,
          1,
        );
        const progress = Math.min(scrollTop / scrollable, 1);

        header?.classList.toggle("is-scrolled", scrollTop > 18);

        if (progressBar) {
          progressBar.style.transform = `scaleX(${progress})`;
        }

        scrollFrame = 0;
      });
    };

    window.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();

    const hero = document.querySelector<HTMLElement>(".hero");
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    let pointerFrame = 0;

    const updatePointer = (event: PointerEvent) => {
      if (!hero || pointerFrame) return;

      pointerFrame = window.requestAnimationFrame(() => {
        const bounds = hero.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;

        hero.style.setProperty("--hero-x", `${x * 18}px`);
        hero.style.setProperty("--hero-y", `${y * 14}px`);
        hero.style.setProperty("--hero-tilt-x", `${y * -2.25}deg`);
        hero.style.setProperty("--hero-tilt-y", `${x * 2.75}deg`);
        hero.style.setProperty("--glow-x", `${(x + 0.5) * 100}%`);
        hero.style.setProperty("--glow-y", `${(y + 0.5) * 100}%`);

        pointerFrame = 0;
      });
    };

    const resetPointer = () => {
      if (!hero) return;
      hero.style.setProperty("--hero-x", "0px");
      hero.style.setProperty("--hero-y", "0px");
      hero.style.setProperty("--hero-tilt-x", "0deg");
      hero.style.setProperty("--hero-tilt-y", "0deg");
      hero.style.setProperty("--glow-x", "72%");
      hero.style.setProperty("--glow-y", "30%");
    };

    if (hero && finePointer && !prefersReducedMotion) {
      hero.addEventListener("pointermove", updatePointer, { passive: true });
      hero.addEventListener("pointerleave", resetPointer);
    }

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", updateScrollState);
      hero?.removeEventListener("pointermove", updatePointer);
      hero?.removeEventListener("pointerleave", resetPointer);

      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
    };
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <span className="scroll-progress__bar" />
    </div>
  );
}
