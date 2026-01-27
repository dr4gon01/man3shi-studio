"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

// --- DATA ---
const DIALOGUES = [
  {
    id: "marie-claire",
    year: "2026",
    title: "The Projet SouveReines [Paris, France]",
    partner: "Marie Claire Barsotti",
    location: "Paris, France",
    role: "Creative Direction · Portrait Photography · Post-production · Print Prepress",
    desc: "Kali portrait collaboration developed for Projet SouveReines, culminating in two A3 exhibition-ready prints (CMYK FOGRA39, 3mm bleed) packaged with the RAW set and a scanned Mahakali mantra overlay.",
    constraints:
      "Window light only; 50mm proximity; incense smoke used as temporal material. The mantra layer remains present but restrained—never louder than the gaze.",
    media: { type: "image" as const, src: "/kali-mari.jpg" },
    links: { case: "/works/collaborations/projet-souvereines" },
  },
  {
    id: "desi-street",
    year: "2025",
    title: "Sah Astitva [Chicago, USA]",
    partner: "Desi X Street",
    location: "Chicago, IL",
    role: "Concept + Script · Creative Direction · Spatial + Light Design · Visual Language (camera + framing system)",
    desc: "A two-act movement narrative fusing Western contemporary street lineage with Devadasi-era classical movement forms—staged first as confrontation, then as co-existence—so the body becomes a site where cultures negotiate, not decorate.",
    constraints:
      "A 900 sq ft interior had to read as a Devadasi-era temple. Severe light leaks required black-sealed curtains, later digitally painted into the portrait environment for continuity. Scale was built through shadow logic—silhouette and negative space used to imply vastness beyond the room.",
    media: {
      type: "video" as const,
      // muted=1 helps autoplay behave more consistently across browsers
      src: "https://player.vimeo.com/video/1153478037?autoplay=1&muted=1&title=0&byline=0&portrait=0",
    },
    links: { case: "/default" },
  },
];

type Media =
  | { type: "image"; src: string }
  | { type: "video"; src: string };

type Dialogue = {
  id: string;
  year: string;
  title: string;
  partner: string;
  location: string;
  role: string;
  desc: string;
  constraints: string;
  media?: Media;
  links: { case?: string };
};

