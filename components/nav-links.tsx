"use client";

import Layout from "@/app/docs/layout";
import { LayoutDashboard } from "lucide-react";

export function NavLinks() {
  return (
    <div
      className="docs-top-nav-links"
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        height: 56,
        zIndex: 60,
        display: "flex",
        alignItems: "center",
        gap: 4,
        paddingRight: 16,
        pointerEvents: "auto",
      }}
    >
      {/* <a
        href="https://console.limrun.com/docs/support"
        target="_blank"
        rel="noreferrer"
        className="nav-link-item"
      >
        Support
      </a> */}
      <a
        href="https://console.limrun.com"
        target="_blank"
        rel="noreferrer"
        className="nav-link-item font-lighter! flex gap-2 dark:text-black! text-white! items-center font-mono uppercase nav-link-dashboard"
      >
        <LayoutDashboard size={16} />
       Console 
      </a>
    </div>
  );
}
