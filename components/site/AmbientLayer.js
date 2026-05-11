"use client";

import { motion, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

import CopyDomainButton from "./CopyDomainButton";

export default function AmbientLayer({
  progress,
  gridY,
  scanY,
  scanOpacity,
  chaosMode,
  pulseMode,
  labels,
  navItems,
  onOpenSecret,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(progress, "change", (value) => {
    const nextIndex = Math.min(
      navItems.length - 1,
      Math.max(0, Math.round(value * (navItems.length - 1)))
    );
    setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
  });

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[70] h-px origin-left bg-[linear-gradient(90deg,#8d63ff,#49b2ff,#ff4d63)]"
        style={{ scaleX: progress }}
      />
      <motion.div className="ambient-grid" style={{ y: gridY }} aria-hidden="true" />
      <motion.div
        className={`ambient-scan ${chaosMode ? "opacity-100" : ""} ${pulseMode ? "ambient-scan-pulse" : ""}`}
        style={{ y: scanY, opacity: scanOpacity }}
        aria-hidden="true"
      />
      <div className={`ambient-noise ${chaosMode ? "ambient-noise-chaos" : ""} ${pulseMode ? "ambient-noise-pulse" : ""}`} aria-hidden="true" />
      <div className="ambient-vignette" aria-hidden="true" />

      <div className="pointer-events-none fixed left-4 top-1/2 z-[64] hidden -translate-y-1/2 xl:flex">
        <div className="flex items-center gap-4">
          <div className="flex h-[70svh] w-px flex-col justify-between bg-white/10">
            <motion.div
              className="w-px bg-gradient-to-b from-electric via-toxic to-danger"
              style={{ scaleY: progress, transformOrigin: "top" }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <p className="opsmono text-[10px] uppercase tracking-[0.34em] text-white/34">
              more below
            </p>
            {navItems.map((item, index) => (
              <a
                key={item.id}
                className={`pointer-events-auto flex items-center gap-2 rounded-full border px-3 py-2 opsmono text-[10px] uppercase tracking-[0.18em] transition ${
                  index === activeIndex
                    ? "border-white/20 bg-white/8 text-white"
                    : "border-white/8 bg-black/20 text-white/42 hover:border-white/16 hover:text-white/70"
                }`}
                href={`#${item.id}`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    index === activeIndex ? "bg-electric" : "bg-white/28"
                  }`}
                />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <header className="pointer-events-none fixed left-1/2 top-3 z-[65] flex w-[min(1500px,calc(100vw-20px))] -translate-x-1/2 items-center justify-between gap-3 sm:top-5 sm:w-[min(1500px,calc(100vw-32px))]">
        <div className="command-chip pointer-events-auto">
          <span className="inline-block h-2 w-2 rounded-full bg-danger shadow-[0_0_16px_rgba(255,77,99,0.45)]" />
          <span>{labels.brand}</span>
        </div>

        <div className="pointer-events-auto flex flex-wrap items-center justify-end gap-2">
          <button className="command-chip" type="button" onClick={onOpenSecret}>
            {labels.openSystem}
          </button>
          <a className="command-chip" href="#final">
            {labels.impossible}
          </a>
          <CopyDomainButton labels={labels} />
        </div>
      </header>
    </>
  );
}
