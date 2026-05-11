"use client";

import { motion } from "framer-motion";

export default function SilenceSection({ content, sectionRef, sectionId }) {
  return (
    <section ref={sectionRef} id={sectionId} className="scene-block min-h-[180svh] scroll-mt-24">
      <div className="scene-shell min-h-svh place-items-center pt-24">
        <div className="mx-auto flex max-w-4xl flex-col items-start gap-8 px-4 sm:px-6">
          <div className="opsmono text-sm text-white/44">
            <span className="blink-cursor mr-2">_</span>
            {content.label}
          </div>
          <div className="space-y-12">
            {content.lines.map((line, index) => (
              <motion.p
                key={line}
                className="js-silence-line editorial text-[clamp(2.3rem,6.5vw,6.4rem)] lowercase leading-[0.92] text-white"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: index === 0 ? 1 : 0.7, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.9, delay: index * 0.08 }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
