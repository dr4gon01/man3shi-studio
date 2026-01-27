"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

/**
 * Case Study Page
 * Place this file at: /app/works/dialogues/projet-souvereines/page.tsx
 * Update image paths in MEDIA below to match your /public assets.
 */

const hairline = "0.5px";
const borderColor = "rgba(255,255,255,0.10)";
const gold = "#d4a373";

// A3 portrait ratio (297×420)
const A3_PORTRAIT = "297 / 420";

const CASE = {
    index: "01",
    title: "Kali Portraits",
    subtitle: "Projet SouveReines",
    year: "2026",
    collaborator: "Marie Claire Barsotti",
    location: "Pondicherry, India",
    category: "Portrait collaboration, exhibition print",
    intent:
        "A portrait study where devotion is not extracted, but witnessed. The image is treated as a threshold: body, symbol, and time sharing the same frame.",
    role: "Creative Direction · Portrait Photography · Post-production · Print Prepress",
    outcome:
        "Delivered two A3 exhibition-ready prints (CMYK FOGRA39, 3mm bleed), packaged with the RAW set and a scanned Mahakali mantra overlay.",
    constraints:
        "Window light only; 50mm proximity; incense smoke used as temporal material. The mantra layer remains present but restrained, never louder than the gaze.",
    system: [
        "Define intent and ethical boundary (witness, not extraction).",
        "Constrain capture: window light, 50mm proximity, smoke as material.",
        "Select and grade: preserve skin, preserve silence, avoid spectacle.",
        "Restraint pass: minimal cleanup and denoise only where needed.",
        "Prepress: CMYK FOGRA39 export, 3mm bleed, print checks.",
    ],
    deliverables: [
        "2 x A3 print-ready files (CMYK FOGRA39, 3mm bleed)",
        "RAW photo set",
        "Scanned Mahakali mantra overlay asset",
    ],
    credits: [
        { label: "Collaborator", value: "Marie Claire Barsotti" },
        { label: "Role", value: "Creative Direction, Photography, Post, Prepress" },
        { label: "Studio", value: "Man3shi Studio" },
    ],
    links: {
        medium:
            "https://medium.com/@man3shi.art/kali-portraits-in-pondicherry-f9a7e3e0f301",
    },
    media: {
        hero: "/kali-blue-hero.jpg", // replace with your hero path in /public
        gallery: [
            "/kali-look.jpg", // replace
        ],
    },
};

