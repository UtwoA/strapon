"use client";

import { motion } from "framer-motion";

export default function CasesSection({ content, sectionRef, sectionId }) {
  return (
    <section ref={sectionRef} id={sectionId} className="scene-block min-h-[260svh] scroll-mt-24">
      <div className="scene-shell gap-8 pt-28 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="sticky top-24 self-start">
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="opsmono text-[clamp(2.8rem,7vw,7.2rem)] font-bold lowercase leading-[0.86] tracking-brutal text-white">
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
          {content.items.map((item, index) => (
            <motion.article
              key={item.name}
              className="panel-shell overflow-hidden"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.45, delay: index * 0.03 }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="opsmono text-[11px] uppercase tracking-[0.28em] text-white/38">
                    case/{String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-editorial text-[clamp(1.5rem,3vw,3rem)] lowercase leading-[0.95] text-white">
                    {item.name}
                  </h3>
                </div>
                <p className="max-w-[24ch] text-sm leading-6 text-white/62">
                  {item.result}
                </p>
              </div>

              <p className="mt-5 max-w-3xl text-sm leading-7 text-white/74 sm:text-base">
                {item.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.stack.map((stack) => (
                  <span
                    key={stack}
                    className="rounded-full border border-white/10 px-3 py-2 opsmono text-[11px] uppercase tracking-[0.18em] text-white/68"
                  >
                    {stack}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.links.map((link) => (
                  <a
                    key={link.href}
                    className="command-chip"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
