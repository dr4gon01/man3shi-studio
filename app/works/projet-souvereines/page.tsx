"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";


/**
 * PROJECT SOUVEREINES - MAN3SHI STUDIO
 * Status: FINAL_V4
 * Updates:
 * 1. Hero: Dynamic Resolution (Natural Aspect Ratio, Height Capped)
 * 2. Gallery: Dense Grid (Contact Sheet Style)
 * 3. Typography: Cleaned Section Headers
 */

const hairline = "0.5px";
const borderColor = "rgba(255,255,255,0.10)";
const gold = "#d4a373"; // The "Man3shi" Accent

// A3 portrait ratio (297 / 420) - Used ONLY for Grid consistency now
const A3_RATIO = "297 / 420";

// Dummy data to visualize the dense grid
const galleryImages = [
    "/kali-blue-hero.jpg",
    "/kali-look.jpg"
];

const CASE = {
    index: "01",
    title: "Kali Portraits",
    subtitle: "Projet SouveReines",
    year: "2026",
    collaborator: "Marie Claire Barsotti",
    location: "Puducherry, India",
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
        { label: "Role", value: "Artist / Model" },
        { label: "Studio", value: "Marie Claire's Studio (Puducherry)" },
    ],
    links: {
        medium:
            "https://medium.com/@man3shi.art/kali-portraits-in-pondicherry-f9a7e3e0f301",
    },
    media: {
        hero: "/kali-mari.jpg",
        gallery: galleryImages,
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

            {/* --- HERO IMAGE (DYNAMIC FIT) --- */}
            {/* Man3shi Protocol: 
                We allow the image to dictate the ratio.
                We constrain ONLY the max-height to 85vh so it fits on one screen.
            */}
            <div 
                style={{ 
                    border: `${hairline} solid ${borderColor}`, 
                    background: "rgba(0,0,0,0.20)", 
                    padding: "clamp(10px, 2vw, 18px)", 
                    marginBottom: "34px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Image
                    src={CASE.media.hero}
                    alt={`${CASE.title} hero`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                        width: "auto",      // Let width scale naturally
                        height: "auto",     // Let height scale naturally
                        maxWidth: "100%",   // Never overflow width
                        maxHeight: "85vh",  // FIT THE HEIGHT: Caps at 85% of screen height
                        objectFit: "contain"
                    }}
                    priority
                />
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
            <Section title="Selected Frames">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2">
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
                <StudioLink href="/works/lab" label="[ Visit The Lab ]" />
                <StudioLink href="/works/commissions" label="[ Browse Commissions ]" />
                <StudioLink href="/" label="[ Back to Home ]" />
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
                    aspectRatio: A3_RATIO,
                    border: `${hairline} solid ${borderColor}`,
                    background: "#0a0a0a",
                }}
            >
                <Image
                    src={src}
                    alt={`Selected frame ${index + 1}`}
                    fill
                    className="object-contain p-1 opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16vw"
                />
            </div>
            <div className="flex justify-between items-center px-0.5">
                 <span className="font-mono text-[8px] text-[#666] tracking-widest uppercase">
                    FIG. {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
                 <span className="font-mono text-[8px] text-[#d4a373] tracking-widest uppercase">
                    [ A3 ]
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