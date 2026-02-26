"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, FileText } from "lucide-react";

const hairline = "0.5px";
const borderColor = "rgba(255,255,255,0.10)";
const gold = "#d4a373";

// --- GALLERY ASSETS ---
const galleryImages = [
    "/placeholders.jpg",
    "/placeholders.jpg",
    "/placeholders.jpg",
    "/placeholders.jpg"
];

const CASE = {
    index: "03",
    title: "Kshana",
    subtitle: "Tangible Interface & Generative Typeface",
    year: "2026",
    collaborator: "Man3shi Lab",
    location: "Hyderabad, India",
    category: "Intelligent User Interfaces, Hardware Prototype",
    intent:
        "To explore how external, analog variables can directly influence and mutate a digital typeface in real-time. Operating as a Tangible User Interface (TUI), Kshana uses human capacitance and fluid dynamics to alter a generative Nixie tube physics engine. This project serves as foundational research toward my doctoral work in Intelligent User Interfaces (IUI), mapping physical entropy to digital typography.",
    role: "Concept · Hardware Engineering · Creative Coding · Experience Design",
    outcome:
        "A fully functional hardware prototype and spatial gallery installation. Exhibited as the conceptual centerpiece of a solo exhibition, Kshana successfully operates as an IUI, forcing a physical deceleration before granting the user access to a stable, legible typographic state.",
    constraints:
        "Material engineering posed a primary constraint: standard distilled rose water and camphor lack the ionic conductivity required for seamless capacitive sensing, necessitating a hidden 'salt hack' to supercharge the water without compromising olfactory purity. Digitally, the challenge lay in rendering the high-entropy, glitching physics of the Nixie tubes with near-zero latency on the frontend.",
    system: [
        "The Physical Interface: A conductive copper vessel filled with water, camphor, rose water, and trace salt acts as a grounded, analog sensory anchor.",
        "Capacitive Detection: An ESP32 microcontroller is wired to the vessel. Breaking the water's surface completes the circuit using the human body's natural capacitance.",
        "Network Transmission: The ESP32 instantly transmits this capacitive spike as a data packet over a local WiFi network via WebSockets.",
        "The Visual Engine: A custom HTML5 Canvas rendering a digital Nixie tube typeface. Untouched, the typeface runs at high entropy (glitching, drifting). Upon touch, entropy mathematically collapses to zero, locking into crisp legibility."
    ],
    deliverables: [
        "Interactive Spatial Installation (Copper vessel, sensory water design)",
        "ESP32 C++ Firmware (Capacitive touch, WebSocket hosting)",
        "Custom HTML5/JavaScript Generative Physics UI",
        "Research Framework (IUI and Tangible Interfaces)"
    ],
    credits: [
        { label: "Concept & Engineering", value: "Nirmesh Gollamandala" },
        { label: "Context", value: "Solo Exhibition Core Artifact" },
    ],
    links: {
        paper: "#upcoming-hcicc-2026", // Update when paper is published
        medium: "https://medium.com/@man3shi.art"
    },
    media: {
        // Drop your 5-10s Vimeo loop ID here
        heroVideo: "https://player.vimeo.com/video/1153478037?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0",
        gallery: galleryImages,
    },
};

