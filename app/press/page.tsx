"use client";
import { motion } from "framer-motion";
import Link from "next/link";

// --- DESIGN TOKENS ---
const COLORS = {
  offWhite: '#EBEBE8',
  terracotta: '#7a3311',
  gold: '#d4a373',       // MAN3SHI EARTH GOLD
  textMuted: '#888888',
  border: '#333333'
};

// Reusable Arrow Component
const ArrowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      display: 'inline-block',
      marginLeft: '8px',
      verticalAlign: 'middle',
      marginBottom: '4px',
      width: '0.7em',
      height: '0.7em',
      stroke: 'currentColor',
      strokeWidth: 2.5,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      opacity: 0.8
    }}
  >
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export default function Press() {
  return (
    <div style={{
      padding: '120px 20px',
      minHeight: '100vh',
      color: COLORS.offWhite,
      fontFamily: 'Helvetica Neue, sans-serif'
    }}>

      {/* 1. HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '100px', textAlign: 'center' }}
      >
        <h1 style={{
          fontFamily: 'Krungthep, Impact, sans-serif',
          fontSize: '48px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '15px',
          flexWrap: 'wrap'
        }}>
          Selected Press
        </h1>

        {/* TECH SUB-HEADER WITH SLASHES */}
        <p style={{
          fontFamily: 'monospace',
          fontSize: '12px',
          color: COLORS.textMuted,
          letterSpacing: '0.2em',
          textTransform: 'uppercase'
        }}>
          INTERVIEWS / FEATURES / MEDIA ARCHIVE
        </p>
      </motion.div>


      {/* 2. ACTIVE SIGNALS (2026) */}
      <div style={{ maxWidth: '800px', margin: '0 auto 80px auto' }}>
        <h3 style={{
          fontFamily: 'monospace',
          fontSize: '12px',
          color: COLORS.gold, // Section Header Gold
          letterSpacing: '0.1em',
          marginBottom: '40px',
          borderBottom: `1px solid ${COLORS.border}`,
          paddingBottom: '10px'
        }}>
          /// ACTIVE SIGNALS (2026)
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>

          {/* 2026 Entry - Hyderabad Exhibit */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            style={{ display: 'flex', gap: '20px', alignItems: 'baseline' }}
          >
            {/* Date in Gold */}
            <span style={{
              fontFamily: 'monospace',
              color: COLORS.gold,
              fontSize: '12px',
              minWidth: '60px',
              fontWeight: 'bold'
            }}>
              [FEB 21]
            </span>
            <div>
              {/* WRAPPED IN LINK TO EVENT PAGE */}
              <Link href="/events/hyderabad-exhibit" style={{ textDecoration: 'none' }}>
                <div
                  style={{
                    color: COLORS.offWhite,
                    fontSize: '20px',
                    fontWeight: 'bold',
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '12px',
                    cursor: 'pointer', // UX Cue
                    transition: 'opacity 0.2s'
                  }}
                  className="hover:opacity-80" // Simple hover effect
                >
                  Man3shi {/* ARTIFACT: TELUGU SCRIPT IN GOLD */}
                  <span style={{
                    fontFamily: 'Arial, sans-serif',
                    fontWeight: '400',
                    color: COLORS.gold,
                    fontSize: '0.8em',
                    opacity: 1,
                    marginTop: '4px'
                  }}>
                    మనీషి
                  </span> : The Debut Indian Exhibit
                  
                  {/* Arrow Icon to indicate it's clickable */}
                  <ArrowIcon />

                  {/* UPCOMING Badge in Gold */}
                  <span style={{
                    fontSize: '10px',
                    padding: '4px 10px',
                    border: `1px solid ${COLORS.gold}`,
                    color: COLORS.gold,
                    borderRadius: '100px',
                    fontFamily: 'monospace',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    boxShadow: `0 0 10px ${COLORS.gold}20` 
                  }}>
                    Upcoming
                  </span>
                </div>
              </Link>
              
              <div style={{ marginTop: '8px', fontSize: '12px', color: COLORS.textMuted, lineHeight: '1.5' }}>
                <span style={{ color: '#666' }}>State Art Gallery, Hyderabad</span>
                <br />
                <span style={{ fontStyle: 'italic', color: '#555', marginTop: '4px', display: 'block' }}>
                  Scheduled: Feb 21st — Feb 22nd. The first solo presentation of the studio's generative works in India.
                </span>
                
                {/* CTA Link for clarity */}
                <Link href="/events/hyderabad-exhibit" style={{ 
                  color: COLORS.gold, 
                  fontSize: '10px', 
                  fontFamily: 'monospace', 
                  marginTop: '8px', 
                  display: 'inline-block',
                  borderBottom: `1px solid ${COLORS.gold}40`,
                  paddingBottom: '2px'
                }}>
                  [ VIEW EVENT DETAILS & POSTER ]
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </div>


      {/* 3. THE CONVERGENCE (2016) */}
      <div style={{ maxWidth: '800px', margin: '0 auto 80px auto' }}>
        <h3 style={{
          fontFamily: 'monospace', fontSize: '12px', color: COLORS.offWhite, letterSpacing: '0.1em', marginBottom: '40px', borderBottom: '1px solid #EBEBE8', paddingBottom: '10px'
        }}>
          /// THE CONVERGENCE (2016)
        </h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          style={{
            background: 'rgba(255,255,255,0.03)',
            padding: '40px',
            border: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <span style={{ fontFamily: 'monospace', color: COLORS.textMuted, fontSize: '12px', display: 'block', marginBottom: '16px' }}>
            FULL SAIL UNIVERSITY — SEPT 27, 2016
          </span>

          <Link
            href="https://www.fullsail.edu/about/full-sail-stories/art-choreography-brain-computer-interface-how-grad-nirmesh-gollamandala-brings-it-all-together"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <h2 style={{
              fontSize: '32px',
              color: COLORS.offWhite,
              marginBottom: '24px',
              fontFamily: 'Krungthep, Impact, sans-serif',
              lineHeight: '1.2',
              letterSpacing: '0.05em'
            }}>
              Art, Choreography, & BCI: <br />
              How Nirmesh Brings It All Together <ArrowIcon />
            </h2>
          </Link>

          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#BBB', marginBottom: '24px', fontStyle: 'italic' }}>
            "My dancing and choreography work informs my graphic design... BCI helps me to understand how it all fits together."
          </p>

          <div style={{ fontSize: '12px', fontFamily: 'monospace', color: '#666', lineHeight: '1.6' }}>
            KEY TOPICS: BRAIN-COMPUTER INTERFACE / HAPTICS / KINETIC DESIGN
          </div>
        </motion.div>
      </div>


      {/* 4. SIGNAL ORIGINS (ARCHIVE) */}
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h3 style={{
          fontFamily: 'monospace', fontSize: '12px', color: COLORS.textMuted, letterSpacing: '0.1em', marginBottom: '40px', borderBottom: `1px solid ${COLORS.border}`, paddingBottom: '10px'
        }}>
          /// SIGNAL ORIGINS (ARCHIVE)
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>

          {/* 2025 ENTRIES */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            style={{ display: 'flex', gap: '20px', alignItems: 'baseline' }}
          >
            <span style={{ fontFamily: 'monospace', color: '#555', fontSize: '12px', minWidth: '60px' }}>
              [2025]
            </span>
            <div>
              <Link
                href="https://www.chicago.gov/city/en/depts/dca/supp_info/house_music0.html"
                target="_blank"
                style={{ textDecoration: 'none', color: COLORS.offWhite, fontSize: '20px', fontWeight: 'bold' }}
              >
                Chicago House Music Festival & Summit <ArrowIcon />
              </Link>
              <div style={{ marginTop: '8px', fontSize: '12px', color: COLORS.textMuted, lineHeight: '1.5' }}>
                <span style={{ color: '#666' }}>Chicago.gov (Official City Archive)</span> — Featured Artist on the Legacy Main Stage & Soulful House Stage.
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{ display: 'flex', gap: '20px', alignItems: 'baseline' }}
          >
            <span style={{ fontFamily: 'monospace', color: '#555', fontSize: '12px', minWidth: '60px' }}>
              [2025]
            </span>
            <div>
              <Link
                href="https://butohchicago.com/2025/02/25/arboring/"
                target="_blank"
                style={{ textDecoration: 'none', color: COLORS.offWhite, fontSize: '20px', fontWeight: 'bold' }}
              >
                Arboring: A Butoh Vigil <ArrowIcon />
              </Link>
              <div style={{ marginTop: '8px', fontSize: '12px', color: COLORS.textMuted, lineHeight: '1.5' }}>
                <span style={{ color: '#666' }}>Butoh Chicago</span> — Documented performance in Harlan Rosen’s somatic study.
              </div>
            </div>
          </motion.div>

          {/* 2013 ENTRY */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            style={{ display: 'flex', gap: '20px', alignItems: 'baseline' }}
          >
            <span style={{ fontFamily: 'monospace', color: '#555', fontSize: '12px', minWidth: '60px' }}>
              [2013]
            </span>
            <div>
              <Link
                href="https://www.thehansindia.com/posts/index/Young-Hans/2013-07-26/Flexibility-not-a-must-to-be-a-hip-hopper/29096"
                target="_blank"
                style={{ textDecoration: 'none', color: COLORS.offWhite, fontSize: '18px', fontWeight: 'bold' }}
              >
                Flexibility not a mandate <ArrowIcon />
              </Link>
              <div style={{ marginTop: '8px', fontSize: '12px', color: COLORS.textMuted, lineHeight: '1.5' }}>
                <span style={{ color: '#666' }}>The Hans India</span> — Interview with G. Nirmesh (RSU).
              </div>
            </div>
          </motion.div>

          {/* 2012 ENTRY */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            style={{ display: 'flex', gap: '20px', alignItems: 'baseline' }}
          >
            <span style={{ fontFamily: 'monospace', color: '#555', fontSize: '12px', minWidth: '60px' }}>
              [2012]
            </span>
            <div>
              <Link
                href="https://www.newindianexpress.com/cities/hyderabad/2012/Feb/17/b-boys-are-in-town-340838.html"
                target="_blank"
                style={{ textDecoration: 'none', color: COLORS.offWhite, fontSize: '18px', fontWeight: 'bold' }}
              >
                B-boys are in town! <ArrowIcon />
              </Link>
              <div style={{ marginTop: '8px', fontSize: '12px', color: COLORS.textMuted, lineHeight: '1.5' }}>
                <span style={{ color: '#666' }}>The New Indian Express</span> — Feature on 'Proximity'.
              </div>
            </div>
          </motion.div>

        </div>
      </div>

    </div>
  );
}