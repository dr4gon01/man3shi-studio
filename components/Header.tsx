"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Clean, flat array. No more subItems.
const links = [
  { name: "About", href: "/about" },
  { name: "Work", href: "/works" }, // Label is "Work", path remains "/works"
  { name: "Press", href: "/press" },
  { name: "Store", href: "/store" }, // Renamed from Inventory
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <style jsx global>{`
      /* Mobile */
      .nav-container { padding: 15px 20px; } 
      
      .desktop-links { display: none; }
      .mobile-toggle { display: block; }
      
      @media (min-width: 768px) {
        /* Desktop: Very slim (15px top/bottom) */
        .nav-container { padding: 15px 40px; } 
        .desktop-links { display: flex; }
        .mobile-toggle { display: none; }
      }
    `}</style>

      {/* HEADER NAV */}
      <motion.nav 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
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
          backdropFilter: 'blur(12px)',
          backgroundColor: scrolled ? 'rgba(20, 20, 20, 0.85)' : 'rgba(20, 20, 20, 0.4)',
          transition: 'background-color 0.3s ease, padding 0.3s ease'
        }}
      >
        {/* LEFT: IDENTITY */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Link href="/" onClick={() => setIsOpen(false)} style={{ fontWeight: 'bold', fontSize: '14px', letterSpacing: '0.05em', textTransform: 'uppercase', color: isOpen ? '#EBEBE8' : 'white', textDecoration: 'none' }}>
            Nirmesh Gollamandala
          </Link>
          <span style={{ fontSize: '10px', marginTop: '4px', letterSpacing: '0.05em', color: isOpen ? 'rgba(235,235,232,0.5)' : 'rgba(255,255,255,0.5)', fontFamily: 'monospace' }}>
            CREATIVE TECHNOLOGIST
          </span>
        </div>

        {/* RIGHT (DESKTOP) - Flat Map, No Dropdowns */}
        <div className="desktop-links" style={{ gap: '32px', alignItems: 'center' }}>
          {links.map((link) => {
            // Highlight if current path starts with the link href (e.g., active for /works and /works/lab)
            const isActive = pathname.startsWith(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                style={{
                  fontSize: '12px', 
                  letterSpacing: '0.1em', 
                  textTransform: 'uppercase',
                  color: 'white', 
                  textDecoration: 'none',
                  opacity: isActive ? 1 : 0.6,
                  fontWeight: isActive ? 'bold' : 'normal',
                  transition: 'opacity 0.2s ease'
                }}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* RIGHT (MOBILE Toggle) */}
        <button className="mobile-toggle" onClick={toggleMenu} style={{ background: 'none', border: 'none', color: isOpen ? '#EBEBE8' : 'white', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer', padding: 0 }}>
          {isOpen ? "CLOSE" : "MENU"}
        </button>
      </motion.nav>

      {/* MOBILE OVERLAY - Flat Map, No Dropdowns */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
              backgroundColor: '#1A1A1A', zIndex: 101, display: 'flex', flexDirection: 'column',
              justifyContent: 'center', alignItems: 'center', padding: '40px', boxSizing: 'border-box'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', width: '100%' }}>
              {links.map((link) => {
                const isActive = pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      fontSize: '24px', 
                      fontFamily: 'Krungthep, Impact, sans-serif',
                      textTransform: 'uppercase', 
                      color: '#EBEBE8', 
                      textDecoration: 'none',
                      letterSpacing: '0.1em', 
                      textAlign: 'center',
                      opacity: isActive ? 1 : 0.5,
                      transition: 'opacity 0.2s ease'
                    }}
                  >
                    {link.name}
                  </Link>
                );
              })}
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