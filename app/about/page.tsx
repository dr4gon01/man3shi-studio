"use client";
import Signature from "@/components/Signature"; 

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
      
      {/* 1. THE HEADLINE: THE CREATIVE TECHNOLOGIST */}
      <h1 
        style={{ 
          fontSize: '32px', 
          marginBottom: '40px', 
          fontFamily: 'Krungthep, Impact, sans-serif', 
          letterSpacing: '0.1em',
          textTransform: 'uppercase'
        }}
      >
        Nirmesh Gollamandala
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
        {/* PARAGRAPH 1: ACADEMIC & TECHNICAL FOUNDATION 
            Target: German Universities.
            Keywords: Intersection, Engineering, Systems, Precision.
        */}
        <p style={{ marginBottom: '24px' }}>
          Nirmesh Gollamandala is a Creative Technologist operating at the rigorous intersection of 
          software engineering and visual design. He views code not merely as a functional tool, 
          but as a medium for crafting high-fidelity digital environments. His work challenges 
          the static nature of the web, proposing instead that digital systems should possess 
          the fluidity and responsiveness of organic life.
        </p>
        
        {/* PARAGRAPH 2: THE STUDIO PHILOSOPHY 
            Target: The "Auteur" Vibe / Brand Identity.
            Keywords: Man3shi, Human Atelier, Methodology.
        */}
        <p style={{ marginBottom: '24px' }}>
          Under the moniker <strong>Man3shi (The Human Atelier)</strong>, Nirmesh explores the 
          balance between algorithmic precision and human imperfection. This studio practice 
          serves as a laboratory for bridging the gap between raw data and emotional resonance, 
          ensuring that technical complexity never obscures the human narrative.
        </p>

        {/* PARAGRAPH 3: CLIENT & GLOBAL VALUE 
            Target: International & Local Clients.
            Keywords: Solutions, Global, Architecture, Impact.
        */}
        <p style={{ marginBottom: '24px' }}>
          From local cultural artifacts to global digital infrastructure, Nirmesh partners with 
          visionaries to build systems that last. He does not just deliver websites; he engineers 
          resilient digital identities designed to thrive in a chaotic global market.
        </p>
      </div>

      {/* 3. THE SIGNATURE */}
      <Signature />

    </div>
  );
}