export default function CollaborationsPage() {
  const [openId, setOpenId] = useState<string | null>("marie-claire");

  // Hairline borders (works even if Tailwind doesn't support border-[0.5px])
  const hairline = "0.5px";
  const borderColor = "rgba(255,255,255,0.10)";

  return (
    <div
      style={{
        padding: "120px 20px",
        minHeight: "100vh",
        color: "#EBEBE8",
        fontFamily: "Helvetica Neue, sans-serif",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      {/* HEADER (match Commissions style) */}
      <div style={{ marginBottom: "56px" }}>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <h1
            style={{
              fontFamily: "Krungthep, Impact, sans-serif",
              fontSize: "clamp(32px, 7.5vw, 48px)", // responsive
              textTransform: "uppercase",
              letterSpacing: "0.08em",              // slightly tighter on small screens
              lineHeight: 1.05,
              maxWidth: "100%",
              overflowWrap: "anywhere",             // allows breaking long words
              wordBreak: "break-word",
              hyphens: "auto",
              margin: 0,
            }}
          >
            Collaborations
          </h1>

          {/* Keep the index as your dossier signature */}
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "10px",
              color: "#d4a373",
              letterSpacing: "0.1em",
              alignSelf: "flex-start",
              marginTop: "10px",
            }}
          >
            INDEX: [0{DIALOGUES.length}]
          </span>
        </div>

        <p
          style={{
            maxWidth: "600px",
            lineHeight: "1.6",
            opacity: 0.8,
            marginTop: "28px",
          }}
        >
          Intersectional experiments with artists, brands, and thinkers.
        </p>

        <div
          style={{
            marginTop: "22px",
            borderBottom: `${hairline} solid ${borderColor}`,
          }}
        />

        <div
          style={{
            marginTop: "14px",
            fontFamily: "monospace",
            fontSize: "10px",
            color: "#666",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          [ SELECT PROJECT TO EXPAND ]
        </div>
      </div>

      {/* LIST (single outer border + hairline row dividers) */}
      <div
        style={{
          border: `solid ${borderColor}`,
          borderWidth: hairline,
        }}
      >
        {DIALOGUES.map((item: Dialogue, idx: number) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              role="button"
              tabIndex={0}
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : item.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setOpenId(isOpen ? null : item.id);
                }
              }}
              className="group outline-none transition-all duration-300"
              style={{
                cursor: "pointer",
                backgroundColor: isOpen ? "rgba(212, 163, 115, 0.03)" : "transparent",
                borderTop: idx === 0 ? "none" : `${hairline} solid ${borderColor}`,
              }}
            >
              {/* ROW HEADER */}
              <div className="flex items-start md:items-center py-6 px-4 group-hover:bg-[#d4a373]/05 transition-colors">
                {/* Year */}
                <div className="w-[80px] md:w-[100px] flex-shrink-0">
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: "14px",
                      color: isOpen ? "#d4a373" : "#444",
                    }}
                  >
                    [{item.year}]
                  </span>
                </div>

                {/* Title + Partner */}
                <div className="flex-grow flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                  <span
                    style={{
                      fontSize: "18px",
                      color: isOpen ? "#FFFFFF" : "#EBEBE8",
                      letterSpacing: "0.05em",
                      transition: "color 0.3s",
                    }}
                    className="group-hover:text-white"
                  >
                    {item.title}
                  </span>

                  <span className="font-mono text-[10px] text-[#666] uppercase tracking-widest">
                    w/ {item.partner}
                  </span>
                </div>

                {/* Toggle */}
                <div className="w-[30px] text-right">
                  <span
                    style={{
                      fontFamily: "monospace",
                      color: "#d4a373",
                      fontSize: "20px",
                      fontWeight: 300,
                    }}
                  >
                    {isOpen ? "—" : "+"}
                  </span>
                </div>
              </div>

              {/* EXPANDED BODY */}
              {isOpen && (
                <div
                  className="pt-2 pl-6 md:pl-[120px] pr-6 md:pr-8 pb-16 animate-in fade-in duration-300"
                  onClick={(e) => e.stopPropagation()}
                  style={{ cursor: "default" }}
                >
                  <div className="grid grid-cols-1 gap-8">
                    {/* MEDIA */}
                    <div className="w-full mb-4">
                      <div
                        className="relative w-full h-0 pb-[56.25%] bg-black overflow-hidden rounded-sm"
                        style={{
                          border: `solid ${borderColor}`,
                          borderWidth: hairline,
                        }}
                      >
                        {item.media ? (
                          item.media.type === "video" ? (
                            <iframe
                              src={item.media.src}
                              className="absolute top-0 left-0 w-full h-full"
                              allow="autoplay; fullscreen; picture-in-picture"
                              allowFullScreen
                              frameBorder="0"
                              title={`${item.title} video`}
                            />
                          ) : (
                            <Image
                              src={item.media.src}
                              alt={item.title}
                              fill
                              sizes="(max-width: 900px) 100vw, 900px"
                              className="object-cover opacity-90 transition-opacity"
                              priority={item.id === "marie-claire"}
                            />
                          )
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="font-mono text-xs text-[#444] tracking-widest">
                              [VISUALS DEPLOYING]
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* TEXT */}
                    <div>
                      <p
                        style={{
                          fontFamily: "monospace",
                          fontSize: "12px",
                          color: "#d4a373",
                          marginBottom: "16px",
                          letterSpacing: "0.05em",
                        }}
                      >
                        &gt; ROLE: <span style={{ color: "#EBEBE8" }}>{item.role}</span>
                      </p>

                      <p
                        style={{
                          fontSize: "15px",
                          lineHeight: "1.7",
                          color: "#EBEBE8",
                          fontWeight: 300,
                          marginBottom: "24px",
                        }}
                      >
                        {item.desc}
                      </p>

                      <div
                        style={{
                          borderLeft: `${hairline} solid rgba(255,255,255,0.18)`,
                          paddingLeft: "16px",
                          paddingTop: "6px",
                          paddingBottom: "6px",
                          marginBottom: "24px",
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "monospace",
                            fontSize: "11px",
                            color: "#666",
                            textTransform: "uppercase",
                            display: "block",
                            marginBottom: "6px",
                          }}
                        >
                          CONSTRAINTS:
                        </span>

                        <span
                          style={{
                            fontFamily: "monospace",
                            fontSize: "12px",
                            color: "#999",
                            lineHeight: "1.6",
                          }}
                        >
                          {item.constraints}
                        </span>
                      </div>

                      {/* CTA */}
                      {item.links.case && (
                        <div className="mt-10">
                          {item.links.case && (
                            <Link
                              href={item.links.case}
                              target={item.links.case.startsWith("http") ? "_blank" : undefined}
                              className="inline-flex items-center gap-2 group border-b border-[#d4a373]/30 hover:border-[#d4a373] pb-1 transition-all"
                            >
                              <span
                                style={{
                                  fontFamily: "monospace",
                                  fontSize: "11px",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.1em",
                                  color: "#d4a373",
                                }}
                              >
                                [ VIEW FULL CASE ]
                              </span>
                              <ArrowUpRight
                                size={12}
                                className="text-[#d4a373] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                              />
                            </Link>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
