"use client";

import { useEffect, useState } from "react";

const whatsappUrl =
  "https://wa.me/94751825676?text=Hi%20Career%20Draft%2C%20I%20would%20like%20help%20with%20my%20CV.";

type IconName = "home" | "services" | "samples" | "contact" | "message";

function DockIcon({ name }: { name: IconName }) {
  if (name === "home") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M3.5 10.4 12 3.5l8.5 6.9v9.1a1 1 0 0 1-1 1h-5v-6h-5v6h-5a1 1 0 0 1-1-1v-9.1Z" />
      </svg>
    );
  }

  if (name === "services") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 7V5.8A1.8 1.8 0 0 1 9.8 4h4.4A1.8 1.8 0 0 1 16 5.8V7" />
        <path d="M4.3 7h15.4A1.3 1.3 0 0 1 21 8.3v9.9a1.8 1.8 0 0 1-1.8 1.8H4.8A1.8 1.8 0 0 1 3 18.2V8.3A1.3 1.3 0 0 1 4.3 7Z" />
        <path d="M3 12.2c5.7 2 12.3 2 18 0M10 13h4" />
      </svg>
    );
  }

  if (name === "samples") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 3.5h7.2L19 8.3v12.2H7a2 2 0 0 1-2-2v-13a2 2 0 0 1 2-2Z" />
        <path d="M14 3.8V9h4.8M8.5 13h7M8.5 16.5h5" />
      </svg>
    );
  }

  if (name === "contact") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 11.4a8.2 8.2 0 0 1-8.4 8.1 9.5 9.5 0 0 1-3.3-.6L4 20l1.2-4.4a8 8 0 0 1-1.7-4.9 8.2 8.2 0 0 1 8.4-8.1 8.2 8.2 0 0 1 8.6 8.8Z" />
        <path d="M8.2 9.8h.1M12 9.8h.1M15.8 9.8h.1" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.2 4.2 3.8 10.7c-.8.3-.8 1.4.1 1.7l6.4 2.1 2.1 6.2c.3.9 1.5.9 1.8.1l6.7-15.4c.3-.8-.1-1.5-.7-1.2Z" />
      <path d="m10.4 14.3 4.2-4.1" />
    </svg>
  );
}

const items = [
  { href: "#top", label: "Home", icon: "home" as IconName },
  { href: "#services", label: "Services", icon: "services" as IconName },
  { href: "#samples", label: "CV Samples", icon: "samples" as IconName },
  { href: "#contact", label: "Contact", icon: "contact" as IconName },
];

export default function BottomDock() {
  const [active, setActive] = useState("#top");
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        setCompact(window.scrollY > 120);
        frame = 0;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = items
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-28% 0px -55% 0px", threshold: [0, 0.15, 0.35] },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav className={`career-dock${compact ? " is-compact" : ""}`} aria-label="Career Draft quick navigation">
      <div className="career-dock-shell">
        <div className="career-dock-side career-dock-left">
          {items.slice(0, 2).map((item) => (
            <a
              key={item.href}
              className={`career-dock-item${active === item.href ? " is-active" : ""}`}
              href={item.href}
              aria-label={item.label}
              data-tooltip={item.label}
            >
              <DockIcon name={item.icon} />
            </a>
          ))}
        </div>

        <a
          className="career-dock-center"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Order your CV on WhatsApp"
        >
          <span className="career-dock-accent career-dock-accent-top" aria-hidden="true" />
          <DockIcon name="message" />
          <strong>Order</strong>
          <span className="career-dock-accent career-dock-accent-bottom" aria-hidden="true" />
        </a>

        <div className="career-dock-side career-dock-right">
          {items.slice(2).map((item) => (
            <a
              key={item.href}
              className={`career-dock-item${active === item.href ? " is-active" : ""}`}
              href={item.href}
              aria-label={item.label}
              data-tooltip={item.label}
            >
              <DockIcon name={item.icon} />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
