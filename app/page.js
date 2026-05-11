"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import AmbientLayer from "../components/site/AmbientLayer";
import LiveMetricsBar from "../components/site/LiveMetricsBar";
import SecretSystem from "../components/site/SecretSystem";
import BootSection from "../components/site/sections/BootSection";
import ChaosSection from "../components/site/sections/ChaosSection";
import EgoSection from "../components/site/sections/EgoSection";
import FinalSection from "../components/site/sections/FinalSection";
import IdentitySection from "../components/site/sections/IdentitySection";
import LegendSection from "../components/site/sections/LegendSection";
import MachineSection from "../components/site/sections/MachineSection";
import CasesSection from "../components/site/sections/CasesSection";
import SilenceSection from "../components/site/sections/SilenceSection";
import {
  contactLinks,
  DEFAULT_LOCALE,
  siteContent,
} from "../data/siteContent";

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const [locale] = useState(DEFAULT_LOCALE);
  const [secretOpen, setSecretOpen] = useState(false);
  const [chaosMode, setChaosMode] = useState(false);
  const [pulseMode, setPulseMode] = useState(false);

  const bootRef = useRef(null);
  const identityRef = useRef(null);
  const chaosRef = useRef(null);
  const silenceRef = useRef(null);
  const egoRef = useRef(null);
  const legendRef = useRef(null);
  const machineRef = useRef(null);
  const casesRef = useRef(null);
  const finalRef = useRef(null);

  const navItems = useMemo(
    () => [
      { id: "boot", label: "boot" },
      { id: "identity", label: "range" },
      { id: "chaos", label: "chaos" },
      { id: "silence", label: "silence" },
      { id: "ego", label: "ego" },
      { id: "legend", label: "legend" },
      { id: "machine", label: "machine" },
      { id: "cases", label: "cases" },
      { id: "final", label: "contact" },
    ],
    []
  );

  const { scrollYProgress } = useScroll();
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -380]);
  const scanY = useTransform(scrollYProgress, [0, 1], [-40, 220]);
  const scanOpacity = useTransform(scrollYProgress, [0, 0.2, 0.75, 1], [0.06, 0.12, 0.18, 0.04]);
  const bootTitleX = useTransform(scrollYProgress, [0, 0.18], [0, -980]);

  const sections = useMemo(
    () => [bootRef, identityRef, chaosRef, silenceRef, egoRef, legendRef, machineRef, casesRef, finalRef],
    []
  );
  const content = siteContent[locale] ?? siteContent[DEFAULT_LOCALE];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPulseMode((current) => !current);
    }, 3200);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    let lenis;
    let raf = 0;

    const setupLenis = async () => {
      const mod = await import("lenis");
      const Lenis = mod.default;

      lenis = new Lenis({
        duration: 0.82,
        smoothWheel: true,
        wheelMultiplier: 1.05,
        touchMultiplier: 1.15,
      });

      lenis.on("scroll", ScrollTrigger.update);
      ScrollTrigger.refresh();

      const animate = (time) => {
        lenis.raf(time);
        raf = requestAnimationFrame(animate);
      };

      raf = requestAnimationFrame(animate);
    };

    setupLenis();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (lenis) lenis.destroy();
    };
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".js-boot-heading-wrap", {
        yPercent: -14,
        ease: "none",
        scrollTrigger: {
          trigger: bootRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".js-boot-statements", {
        yPercent: -10,
        opacity: 0.55,
        ease: "none",
        scrollTrigger: {
          trigger: bootRef.current,
          start: "30% center",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".js-chaos-cloud", {
        yPercent: -8,
        scale: 1.06,
        transformOrigin: "center center",
        ease: "none",
        scrollTrigger: {
          trigger: chaosRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".js-machine-grid", {
        yPercent: -4,
        ease: "none",
        scrollTrigger: {
          trigger: machineRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".ambient-scan", {
        scaleY: 1.12,
        transformOrigin: "center top",
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      if (silenceRef.current) {
        gsap.fromTo(
          silenceRef.current.querySelectorAll(".js-silence-line"),
          { opacity: 0.18, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.22,
            duration: 1.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: silenceRef.current,
              start: "top 62%",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, [sections]);

  return (
    <main className="relative isolate overflow-x-hidden bg-abyss text-text">
      <AmbientLayer
        progress={scrollYProgress}
        gridY={gridY}
        scanY={scanY}
        scanOpacity={scanOpacity}
        chaosMode={chaosMode}
        pulseMode={pulseMode}
        labels={content.ui}
        navItems={navItems}
        onOpenSecret={() => setSecretOpen(true)}
      />

      <LiveMetricsBar seeds={content.telemetry.seeds} />

      <SecretSystem
        open={secretOpen}
        onClose={() => setSecretOpen(false)}
        onOpen={() => setSecretOpen(true)}
        onModeChange={setChaosMode}
        content={content}
      />

      <div className={`mx-auto w-[min(1500px,calc(100vw-20px))] sm:w-[min(1500px,calc(100vw-32px))] ${chaosMode ? "chaos-mode" : ""}`}>
        <BootSection content={content.boot} sectionRef={bootRef} sectionId="boot" bootTitleX={bootTitleX} />
        <IdentitySection content={content.identity} sectionRef={identityRef} sectionId="identity" />
        <ChaosSection content={content.chaos} sectionRef={chaosRef} sectionId="chaos" />
        <SilenceSection content={content.silence} sectionRef={silenceRef} sectionId="silence" />
        <EgoSection content={content.ego} sectionRef={egoRef} sectionId="ego" />
        <LegendSection
          content={content.legend}
          services={content.shared.services}
          incidents={content.shared.incidents}
          sectionRef={legendRef}
          sectionId="legend"
        />
        <MachineSection content={content.machine} sectionRef={machineRef} sectionId="machine" />
        <CasesSection content={content.cases} sectionRef={casesRef} sectionId="cases" />
        <FinalSection contacts={contactLinks} content={content.ui} sectionRef={finalRef} sectionId="final" />
      </div>
    </main>
  );
}
