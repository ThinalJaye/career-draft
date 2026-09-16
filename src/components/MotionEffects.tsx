"use client";

import { useEffect } from "react";

export default function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealTargets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const progress = document.querySelector<HTMLElement>(".scroll-progress");
    const floatingNav = document.querySelector<HTMLElement>(".floating-nav");
    const hero = document.querySelector<HTMLElement>(".hero");

    root.classList.add("motion-ready");

    let revealObserver: IntersectionObserver | null = null;
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
    } else {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            revealObserver?.unobserve(entry.target);
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -10% 0px" },
      );
      revealTargets.forEach((target) => revealObserver?.observe(target));
    }

    const navAnchors = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-links a[href^='#']"));
    const sections = navAnchors
      .map((anchor) => anchor.getAttribute("href"))
      .filter((href): href is string => Boolean(href && href.length > 1))
      .map((href) => document.querySelector<HTMLElement>(href))
      .filter((section): section is HTMLElement => Boolean(section));

    let activeObserver: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window && sections.length) {
      activeObserver = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (!visible) return;
          const activeHref = `#${visible.target.id}`;
          navAnchors.forEach((anchor) => anchor.classList.toggle("is-active", anchor.getAttribute("href") === activeHref));
        },
        { rootMargin: "-28% 0px -58% 0px", threshold: [0, 0.15, 0.35] },
      );
      sections.forEach((section) => activeObserver?.observe(section));
    }

    let scrollFrame = 0;
    const updateScroll = () => {
      if (scrollFrame) return;
      scrollFrame = window.requestAnimationFrame(() => {
        const scrollable = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
        const value = Math.min(window.scrollY / scrollable, 1);
        if (progress) progress.style.transform = `scaleX(${value})`;
        floatingNav?.classList.toggle("is-scrolled", window.scrollY > 120);
        scrollFrame = 0;
      });
    };

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });

    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;
    let pointerFrame = 0;
    const updateHeroPointer = (event: PointerEvent) => {
      if (!hero || pointerFrame) return;
      pointerFrame = window.requestAnimationFrame(() => {
        const bounds = hero.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        hero.style.setProperty("--hero-x", `${x * 12}px`);
        hero.style.setProperty("--hero-y", `${y * 10}px`);
        hero.style.setProperty("--hero-tilt-x", `${y * -1.4}deg`);
        hero.style.setProperty("--hero-tilt-y", `${x * 1.8}deg`);
        pointerFrame = 0;
      });
    };

    const resetHeroPointer = () => {
      if (!hero) return;
      hero.style.setProperty("--hero-x", "0px");
      hero.style.setProperty("--hero-y", "0px");
      hero.style.setProperty("--hero-tilt-x", "0deg");
      hero.style.setProperty("--hero-tilt-y", "0deg");
    };

    if (hero && supportsFinePointer && !prefersReducedMotion) {
      hero.addEventListener("pointermove", updateHeroPointer, { passive: true });
      hero.addEventListener("pointerleave", resetHeroPointer);
    }

    return () => {
      revealObserver?.disconnect();
      activeObserver?.disconnect();
      window.removeEventListener("scroll", updateScroll);
      hero?.removeEventListener("pointermove", updateHeroPointer);
      hero?.removeEventListener("pointerleave", resetHeroPointer);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
      if (pointerFrame) window.cancelAnimationFrame(pointerFrame);
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
