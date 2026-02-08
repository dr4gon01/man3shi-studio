"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MapPin, Calendar, Clock } from "lucide-react"; 
import { motion } from "framer-motion";

// --- DESIGN TOKENS ---
const COLORS = {
  offWhite: '#EBEBE8',
  terracotta: '#7a3311',
  gold: '#d4a373',
  black: '#0a0a0a',
  darkGrey: '#111111',
  textMuted: '#888888',
  border: '#333333'
};

export default function HyderabadExhibitPage() {

  return (
    // ROOT WRAPPER: Enforces Box-Sizing Globally
    <div style={{
      backgroundColor: COLORS.black,
      minHeight: '100vh',
      color: COLORS.offWhite,
      fontFamily: 'Helvetica Neue, sans-serif',
      boxSizing: 'border-box', // CRITICAL FIX
      overflowX: 'hidden'      // PREVENTS HORIZONTAL SCROLL
    }}>
      
      {/* 1. TOP NAV / BACK BUTTON */}
      <div style={{ 
        width: '100%',
        boxSizing: 'border-box', // Fixes width calculation
        paddingTop: '80px',
        paddingBottom: '20px',
        paddingLeft: '20px',
        paddingRight: '20px',
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderBottom: `1px solid ${COLORS.border}`,
        position: 'sticky',
        top: 0,
        backgroundColor: 'rgba(10,10,10,0.95)',
        zIndex: 50,
        backdropFilter: 'blur(10px)'
      }}>
        <Link href="/press" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: COLORS.textMuted, textDecoration: 'none', fontSize: '14px' }}>
          <ArrowLeft size={16} /> <span>Back</span>
        </Link>
        <span style={{ fontFamily: 'monospace', fontSize: '10px', color: COLORS.gold, letterSpacing: '0.1em' }}>
          EVENT_ID: HYD_001
        </span>
      </div>

      {/* 2. MAIN CONTENT CONTAINER (FLUID) */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}>

        {/* POSTER AREA */}
        <div style={{ 
          width: '100%', 
          maxWidth: '600px', 
          backgroundColor: COLORS.darkGrey,
          borderBottom: `1px solid ${COLORS.border}`
        }}>
          <div style={{ 
            position: 'relative', 
            width: '100%', 
            aspectRatio: '297/420', // A3 Ratio
          }}>
             <Image 
              src="/Man3shi Exhibit poster.jpg" 
              alt="Man3shi Hyderabad Exhibit Poster"
              fill
              style={{ objectFit: 'contain' }}
              priority
             />
          </div>
        </div>

        {/* TEXT CONTENT AREA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ 
            width: '100%',
            maxWidth: '600px', 
            boxSizing: 'border-box', // CRITICAL
            padding: '40px 24px' 
          }}
        >
          {/* TITLE BLOCK */}
          <div style={{ marginBottom: '32px' }}>
            <span style={{ 
              display: 'inline-block', 
              padding: '4px 8px', 
              backgroundColor: 'rgba(212, 163, 115, 0.1)', 
              color: COLORS.gold, 
              fontSize: '10px', 
              fontFamily: 'monospace', 
              letterSpacing: '0.1em',
              marginBottom: '16px',
              borderRadius: '2px'
            }}>
              SOLO EXHIBITION
            </span>
            <h1 style={{ 
              fontFamily: 'Krungthep, Impact, sans-serif', 
              fontSize: '32px', 
              lineHeight: '1.1', 
              marginBottom: '12px',
              textTransform: 'uppercase'
            }}>
              Man3shi: <br/>
              <span style={{ color: COLORS.gold }}>మనీషి</span>
            </h1>
            <p style={{ fontSize: '16px', color: COLORS.textMuted, lineHeight: '1.5' }}>
              The debut Indian exhibition of Man3shi Studio, exploring the intersection of generative art, cultural memory, and calm technology.
            </p>
          </div>

          {/* INFO GRID */}
          <div style={{ display: 'grid', gap: '24px', marginBottom: '40px' }}>
            
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ color: COLORS.gold, flexShrink: 0 }}><Calendar size={20} /></div>
              <div>
                <h3 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Date</h3>
                <p style={{ fontSize: '14px', color: '#ccc' }}>February 21st (Sat) — 22nd (Sun), 2026</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ color: COLORS.gold, flexShrink: 0 }}><Clock size={20} /></div>
              <div>
                <h3 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Time</h3>
                <p style={{ fontSize: '14px', color: '#ccc' }}>11:00 AM — 5:00 PM</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ color: COLORS.gold, flexShrink: 0 }}><MapPin size={20} /></div>
              <div>
                <h3 style={{ fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px' }}>Location</h3>
                <p style={{ fontSize: '14px', color: '#ccc', marginBottom: '4px' }}>State Art Gallery, Gallery 5</p>
                <p style={{ fontSize: '12px', color: COLORS.textMuted }}>Kavuri Hills, Jubilee Hills, Hyderabad, Telangana 500033</p>
                
                <a 
                  href="https://maps.app.goo.gl/VTSkpxe6WzrkegxM7" 
                  target="_blank"
                  style={{ 
                    display: 'inline-block', 
                    marginTop: '12px', 
                    fontSize: '12px', 
                    color: COLORS.offWhite, 
                    textDecoration: 'underline',
                    textUnderlineOffset: '4px' 
                  }}
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* 4. INSTAGRAM CONNECT (BULLETPROOF BOX MODEL) */}
          <div style={{ 
            marginTop: '40px', 
            paddingTop: '32px', 
            borderTop: `1px solid ${COLORS.border}`,
            width: '100%',
            boxSizing: 'border-box'
          }}>
            <p style={{ 
              fontSize: '12px', 
              color: COLORS.textMuted, 
              marginBottom: '16px', 
              fontFamily: 'monospace', 
              textAlign: 'center' 
            }}>
              /// FOLLOW THE STUDIO FOR UPDATES
            </p>
            
            <a 
              href="https://www.instagram.com/man3shi.studio"
              style={{ 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                width: '100%',             // Full width of parent
                maxWidth: '100%',          // Prevents overflow
                boxSizing: 'border-box',   // Keeps padding INSIDE the width
                padding: '16px', 
                backgroundColor: 'transparent', 
                color: COLORS.gold, 
                border: `1px solid ${COLORS.gold}`, 
                textDecoration: 'none',
                fontSize: '14px', 
                fontWeight: 'bold', 
                textTransform: 'uppercase', 
                letterSpacing: '0.1em',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ flexShrink: 0 }} // Prevents icon squishing
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span style={{ whiteSpace: 'nowrap' }}>@man3shi.studio</span>
            </a>
          </div>

        </motion.div>
      </div>

      {/* FOOTER */}
      <div style={{ textAlign: 'center', padding: '40px 20px', borderTop: `1px solid ${COLORS.border}`, marginTop: '40px' }}>
        <p style={{ fontFamily: 'monospace', fontSize: '10px', color: COLORS.textMuted }}>
          © 2026 MAN3SHI STUDIO. ALL RIGHTS RESERVED.
        </p>
      </div>

    </div>
  );
}