export default function KshanaCaseStudy() {
    return (
        <div style={{ padding: "120px 20px 120px", minHeight: "100vh", color: "#EBEBE8", fontFamily: "Helvetica Neue, sans-serif", maxWidth: "980px", margin: "0 auto" }}>
            
            {/* BACK LINK */}
            <div style={{ marginBottom: "40px" }}>
                <Link href="/works?c=installations" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#888', textDecoration: 'none', fontSize: '12px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em' }} className="hover:text-[#d4a373] transition-colors">
                    <ArrowLeft size={14} /> [ Back to Grid ]
                </Link>
            </div>

            {/* HEADER */}
            <div style={{ marginBottom: "54px" }}>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
                    <h1 style={{ fontFamily: "Krungthep, Impact, sans-serif", fontSize: "48px", textTransform: "uppercase", letterSpacing: "0.1em", lineHeight: 1.05, margin: 0 }}>
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
                    {CASE.subtitle} · {CASE.year}
                </p>
                <div style={{ marginTop: "22px", borderBottom: `${hairline} solid ${borderColor}` }} />
            </div>

            {/* HERO VIDEO (VIMEO EMBED) */}
            <div style={{ border: `${hairline} solid ${borderColor}`, background: "#050505", padding: "clamp(10px, 2vw, 18px)", marginBottom: "34px", width: "100%" }}>
                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, overflow: "hidden", width: "100%" }}>
                    <iframe 
                        src={CASE.media.heroVideo} 
                        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                        frameBorder="0" 
                        allow="autoplay; fullscreen; picture-in-picture" 
                        allowFullScreen 
                        title={`${CASE.title} Demonstration Video`}
                    ></iframe>
                </div>
            </div>

            {/* METADATA */}
            <div style={{ border: `${hairline} solid ${borderColor}`, padding: "18px 18px", marginBottom: "34px", background: "rgba(255,255,255,0.02)" }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Meta label="Project" value={`${CASE.title} / ${CASE.subtitle}`} />
                    <Meta label="Year" value={CASE.year} />
                    <Meta label="Category" value={CASE.category} />
                    <Meta label="Role" value={CASE.role} />
                </div>
            </div>

            <Section title="Intent"><p style={{ fontSize: "15px", lineHeight: 1.75, opacity: 0.92, margin: 0 }}>{CASE.intent}</p></Section>
            <Section title="Outcome"><p style={{ fontSize: "15px", lineHeight: 1.75, opacity: 0.92, margin: 0 }}>{CASE.outcome}</p></Section>
            <Section title="Constraints"><div style={{ borderLeft: `${hairline} solid rgba(255,255,255,0.18)`, paddingLeft: "16px" }}><p style={{ fontFamily: "monospace", fontSize: "12px", color: "#999", lineHeight: 1.7, margin: 0 }}>{CASE.constraints}</p></div></Section>
            
            <Section title="System Architecture">
                <ul style={{ margin: 0, paddingLeft: "18px" }}>
                    {CASE.system.map((step) => <li key={step} style={{ marginBottom: "10px", lineHeight: 1.65, opacity: 0.92 }}>{step}</li>)}
                </ul>
            </Section>

            {/* RESTORED 4-COLUMN TIGHT GRID */}
            <Section title="Process & Artifacts">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {CASE.media.gallery.map((src, i) => <GridFrame key={i} src={src} index={i} ratio="1/1" />)}
                </div>
            </Section>

            <Section title="Deliverables">
                <ul style={{ margin: 0, paddingLeft: "18px" }}>
                    {CASE.deliverables.map((d) => <li key={d} style={{ marginBottom: "10px", lineHeight: 1.65, opacity: 0.92 }}>{d}</li>)}
                </ul>
            </Section>

            <Section title="Credits">
                <div style={{ border: `${hairline} solid ${borderColor}`, padding: "18px", background: "rgba(255,255,255,0.02)" }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {CASE.credits.map((c) => <Meta key={c.label} label={c.label} value={c.value} />)}
                    </div>
                </div>
            </Section>

            {/* ACTION LINKS & RESTORED FOOTER NAVIGATION */}
            <div style={{ marginTop: "38px" }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", borderTop: `${hairline} solid ${borderColor}`, paddingTop: "32px", marginBottom: "32px" }}>
                    <Link 
                        href={CASE.links.paper} 
                        style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', border: `1px solid ${borderColor}`, color: '#EBEBE8', fontSize: '12px', fontFamily: 'monospace', textTransform: 'uppercase', textDecoration: 'none' }} 
                        className="hover:border-white transition-colors"
                    >
                        <FileText size={14} /> Pre-Print Paper (HCICC 2026)
                    </Link>
                </div>

                <div style={{ marginBottom: "32px", padding: "18px 0" }}>
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
                    <StudioLink href="/works?c=installations" label="[ Browse Installations ]" />
                    <StudioLink href="/works?c=experiments" label="[ Browse Experiments ]" />
                    <span style={{ flex: 1 }} />
                </div>
            </div>
        </div>
    );
}

// --- SHARED COMPONENTS ---
function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section style={{ marginBottom: "34px" }}>
            <div style={{ borderTop: `${hairline} solid ${borderColor}`, paddingTop: "18px", marginBottom: "14px" }}>
                <h2 style={{ fontFamily: "monospace", fontSize: "12px", color: gold, letterSpacing: "0.12em", textTransform: "uppercase", margin: 0 }}>/// {title}</h2>
            </div>
            {children}
        </section>
    );
}

function GridFrame({ src, index, ratio }: { src: string; index: number, ratio: string }) {
    return (
        <div className="flex flex-col gap-1 group">
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: ratio, border: `${hairline} solid ${borderColor}`, background: "#0a0a0a" }}>
                <Image src={src} alt={`Frame ${index + 1}`} fill unoptimized={true} className="object-cover p-1 opacity-90 group-hover:opacity-100 transition-opacity duration-300" sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
            <div className="flex justify-between items-center px-0.5 mt-1">
                 <span className="font-mono text-[8px] text-[#666] tracking-widest uppercase">SYS. 0{index + 1}</span>
                 <span className="font-mono text-[8px] text-[#d4a373] tracking-widest uppercase">[ DATA ]</span>
            </div>
        </div>
    );
}

function Meta({ label, value }: { label: string; value: string }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '24px' }}>
            <div style={{ fontFamily: "monospace", fontSize: "10px", color: "#666", letterSpacing: "0.08em", textTransform: "uppercase" }}>{label}</div>
            <div style={{ fontSize: "14px", lineHeight: 1.55, opacity: 0.95, color: "#EBEBE8" }}>{value}</div>
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