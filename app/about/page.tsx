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
    thesis: "Attunement precedes articulation.",
    desc: "We begin with silence—listening before making. The project’s cultural memory, lived context, and constraints are studied as primary material, so that form emerges from interior logic rather than decoration.",
    outputs: "research dossier, cultural reference atlas, problem statement, sustainability + material constraints."
  },
  { 
    id: "02", 
    title: "ABSTRACTION", 
    subtitle: "The Ink", 
    thesis: "Meaning is distilled into a usable grammar.",
    desc: "Raw intent is translated into symbolic geometry: a reduced set of principles, proportions, and relations that can hold complexity without noise. The goal is not simplification for its own sake, but clarity that can scale.",
    outputs: "visual grammar, typographic logic, compositional rules, concept frameworks."
  },
  { 
    id: "03", 
    title: "MATERIALIZATION", 
    subtitle: "The Code", 
    thesis: "Systems are built to carry precision and variability.",
    desc: "Rigorous construction follows—through algorithmic architecture, typographic systems, and print/digital craft. Execution is treated as an ethical practice: decisions become repeatable, legible, and materially accountable.",
    outputs: "identity/design system, generative toolkit (where relevant), print-ready + digital assets, prototypes."
  },
  { 
    id: "04", 
    title: "RESONANCE", 
    subtitle: "The Motion", 
    thesis: "Form is validated through encounter.",
    desc: "The work is tested in real perception—pacing, attention, accessibility, and affect. Iteration is guided by how the system behaves in the world: what it invites, what it interrupts, what it sustains.",
    outputs: "motion/interaction studies, critique + testing notes, refinements, final compositions."
  },
  { 
    id: "05", 
    title: "DISSOLUTION", 
    subtitle: "The Ether", 
    thesis: "The work is released to live beyond its maker.",
    desc: "The return: what is produced is documented, transferred, and allowed to circulate—adaptable rather than frozen. Impact is measured not only by visibility, but by endurance within collective memory and daily use.",
    outputs: "documentation + style guide, templates, source packages, handoff protocol, archive."
  },
];

