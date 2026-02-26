"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

/**
 * SAH ASTITVA - MAN3SHI STUDIO
 * Status: FINAL_V1
 * Updates:
 * 1. Hero: Swapped to Responsive Vimeo iframe (Autoplay, Muted, Loop)
 * 2. Data: Injected Sah Astitva specific narrative and constraints
 */

const hairline = "0.5px";
const borderColor = "rgba(255,255,255,0.10)";
const gold = "#d4a373";

// A3 portrait ratio (297 / 420) - Used for Grid consistency
const A3_RATIO = "297 / 420";

// Placeholders for video stills/BTS
const galleryImages = [
    "/sah_still01.jpg",
    "/sah_still02.jpg",
    "/sah_still03.jpg",
    "/sah_space.jpeg"
];

const CASE = {
    index: "02",
    title: "Sah Astitva",
    subtitle: "Desi X Street",
    year: "2025",
    collaborator: "Desi X Street",
    location: "Chicago, IL, USA",
    category: "Movement Narrative, Spatial Design",
    intent:
        "A two-act movement narrative fusing Western contemporary street lineage with Devadasi-era classical movement forms—staged first as confrontation, then as co-existence—so the body becomes a site where cultures negotiate, not decorate.",
    role: "Art Direction · Spatial + Light Design · Artifact Design · Post-production",
outcome:
        "Produced a cohesive visual narrative and spatial design that transformed a limited interior into a vast, shadow-driven temple environment. The resulting cinematic movement film is currently under consideration for the 2026 Manifest Dance Film Festival (Puducherry).",
    constraints:
        "A 900 sq ft interior had to read as a Devadasi-era temple. Severe light leaks required black-sealed curtains, later digitally painted into the portrait environment for continuity. Scale was built through shadow logic—silhouette and negative space used to imply vastness beyond the room.",
    system: [
        "Develop two-act script mapping the transition from confrontation to co-existence.",
        "Design lighting plot utilizing heavy shadows to mask the 900 sq ft spatial limits.",
        "Construct framing system to elevate the movement beyond standard dance documentation.",
        "Execute digital set extension (painting out curtains) for historical continuity.",
        "Fabricate a geometric performance mask from raw cardboard, utilizing planar surfaces to catch harsh light and abstract the dancer's identity." // <-- NEW
    ],
    deliverables: [
        "Creative Direction & Script",
        "Spatial & Lighting Design Blueprint",
        "Final Movement Film (Digital)",
    ],
    credits: [
        { label: "Collaborator", value: "Desi X Street" },
        { label: "Role", value: "Choreography / Performance" },
        { label: "Location", value: "Chicago Studio" },
    ],
    links: {
        // Update this if you have a specific write-up
        medium: "https://medium.com/@man3shi.art",
    },
    media: {
        // VIMEO EMBED URL: Added autoplay=1, muted=1, loop=1, background=1 for a clean UI
        heroVideo: "https://player.vimeo.com/video/1153478037?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0",
        gallery: galleryImages,
    },
};

