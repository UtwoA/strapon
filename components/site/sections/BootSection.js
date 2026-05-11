"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function BootSection({ content, sectionRef, sectionId, bootTitleX }) {
  const [repoCount, setRepoCount] = useState(0);
  const proofRef = useRef(null);

  useEffect(() => {
    const node = proofRef.current;
    if (!node) return undefined;

    let raf = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        observer.disconnect();

        const duration = 1600;
        const start = performance.now();

        const tick = (now) => {
          const progress = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          const next = Math.round(60 * eased);
          setRepoCount(next);

          if (progress < 1) {
            raf = requestAnimationFrame(tick);
          }
        };

        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.45 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section ref={sectionRef} id={sectionId} className="scene-block min-h-[230svh] scroll-mt-24">
      <div className="scene-shell grid min-h-svh items-end gap-6 pb-10 pt-28 lg:grid-cols-[1.2fr_0.8fr] lg:pb-16">
        <div className="panel-shell overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 opsmono text-[11px] uppercase tracking-[0.28em] text-white/40 sm:px-6">
            <span>{content.topLeft}</span>
            <span>{content.topRight}</span>
          </div>

          <div className="space-y-8 px-4 py-5 sm:px-6 sm:py-7">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              className="opsmono text-sm text-white/75"
            >
              <span className="mr-2 text-electric">&gt;</span>
              <span>{content.booting}</span>
              <span className="blink-cursor ml-2">_</span>
            </motion.div>

            <div className="grid gap-2 opsmono text-xs text-white/72 sm:text-sm">
              {content.logs.map((line, index) => (
                <motion.p
                  key={line}
                  className="boot-line"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.035, duration: 0.35 }}
                >
                  <span className="mr-3 text-white/28">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {line}
                </motion.p>
              ))}
            </div>

            <div className="space-y-5 border-t border-white/10 pt-7">
              <p className="opsmono text-[11px] uppercase tracking-[0.28em] text-white/35">
                {content.state}
              </p>
              <div className="js-boot-heading-wrap overflow-hidden">
                <motion.h1
                  className="js-boot-heading opsmono text-[clamp(4rem,12vw,10rem)] font-extrabold lowercase leading-[0.82] tracking-brutal text-white"
                  style={{ x: bootTitleX }}
                >
                  STRAPON.TECH
                </motion.h1>
              </div>
              <div className="js-boot-statements space-y-2">
                {content.statements.map((line) => (
                  <p
                    key={line}
                    className="max-w-[24ch] text-[clamp(1.15rem,2.7vw,2rem)] font-medium lowercase leading-[1.08] tracking-[-0.02em] text-white/78"
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="panel-shell flex min-h-[220px] flex-col justify-between">
            <div>
              <p className="mb-4 opsmono text-[11px] uppercase tracking-[0.28em] text-white/40">
                {content.profile}
              </p>
              <p className="max-w-md text-sm leading-7 text-white/70 sm:text-base">
                {content.profileBody}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 opsmono text-[11px] uppercase tracking-[0.18em] text-white/55">
              {content.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-white/10 px-3 py-2">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {content.proof ? (
            <div ref={proofRef} className="panel-shell">
              <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
                <div>
                  <p className="opsmono text-[11px] uppercase tracking-[0.28em] text-white/40">
                    {content.proof.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/58">
                    {content.proof.caption}
                  </p>
                </div>
                <div className="text-right">
                  <div className="opsmono text-[clamp(2.1rem,4vw,3.4rem)] font-black leading-none tracking-[-0.05em] text-white">
                    {repoCount}
                    <span className="text-electric">+</span>
                  </div>
                  <div className="mt-1 opsmono text-[10px] uppercase tracking-[0.24em] text-white/32">
                    github repos live
                  </div>
                </div>
              </div>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {content.proof.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-[16px] border border-white/8 bg-white/[0.02] px-4 py-3 opsmono text-[11px] uppercase tracking-[0.16em] text-white/80"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ) : null}

          <div className="panel-shell">
            <p className="mb-4 opsmono text-[11px] uppercase tracking-[0.28em] text-white/40">
              {content.instability}
            </p>
            <div className="grid grid-cols-8 gap-2">
              {Array.from({ length: 24 }).map((_, index) => (
                <span
                  key={index}
                  className="h-10 rounded-full bg-[linear-gradient(180deg,rgba(73,178,255,0.24),rgba(141,99,255,0.03))] animate-pulse"
                  style={{ animationDelay: `${index * 90}ms` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