export default function ProjetSouveReinesCaseStudy() {
    return (
        <div
            style={{
                padding: "120px 20px 120px",
                minHeight: "100vh",
                color: "#EBEBE8",
                fontFamily: "Helvetica Neue, sans-serif",
                maxWidth: "980px",
                margin: "0 auto",
            }}
        >
            {/* HEADER */}
            <div style={{ marginBottom: "54px" }}>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                    <h1
                        style={{
                            fontFamily: "Krungthep, Impact, sans-serif",
                            fontSize: "48px",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            lineHeight: 1.05,
                            margin: 0,
                        }}
                    >
                        {CASE.title}
                    </h1>

                    <div className="flex flex-col items-start md:items-end gap-1">
                        <span
                            style={{
                                fontFamily: "monospace",
                                fontSize: "10px",
                                color: gold,
                                letterSpacing: "0.1em",
                                textTransform: "uppercase",
                            }}
                        >
                            INDEX: [{CASE.index}]
                        </span>
                        <span
                            style={{
                                fontFamily: "monospace",
                                fontSize: "10px",
                                color: "#666",
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                            }}
                        >
                            Case Study
                        </span>
                    </div>
                </div>

                <p
                    style={{
                        maxWidth: "680px",
                        lineHeight: "1.6",
                        opacity: 0.82,
                        marginTop: "18px",
                    }}
                >
                    {CASE.subtitle} · w/ {CASE.collaborator} · {CASE.year}
                </p>

                <div
                    style={{
                        marginTop: "22px",
                        borderBottom: `${hairline} solid ${borderColor}`,
                    }}
                />
            </div>

            {/* HERO MEDIA (FRAMED A3 PORTRAIT — NO CROPPING) */}
            <div
                style={{
                    border: `${hairline} solid ${borderColor}`,
                    background: "rgba(0,0,0,0.20)",
                    padding: "clamp(10px, 2vw, 18px)", // frame thickness
                    marginBottom: "34px",
                }}
            >
                <div
                    className="relative w-full overflow-hidden"
                    style={{
                        aspectRatio: A3_PORTRAIT, // A3 portrait ratio
                        maxWidth: "720px", // keep it print-like, not cinema-wide
                        margin: "0 auto",
                        border: `${hairline} solid ${borderColor}`,
                        background: "rgba(0,0,0,0.55)",
                    }}
                >
                    <Image
                        src={CASE.media.hero}
                        alt={`${CASE.title} hero`}
                        fill
                        sizes="(max-width: 980px) 100vw, 720px"
                        className="object-contain opacity-95" // contain preserves full print
                        priority
                    />
                </div>
            </div>

            {/* META STRIP */}
            <div
                style={{
                    border: `${hairline} solid ${borderColor}`,
                    padding: "18px 18px",
                    marginBottom: "34px",
                    background: "rgba(255,255,255,0.02)",
                }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Meta label="Project" value={`${CASE.title} / ${CASE.subtitle}`} />
                    <Meta label="Year" value={CASE.year} />
                    <Meta label="Collaborator" value={CASE.collaborator} />
                    <Meta label="Location" value={CASE.location} />
                    <Meta label="Category" value={CASE.category} />
                    <Meta label="Role" value={CASE.role} />
                </div>
            </div>

            {/* INTENT */}
            <Section title="Intent">
                <p style={{ fontSize: "15px", lineHeight: 1.75, opacity: 0.92, margin: 0 }}>
                    {CASE.intent}
                </p>
            </Section>

            {/* OUTCOME */}
            <Section title="Outcome">
                <p style={{ fontSize: "15px", lineHeight: 1.75, opacity: 0.92, margin: 0 }}>
                    {CASE.outcome}
                </p>
            </Section>

            {/* CONSTRAINTS */}
            <Section title="Constraints">
                <div
                    style={{
                        borderLeft: `${hairline} solid rgba(255,255,255,0.18)`,
                        paddingLeft: "16px",
                    }}
                >
                    <p
                        style={{
                            fontFamily: "monospace",
                            fontSize: "12px",
                            color: "#999",
                            lineHeight: 1.7,
                            margin: 0,
                        }}
                    >
                        {CASE.constraints}
                    </p>
                </div>
            </Section>

            {/* SYSTEM */}
            <Section title="System">
                <ul style={{ margin: 0, paddingLeft: "18px" }}>
                    {CASE.system.map((step) => (
                        <li key={step} style={{ marginBottom: "10px", lineHeight: 1.65, opacity: 0.92 }}>
                            {step}
                        </li>
                    ))}
                </ul>
            </Section>

            {/* DELIVERABLES */}
            <Section title="Deliverables">
                <ul style={{ margin: 0, paddingLeft: "18px" }}>
                    {CASE.deliverables.map((d) => (
                        <li key={d} style={{ marginBottom: "10px", lineHeight: 1.65, opacity: 0.92 }}>
                            {d}
                        </li>
                    ))}
                </ul>
            </Section>

            {/* GALLERY (FRAMED A3 PORTRAIT THUMBNAILS — NO CROPPING) */}
            <Section title="Selected Frames">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {CASE.media.gallery.map((src, i) => (
                        <div
                            key={`${src}-${i}`}
                            style={{
                                border: `${hairline} solid ${borderColor}`,
                                background: "rgba(0,0,0,0.20)",
                                padding: "10px", // small mat
                            }}
                        >
                            <div
                                className="relative w-full overflow-hidden"
                                style={{
                                    aspectRatio: A3_PORTRAIT,
                                    border: `${hairline} solid ${borderColor}`,
                                    background: "rgba(0,0,0,0.55)",
                                }}
                            >
                                <Image
                                    src={src}
                                    alt={`Selected frame ${i + 1}`}
                                    fill
                                    sizes="(max-width: 980px) 100vw, 320px"
                                    className="object-contain opacity-95" // contain preserves full print
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <p
                    style={{
                        fontFamily: "monospace",
                        fontSize: "10px",
                        color: "#666",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginTop: "12px",
                        marginBottom: 0,
                    }}
                >
                    Replace gallery images in CASE.media.gallery with your actual selects.
                </p>
            </Section>

            {/* CREDITS */}
            <Section title="Credits">
                <div
                    style={{
                        border: `${hairline} solid ${borderColor}`,
                        padding: "18px",
                        background: "rgba(255,255,255,0.02)",
                    }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {CASE.credits.map((c) => (
                            <Meta key={c.label} label={c.label} value={c.value} />
                        ))}
                    </div>
                </div>
            </Section>

            {/* LINKS */}
            <div style={{
                marginTop: "38px",
                padding: "18px"
            }}>
                <Link
                    href={CASE.links.medium}
                    target="_blank"
                    className="inline-flex items-center gap-2 group border-b border-[#d4a373]/30 hover:border-[#d4a373] pb-1 transition-all"
                >
                    <span
                        style={{
                            fontFamily: "monospace",
                            fontSize: "11px",
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            color: gold,
                        }}
                    >
                        [ Read extended notes on Medium ]
                    </span>
                    <ArrowUpRight
                        size={12}
                        className="text-[#d4a373] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                </Link>
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
            </div>
        </div>
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

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section style={{ marginBottom: "34px" }}>
            <div
                style={{
                    borderTop: `${hairline} solid ${borderColor}`,
                    paddingTop: "18px",
                    marginBottom: "14px",
                }}
            >
                <div className="flex items-baseline justify-between gap-4">
                    <h2
                        style={{
                            fontFamily: "monospace",
                            fontSize: "12px",
                            color: gold,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            margin: 0,
                        }}
                    >
                        {title}
                    </h2>
                    <span
                        style={{
                            fontFamily: "monospace",
                            fontSize: "10px",
                            color: "#666",
                            letterSpacing: "0.08em",
                            textTransform: "uppercase",
                        }}
                    >
            /// {title.toUpperCase()}
                    </span>
                </div>
            </div>
            {children}
        </section>
    );
}

function Meta({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <div
                style={{
                    fontFamily: "monospace",
                    fontSize: "10px",
                    color: "#666",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                }}
            >
                {label}
            </div>
            <div style={{ fontSize: "14px", lineHeight: 1.55, opacity: 0.95 }}>{value}</div>
        </div>
    );
}
