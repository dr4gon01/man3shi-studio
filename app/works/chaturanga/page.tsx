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
    "/chaturanga_01.jpeg",
    "/chaturanga_interface.jpg",
    "/chaturanga_02.jpg",
    "/chaturanga_03.jpg"
];

const CASE = {
    index: "04",
    title: "Chaturanga",
    subtitle: "Emotion-Driven AI Co-Creation",
    year: "2025",
    collaborator: "Independent Research",
    location: "Secunderabad, India",
    category: "Interactive Installation, LLM Architecture",
    intent:
        "To reinterpret a canonical deterministic system (chess) into a platform for emotional storytelling. By mapping an 8×8 grid to affective lexicas, player movements are translated via the Gemini LLM into real-time narrative generation.",
    role: "System Architecture · Data Engineering · Interactive Design",
    outcome:
        "Created a closed-loop Python backend that bridges physical board states with generative text outputs. The system successfully computes sentiment and semantic-cohesion scores (using VADER) to evaluate the generated narratives on the fly.",
    constraints:
        "Latency in API calls to the LLM; ensuring deterministic chess logic aligns seamlessly with non-deterministic narrative outputs; translating spatial coordinates into poetic text prompts without breaking immersion.",
    system: [
        "Define a 64-entry affective lexicon, mapping emotional resonance to specific grid squares and chess pieces.",
        "Build a Python engine to track the virtual board state and validate legal moves.",
        "Integrate the Google Gemini LLM via API to ingest the board state and output in-character narratives (Queen, Rook, Bishop).",
        "Implement VADER and Sentence-BERT to algorithmically grade the sentiment of the output."
    ],
    deliverables: [
        "Interactive Digital Installation",
        "Custom Python LLM Pipeline",
        "Published Academic Preprint (Zenodo)"
    ],
    credits: [
        { label: "Concept & Engineering", value: "Nirmesh Gollamandala" },
        { label: "Language Model", value: "Google Gemini 1.5" },
    ],
    links: {
        paper: "/research/narrative-gen-chess",
        repo: "https://github.com/dr4gon01/Chaturanga_app"
    },
    media: {
        // REPLACE THE ID '1153478037' WITH YOUR CHATURANGA VIMEO ID
        heroVideo: "https://player.vimeo.com/video/1153478037?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0",
        gallery: galleryImages,
    },
};

export default function ChaturangaCaseStudy() {
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

            <Section title="Interface & Output">
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

           {/* ACTION LINKS */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "38px", borderTop: `${hairline} solid ${borderColor}`, paddingTop: "32px" }}>
                <Link 
                    href={CASE.links.paper} 
                    style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '8px', 
                        padding: '10px 16px', 
                        border: `1px solid ${borderColor}`, 
                        color: '#EBEBE8', 
                        fontSize: '12px', 
                        fontFamily: 'monospace', 
                        textTransform: 'uppercase', 
                        textDecoration: 'none' 
                    }} 
                    className="hover:border-white transition-colors"
                >
                    <FileText size={14} /> Read Research Paper
                </Link>
                <a 
                    href={CASE.links.repo} 
                    target="_blank" 
                    rel="noreferrer" 
                    style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '8px', 
                        padding: '10px 16px', 
                        border: `1px solid ${borderColor}`, 
                        color: '#EBEBE8', 
                        fontSize: '12px', 
                        fontFamily: 'monospace', 
                        textTransform: 'uppercase', 
                        textDecoration: 'none' 
                    }} 
                    className="hover:border-white transition-colors"
                >
                    GitHub Repo <ArrowUpRight size={14} />
                </a>
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
            <div className="flex justify-between items-center px-0.5">
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