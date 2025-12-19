"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Lab() {
  return (
    <div style={{ 
      padding: '120px 20px', 
      minHeight: '100vh', 
      color: '#EBEBE8',
      fontFamily: 'Helvetica Neue, sans-serif'
    }}>
      
      {/* HEADER */}
      <div style={{ marginBottom: '80px', maxWidth: '800px' }}>
        <h1 style={{ 
          fontFamily: 'Krungthep, Impact, sans-serif', 
          fontSize: '48px', 
          textTransform: 'uppercase', 
          letterSpacing: '0.1em',
          marginBottom: '24px'
        }}>
          The Lab
        </h1>
        <p style={{ maxWidth: '600px', lineHeight: '1.6', opacity: 0.8, fontSize: '18px' }}>
          The studio's R&D division. A testing ground for interaction studies, 
          raw code experiments, and published research.
        </p>
      </div>

      {/* SECTION: PUBLISHED RESEARCH */}
      <div style={{ marginBottom: '100px' }}>
        <h3 style={{ 
          fontFamily: 'monospace', fontSize: '12px', color: '#888', letterSpacing: '0.1em', 
          marginBottom: '40px', borderBottom: '1px solid #333', paddingBottom: '10px', maxWidth: '800px'
        }}>
          /// FIELD RESEARCH & PAPERS
        </h3>

        {/* PAPER 1: ZENODO */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ maxWidth: '800px', marginBottom: '60px' }}
        >
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '8px' }}>
            <span style={{ fontFamily: 'monospace', color: '#666', fontSize: '12px' }}>[2025]</span>
            <span style={{ fontFamily: 'monospace', color: '#4a9c5d', fontSize: '12px' }}>OPEN ACCESS</span>
          </div>
          
          <Link href="https://zenodo.org/records/15701859" target="_blank" style={{ textDecoration: 'none' }}>
            <h2 style={{ 
              fontSize: '24px', color: '#EBEBE8', fontWeight: 'bold', marginBottom: '16px', lineHeight: '1.3' 
            }}>
              Narrative Generation in Deterministic Systems ↗
            </h2>
          </Link>
          
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#AAA', marginBottom: '16px' }}>
            Investigating how AI can co-create emotional narratives within the rigid mathematical constraints of Chess.
          </p>
          
          <div style={{ display: 'flex', gap: '12px' }}>
            <span style={{ fontSize: '10px', border: '1px solid #333', padding: '4px 8px', borderRadius: '4px', fontFamily: 'monospace', color: '#666' }}>
              DOI: 10.5281/zenodo.15701859
            </span>
            <span style={{ fontSize: '10px', border: '1px solid #333', padding: '4px 8px', borderRadius: '4px', fontFamily: 'monospace', color: '#666' }}>
              PDF AVAILABLE
            </span>
          </div>
        </motion.div>

        {/* PAPER 2: ResearchGate (If you want to add it, or keep it clean with just Zenodo for now) */}
      </div>

      {/* SECTION: EXPERIMENTS (Placeholders for future code demos) */}
      <div>
        <h3 style={{ 
          fontFamily: 'monospace', fontSize: '12px', color: '#888', letterSpacing: '0.1em', 
          marginBottom: '40px', borderBottom: '1px solid #333', paddingBottom: '10px', maxWidth: '800px'
        }}>
          /// INTERACTION EXPERIMENTS
        </h3>
        <p style={{ fontStyle: 'italic', opacity: 0.5, fontSize: '14px' }}>
          [ Code sketches and prototypes deploying... ]
        </p>
      </div>

    </div>
  );
}