"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

/**
 * Page-level "Made with Manicule" badge.
 *
 * Portals itself to the end of the docs `<article id="nd-page">` on mount,
 * so it lands below the framework's feedback + Edit-on-GitHub + Last-updated
 * footer chrome. Rendered as a plain centered link in the page's content
 * column.
 */
export function MadeWithManicule() {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const article = document.getElementById("nd-page");
    setTarget(article);
  }, []);

  const badge = (
    <div className="made-with-manicule">
      <a
        href="https://manicule.dev"
        target="_blank"
        rel="noreferrer"
        aria-label="Made with Manicule"
      >
        <span className="made-with-manicule__label">Made with</span>
        <svg
          width="16"
          height="13"
          viewBox="0 0 599 492"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M343.173 250.99V491.083L171.586 396.515L0 491.083V248.544L171.586 147.91L343.173 250.99Z" />
          <path d="M598.851 296.393L387.448 418.465L387.456 225.447L215.862 121.269L425.906 0L598.851 98.281V296.393Z" />
        </svg>
        <span className="made-with-manicule__wordmark">Manicule</span>
      </a>
    </div>
  );

  if (!target) return null;
  return createPortal(badge, target);
}
