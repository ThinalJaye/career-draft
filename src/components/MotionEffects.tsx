"use client";

import { useEffect } from "react";

export default function MotionEffects() {
  useEffect(() => {
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const progress = document.querySelector<HTMLElement>(".scroll-progress");

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
      );

      revealTargets.forEach((target) => observer.observe(target));

      const updateProgress = () => {
        if (!progress) return;
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const value = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
        progress.style.transform = `scaleX(${value})`;
      };

      let frame = 0;
      const onScroll = () => {
        if (frame) return;
        frame = window.requestAnimationFrame(() => {
          updateProgress();
          frame = 0;
        });
      };

      updateProgress();
      window.addEventListener("scroll", onScroll, { passive: true });

      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", onScroll);
        if (frame) window.cancelAnimationFrame(frame);
      };
    }

    revealTargets.forEach((target) => target.classList.add("is-visible"));
  }, []);

  return null;
}
