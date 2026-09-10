"use client";

import { useEffect, useRef, useState } from "react";

// Content must never be permanently stuck hidden, so this reveals on
// intersection, on immediate visibility, or via a timed fallback —
// whichever happens first.
const FALLBACK_MS = 1200;

export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  ...rest
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      setVisible(true);
    };

    // Safety net: if the observer never reports (throttled tab, unusual
    // browser, or an environment where callbacks don't run), show it anyway.
    const fallback = setTimeout(reveal, FALLBACK_MS);

    if (typeof IntersectionObserver === "undefined") {
      reveal();
      return () => clearTimeout(fallback);
    }

    // Already on screen at mount? Reveal without waiting for a scroll.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      reveal();
      return () => clearTimeout(fallback);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);

    return () => {
      clearTimeout(fallback);
      io.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      data-revealed={visible ? "true" : "false"}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
