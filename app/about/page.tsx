"use client";
import Signature from "@/components/Signature"; 
import Link from "next/link";
import { Noto_Sans_Telugu } from "next/font/google";

// Load the organic font locally
const teluguFont = Noto_Sans_Telugu({ 
  subsets: ["telugu"], 
  weight: ["400"],
  display: "swap" 
});

export default function About() {
  return (
    <div 
      style={{ 
        minHeight: '100vh', 
        paddingTop: '150px', 
        paddingLeft: '40px', 
        paddingRight: '40px',
        maxWidth: '900px',
        margin: '0 auto', 
        fontFamily: 'Helvetica Neue, Arial, sans-serif'
      }}
    >
      
      {/* 1. THE HEADLINE */}
      <h1 
        style={{ 
          fontSize: '32px', 
          marginBottom: '40px', 
          fontFamily: 'Krungthep, Impact, sans-serif', 
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#FFFFFF' 
        }}
      >
        Nirmesh Gollamandala <span style={{ fontSize: '0.6em', opacity: 0.5, verticalAlign: 'middle', textTransform: 'none' }}>(India, 1989)</span>
      </h1>

      {/* 2. THE BIO TEXT */}
      <div 
        style={{ 
          fontSize: '14px', 
          lineHeight: '1.8', 
          color: '#EBEBE8', 
          opacity: 0.9,
          fontWeight: 300
        }}
      >
        {/* PARAGRAPH 1: PHILOSOPHY */}
        <p style={{ marginBottom: '24px' }}>
          A Creative Technologist and interdisciplinary practitioner operating at the threshold of 
          computational logic and organic imperfection. Grounded in the philosophy of 
          <em style={{ color: '#fff', fontStyle: 'normal' }}> wabi-sabi</em>, Nirmesh views movement - whether 
          somatic, auditory, or cognitive - as a transmutable medium. His work does not merely render 
          the intangible; it choreographs the transition between chaos and structure.
        </p>
        
        {/* PARAGRAPH 2: IDENTITY & ARTIFACT */}
        <p style={{ marginBottom: '24px' }}>
          He directs <strong>Man3shi Studio</strong>. Deriving its moniker from the Telugu 
          <span style={{ margin: '0 6px' }}>
            <span style={{ color: '#fff' }}>Manishi</span>
            {/* THE ARTIFACT */}
            <span 
              className={teluguFont.className} 
              style={{ 
                color: '#d4a373', // Muted Terracotta
                fontSize: '1.3em', 
                verticalAlign: 'middle',
                marginLeft: '6px',
                opacity: 0.9
              }}
            >
              (మనిషి)
            </span>
          </span>, 
          meaning 'Human', this identity serves as a cultural anchor, ensuring that even his most 
          abstract algorithmic systems remain deeply rooted in the visceral reality of the human experience.
        </p>

        {/* PARAGRAPH 3: RESEARCH */}
        <p style={{ 
          marginBottom: '24px', 
          borderLeft: '2px solid #d4a373', 
          paddingLeft: '16px',
          fontStyle: 'italic',
          color: '#bbbbbb'
        }}>
          Currently, his research interrogates the fluidity of natural language, utilizing 
          algorithmic systems to reimagine typography as a responsive biological organism.
        </p>
      </div>

      {/* 3. THE CV LINK */}
      <div style={{ marginTop: '40px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
          <Link href="/cv" className="group" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
             <span style={{ 
               fontFamily: 'monospace', 
               fontSize: '11px', 
               textTransform: 'uppercase', 
               letterSpacing: '0.15em',
               color: '#d4a373', // Terracotta Accent
               transition: 'color 0.3s'
             }}>
               [ View Full Curriculum Vitae ]
             </span>
             {/* Tiny Arrow */}
             <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.6 }}>
               <path d="M1 11L11 1M11 1H3M11 1V9" stroke="#d4a373" strokeWidth="1.5"/>
             </svg>
          </Link>
        </div>

      {/* 4. THE SIGNATURE */}
      <Signature />

    </div>
  );
}