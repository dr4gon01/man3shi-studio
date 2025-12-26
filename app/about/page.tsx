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

export default function About() {
  // State to track when the image has finished loading
  const [isLoaded, setIsLoaded] = useState(false);

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
      
      {/* 1. HEADLINE */}
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

      {/* --- [START] PORTRAIT SECTION --- */}
      <div className="relative w-full h-[400px] md:h-[500px] mb-12 overflow-hidden bg-[#1c1f18] border border-[#333] group rounded-sm">
        
        {/* The Base Portrait */}
        <Image 
          src="/me-olive-v2.jpg" 
          alt="Nirmesh Gollamandala"
          fill
          // TRANSITION LOGIC:
          // 1. Starts at opacity-0 and slightly zoomed in (scale-105)
          // 2. When loaded, fades to opacity-100 and zooms out to normal (scale-100)
          // 3. object-[25%_top] ensures your face is centered on mobile
          className={`
            object-cover object-[25%_top] 
            transition-all duration-1000 ease-out
            ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}
          `}
          priority
          onLoad={() => setIsLoaded(true)} 
        />
        
        {/* Subtle Vignette Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_50%,_rgba(28,31,24,0.4)_100%)] pointer-events-none"></div>

      </div>
      {/* --- [END] PORTRAIT SECTION --- */}


      {/* 2. BIO TEXT */}
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

      {/* 3. SIGNATURE */}
      <div style={{ 
        marginTop: '60px',      
        marginBottom: '60px',   
        display: 'flex', 
        justifyContent: 'flex-end', 
        opacity: 0.8
      }}>
         <Signature />
      </div>

      {/* 4. CV LINK */}
      <div style={{ 
        borderTop: '1px solid rgba(255,255,255,0.1)', 
        paddingTop: '30px', 
        paddingBottom: '100px'
      }}>
        <Link href="/cv" className="group" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
           <span style={{ 
             fontFamily: 'monospace', 
             fontSize: '11px', 
             textTransform: 'uppercase', 
             letterSpacing: '0.15em',
             color: '#d4a373', 
             transition: 'color 0.3s'
           }}>
             [ View Full Curriculum Vitae ]
           </span>
           <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.6 }}>
             <path d="M1 11L11 1M11 1H3M11 1V9" stroke="#d4a373" strokeWidth="1.5"/>
           </svg>
        </Link>
      </div>

    </div>
  );
}