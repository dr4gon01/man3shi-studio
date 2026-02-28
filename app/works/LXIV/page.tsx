"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, Globe } from "lucide-react";

const hairline = "0.5px";
const borderColor = "rgba(255,255,255,0.10)";
const gold = "#d4a373";

// --- GALLERY ASSETS ---
const galleryImages = [
    "/LXIV_hero.jpg",
    "/LXIV_still01.jpg",
    "/LXIV_still02.jpg",
    "/LXIV_still03.jpg"
];

const CASE = {
    index: "05",
    title: "LXIV (Six Four)",
    subtitle: "Set Design & Key Art Direction",
    year: "2024",
    collaborator: "Chicago Dance Crash",
    location: "Chicago, IL, USA",
    category: "Set Design, Physical Fabrication, Poster Design",
    
    intent:
        "To physically manifest the 64 squares of a chessboard (LXIV) as a gladiatorial arena for Chicago Dance Crash, a premier Chicago dance theater company. Departing from digital constraints, this project translates classical chess archetypes (Queen, Bishop, Knight, Rook) into raw, large-scale street-art totems. The intent was to bridge high-concept structural hierarchy with the visceral, tactile energy of underground hip-hop and contemporary street lineage, establishing a cohesive visual identity across both the stage and promotional materials.",
    
    role: "Set Designer · Art Director · Visual Artist",
    
    outcome:
        "Designed and hand-painted a series of massive 10-foot canvas banners serving as the architectural backdrop for the live theatrical performance of 'LXIV'. Additionally, art-directed and designed the main event posters, ensuring the aggressive, calligraphic visual identity translated seamlessly from digital promotion to the physical stage lighting and textures.",
    
    // UPDATED WITH SCALE AND KRINK K-60 DETAILS
    constraints:
        "Scale and materiality: Transitioning from screen-based creative technology to physical fabrication on 10-foot canvases required mastering heavy acrylics, controlling the signature drip mechanics of Krink K-60 markers, and maintaining compositional balance on a massive scale. In the theater, the banners had to be rigged against a raw brick texture without visually clashing, demanding a careful balance of negative space to catch the dramatic top-down spotlighting.",
    
    system: [
        "Visual Identity: Reinterpret classical chess pieces through the visual language of graffiti and raw expressionism for the main event posters.",
        // UPDATED FABRICATION STEP
        "Fabrication: Hand-paint seven 10-foot unprimed canvas banners, combining aggressive acrylic brushstrokes with the distinct, opaque drip techniques of Krink K-60 paint markers.",
        "Spatial Integration: Rig the canvases against the theater's architectural brick wall, creating a monumental backdrop that implies an underground arena.",
        "Lighting Collaboration: Work closely with the LX (lighting) team to ensure the raw textures of the paint and canvas reacted dynamically to stage washes."
    ],
    deliverables: [
        "Main Event Promotional Posters (Key Art)",
        // UPDATED DELIVERABLE SPEC
        "7 x 10-Foot Canvas Banners (Acrylic & Krink K-60)",
        "Theatrical Set Design Integration"
    ],
    credits: [
        { label: "Client / Company", value: "Chicago Dance Crash" },
        { label: "Set Design & Key Art", value: "Nirmesh Gollamandala" },
    ],
    links: {
        event: "https://chicagodancecrash.com/events/lxiv-six-four/",
        medium: "https://medium.com/@man3shi.art"
    },
    media: {
        heroImage: "/LXIV_hero.jpg",
        gallery: galleryImages,
    },
};

export default function LxivSetDesignCaseStudy() {
    return (
        <div style={{ padding: "120px 20px 120px", minHeight: "100vh", color: "#EBEBE8", fontFamily: "Helvetica Neue, sans-serif", maxWidth: "980px", margin: "0 auto" }}>
            
            {/* BACK LINK */}
            <div style={{ marginBottom: "40px" }}>
                <Link href="/works?c=client-work" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#888', textDecoration: 'none', fontSize: '12px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em' }} className="hover:text-[#d4a373] transition-colors">
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

            {/* HERO IMAGE */}
            <div style={{ border: `${hairline} solid ${borderColor}`, background: "rgba(0,0,0,0.20)", padding: "clamp(10px, 2vw, 18px)", marginBottom: "34px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Image src={CASE.media.heroImage} alt={`${CASE.title} hero`} width={0} height={0} sizes="100vw" unoptimized={true} style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "85vh", objectFit: "contain" }} priority />
            </div>

            {/* METADATA */}
            <div style={{ border: `${hairline} solid ${borderColor}`, padding: "18px 18px", marginBottom: "34px", background: "rgba(255,255,255,0.02)" }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Meta label="Project" value={`${CASE.title} / ${CASE.subtitle}`} />
                    <Meta label="Year" value={CASE.year} />
                    <Meta label="Client" value={CASE.collaborator} />
                    <Meta label="Location" value={CASE.location} />
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

            {/* 4-SQUARE PROCESS GALLERY */}
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

            {/* ACTION LINKS & FOOTER NAVIGATION */}
            <div style={{ marginTop: "38px" }}>
                
                {/* PRIMARY ACTIONS */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", borderTop: `${hairline} solid ${borderColor}`, paddingTop: "32px", marginBottom: "32px" }}>
                    <a 
                        href={CASE.links.event} 
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
                        <Globe size={14} /> View Event Page
                    </a>
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
                    <StudioLink href="/works?c=client-work" label="[ Browse Client Work ]" />
                    <StudioLink href="/works?c=collaborations" label="[ Browse Collaborations ]" />
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
                 <span className="font-mono text-[8px] text-[#666] tracking-widest uppercase">STILL. 0{index + 1}</span>
                 <span className="font-mono text-[8px] text-[#d4a373] tracking-widest uppercase">[ LXIV ]</span>
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