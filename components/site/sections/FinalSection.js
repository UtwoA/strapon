"use client";

import { motion } from "framer-motion";

export default function FinalSection({ contacts, content, sectionRef, sectionId }) {
  return (
    <section
      ref={sectionRef}
      id={sectionId}
      className="scene-block min-h-[95svh] bg-[linear-gradient(180deg,rgba(2,2,3,0),rgba(2,2,3,0.7)_28%,#020203_58%,#020203_100%)]"
    >
      <div className="scene-shell flex min-h-svh items-center pt-20">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-start gap-6 rounded-[34px] border border-white/8 bg-black/65 p-6 shadow-war sm:p-10">
          <div className="opsmono text-sm text-white/62">
            <span className="blink-cursor mr-2">_</span>
            {content.telemetryQuiet}
          </div>
          <motion.h2
            className="font-editorial text-[clamp(2.4rem,6vw,6rem)] lowercase leading-[0.92] text-white"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {content.finalQuestion}
          </motion.h2>
          <div className="flex flex-wrap gap-3">
            {Object.values(contacts).map((contact) => (
              <a
                key={contact.label}
                className="command-chip"
                href={contact.href}
                target="_blank"
                rel="noreferrer"
              >
                {contact.label}
              </a>
            ))}
          </div>
          <p className="opsmono text-xs uppercase tracking-[0.22em] text-white/34">
            {content.finalNote}
          </p>
        </div>
      </div>
    </section>
  );
}
