"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "About", href: "/about" },
  { name: "Works", href: "/works" },
  { name: "Press", href: "/press" },
  { name: "Artifacts", href: "/shop" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* 1. CSS RULES (Still needed for layout logic) */}
      <style jsx global>{`
        .nav-container { padding: 20px 20px; }
        .desktop-links { display: none; }
        .mobile-toggle { display: block; }
        
        @media (min-width: 768px) {
          .nav-container { padding: 40px 40px; }
          .desktop-links { display: flex; }
          .mobile-toggle { display: none; }
        }
      `}</style>

      {/* 2. MOTION NAV (The Glitch Killer) 
         Changed 'nav' to 'motion.nav' 
         Added initial opacity 0 to hide the layout calculation phase.
      */}
      <motion.nav 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="nav-container"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          zIndex: 102, 
          backgroundColor: 'transparent'
        }}
      >
        
        {/* LEFT: THE CREATOR */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Link 
            href="/" 
            onClick={() => setIsOpen(false)} 
            style={{ 
              fontWeight: 'bold', 
              fontSize: '14px', 
              letterSpacing: '0.05em', 
              textTransform: 'uppercase',
              color: isOpen ? '#EBEBE8' : 'white', 
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }}
          >
            Nirmesh Gollamandala
          </Link>
          <span 
            style={{ 
              fontSize: '10px', 
              marginTop: '4px',
              letterSpacing: '0.05em', 
              color: isOpen ? 'rgba(235,235,232,0.5)' : 'rgba(255,255,255,0.5)', 
              fontFamily: 'monospace' 
            }}
          >
            Creative Technologist
          </span>
        </div>

        {/* RIGHT (Desktop): Standard Links */}
        <div className="desktop-links" style={{ gap: '24px', alignItems: 'center' }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: '12px',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'white',
                textDecoration: 'none',
                opacity: pathname === link.href ? 1 : 0.6,
                fontWeight: pathname === link.href ? 'bold' : 'normal',
                borderBottom: pathname === link.href ? '1px solid white' : 'none',
                paddingBottom: '4px',
                transition: 'opacity 0.3s ease'
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* RIGHT (Mobile): The Toggle Button */}
        <button 
          className="mobile-toggle"
          onClick={toggleMenu}
          style={{
            background: 'none',
            border: 'none',
            color: isOpen ? '#EBEBE8' : 'white',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            cursor: 'pointer',
            padding: 0
          }}
        >
          {isOpen ? "CLOSE" : "MENU"}
        </button>

      </motion.nav>

      {/* MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: '#1A1A1A', 
              zIndex: 101, 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '40px',
              boxSizing: 'border-box' // <--- THE FIX: Keeps padding inside the screen
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)} 
                  style={{
                    fontSize: '24px', 
                    fontFamily: 'Krungthep, Impact, sans-serif',
                    textTransform: 'uppercase',
                    color: '#EBEBE8',
                    textDecoration: 'none',
                    letterSpacing: '0.1em',
                    textAlign: 'center', // <--- SAFETY: Forces text to center
                    opacity: pathname === link.href ? 1 : 0.5
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div style={{ position: 'absolute', bottom: '40px', opacity: 0.3 }}>
              <p style={{ fontSize: '10px', fontFamily: 'monospace', letterSpacing: '0.2em' }}>MAN3SHI STUDIO</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}