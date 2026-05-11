"use client";

import { motion } from "framer-motion";

export default function EgoSection({ content, sectionRef, sectionId }) {
  return (
    <section ref={sectionRef} id={sectionId} className="scene-block min-h-[180svh] scroll-mt-24">
      <div className="scene-shell pt-28">
        <div className="panel-shell bg-[linear-gradient(180deg,rgba(255,77,99,0.08),rgba(255,255,255,0.03))]">
          <p className="eyebrow mb-8">{content.eyebrow}</p>
          <div className="grid gap-3">
            {content.lines.map((line, index) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.45, delay: index * 0.03 }}
                className="flex items-start gap-4 border-t border-white/8 py-4 first:border-t-0 first:pt-0"
              >
                <span className="mt-1 opsmono text-[11px] uppercase tracking-[0.18em] text-white/24">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="opsmono text-[clamp(1.7rem,4vw,4.6rem)] font-bold lowercase leading-[0.9] tracking-brutal text-white">
                  {line}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
