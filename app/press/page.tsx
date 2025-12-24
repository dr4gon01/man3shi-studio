"use client";
import { motion } from "framer-motion";
import Link from "next/link";

// Reusable Arrow Component for consistency
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
      marginBottom: '4px', // Visual tweak to align with text baseline
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
      color: '#EBEBE8',
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
          letterSpacing: '0.1em', 
          marginBottom: '16px'
        }}>
          Broadcasts
        </h1>
        <p style={{ 
          fontFamily: 'monospace', 
          fontSize: '12px', 
          opacity: 0.6, 
          letterSpacing: '0.2em' 
        }}>
          MEDIA COVERAGE & ARCHIVAL LOGS
        </p>
      </motion.div>


      {/* 2. ACTIVE SIGNALS (2025) */}
      <div style={{ maxWidth: '800px', margin: '0 auto 80px auto' }}>
        <h3 style={{ 
          fontFamily: 'monospace', fontSize: '12px', color: '#888', letterSpacing: '0.1em', marginBottom: '40px', borderBottom: '1px solid #333', paddingBottom: '10px' 
        }}>
          /// ACTIVE SIGNALS (2025)
        </h3>
        <div style={{ opacity: 0.5, fontStyle: 'italic', fontSize: '14px', color: '#666' }}>
          [ Awaiting Incoming Transmission... ]
        </div>
      </div>


      {/* 3. THE CONVERGENCE (2016 - The Pivot) */}
      <div style={{ maxWidth: '800px', margin: '0 auto 80px auto' }}>
        <h3 style={{ 
          fontFamily: 'monospace', fontSize: '12px', color: '#EBEBE8', letterSpacing: '0.1em', marginBottom: '40px', borderBottom: '1px solid #EBEBE8', paddingBottom: '10px' 
        }}>
          /// THE CONVERGENCE (2016)
        </h3>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          style={{ 
            background: 'rgba(255,255,255,0.03)', 
            padding: '40px', 
            border: '1px solid rgba(255,255,255,0.1)' 
          }}
        >
          <span style={{ fontFamily: 'monospace', color: '#888', fontSize: '12px', display: 'block', marginBottom: '16px' }}>
            FULL SAIL UNIVERSITY — SEPT 27, 2016
          </span>
          
          <Link 
            href="https://www.fullsail.edu/about/full-sail-stories/art-choreography-brain-computer-interface-how-grad-nirmesh-gollamandala-brings-it-all-together"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <h2 style={{ 
              fontSize: '32px', 
              color: '#EBEBE8', 
              marginBottom: '24px', 
              fontFamily: 'Krungthep, Impact, sans-serif',
              lineHeight: '1.2',
              letterSpacing: '0.05em'
            }}>
              Art, Choreography, & BCI: <br/>
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


      {/* 4. SIGNAL ORIGINS (The Archives) */}
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h3 style={{ 
          fontFamily: 'monospace', fontSize: '12px', color: '#888', letterSpacing: '0.1em', marginBottom: '40px', borderBottom: '1px solid #333', paddingBottom: '10px' 
        }}>
          /// SIGNAL ORIGINS (ARCHIVE)
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          
          {/* 2013 ENTRY */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', gap: '20px', alignItems: 'baseline' }}
          >
            <span style={{ fontFamily: 'monospace', color: '#555', fontSize: '12px', minWidth: '60px' }}>
              [2013]
            </span>
            <div>
              <Link 
                href="https://www.thehansindia.com/posts/index/Young-Hans/2013-07-26/Flexibility-not-a-must-to-be-a-hip-hopper/29096"
                target="_blank"
                style={{ textDecoration: 'none', color: '#EBEBE8', fontSize: '18px', fontWeight: 'bold' }}
              >
                Flexibility not a mandate to be a dancer <ArrowIcon />
              </Link>
              <div style={{ marginTop: '8px', fontSize: '12px', color: '#888', lineHeight: '1.5' }}>
                <span style={{ color: '#666' }}>The Hans India</span> — Interview with G. Nirmesh (RSU) on discipline, will-power, and early creative experiments.
                <br/>
                <span style={{ fontStyle: 'italic', color: '#555' }}>
                  "...relax a bit by reading a book, composing music and designing computer graphics."
                </span>
              </div>
            </div>
          </motion.div>

          {/* 2012 ENTRY */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            style={{ display: 'flex', gap: '20px', alignItems: 'baseline' }}
          >
            <span style={{ fontFamily: 'monospace', color: '#555', fontSize: '12px', minWidth: '60px' }}>
              [2012]
            </span>
            <div>
              <Link 
                href="https://www.newindianexpress.com/cities/hyderabad/2012/Feb/17/b-boys-are-in-town-340838.html"
                target="_blank"
                style={{ textDecoration: 'none', color: '#EBEBE8', fontSize: '18px', fontWeight: 'bold' }}
              >
                B-boys are in town! <ArrowIcon />
              </Link>
              <div style={{ marginTop: '8px', fontSize: '12px', color: '#888', lineHeight: '1.5' }}>
                <span style={{ color: '#666' }}>The New Indian Express</span> — Feature on 'Proximity', the first-of-its-kind breaking crew in Hyderabad.
              </div>
            </div>
          </motion.div>

        </div>
      </div>

    </div>
  );
}