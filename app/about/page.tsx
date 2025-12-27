"use client";

import { useState } from "react"; 
import Signature from "@/components/Signature"; 
import Link from "next/link"; 
import Image from "next/image"; 
import { Noto_Sans_Telugu } from "next/font/google";

const teluguFont = Noto_Sans_Telugu({ 
  subsets: ["telugu"], 
  weight: ["400"],
  display: "swap" 
});

const manifesto = [
  { id: "01", title: "IMMERSION", subtitle: "The Breath", desc: "We begin with silence. We study the cultural memory and 'inner life' of the project." },
  { id: "02", title: "ABSTRACTION", subtitle: "The Ink", desc: "Translating raw intent into symbolic geometry. Where Desi scripts meet street aesthetics." },
  { id: "03", title: "MATERIALIZATION", subtitle: "The Code", desc: "Rigorous construction. Whether it is Next.js architecture or Sumi-e ink, the execution is absolute." },
  { id: "04", title: "RESONANCE", subtitle: "The Motion", desc: "The encounter. We ensure the work respects attention and invites a deeper mode of perception." },
];

export default function About() {
  const [view, setView] = useState<'artist' | 'studio'>('artist');
  const [isLoaded, setIsLoaded] = useState(false);

  // SHARED TYPOGRAPHY FOR TOGGLES
  const navTextStyle = {
    fontFamily: 'monospace', 
    fontSize: '11px', 
    textTransform: 'uppercase' as const, 
    letterSpacing: '0.15em',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: '10px',
    transition: 'opacity 0.3s ease'
  };

  return (
    <div 
      style={{ 
        minHeight: '100vh', 
        paddingTop: '150px', 
        paddingLeft: '20px', 
        paddingRight: '20px',
        paddingBottom: '100px', // Ensures global footer clearance
        maxWidth: '900px',
        margin: '0 auto', 
        fontFamily: 'Helvetica Neue, Arial, sans-serif'
      }}
    >
      
      {/* =========================================================
          THE TOGGLE (Centered & Minimal)
         ========================================================= */}
      <div className="flex justify-center gap-12 mb-20">
        <button 
          onClick={() => setView('artist')}
          style={{
            ...navTextStyle,
            color: view === 'artist' ? '#FFFFFF' : '#d4a373',
            opacity: view === 'artist' ? 1 : 0.5,
          }}
          className="hover:opacity-100"
        >
          [ ARTIST ]
        </button>
        
        <button 
          onClick={() => setView('studio')}
          style={{
            ...navTextStyle,
            color: view === 'studio' ? '#FFFFFF' : '#d4a373',
            opacity: view === 'studio' ? 1 : 0.5,
          }}
          className="hover:opacity-100"
        >
          [ STUDIO ]
        </button>
      </div>


      {/* =========================================================
          VIEW 1: THE ARTIST (UNCHANGED)
         ========================================================= */}
      {view === 'artist' && (
        <div className="animate-in fade-in duration-500">
          
          <h1 
            style={{ 
              fontSize: '32px', 
              marginBottom: '40px', 
              fontFamily: '"Courier New", Courier, monospace', 
              fontWeight: 'normal', 
              letterSpacing: '0.05em', 
              textTransform: 'uppercase',
              color: '#FFFFFF' 
            }}
          >
            Nirmesh Gollamandala <span style={{ fontSize: '0.6em', opacity: 0.5, verticalAlign: 'middle', textTransform: 'none' }}>(India, 1989)</span>
          </h1>

          <div className="relative w-full h-[400px] md:h-[500px] mb-12 overflow-hidden bg-[#1c1f18] border border-[#333] group rounded-sm">
            <Image 
              src="/me-olive-v2.jpg" 
              alt="Nirmesh Gollamandala"
              fill
              className={`
                object-cover object-[25%_top] 
                transition-all duration-1000 ease-out
                ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
              `}
              priority
              onLoad={() => setIsLoaded(true)} 
            />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(28,31,24,0.4)_100%)] pointer-events-none"></div>
          </div>

          <div 
            style={{ 
              fontSize: '14px', 
              lineHeight: '1.8', 
              color: '#EBEBE8', 
              opacity: 0.9,
              fontWeight: 300
            }}
          >
            <p style={{ marginBottom: '24px' }}>
              A Creative Technologist and interdisciplinary practitioner operating at the threshold of 
              computational logic and organic imperfection. Grounded in the philosophy of 
              <em style={{ color: '#fff', fontStyle: 'normal' }}> wabi-sabi</em>, Nirmesh views movement - whether 
              somatic, auditory, or cognitive - as a transmutable medium. His work does not merely render 
              the intangible; it choreographs the transition between chaos and structure.
            </p>
            
            <p style={{ marginBottom: '24px' }}>
              He directs <strong>Man3shi Studio</strong>. Deriving its moniker from the Telugu 
              <span style={{ margin: '0 6px' }}>
                <span style={{ color: '#fff' }}>Manishi</span>
                <span 
                  className={teluguFont.className} 
                  style={{ 
                    color: '#d4a373', 
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

            <p style={{ 
              marginBottom: '0px', 
              borderLeft: '2px solid #d4a373', 
              paddingLeft: '16px',
              fontStyle: 'italic',
              color: '#bbbbbb'
            }}>
              Currently, his research interrogates the fluidity of natural language, utilizing 
              algorithmic systems to reimagine typography as a responsive biological organism.
            </p>
          </div>

          <div 
            style={{ 
              marginTop: '24px', 
              marginBottom: '40px', 
              display: 'flex', 
              flexDirection: 'row', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              opacity: 0.8 
            }}
            className="flex-col md:flex-row gap-8 md:gap-0"
          >
             <Link href="/cv" className="group" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
               <span style={{ 
                 fontFamily: 'monospace', 
                 fontSize: '11px', 
                 textTransform: 'uppercase', 
                 letterSpacing: '0.15em',
                 color: '#d4a373', 
                 transition: 'color 0.3s'
               }} className="group-hover:text-white">
                 [ VIEW FULL CV ]
               </span>
               <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.6 }}>
                 <path d="M1 11L11 1M11 1H3M11 1V9" stroke="#d4a373" strokeWidth="1.5"/>
               </svg>
             </Link>

             <div style={{ transform: 'scale(0.9)', transformOrigin: 'right center' }}>
                <Signature />
             </div>
          </div>
          <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
        </div>
      )}


      {/* =========================================================
          VIEW 2: THE STUDIO
         ========================================================= */}
      {view === 'studio' && (
        <div className="animate-in fade-in duration-500 flex flex-col items-center">
          
          {/* 1. HEADER (Matches 'Nirmesh Gollamandala' Exact Style) */}
          <div style={{ width: '100%', maxWidth: '900px', textAlign: 'center' }}>
            <h1 
              style={{ 
                fontSize: '32px', 
                marginBottom: '40px', 
                fontFamily: '"Courier New", Courier, monospace', 
                fontWeight: 'normal', 
                letterSpacing: '0.05em', 
                textTransform: 'uppercase',
                color: '#FFFFFF' 
              }}
            >
              The Man3shi Method
            </h1>
          </div>

          {/* 2. THE LIST (Centered & Clean) */}
          <div className="w-full max-w-[600px] space-y-20 mb-24 mt-12">
            {manifesto.map((item) => (
              <div key={item.id} className="flex flex-col items-center text-center">
                
                {/* Number */}
                <span style={{ color: '#d4a373', fontFamily: 'monospace', fontSize: '12px', marginBottom: '12px', letterSpacing: '0.1em' }}>
                  // {item.id}
                </span>

                {/* Title */}
                <h3 style={{ fontSize: '18px', fontWeight: '300', color: '#FFFFFF', marginBottom: '8px', letterSpacing: '0.05em' }}>
                  {item.title}
                </h3>

                {/* Subtitle */}
                <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#8C8C88', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '16px', display: 'block' }}>
                  [{item.subtitle}]
                </span>

                {/* Desc */}
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#EBEBE8', opacity: 0.8, maxWidth: '450px', fontWeight: 300 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 3. THE ACTION BUTTON (Exact copy from Contact + Bottom Padding) */}
          <div style={{ paddingBottom: '24px', marginTop: '20px' }}> {/* Container to ensure bottom spacing */}
            <Link 
              href="/contact" 
              style={{
                border: '1px solid #EBEBE8',
                padding: '16px 32px', // Standard padding as requested
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#EBEBE8',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'background 0.3s ease',
                display: 'inline-block'
              }}
              className="hover:bg-white/10"
            >
              INITIALIZE CONTACT
            </Link>
          </div>

        </div>
      )}

    </div>
  );
}