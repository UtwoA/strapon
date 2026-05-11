"use client";

import { useEffect, useState } from "react";

const domain = "strapon.tech";

export default function CopyDomainButton({ labels }) {
  const [status, setStatus] = useState(labels.copyDomain);

  useEffect(() => {
    setStatus(labels.copyDomain);
  }, [labels]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(domain);
      setStatus(labels.copiedDomain);
    } catch {
      setStatus(labels.manualCopy);
    }
  };

  return (
    <button
      className="command-chip"
      type="button"
      onClick={handleCopy}
      aria-label="Copy domain name"
    >
      {status}
    </button>
  );
}
