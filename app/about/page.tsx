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

// MANIFESTO DATA
const manifesto = [
  { 
    id: "01", 
    title: "IMMERSION", 
    subtitle: "The Breath", 
    desc: "We begin with silence. We study the cultural memory and 'inner life' of the project before a single pixel is drawn." 
  },
  { 
    id: "02", 
    title: "ABSTRACTION", 
    subtitle: "The Ink", 
    desc: "Translating raw intent into symbolic geometry. We distill the chaotic noise of inspiration into pure, essential form." 
  },
  { 
    id: "03", 
    title: "MATERIALIZATION", 
    subtitle: "The Code", 
    desc: "Rigorous construction. Whether through algorithmic architecture or Sumi-e ink, the execution is absolute." 
  },
  { 
    id: "04", 
    title: "RESONANCE", 
    subtitle: "The Motion", 
    desc: "The encounter. We ensure the work respects attention and invites a deeper mode of perception." 
  },
  { 
    id: "05", 
    title: "DISSOLUTION", 
    subtitle: "The Ether", 
    desc: "The return. The work dissolves into the collective consciousness, becoming energy—impermanent in form, yet timeless in impact." 
  },
];

export default function About() {
  const [view, setView] = useState<'artist' | 'studio'>('artist');
  const [isLoadedMain, setIsLoadedMain] = useState(false);
  const [isLoadedMotion, setIsLoadedMotion] = useState(false);

  // SHARED TYPOGRAPHY
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

  // HELPER: Monospace Glitch Text
  const Mono = ({ children, color = '#d4a373' }: { children: React.ReactNode, color?: string }) => (
    <span style={{ fontFamily: 'monospace', fontSize: '0.9em', color: color, letterSpacing: '0.05em' }}>
      {children}
    </span>
  );

  return (
    <div 
      style={{ 
        minHeight: '100vh', 
        paddingTop: '150px', 
        paddingLeft: '20px', 
        paddingRight: '20px',
        paddingBottom: '100px', 
        maxWidth: '900px',
        margin: '0 auto', 
        fontFamily: 'Helvetica Neue, Arial, sans-serif'
      }}
    >
      
      {/* =========================================================
          THE TOGGLE
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
          VIEW 1: THE ARTIST (REFACTORED NARRATIVE)
         ========================================================= */}
      {view === 'artist' && (
        <div className="animate-in fade-in duration-500">
          
          {/* HEADER */}
          <h1 
            style={{ 
              fontSize: '32px', 
              marginBottom: '10px', 
              fontFamily: '"Courier New", Courier, monospace', 
              fontWeight: 'normal', 
              letterSpacing: '0.05em', 
              textTransform: 'uppercase',
              color: '#FFFFFF' 
            }}
          >
            Nirmesh Gollamandala 
          </h1>
          <span style={{ fontSize: '12px', fontFamily: 'monospace', color: '#888', letterSpacing: '0.1em' }}>
            CREATIVE TECHNOLOGIST & INTERDISCIPLINARY RESEARCHER
          </span>
          <div className="mb-12"></div>

          {/* MAIN IMAGE FRAME (Portrait) */}
          <div className="relative w-full mb-12 flex justify-center bg-[#1c1f18] border border-[#333] group rounded-sm overflow-hidden p-1 md:p-0">
            <Image 
              src="/me.jpg" 
              alt="Nirmesh Gollamandala"
              width={1500}
              height={2000}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
              style={{
                maxWidth: '100%',
                height: 'auto',
                maxHeight: '85vh', 
                objectFit: 'contain'
              }}
              className={`
                transition-all duration-1000 ease-out
                ${isLoadedMain ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-sm'}
              `}
              priority
              onLoad={() => setIsLoadedMain(true)} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1f18]/60 via-transparent to-transparent pointer-events-none opacity-50"></div>
          </div>

          {/* SECTION 1: THE FRICTION (Intro + Technical Roots) */}
          <div style={{ fontSize: '14px', lineHeight: '1.8', color: '#EBEBE8', opacity: 0.9, fontWeight: 300, marginBottom: '60px' }}>
            <p style={{ marginBottom: '24px' }}>
              Operating at the intersection of <Mono>DETERMINISTIC_SYSTEMS</Mono> and organic movement, Nirmesh Gollamandala directs <strong>Man3shi Studio</strong>. His practice interrogates the friction between rigid engineering architectures and the fluidity of the human experience.
            </p>
            
            <p>
              Leveraging a decade of high-level engineering (<Mono color="#FFFFFF">HONEYWELL</Mono>, <Mono color="#FFFFFF">GENERAL MOTORS</Mono>), he dismantles industrial-grade logic to reconstruct it as aesthetic inquiry. He views the screen not as a surface, but as a responsive environment where <Mono>CODE</Mono> mimics biological behaviors.
            </p>
          </div>

          {/* =========================================================
              SECTION 2: SOMATIC ARCHITECTURE
             ========================================================= */}
          
          <div className="mb-8 border-t border-[#333] pt-8">
            <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#d4a373', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              // Somatic Architecture & Synthesis
            </span>
          </div>

          {/* MOTION IMAGE FRAME */}
          <div className="relative w-full mb-10 flex justify-center bg-[#1c1f18] border border-[#333] group rounded-sm overflow-hidden p-1 md:p-0">
            <Image 
              src="/me_motion.jpg" 
              alt="Nirmesh Gollamandala Motion"
              width={1500}
              height={2000}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
              style={{
                maxWidth: '100%',
                height: 'auto',
                maxHeight: '75vh', 
                objectFit: 'contain'
              }}
              className={`
                transition-all duration-1000 ease-out
                ${isLoadedMotion ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-sm'}
              `}
              onLoad={() => setIsLoadedMotion(true)} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#7a3311]/20 via-transparent to-transparent pointer-events-none opacity-40"></div>
          </div>

          {/* MOTION TEXT */}
          <div style={{ fontSize: '14px', lineHeight: '1.8', color: '#EBEBE8', opacity: 0.9, fontWeight: 300, marginBottom: '60px' }}>
            
            <p style={{ marginBottom: '24px' }}>
              His computational approach is informed by physical embodiment. As a <strong style={{ color: '#fff', fontWeight: 400 }}>First Generation Breaker</strong> from India, his roots lie in the explosive energy of the street. This practice matured in Chicago—the birthplace of House—where he became a fixture in the culture, performing for legends like <Mono color="#FFF">LIL LOUIS</Mono> and featuring at the <Mono color="#FFF">CHICAGO HOUSE MUSIC FESTIVAL 2025</Mono>.
            </p>

            {/* UPDATED NOGUCHI TAISO SECTION */}
            <p style={{ marginBottom: '24px' }}>
              Balancing this kinetic output, he studied <Mono color="#FFF">NOGUCHI TAISO</Mono> with <Mono color="#FFF">MARI OSANAI</Mono>. This practice—grounded in the realization that the body is a water-filled vessel yielding to gravity—teaches one to move through relaxation rather than muscular force. Nirmesh transfers this <Mono>HYDRODYNAMICS</Mono> into his engineering, replacing rigid logic with algorithms that flow with organic inevitability.
            </p>

            <p style={{ 
              marginBottom: '0px', 
              borderLeft: '2px solid #d4a373', 
              paddingLeft: '16px',
              fontStyle: 'italic',
              color: '#bbbbbb'
            }}>
              Currently, he is researching <Mono>TYPOGRAPHIC_ORGANISMS</Mono>—utilizing generative algorithms to render language as a responsive, breathing entity.
            </p>
          </div>

          {/* LINKS & SIGNATURE */}
          <div 
            style={{ 
              marginTop: '40px', 
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
          VIEW 2: THE STUDIO (CLEAN LIST)
         ========================================================= */}
      {view === 'studio' && (
        <div className="animate-in fade-in duration-500 flex flex-col items-center">
          
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

          <div className="w-full max-w-[600px] space-y-20 mb-24 mt-12">
            {manifesto.map((item) => (
              <div key={item.id} className="flex flex-col items-center text-center">
                
                <span style={{ color: '#d4a373', fontFamily: 'monospace', fontSize: '12px', marginBottom: '12px', letterSpacing: '0.1em' }}>
                  // {item.id}
                </span>

                <h3 style={{ fontSize: '18px', fontWeight: '300', color: '#FFFFFF', marginBottom: '8px', letterSpacing: '0.05em' }}>
                  {item.title}
                </h3>

                <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#8C8C88', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '16px', display: 'block' }}>
                  [{item.subtitle}]
                </span>

                <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#EBEBE8', opacity: 0.8, maxWidth: '450px', fontWeight: 300 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ paddingBottom: '24px', marginTop: '20px' }}>
            <Link 
              href="/contact" 
              style={{
                border: '1px solid #EBEBE8',
                padding: '16px 32px', 
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