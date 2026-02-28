"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

const hairline = "0.5px";
const borderColor = "rgba(255,255,255,0.10)";
const gold = "#d4a373";

// --- GALLERY ASSETS ---
const galleryImages = [
    "/book_cover.jpg",
    "/kabirs doha.jpg",
    "/placeholders.jpg", // Replace with more internal spreads
    "/placeholders.jpg"  // Replace with more internal spreads
];

const CASE = {
    index: "06",
    title: "Unlearning Success",
    subtitle: "Book Cover & Internal Art Direction",
    year: "2024",
    collaborator: "Dr. Reggie Kaur",
    location: "Independent Commission",
    category: "Editorial Design, Fine Art, Visual Philosophy",
    
    intent:
        "To translate the philosophical core of Dr. Reggie Kaur's book—dismantling external definitions of success—into a language of Buddhist minimalism. The design intentionally rejects the loud, aggressive tropes of traditional self-help media. Instead, the central motif, titled 'The Journey', depicts the walk of life as a figure simultaneously integrating and disintegrating. It uses meditative, Zen-inspired brushwork and vast negative space to reflect the book's true premise: self-liberation, stillness, and the courage of subtraction.",
    
    role: "Art Direction · Cover Design · Calligraphy & Fine Art Illustration",
    
    outcome:
        "Delivered a complete wrap-around book cover and a series of bespoke internal artworks. The minimalist aesthetic visually anchors the author's message. The front cover's dissolving, kinetic figure symbolizes the shedding of societal conditioning, seamlessly integrating traditional Eastern fine art techniques into a modern commercial editorial format.",
    
    constraints:
        "Translating highly tactile, raw physical mediums (water washes on delicate rice paper) into crisp, commercially viable digital print files without losing the organic integrity of the brushwork or the subtle gradients of the eel ink.",
    
    system: [
        "Cover Artwork ('The Journey'): Painted on traditional rice paper utilizing a water wash technique. The figure was executed with a bamboo sumi-e brush and eel ink (sumi-e ink) to capture the fluid state of integrating and disintegrating.",
        "Internal Calligraphy (Kabir's Doha): Executed in an original, experimental graffiti style of Hindi. Crafted using a Micron pen on 300GSM acid-free, archival-quality paper.",
        "Cultural Synthesis: Designed internal chapter artworks that bridge Eastern spiritual traditions. A Tibetan 'Om' was specifically chosen to anchor the Buddhist minimalist aesthetic, paired directly with the kinetic Hindi calligraphy of Kabir's Doha.",
        "Typography & Layout: Selected a clean, understated serif font that provides quiet authority, allowing the expressive physical brushstrokes to command the visual hierarchy of the book."
    ],
    
    deliverables: [
        "Original Fine Artworks (Rice paper / 300GSM Archival)",
        "Print-ready Wrap Cover (Front, Spine, Back)",
        "Internal Chapter Illustrations & Calligraphy",
        "3D Promotional Mockups"
    ],
    credits: [
        { label: "Author / Client", value: "Dr. Reggie Kaur" },
        { label: "Art Direction & Fine Art", value: "Nirmesh Gollamandala" },
    ],
    links: {
        medium: "https://medium.com/@man3shi.art"
    },
    media: {
        heroImage: "/unlearning_hero.jpg", 
        gallery: galleryImages,
    },
};

export default function UnlearningSuccessCaseStudy() {
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
            <div style={{ border: `${hairline} solid ${borderColor}`, background: "rgba(255,255,255,0.02)", padding: "clamp(10px, 2vw, 18px)", marginBottom: "34px", display: "flex", justifyContent: "center", alignItems: "center" }}>
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
            
            <Section title="System Architecture & Materials">
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
            <div style={{ marginTop: "38px", borderTop: `${hairline} solid ${borderColor}`, paddingTop: "32px" }}>
                
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
            <div className="relative w-full overflow-hidden" style={{ aspectRatio: ratio, border: `${hairline} solid ${borderColor}`, background: "#fff" }}>
                {/* Kept object-contain so editorial text/art doesn't get cropped by the square shape */}
                <Image src={src} alt={`Frame ${index + 1}`} fill unoptimized={true} className="object-contain p-1 opacity-90 group-hover:opacity-100 transition-opacity duration-300" sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
            <div className="flex justify-between items-center px-0.5 mt-1">
                 <span className="font-mono text-[8px] text-[#666] tracking-widest uppercase">ART. 0{index + 1}</span>
                 <span className="font-mono text-[8px] text-[#d4a373] tracking-widest uppercase">[ EDITORIAL ]</span>
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