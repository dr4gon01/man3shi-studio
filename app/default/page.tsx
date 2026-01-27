"use client";

import React from "react";
import Link from "next/link";

/**
 * Cute “Coming Soon” page (Next.js)
 * - Drop into: /app/coming-soon/page.tsx
 * - Or use as a temporary /app/page.tsx while you build.
 * - Uses your site’s minimal studio vibe, but playful.
 */

export default function ComingSoon() {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "120px 20px",
        color: "#EBEBE8",
        fontFamily: "Helvetica Neue, sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: "820px" }}>
        {/* Header */}
        <div style={{ marginBottom: "56px" }}>
          <div
            style={{
              fontFamily: "monospace",
              fontSize: "12px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(235,235,232,0.55)",
              marginBottom: "14px",
            }}
          >
            /// STATUS: DEPLOYING
          </div>

          <h1
            style={{
              fontFamily: "Krungthep, Impact, sans-serif",
              fontSize: "clamp(40px, 7vw, 64px)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              lineHeight: 1.02,
              margin: 0,
              overflowWrap: "anywhere",
              wordBreak: "break-word",
            }}
          >
            Coming Soon
          </h1>

          <p
            style={{
              maxWidth: "620px",
              marginTop: "18px",
              lineHeight: 1.7,
              opacity: 0.85,
              fontSize: "16px",
            }}
          >
            The next room is being built—quietly, carefully. New works, dialogues, and
            experiments will appear here soon.
          </p>
        </div>

        {/* Cute terminal card */}
        <div
          style={{
            border: "0.5px solid rgba(255,255,255,0.12)",
            background: "rgba(0,0,0,0.18)",
            padding: "18px",
            borderRadius: "6px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
              marginBottom: "14px",
              opacity: 0.9,
            }}
          >
            <Dot />
            <Dot />
            <Dot />
            <span
              style={{
                marginLeft: "10px",
                fontFamily: "monospace",
                fontSize: "12px",
                letterSpacing: "0.08em",
                color: "rgba(235,235,232,0.65)",
              }}
            >
              man3shi / studio / build.log
            </span>
          </div>

          <TypeLines />
          <div
            style={{
              marginTop: "12px",
              fontFamily: "monospace",
              fontSize: "12px",
              color: "rgba(212,163,115,0.9)",
              letterSpacing: "0.06em",
            }}
          >
            ✔ next: publish case studies · ✔ next: deploy dialogues · ✔ next: open lab notes
          </div>
        </div>

        {/* Links */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "14px",
            alignItems: "center",
          }}
        >
          <StudioLink href="/works/lab" label="[ Visit The Lab ]" />
          <StudioLink href="/works" label="[ Browse Works ]" />
          <a
            href="https://www.man3shistudio.com"
            style={{
              fontFamily: "monospace",
              fontSize: "12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(235,235,232,0.65)",
              textDecoration: "none",
              borderBottom: "0.5px solid rgba(255,255,255,0.18)",
              paddingBottom: "3px",
            }}
          >
            [ Back to Home ]
          </a>

          <span style={{ flex: 1 }} />

          {/* Cute footer sig */}
          <div
            style={{
              fontFamily: "monospace",
              fontSize: "11px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "rgba(235,235,232,0.45)",
            }}
          >
            Made with patience ☾
          </div>
        </div>
      </div>
    </div>
  );
}

function Dot() {
  return (
    <span
      style={{
        width: 10,
        height: 10,
        borderRadius: 999,
        display: "inline-block",
        background: "rgba(255,255,255,0.18)",
      }}
    />
  );
}

function StudioLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      style={{
        fontFamily: "monospace",
        fontSize: "12px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "#d4a373",
        textDecoration: "none",
        borderBottom: "0.5px solid rgba(212,163,115,0.35)",
        paddingBottom: "3px",
      }}
    >
      {label}
    </Link>
  );
}

function TypeLines() {
  // No timers (SSR-safe + minimal). Looks “typed” through layout.
  const lines = [
    "> compiling rituals into pixels...",
    "> calibrating light leaks...",
    "> aligning A3 frames...",
    "> stitching dialogues...",
    "> almost there ▒",
  ];

  return (
    <div style={{ fontFamily: "monospace", fontSize: "13px", lineHeight: 1.7 }}>
      {lines.map((t) => (
        <div key={t} style={{ color: "rgba(235,235,232,0.80)" }}>
          {t}
        </div>
      ))}
    </div>
  );
}
