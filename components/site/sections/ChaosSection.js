"use client";

import { motion } from "framer-motion";

export default function ChaosSection({ content, sectionRef, sectionId }) {
  return (
    <section ref={sectionRef} id={sectionId} className="scene-block min-h-[250svh] scroll-mt-24">
      <div className="scene-shell gap-8 pt-28 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="sticky top-24 self-start">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="opsmono text-[clamp(2.9rem,7vw,7.2rem)] font-bold lowercase leading-[0.86] tracking-brutal text-white">
            {content.title.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/68 sm:text-base">
            {content.body}
          </p>
        </div>

        <div className="grid gap-4">
          <div className="panel-shell overflow-hidden">
            <div className="mb-5 flex items-center justify-between gap-3 border-b border-white/10 pb-4">
              <p className="opsmono text-[11px] uppercase tracking-[0.28em] text-white/40">
                {content.payload}
              </p>
              <p className="opsmono text-[11px] uppercase tracking-[0.28em] text-danger/60">
                {content.unstable}
              </p>
            </div>
            <div className="js-chaos-cloud flex flex-wrap gap-2">
              {content.projects.map((project, index) => (
                <motion.span
                  key={project}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 opsmono text-xs uppercase tracking-[0.16em] text-white/80 sm:text-sm"
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.35, delay: index * 0.02 }}
                >
                  {project}
                </motion.span>
              ))}
            </div>
          </div>

          <div className="grid gap-3 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="panel-shell">
              <p className="mb-4 opsmono text-[11px] uppercase tracking-[0.28em] text-white/40">
                {content.feed}
              </p>
              <div className="space-y-3 opsmono text-xs leading-6 text-white/74 sm:text-sm">
                {content.signals.map((signal, index) => (
                  <motion.p
                    key={signal}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.16 }}
                    transition={{ duration: 0.42, delay: index * 0.025 }}
                  >
                    <span className="mr-3 text-white/28">
                      {String(index + 11).padStart(2, "0")}
                    </span>
                    {signal}
                  </motion.p>
                ))}
              </div>
            </div>

            <div className="panel-shell relative overflow-hidden">
              <p className="mb-4 opsmono text-[11px] uppercase tracking-[0.28em] text-white/40">
                {content.pressure}
              </p>
              <div className="grid gap-3">
                {content.branches.map((branch, index) => (
                  <div
                    key={branch}
                    className="rounded-[18px] border border-white/10 bg-black/30 p-4"
                  >
                    <p className="opsmono text-xs uppercase tracking-[0.18em] text-white/84">
                      {branch}
                    </p>
                    <div className="mt-3 h-2 rounded-full bg-white/8">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,#8d63ff,#49b2ff,#ff4d63)]"
                        style={{ width: `${42 + index * 18}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
