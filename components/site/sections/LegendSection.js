"use client";

import { motion } from "framer-motion";

export default function LegendSection({ content, services, incidents, sectionRef, sectionId }) {
  return (
    <section ref={sectionRef} id={sectionId} className="scene-block min-h-[220svh] scroll-mt-24">
      <div className="scene-shell gap-8 pt-28 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="sticky top-24 self-start">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="opsmono text-[clamp(2.8rem,7vw,7rem)] font-bold lowercase leading-[0.86] tracking-brutal text-white">
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
                {content.serviceGraph}
              </p>
              <p className="opsmono text-[11px] uppercase tracking-[0.28em] text-white/32">
                {content.allPaths}
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <motion.div
                  key={service}
                  className="rounded-[18px] border border-white/10 bg-white/[0.02] px-4 py-4"
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.18 }}
                  transition={{ duration: 0.38, delay: index * 0.02 }}
                >
                  <p className="opsmono text-xs uppercase tracking-[0.18em] text-white/82">
                    {service}
                  </p>
                  <p className="mt-3 opsmono text-[10px] uppercase tracking-[0.22em] text-white/34">
                    {content.dependency}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="panel-shell">
              <p className="mb-4 opsmono text-[11px] uppercase tracking-[0.28em] text-white/40">
                {content.incidents}
              </p>
              <div className="space-y-3">
                {incidents.map((incident, index) => (
                  <motion.div
                    key={incident}
                    className="rounded-[16px] border border-white/8 bg-black/30 px-4 py-3"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.18 }}
                    transition={{ duration: 0.36, delay: index * 0.03 }}
                  >
                    <p className="opsmono text-xs uppercase tracking-[0.16em] text-white/76">
                      {incident}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="panel-shell relative overflow-hidden">
              <p className="mb-4 opsmono text-[11px] uppercase tracking-[0.28em] text-white/40">
                {content.throughput}
              </p>
              <div className="grid gap-3">
                {content.atmosphere.map(([label, state], index) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-[16px] border border-white/8 bg-white/[0.02] px-4 py-3"
                  >
                    <span className="opsmono text-xs uppercase tracking-[0.18em] text-white/72">
                      {label}
                    </span>
                    <span
                      className={`opsmono text-xs uppercase tracking-[0.18em] ${
                        index === 3 ? "text-danger" : "text-electric"
                      }`}
                    >
                      {state}
                    </span>
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
