"use client";
import React, { Suspense, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

// --- TYPES ---
export type WorkItem = {
  slug: string;
  title: string;
  category: "selected" | "client-work" | "collaborations" | "installations" | "experiments";
  year?: string;
  role?: string;
  excerpt?: string;
  cover?: {
    src: string;
    alt: string;
  };
};

// --- DATA ---
const PROJECTS: WorkItem[] = [
  // 1. NEW CLIENT WORK ADDED HERE
  {
    slug: "unlearning-success",
    title: "Unlearning Success - Book Design",
    category: "client-work",
    year: "2026",
    excerpt: "Editorial direction, typography, and cover architecture.",
    cover: { src: "/placeholders.jpg", alt: "Unlearning Success Book Design" }
  },
    {
    slug: "LXIV",
    title: "LXIV - Set Design",
    category: "client-work",
    year: "2025",
    excerpt: "Set design for a dance theatre.",
    cover: { src: "/placeholders.jpg", alt: "LXIV Set Design" }
  },
  {
    slug: "sah-astitva",
    title: "Sah Astitva",
    category: "collaborations",
    year: "2025",
    excerpt: "Two-act movement narrative fusing street lineage with classical forms.",
    cover: { src: "/sah_hero.jpg", alt: "Sah Astitva Thumbnail" }
  },
  {
    slug: "projet-souvereines", // Make sure folder is app/works/projet-souvereines
    title: "Projet SouveReines",
    category: "collaborations",
    year: "2026",
    excerpt: "Kali portrait collaboration developed for exhibition-ready prints.",
    cover: { src: "/kali-blue-hero.jpg", alt: "Projet SouveReines Thumbnail" }
  },
  {
    slug: "kshana",
    title: "Kshana",
    category: "installations",
    excerpt: "A tactile digital clock interface exploring the perception of slow time.",
    cover: { src: "/kshana_hero.jpg", alt: "Kshana Display" } 
  },
  {
    slug: "chaturanga",
    title: "Chaturanga",
    category: "installations",
    excerpt: "A Chess installation reimagining the game's spatial and temporal dynamics.",
    cover: { src: "/chaturanga_queen.jpg", alt: "Chaturanga Display" } 
  },
  {
    slug: "generative-study-01",
    title: "Arboring: A Butoh Vigil",
    category: "experiments",
    excerpt: "Somatic study documenting the kinetic architecture of stillness.",
    cover: { src: "/placeholders.jpg", alt: "Arboring Vigil" }
  }
];

// --- DESIGN TOKENS ---
const COLORS = {
  offWhite: '#EBEBE8',
  gold: '#d4a373',
  cardBg: 'rgba(255, 255, 255, 0.02)', 
  border: 'rgba(235, 235, 232, 0.15)', 
  textMuted: 'rgba(235, 235, 232, 0.5)'
};

const FILTERS = [
  { label: "Selected", value: "selected" },
  { label: "Client Work", value: "client-work" },
  { label: "Collaborations", value: "collaborations" },
   { label: "Installations", value: "installations" },
  { label: "Experiments", value: "experiments" }
];

// --- SAFE IMAGE COMPONENT ---
// Prevents broken image icons if the file path is wrong or missing.
function SafeImage({ src, alt }: { src: string, alt: string }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: COLORS.cardBg }}>
        <span style={{ color: COLORS.textMuted, fontSize: '10px', fontFamily: 'monospace', letterSpacing: '0.1em' }}>[ MEDIA UNAVAILABLE ]</span>
      </div>
    );
  }

  return (
    <Image 
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 100vw, 33vw"
      style={{ objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
      onError={() => setError(true)} // Trips the fallback UI if image fails
    />
  );
}

// --- INNER COMPONENT (Handles URL Params) ---
function WorkGrid() {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("c") || "selected";

  const filteredProjects = PROJECTS.filter(p => 
    currentCategory === "selected" ? true : p.category === currentCategory
  );

  return (
    <>
      {/* FILTER CHIPS */}
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '56px' }}>
        
        {/* BULLETPROOF CSS OVERRIDE */}
        <style dangerouslySetInnerHTML={{__html: `
          .chip-link {
            transition: all 0.2s ease;
          }
          .chip-active {
            color: #000000 !important; 
            font-weight: 600 !important;
          }
          .chip-inactive {
            color: ${COLORS.textMuted} !important;
          }
          .chip-inactive:hover {
            color: ${COLORS.offWhite} !important;
          }
        `}} />

        {FILTERS.map((filter) => {
          const isActive = currentCategory === filter.value;
          return (
            <Link
              key={filter.value}
              href={`/works?c=${filter.value}`}
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

      <div style={{ borderTop: `1px solid ${COLORS.border}`, marginBottom: '40px' }} />

      {/* CONTENT GRID */}
      <motion.div 
        key={currentCategory} 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
          gap: '40px 24px' 
        }}
      >
        {filteredProjects.length > 0 ? (
          filteredProjects.map((item) => (
            <Link 
              key={item.slug} 
              href={`/works/${item.slug}?c=${currentCategory}`} 
              style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              {/* THUMBNAIL CONTAINER */}
              <div 
                style={{ 
                  position: 'relative',
                  width: '100%',
                  aspectRatio: '4/3', 
                  backgroundColor: COLORS.cardBg, 
                  border: `1px solid ${COLORS.border}`,
                  overflow: 'hidden',
                  borderRadius: '2px'
                }}
              >
                {item.cover ? (
                  <SafeImage src={item.cover.src} alt={item.cover.alt} />
                ) : (
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: COLORS.textMuted, fontSize: '10px', fontFamily: 'monospace' }}>[ NO MEDIA ]</span>
                  </div>
                )}
              </div>

              {/* TEXT BLOCK */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <h3 style={{ 
                  color: COLORS.offWhite, 
                  fontSize: '16px', 
                  margin: 0, 
                  letterSpacing: '0.02em',
                  fontWeight: '500'
                }}>
                  {item.title}
                </h3>
                
                <p style={{ 
                  color: COLORS.textMuted, 
                  fontSize: '14px', 
                  margin: 0,
                  lineHeight: '1.4',
                  whiteSpace: 'nowrap',       
                  overflow: 'hidden',         
                  textOverflow: 'ellipsis'    
                }}>
                  {item.excerpt}
                </p>
              </div>
            </Link>
          ))
        ) : (
          <div style={{ gridColumn: '1 / -1', padding: '40px 0', color: COLORS.textMuted, fontFamily: 'monospace', fontSize: '12px', textAlign: 'center' }}>
            [ NO SIGNALS FOUND IN THIS FREQUENCY ]
          </div>
        )}
      </motion.div>
    </>
  );
}

// --- MAIN PAGE COMPONENT ---
export default function WorkPage() {
  return (
    <div style={{
      minHeight: '100vh',
      color: COLORS.offWhite,
      padding: '120px 24px 80px 24px',
      boxSizing: 'border-box'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        <h1 style={{ 
          fontFamily: 'Krungthep, Impact, sans-serif', 
          fontSize: '48px', 
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          margin: '0 0 32px 0'
        }}>
          Work
        </h1>

        <Suspense fallback={
          <div style={{ color: COLORS.textMuted, fontFamily: 'monospace', fontSize: '12px' }}>
            [ LOADING ARCHIVE ]
          </div>
        }>
          <WorkGrid />
        </Suspense>

      </div>
    </div>
  );
}