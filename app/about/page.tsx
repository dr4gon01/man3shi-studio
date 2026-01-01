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

const manifesto = [
  { id: "01", title: "IMMERSION", subtitle: "The Breath", desc: "We begin with silence. We study the cultural memory and 'inner life' of the project." },
  { id: "02", title: "ABSTRACTION", subtitle: "The Ink", desc: "Translating raw intent into symbolic geometry. Where Desi scripts meet street aesthetics." },
  { id: "03", title: "MATERIALIZATION", subtitle: "The Code", desc: "Rigorous construction. Whether it is Next.js architecture or Sumi-e ink, the execution is absolute." },
  { id: "04", title: "RESONANCE", subtitle: "The Motion", desc: "The encounter. We ensure the work respects attention and invites a deeper mode of perception." },
];

export default function About() {
  const [view, setView] = useState<'artist' | 'studio'>('artist');
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
          VIEW 1: THE ARTIST
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

          {/* OPTIMIZED IMAGE FRAME
            1. Container: Flex centered to handle images that are narrower than the full width.
            2. Image: 
               - sizes: tells browser which version to load based on screen width.
               - style: max-height: 85vh ensures it never gets too tall on desktop.
               - width/height: 'auto' ensures aspect ratio (3:4) is strictly preserved.
          */}
          <div className="relative w-full mb-12 flex justify-center bg-[#1c1f18] border border-[#333] group rounded-sm overflow-hidden p-1 md:p-0">
            <Image 
              src="/me.jpg" 
              alt="Nirmesh Gollamandala"
              width={1500}
              height={2000}
              // Tells browser: "On mobile I'm 100vw, on tablet 80vw, on desktop max 900px"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
              style={{
                maxWidth: '100%',
                height: 'auto',
                maxHeight: '85vh', // Prevents infinite scrolling on large screens
                objectFit: 'contain' // Ensures the full image is always visible
              }}
              className={`
                transition-all duration-1000 ease-out
                ${isLoaded ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-sm'}
              `}
              priority
              onLoad={() => setIsLoaded(true)} 
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1f18]/60 via-transparent to-transparent pointer-events-none opacity-50"></div>
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
      )}

    </div>
  );
}