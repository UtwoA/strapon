"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

export default function LiveMetricsBar({ seeds }) {
  const initialMetrics = useMemo(
    () => seeds.map((metric) => ({ ...metric, current: metric.value })),
    [seeds]
  );
  const [metrics, setMetrics] = useState(initialMetrics);

  useEffect(() => {
    setMetrics(initialMetrics);
  }, [initialMetrics]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setMetrics((current) =>
        current.map((metric) => {
          const variance = metric.suffix === "%" ? 3 : metric.suffix === "mb/s" ? 9 : 1;
          const next =
            metric.value + Math.round((Math.random() - 0.5) * variance * 2);

          return {
            ...metric,
            current: Math.max(0, next),
          };
        })
      );
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-2 z-[52] hidden justify-center px-3 lg:flex">
      <div className="grid w-[min(1460px,calc(100vw-36px))] grid-cols-6 gap-2 rounded-[22px] border border-white/10 bg-black/45 p-2 backdrop-blur-xl">
        {metrics.map((metric) => (
          <motion.div
            key={metric.label}
            className="rounded-[16px] border border-white/8 bg-white/[0.025] px-3 py-3"
            animate={{ opacity: [0.72, 1, 0.72] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="opsmono text-[10px] uppercase tracking-[0.24em] text-white/35">
              {metric.label}
            </p>
            <p
              className={`mt-2 opsmono text-lg lowercase ${
                metric.tone === "danger"
                  ? "text-danger"
                  : metric.tone === "electric"
                    ? "text-electric"
                    : metric.tone === "toxic"
                      ? "text-toxic"
                      : "text-white"
              }`}
            >
              {metric.current}
              {metric.suffix ? ` ${metric.suffix}` : ""}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
