"use client";

import { motion } from "framer-motion";

export default function MemeSection({ content, sectionRef, sectionId }) {
  return (
    <section ref={sectionRef} id={sectionId} className="scene-block min-h-[180svh] scroll-mt-24">
      <div className="scene-shell gap-8 pt-28 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="sticky top-24 self-start">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="opsmono text-[clamp(2.8rem,6vw,6rem)] font-bold lowercase leading-[0.88] tracking-brutal text-white">
            {content.title.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </h2>
        </div>

        <div className="grid gap-3">
          {content.lines.map((meme, index) => (
            <motion.div
              key={meme}
              className="panel-shell"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ duration: 0.42, delay: index * 0.025 }}
            >
              <div className="flex gap-4">
                <span className="opsmono text-[11px] uppercase tracking-[0.18em] text-white/28">
                  meme/{String(index + 1).padStart(2, "0")}
                </span>
                <p className="font-editorial text-[clamp(1.3rem,2.3vw,2.3rem)] lowercase leading-tight text-white/90">
                  {meme}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
