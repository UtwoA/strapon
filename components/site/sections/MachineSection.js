"use client";

import { motion } from "framer-motion";

export default function MachineSection({ content, sectionRef, sectionId }) {
  return (
    <section ref={sectionRef} id={sectionId} className="scene-block min-h-[240svh] scroll-mt-24">
      <div className="scene-shell gap-8 pt-28 lg:grid-cols-[0.84fr_1.16fr]">
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
          <div className="grid gap-3 sm:grid-cols-2">
            {content.stats.map((stat) => (
              <motion.div
                key={stat.label}
                className="panel-shell"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
              >
                <p className="opsmono text-[11px] uppercase tracking-[0.24em] text-white/38">
                  {stat.label}
                </p>
                <p
                  className={`mt-4 opsmono text-[clamp(1.9rem,3vw,3rem)] font-bold lowercase ${
                    stat.tone === "danger"
                      ? "text-danger"
                      : stat.tone === "electric"
                        ? "text-electric"
                        : stat.tone === "toxic"
                          ? "text-toxic"
                          : "text-white"
                  }`}
                >
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="js-machine-grid grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-4">
              {content.panels.map((panel) => (
                <motion.article
                  key={panel.title}
                  className="panel-shell"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.18 }}
                >
                  <p className="opsmono text-sm uppercase tracking-[0.16em] text-white/84">
                    {panel.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/70 sm:text-base">
                    {panel.body}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {panel.metrics.map((metric) => (
                      <span
                        key={metric}
                        className="rounded-full border border-white/10 px-3 py-2 opsmono text-[11px] uppercase tracking-[0.18em] text-white/66"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="grid gap-4">
              <div className="panel-shell relative min-h-[280px] overflow-hidden">
                <p className="mb-4 opsmono text-[11px] uppercase tracking-[0.28em] text-white/40">
                  {content.clusterMap}
                </p>
                <div className="absolute inset-4 rounded-[22px] border border-white/8 bg-[radial-gradient(circle_at_center,rgba(141,99,255,0.18),transparent_40%),linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:auto,38px_38px,38px_38px]">
                  <span className="topology-node left-[14%] top-[22%]" />
                  <span className="topology-node left-[54%] top-[18%]" />
                  <span className="topology-node left-[74%] top-[54%]" />
                  <span className="topology-node left-[32%] top-[68%]" />
                  <span className="topology-link left-[16%] top-[26%] w-[38%] rotate-[8deg]" />
                  <span className="topology-link left-[35%] top-[62%] w-[40%] -rotate-[18deg]" />
                </div>
              </div>

              <div className="panel-shell">
                <p className="mb-4 opsmono text-[11px] uppercase tracking-[0.28em] text-white/40">
                  {content.observability}
                </p>
                <div className="space-y-3 opsmono text-xs uppercase tracking-[0.16em] text-white/72 sm:text-sm">
                  {content.alerts.map((alert, index) => (
                    <div
                      key={alert}
                      className="flex items-center justify-between gap-3 rounded-[16px] border border-white/8 bg-white/[0.02] px-4 py-3"
                    >
                      <span>{alert}</span>
                      <span className={index === 5 ? "text-danger" : "text-electric"}>
                        {index === 5 ? "watch" : "ok"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
