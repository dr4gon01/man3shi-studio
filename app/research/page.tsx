"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowUpRight, FileText } from "lucide-react";

// --- DATA ---
const RESEARCH_ITEMS = [
  {
    slug: "narrative-gen-chess",
    title: "Narrative Generation in Deterministic Systems: Emotion-Driven AI Co-Creation with Chess",
    category: "papers",
    year: "2025",
    venue: "Zenodo",
    status: "Preprint",
    authors: "Nirmesh Gollamandala",
    pdfUrl: "https://zenodo.org/records/15701859",
    doi: "10.5281/zenodo.15701859"
  }
];

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Papers", value: "papers" },
  { label: "Talks", value: "talks" },
  { label: "Writing", value: "writing" },
  { label: "Artifacts", value: "artifacts" }
];

const COLORS = {
  offWhite: '#EBEBE8',
  gold: '#d4a373',
  border: 'rgba(235, 235, 232, 0.15)',
  textMuted: 'rgba(235, 235, 232, 0.5)',
  bgHover: 'rgba(212, 163, 115, 0.03)'
};

function ResearchList() {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("c") || "all";

  const filteredItems = RESEARCH_ITEMS.filter(item => 
    currentCategory === "all" ? true : item.category === currentCategory
  );

  return (
    <>
      {/* FILTER CHIPS */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '40px' }}>
        <style dangerouslySetInnerHTML={{__html: `
          .chip-link { transition: all 0.2s ease; }
          .chip-active { color: #000000 !important; font-weight: 600 !important; }
          .chip-inactive { color: ${COLORS.textMuted} !important; }
          .chip-inactive:hover { color: ${COLORS.offWhite} !important; }
        `}} />

        {FILTERS.map((filter) => {
          const isActive = currentCategory === filter.value;
          return (
            <Link
              key={filter.value}
              href={`/research?c=${filter.value}`}
              scroll={false}
              className={`chip-link ${isActive ? 'chip-active' : 'chip-inactive'}`}
              style={{
                padding: '8px 20px',
                backgroundColor: isActive ? COLORS.offWhite : 'transparent',
                border: `1px solid ${isActive ? COLORS.offWhite : COLORS.border}`,
                borderRadius: '100px',
                fontSize: '11px',
                fontFamily: 'monospace',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                textDecoration: 'none',
              }}
            >
              {filter.label}
            </Link>
          );
        })}
      </div>

      <div style={{ borderTop: `1px solid ${COLORS.border}` }} />

      {/* RESEARCH LIST */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div 
              key={item.slug}
              style={{ 
                borderBottom: `0.5px solid ${COLORS.border}`,
                padding: "32px 0",
                display: "flex",
                flexDirection: "column",
                gap: "16px"
              }}
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                {/* Title & Authors */}
                <div style={{ maxWidth: "700px" }}>
                  <Link href={`/research/${item.slug}?c=${currentCategory}`} style={{ textDecoration: 'none' }} className="group">
                    <h3 style={{ 
                      fontSize: "20px", 
                      color: COLORS.offWhite, 
                      lineHeight: 1.4, 
                      margin: "0 0 8px 0",
                      transition: "color 0.2s"
                    }} className="group-hover:text-[#d4a373]">
                      {item.title}
                    </h3>
                  </Link>
                  <p style={{ fontFamily: "monospace", fontSize: "12px", color: COLORS.textMuted, margin: 0 }}>
                    {item.authors}
                  </p>
                </div>

                {/* Status Badge */}
                <div className="flex-shrink-0">
                  <span style={{ 
                    display: "inline-block",
                    padding: "4px 8px", 
                    border: `1px solid ${item.status === "Published" ? COLORS.gold : COLORS.border}`,
                    color: item.status === "Published" ? COLORS.gold : COLORS.textMuted,
                    fontSize: "10px",
                    fontFamily: "monospace",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em"
                  }}>
                    {item.status}
                  </span>
                </div>
              </div>

              {/* Metadata & Actions */}
              <div className="flex flex-wrap items-center gap-6 mt-2">
                <span style={{ fontFamily: "monospace", fontSize: "12px", color: COLORS.offWhite }}>
                  [{item.year}] {item.venue}
                </span>
                
                {item.pdfUrl && (
                  <a href={item.pdfUrl} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontFamily: 'monospace', color: COLORS.gold, textDecoration: 'none', textTransform: 'uppercase' }} className="hover:opacity-80">
                    <FileText size={14} /> View Record
                  </a>
                )}
                {item.doi && (
                  <a href={`https://doi.org/${item.doi}`} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', fontFamily: 'monospace', color: COLORS.textMuted, textDecoration: 'none' }} className="hover:text-white">
                    DOI <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
            </div>
          ))
        ) : (
          <div style={{ padding: '60px 0', color: COLORS.textMuted, fontFamily: 'monospace', fontSize: '12px', textAlign: 'center' }}>
            [ NO RECORDS FOUND IN THIS CATEGORY ]
          </div>
        )}
      </div>
    </>
  );
}

export default function ResearchPage() {
  return (
    <div style={{ minHeight: '100vh', color: COLORS.offWhite, padding: '120px 24px 80px 24px', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: '980px', margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'Krungthep, Impact, sans-serif', fontSize: '48px', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 32px 0' }}>
          Research
        </h1>
        <Suspense fallback={<div style={{ color: COLORS.textMuted, fontFamily: 'monospace', fontSize: '12px' }}>[ LOADING REPOSITORY ]</div>}>
          <ResearchList />
        </Suspense>
      </div>
    </div>
  );
}