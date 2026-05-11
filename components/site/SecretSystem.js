"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function SecretSystem({
  open,
  onClose,
  onOpen,
  onModeChange,
  content,
}) {
  const baseHistory = useMemo(
    () => [content.ui.secretDormant, content.ui.secretWake],
    [content]
  );
  const [command, setCommand] = useState("");
  const [history, setHistory] = useState(baseHistory);
  const [response, setResponse] = useState(content.shared.secretCommands["/help"]);
  const [classifiedOpen, setClassifiedOpen] = useState(false);

  const ghostProjects = useMemo(
    () => content.chaos.projects.slice(0, 8).join(" / "),
    [content]
  );

  useEffect(() => {
    setHistory(baseHistory);
    setResponse(content.shared.secretCommands["/help"]);
    setClassifiedOpen(false);
  }, [baseHistory, content]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "/" && !event.metaKey && !event.ctrlKey) {
        event.preventDefault();
        onOpen();
      }

      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        onOpen();
      }

      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onOpen]);

  useEffect(() => {
    if (!open) {
      setCommand("");
    }
  }, [open]);

  const submitCommand = (event) => {
    event.preventDefault();
    const trimmed = command.trim().toLowerCase();

    if (!trimmed) return;

    if (trimmed === "/clear") {
      setHistory(baseHistory);
      setResponse(content.shared.secretCommands["/help"]);
      onModeChange(false);
      setClassifiedOpen(false);
      setCommand("");
      return;
    }

    const next = content.shared.secretCommands[trimmed] ?? {
      title: content.ui.unknownCommandTitle,
      body: content.ui.unknownCommandBody,
      mode: "danger",
    };

    setHistory((current) => [...current.slice(-7), `> ${trimmed}`, next.body]);
    setResponse(next);
    onModeChange(next.mode === "chaos");
    setClassifiedOpen(
      next.mode === "incident" ||
        next.mode === "deploy" ||
        next.mode === "observability"
    );
    setCommand("");
  };

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto bg-black/82 px-3 py-6 backdrop-blur-xl sm:px-6 sm:py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="mx-auto grid w-full max-w-6xl gap-4 rounded-[28px] border border-white/10 bg-[#09090d]/95 p-4 shadow-war sm:grid-cols-[1.1fr_0.9fr] sm:p-6 max-h-[calc(100vh-2rem)] overflow-auto"
            initial={{ y: 18, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 18, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
              <div className="mb-4 flex items-center justify-between gap-3 opsmono text-[11px] uppercase tracking-[0.28em] text-white/50">
                <span>{content.ui.secretShell}</span>
                <button className="command-chip" type="button" onClick={onClose}>
                  {content.ui.secretClose}
                </button>
              </div>

              <div className="space-y-2 opsmono text-sm leading-6 text-white/86">
                {history.map((line, index) => (
                  <p key={`${line}-${index}`} className="break-words">
                    {line}
                  </p>
                ))}
              </div>

              <form className="mt-5" onSubmit={submitCommand}>
                <label className="sr-only" htmlFor="secret-command">
                  Secret command
                </label>
                <div className="flex items-center gap-2 rounded-[18px] border border-white/10 bg-black/50 px-4 py-3">
                  <span className="opsmono text-sm text-electric">&gt;</span>
                  <input
                    id="secret-command"
                    className="w-full bg-transparent opsmono text-sm text-white outline-none placeholder:text-white/25"
                    value={command}
                    onChange={(event) => setCommand(event.target.value)}
                    placeholder="/help"
                    autoFocus
                  />
                </div>
              </form>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(141,99,255,0.10),rgba(255,255,255,0.03))] p-4">
                <p className="mb-3 opsmono text-[11px] uppercase tracking-[0.28em] text-white/45">
                  {content.ui.secretResponse}
                </p>
                <h3 className="font-editorial text-4xl lowercase text-white sm:text-5xl">
                  {response.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-white/75">
                  {response.body}
                </p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
                <p className="mb-3 opsmono text-[11px] uppercase tracking-[0.28em] text-white/45">
                  {content.ui.secretPayload}
                </p>
                <p className="opsmono text-sm leading-7 text-white/70">
                  {ghostProjects}
                </p>
              </div>

              <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-4">
                <p className="mb-3 opsmono text-[11px] uppercase tracking-[0.28em] text-white/45">
                  {content.ui.secretHints}
                </p>
                <div className="grid gap-2 opsmono text-sm text-white/70">
                  {content.ui.commandHints.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>

              {classifiedOpen ? (
                <div className="rounded-[24px] border border-danger/20 bg-danger/[0.05] p-4">
                  <p className="mb-3 opsmono text-[11px] uppercase tracking-[0.28em] text-danger/60">
                    {content.ui.classifiedOverlay}
                  </p>
                  <div className="space-y-3">
                    {content.shared.incidents.slice(0, 3).map((incident) => (
                      <p
                        key={incident}
                        className="opsmono text-xs uppercase tracking-[0.16em] text-white/74"
                      >
                        {incident}
                      </p>
                    ))}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      {content.telemetry.seeds.slice(0, 4).map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-[14px] border border-white/8 bg-black/30 px-3 py-3"
                        >
                          <p className="opsmono text-[10px] uppercase tracking-[0.2em] text-white/35">
                            {metric.label}
                          </p>
                          <p className="mt-2 opsmono text-sm text-white/82">
                            {metric.value}
                            {metric.suffix ? ` ${metric.suffix}` : ""}
                          </p>
                        </div>
                      ))}
                    </div>
                    <p className="opsmono text-[10px] uppercase tracking-[0.22em] text-white/38">
                      {content.shared.services.slice(0, 5).join(" / ")}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