export default function About() {
  const [view, setView] = useState<'artist' | 'studio'>('artist');
  
  // UX OPTIMIZATION: Open "01" by default
  const [activeStep, setActiveStep] = useState<string | null>("01"); 
  
  const [isLoadedMain, setIsLoadedMain] = useState(false);
  const [isLoadedMotion, setIsLoadedMotion] = useState(false);
  const [isLoadedMethod, setIsLoadedMethod] = useState(false); // NEW for Banner

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
          VIEW 1: THE ARTIST (UNCHANGED)
         ========================================================= */}
      {view === 'artist' && (
        <div className="animate-in fade-in duration-500">
          
          {/* IMAGE */}
          <div className="relative w-full mb-20 flex justify-center bg-[#1c1f18] border border-[#333] group rounded-sm overflow-hidden p-1 md:p-0">
            <Image 
              src="/me.jpg" 
              alt="Nirmesh Gollamandala"
              width={1500}
              height={2000}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
              style={{ maxWidth: '100%', height: 'auto', maxHeight: '85vh', objectFit: 'contain' }}
              className={`transition-all duration-1000 ease-out ${isLoadedMain ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-sm'}`}
              priority
              onLoad={() => setIsLoadedMain(true)} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1f18]/60 via-transparent to-transparent pointer-events-none opacity-50"></div>
          </div>

          {/* HEADER */}
          <div className="mb-12">
            <h1 style={{ fontSize: '32px', marginBottom: '10px', fontFamily: '"Courier New", Courier, monospace', fontWeight: 'normal', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#FFFFFF' }}>
              Nirmesh Gollamandala <span style={{ fontSize: '0.6em', opacity: 0.5, verticalAlign: 'middle', textTransform: 'none' }}>(b. 1989, India)</span>
            </h1>
            <span style={{ fontSize: '12px', fontFamily: 'monospace', color: '#888', letterSpacing: '0.1em' }}>
              CREATIVE TECHNOLOGIST & INTERDISCIPLINARY RESEARCHER
            </span>
          </div>

          {/* BIO */}
          <div style={{ fontSize: '14px', lineHeight: '1.8', color: '#EBEBE8', opacity: 0.9, fontWeight: 300, marginBottom: '60px' }}>
            <p style={{ marginBottom: '24px' }}>
              Working at the boundary between <Mono>DETERMINISTIC_SYSTEMS</Mono> and organic imperfection, he is a creative technologist and interdisciplinary practitioner who treats <Mono>CODE</Mono> as a material practice—capable of rhythm, contingency, and embodied response. In dialogue with pedagogical lineages that insist on the integration of art and technology, he left a decade in industrial engineering contexts (<Mono color="#FFF">HONEYWELL</Mono>, <Mono color="#FFF">GENERAL MOTORS</Mono>) to pursue a research-led practice through <strong>Man3shi Studio</strong>, where algorithmic systems are developed not to flatten experience, but to reintroduce sensitivity, drift, and human scale.
            </p>
            <p style={{ marginBottom: '0px' }}>
              Informed by <em style={{ color: '#fff', fontStyle: 'normal' }}>wabi-sabi</em>, he approaches imperfection as a generative condition, and treats the interface not as a surface but as a responsive environment in which computation can approximate biological behaviors: growth, mutation, rhythm, and recovery. 
            </p>
          </div>

          {/* SOMATIC SECTION */}
          <div className="mb-8 border-t border-[#333] pt-8">
            <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#d4a373', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              // Somatic Architecture & Synthesis
            </span>
          </div>

          <div className="relative w-full mb-10 flex justify-center bg-[#1c1f18] border border-[#333] group rounded-sm overflow-hidden p-1 md:p-0">
            <Image 
              src="/me_motion.jpg" 
              alt="Nirmesh Gollamandala Motion"
              width={1500}
              height={2000}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 900px"
              style={{ maxWidth: '100%', height: 'auto', maxHeight: '75vh', objectFit: 'contain' }}
              className={`transition-all duration-1000 ease-out ${isLoadedMotion ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-sm'}`}
              onLoad={() => setIsLoadedMotion(true)} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#7a3311]/20 via-transparent to-transparent pointer-events-none opacity-40"></div>
          </div>

          <div style={{ fontSize: '14px', lineHeight: '1.8', color: '#EBEBE8', opacity: 0.9, fontWeight: 300, marginBottom: '60px' }}>
            <p style={{ marginBottom: '24px' }}>
              His computational methodology is grounded in embodiment: the body as instrument, and movement as a form of systems-thinking. As a <strong style={{ color: '#fff', fontWeight: 400 }}>First Generation Breaker</strong> from India, he traces an epistemology of making to street culture—where constraint becomes style, and improvisation becomes structure. Rooted in hip-hop, he inherits a particular freedom of expression that sharpens his perspective on identity, and deepens his relationship to the South Asian diasporic condition. This practice matured in Chicago—the birthplace of House—where he has performed within the culture, including contexts such as the <Mono color="#FFF">CHICAGO HOUSE MUSIC FESTIVAL 2025</Mono>, and in proximity to foundational figures such as <Mono color="#FFF">LIL LOUIS</Mono>.
            </p>
            <p style={{ marginBottom: '40px' }}>
              Balancing kinetic output with somatic study, he trained in <Mono color="#FFF">NOGUCHI TAISO</Mono> with <Mono color="#FFF">MARI OSANAI</Mono>, a practice that frames the body as a water-filled vessel yielding to gravity. He translates this <Mono>HYDRODYNAMICS</Mono> into engineering, replacing rigid logics with algorithms that flow—systems that remain stable without becoming sterile.
            </p>
            <p style={{ marginBottom: '40px', color: '#FFFFFF', borderLeft: '2px solid #d4a373', paddingLeft: '20px', fontStyle: 'italic', fontWeight: 400, opacity: 1 }}>
              His current research explores the fluidity of language and reimagines typography as a responsive organism—an interface that moves, adapts, and remains accountable to the body that reads it.
            </p>
            <p style={{ marginBottom: '0px', color: '#bbbbbb', fontSize: '13px' }}>
              “Man3shi” derives from the Telugu <span style={{ color: '#d4a373' }}>Manishi</span> (<span className={teluguFont.className} style={{ color: '#d4a373', fontSize: '1.3em', verticalAlign: 'middle' }}>మనిషి</span>), meaning “Human,” and functions as a constraint in the best sense: a reminder that computational systems should remain accountable to lived, embodied experience.
            </p>
          </div>

          <div style={{ marginTop: '40px', marginBottom: '40px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', opacity: 0.8 }} className="flex-col md:flex-row gap-8 md:gap-0">
             <Link href="/cv" className="group" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
               <span style={{ fontFamily: 'monospace', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#d4a373', transition: 'color 0.3s' }} className="group-hover:text-white">
                 [ VIEW FULL CV ]
               </span>
               <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ opacity: 0.6 }}><path d="M1 11L11 1M11 1H3M11 1V9" stroke="#d4a373" strokeWidth="1.5"/></svg>
             </Link>
             <div style={{ transform: 'scale(0.9)', transformOrigin: 'right center' }}><Signature /></div>
          </div>
          <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
        </div>
      )}


      {/* =========================================================
          VIEW 2: THE STUDIO (ACCORDION PROTOCOL)
         ========================================================= */}
      {view === 'studio' && (
        <div className="animate-in fade-in duration-500 w-full">
          
          {/* 1. STUDIO BANNER IMAGE */}
          <div className="relative w-full mb-16 bg-[#1c1f18] border border-[#333] group rounded-sm overflow-hidden">
             <Image
               src="/method.jpg" // PLEASE ENSURE THIS FILE EXISTS
               alt="The Man3shi Method Banner"
               width={1500}
               height={600}
               style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover', objectPosition: 'center' }}
               className={`transition-all duration-1000 ease-out ${isLoadedMethod ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-sm'}`}
               priority
               onLoad={() => setIsLoadedMethod(true)}
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#1c1f18] via-transparent to-transparent pointer-events-none opacity-80"></div>
          </div>

          {/* 2. HEADER + MICRO-ORIENTATION */}
          <div className="w-full mb-16 border-b border-[#333] pb-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-4">
              <h1 style={{ fontSize: '32px', fontFamily: '"Courier New", Courier, monospace', fontWeight: 'normal', letterSpacing: '0.05em', textTransform: 'uppercase', color: '#FFFFFF' }}>
                The Man3shi Method
              </h1>
              <span style={{ fontFamily: 'monospace', fontSize: '10px', color: '#d4a373', letterSpacing: '0.1em', marginTop: '10px' }}>
                PROTOCOL_VERSION_2.0
              </span>
            </div>
            {/* UX MICRO-ORIENTATION + INSTRUCTION */}
            <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
              <p style={{ fontFamily: 'Helvetica Neue, sans-serif', fontSize: '14px', color: '#888', fontStyle: 'italic' }}>
                A five-phase protocol for translating human experience into engineered form.
              </p>
              <span style={{ fontFamily: 'monospace', fontSize: '10px', color: '#666', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                [ SELECT PHASE TO EXPAND ]
              </span>
            </div>
          </div>

          {/* 3. ACCORDION SYSTEM */}
          <div className="w-full flex flex-col">
            {manifesto.map((item) => {
              const isOpen = activeStep === item.id;

              return (
                <div 
                  key={item.id} 
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onClick={() => setActiveStep(isOpen ? null : item.id)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveStep(isOpen ? null : item.id); }}
                  className="w-full border-b border-[#333] transition-all duration-300 group outline-none focus:border-[#d4a373]"
                  style={{ 
                    backgroundColor: isOpen ? 'rgba(212, 163, 115, 0.03)' : 'transparent',
                    cursor: 'pointer'
                  }} 
                >
                  
                  {/* HEADER */}
                  <div className="flex items-center py-6 group-hover:bg-[#d4a373]/05 transition-colors">
                    
                    <div className="w-[80px] md:w-[100px] flex-shrink-0">
                      <span style={{ fontFamily: 'monospace', fontSize: '14px', color: isOpen ? '#d4a373' : '#444' }}>
                        {item.id} //
                      </span>
                    </div>

                    <div className="flex-grow">
                      <span style={{ 
                        fontSize: '18px', 
                        color: isOpen ? '#FFFFFF' : '#EBEBE8', 
                        letterSpacing: '0.05em',
                        transition: 'color 0.3s' 
                      }}
                      className="group-hover:text-white"
                      >
                        {item.title}
                      </span>
                      <span className="ml-4 font-mono text-[10px] text-[#666] uppercase tracking-widest hidden md:inline-block">
                        [{item.subtitle}]
                      </span>
                    </div>

                    <div className="w-[30px] text-right">
                       <span style={{ fontFamily: 'monospace', color: '#d4a373', fontSize: '20px', fontWeight: 300 }}>
                         {isOpen ? '—' : '+'}
                       </span>
                    </div>
                  </div>

                  {/* BODY */}
                  {isOpen && (
                    <div className="pl-0 md:pl-[100px] pr-0 md:pr-[20px] pb-10 animate-in fade-in duration-300 cursor-text" onClick={(e) => e.stopPropagation()}>
                      <p style={{ fontFamily: 'monospace', fontSize: '12px', color: '#d4a373', marginBottom: '16px', letterSpacing: '0.05em' }}>
                        &gt; THESIS: {item.thesis}
                      </p>
                      <p style={{ fontSize: '15px', lineHeight: '1.7', color: '#EBEBE8', fontWeight: 300, maxWidth: '600px', marginBottom: '24px' }}>
                        {item.desc}
                      </p>
                      <div style={{ borderLeft: '1px solid #444', paddingLeft: '16px', paddingTop: '6px', paddingBottom: '6px' }}>
                        <span style={{ fontFamily: 'monospace', fontSize: '11px', color: '#666', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                          DELIVERABLES:
                        </span>
                        <span style={{ fontFamily: 'monospace', fontSize: '12px', color: '#999', lineHeight: '1.6' }}>
                          {item.outputs}
                        </span>
                      </div>
                    </div>
                  )}

                </div>
              );
            })}
          </div>

          {/* PROTOCOL FOOTER */}
          <div style={{ paddingBottom: '24px', marginTop: '60px', width: '100%', paddingTop: '24px' }}>
             <div className="flex justify-between items-center w-full">
                <span style={{ fontFamily: 'monospace', fontSize: '10px', color: '#555' }}>
                  SYSTEM STATUS: OPERATIONAL
                </span>
                <Link 
                  href="/contact" 
                  style={{ fontFamily: 'monospace', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#d4a373', textDecoration: 'none', cursor: 'pointer' }}
                  className="hover:text-white transition-colors"
                >
                  [ INITIALIZE CONTACT ]
                </Link>
             </div>
          </div>

        </div>
      )}

    </div>
  );
}