export default function SahAstitvaCaseStudy() {
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
            {/* --- BACK BUTTON --- */}
            <div style={{ marginBottom: "40px" }}>
                <Link 
                    href="/works?c=collaborations" 
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#888', textDecoration: 'none', fontSize: '12px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                    className="hover:text-[#d4a373] transition-colors"
                >
                    <ArrowLeft size={14} /> [ Back to Grid ]
                </Link>
            </div>

            {/* --- HEADER --- */}
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
                        <span style={{ fontFamily: "monospace", fontSize: "10px", color: gold, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                            INDEX: [{CASE.index}]
                        </span>
                        <span style={{ fontFamily: "monospace", fontSize: "10px", color: "#666", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                            Case Study
                        </span>
                    </div>
                </div>

                <p style={{ maxWidth: "680px", lineHeight: "1.6", opacity: 0.82, marginTop: "18px" }}>
                    {CASE.subtitle} · w/ {CASE.collaborator} · {CASE.year}
                </p>

                <div style={{ marginTop: "22px", borderBottom: `${hairline} solid ${borderColor}` }} />
            </div>

            {/* --- HERO VIDEO (VIMEO EMBED) --- */}
            <div 
                style={{ 
                    border: `${hairline} solid ${borderColor}`, 
                    background: "#050505", 
                    padding: "clamp(10px, 2vw, 18px)", 
                    marginBottom: "34px",
                    width: "100%",
                }}
            >
                {/* Responsive 16:9 Container for iframe */}
                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", width: "100%" }}>
                    <iframe 
                        src={CASE.media.heroVideo} 
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowFullScreen 
                        title={`${CASE.title} Video`}
                    ></iframe>
                </div>
            </div>

            {/* --- META DATA --- */}
            <div style={{ border: `${hairline} solid ${borderColor}`, padding: "18px 18px", marginBottom: "34px", background: "rgba(255,255,255,0.02)" }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Meta label="Project" value={`${CASE.title} / ${CASE.subtitle}`} />
                    <Meta label="Year" value={CASE.year} />
                    <Meta label="Collaborator" value={CASE.collaborator} />
                    <Meta label="Location" value={CASE.location} />
                    <Meta label="Category" value={CASE.category} />
                    <Meta label="Role" value={CASE.role} />
                </div>
            </div>

            {/* --- NARRATIVE SECTIONS --- */}
            <Section title="Intent">
                <p style={{ fontSize: "15px", lineHeight: 1.75, opacity: 0.92, margin: 0 }}>
                    {CASE.intent}
                </p>
            </Section>

            <Section title="Outcome">
                <p style={{ fontSize: "15px", lineHeight: 1.75, opacity: 0.92, margin: 0 }}>
                    {CASE.outcome}
                </p>
            </Section>

            <Section title="Constraints">
                <div style={{ borderLeft: `${hairline} solid rgba(255,255,255,0.18)`, paddingLeft: "16px" }}>
                    <p style={{ fontFamily: "monospace", fontSize: "12px", color: "#999", lineHeight: 1.7, margin: 0 }}>
                        {CASE.constraints}
                    </p>
                </div>
            </Section>

            <Section title="System">
                <ul style={{ margin: 0, paddingLeft: "18px" }}>
                    {CASE.system.map((step) => (
                        <li key={step} style={{ marginBottom: "10px", lineHeight: 1.65, opacity: 0.92 }}>
                            {step}
                        </li>
                    ))}
                </ul>
            </Section>

            {/* --- GRID SECTION (CONTACT SHEET STYLE) --- */}
            <Section title="Video Stills">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2">
                    {CASE.media.gallery.map((src, i) => (
                        <GridFrame key={i} src={src} index={i} />
                    ))}
                </div>
            </Section>

            {/* --- FOOTER SECTIONS --- */}
            <Section title="Deliverables">
                <ul style={{ margin: 0, paddingLeft: "18px" }}>
                    {CASE.deliverables.map((d) => (
                        <li key={d} style={{ marginBottom: "10px", lineHeight: 1.65, opacity: 0.92 }}>
                            {d}
                        </li>
                    ))}
                </ul>
            </Section>

            <Section title="Credits">
                <div style={{ border: `${hairline} solid ${borderColor}`, padding: "18px", background: "rgba(255,255,255,0.02)" }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {CASE.credits.map((c) => (
                            <Meta key={c.label} label={c.label} value={c.value} />
                        ))}
                    </div>
                </div>
            </Section>

            <div style={{ marginTop: "38px", padding: "18px" }}>
                <Link
                    href={CASE.links.medium}
                    target="_blank"
                    className="inline-flex items-center gap-2 group border-b border-[#d4a373]/30 hover:border-[#d4a373] pb-1 transition-all"
                >
                    <span style={{ fontFamily: "monospace", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", color: gold }}>
                        [ Read extended notes on Medium ]
                    </span>
                    <ArrowUpRight size={12} className="text-[#d4a373] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", alignItems: "center" }}>
                <StudioLink href="/works?c=experiments" label="[ Browse Experiments ]" />
                <StudioLink href="/works?c=client-work" label="[ Browse Client Work ]" />
                <span style={{ flex: 1 }} />
            </div>
        </div>
    );
}

// --- COMPONENT LOGIC ---

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
                    /// {title}
                </h2>
            </div>
            {children}
        </section>
    );
}

function GridFrame({ src, index }: { src: string; index: number }) {
    return (
        <div className="flex flex-col gap-1 group">
            <div
                className="relative w-full overflow-hidden"
                style={{
                    aspectRatio: "16/9", // Adjusted to 16:9 for video stills
                    border: `${hairline} solid ${borderColor}`,
                    background: "#0a0a0a",
                }}
            >
                <Image
                    src={src}
                    alt={`Selected frame ${index + 1}`}
                    fill
                    className="object-cover p-1 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    sizes="(max-width: 768px) 50vw, 25vw"
                />
            </div>
            <div className="flex justify-between items-center px-0.5">
                 <span className="font-mono text-[8px] text-[#666] tracking-widest uppercase">
                    STILL. 0{index + 1}
                </span>
                 <span className="font-mono text-[8px] text-[#d4a373] tracking-widest uppercase">
                    [ 16:9 ]
                </span>
            </div>
        </div>
    );
}

function Meta({ label, value }: { label: string; value: string }) {
    return (
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            gap: '6px', 
            marginBottom: '24px' // <-- This adds the crucial spacing between categories
        }}>
            <div style={{ 
                fontFamily: "monospace", 
                fontSize: "10px", 
                color: "#666", 
                letterSpacing: "0.08em", 
                textTransform: "uppercase" 
            }}>
                {label}
            </div>
            <div style={{ 
                fontSize: "14px", 
                lineHeight: 1.55, 
                opacity: 0.95,
                color: "#EBEBE8"
            }}>
                {value}
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