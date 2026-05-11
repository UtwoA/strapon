"use client";

import { motion } from "framer-motion";

export default function IdentitySection({ content, sectionRef, sectionId }) {
  return (
    <section ref={sectionRef} id={sectionId} className="scene-block min-h-[230svh] scroll-mt-24">
      <div className="scene-shell gap-8 pt-28 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="sticky top-24 self-start">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="opsmono text-[clamp(2.8rem,7vw,7rem)] font-bold lowercase leading-[0.88] tracking-brutal text-white">
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

        <div className="relative grid gap-3">
          <div className="topology-slab" aria-hidden="true">
            <span className="topology-node left-[14%] top-[12%]" />
            <span className="topology-node left-[64%] top-[18%]" />
            <span className="topology-node left-[28%] top-[58%]" />
            <span className="topology-node left-[78%] top-[70%]" />
            <span className="topology-link left-[16%] top-[18%] w-[42%] rotate-[7deg]" />
            <span className="topology-link left-[32%] top-[60%] w-[45%] -rotate-[16deg]" />
          </div>

          {content.lines.map((line, index) => (
            <motion.article
              key={line}
              className="panel-shell relative overflow-hidden"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.55, delay: index * 0.03 }}
            >
              <div className="absolute inset-y-0 left-0 w-px bg-white/8" />
              <div className="flex items-start gap-4">
                <span className="mt-1 opsmono text-[11px] uppercase tracking-[0.2em] text-white/28">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-editorial text-[clamp(1.5rem,2.9vw,3rem)] lowercase leading-[0.95] text-white/92">
                  {line}
                </p>
              </div>
            </motion.article>
          ))}

          <motion.div
            className="panel-shell bg-[linear-gradient(180deg,rgba(141,99,255,0.10),rgba(73,178,255,0.03))]"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="opsmono text-sm leading-7 text-white/75">{content.quote}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
