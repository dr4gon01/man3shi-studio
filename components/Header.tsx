"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "About", href: "/about" },
  { 
    name: "Works", 
    href: "/works", 
    subItems: [
      { name: "Commissions", href: "/works/commissions" },
      { name: "Lab", href: "/works/lab" },
      { name: "Editions", href: "/works/editions" }
    ]
  },
  { name: "Press", href: "/press" },
  { name: "Inventory", href: "/inventory" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [worksExpanded, setWorksExpanded] = useState(false);
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
    if (isOpen) setWorksExpanded(false);
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
            Creative Technologist
          </span>
        </div>

        {/* RIGHT (DESKTOP) */}
        <div className="desktop-links" style={{ gap: '32px', alignItems: 'flex-start' }}>
          {links.map((link) => {
            const isParentActive = link.subItems 
              ? pathname.startsWith(link.href) 
              : pathname === link.href;

            return (
              <div 
                key={link.name}
                style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
              >
                {/* PARENT LINK */}
                <div 
                  onClick={() => link.subItems ? setWorksExpanded(!worksExpanded) : null}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}
                >
                  {link.subItems ? (
                    <span
                      style={{
                        fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase',
                        color: 'white', fontWeight: isParentActive ? 'bold' : 'normal',
                        opacity: isParentActive ? 1 : 0.6
                      }}
                    >
                      {link.name} 
                      <span style={{ marginLeft: '4px', fontSize: '10px', fontFamily: 'monospace', opacity: 0.6 }}>
                        {worksExpanded ? '[-]' : '[+]'}
                      </span>
                    </span>
                  ) : (
                    <Link
                      href={link.href}
                      style={{
                        fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase',
                        color: 'white', textDecoration: 'none',
                        opacity: isParentActive ? 1 : 0.6,
                        fontWeight: isParentActive ? 'bold' : 'normal',
                      }}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>

                {/* DESKTOP SUB-MENU */}
                <AnimatePresence>
                  {link.subItems && worksExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingTop: '12px', paddingLeft: '4px' }}>
                        {link.subItems.map(sub => {
                          const isSubActive = pathname === sub.href;
                          return (
                            <Link 
                              key={sub.name} 
                              href={sub.href}
                              style={{ 
                                fontSize: '10px', 
                                color: isSubActive ? 'white' : '#EBEBE8', // Highlight Active
                                textTransform: 'uppercase', 
                                letterSpacing: '0.1em', 
                                opacity: isSubActive ? 1 : 0.5, // Dim inactive
                                fontWeight: isSubActive ? 'bold' : 'normal',
                                textDecoration: 'none',
                                fontFamily: 'monospace', 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '6px'
                              }}
                            >
                              {/* Change Arrow to Dot if Active */}
                              <span style={{ opacity: isSubActive ? 1 : 0.3 }}>
                                {isSubActive ? '●' : '↳'}
                              </span> 
                              {sub.name}
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* RIGHT (MOBILE Toggle) */}
        <button className="mobile-toggle" onClick={toggleMenu} style={{ background: 'none', border: 'none', color: isOpen ? '#EBEBE8' : 'white', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', cursor: 'pointer', padding: 0 }}>
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
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
              backgroundColor: '#1A1A1A', zIndex: 101, display: 'flex', flexDirection: 'column',
              justifyContent: 'center', alignItems: 'center', padding: '40px', boxSizing: 'border-box'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', width: '100%' }}>
              {links.map((link) => {
                const isParentActive = link.subItems 
                  ? pathname.startsWith(link.href) 
                  : pathname === link.href;

                return (
                  <div key={link.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div 
                      onClick={() => link.subItems ? setWorksExpanded(!worksExpanded) : setIsOpen(false)}
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}
                    >
                      {link.subItems ? (
                        <span
                          style={{
                            fontSize: '24px', fontFamily: 'Krungthep, Impact, sans-serif',
                            textTransform: 'uppercase', color: '#EBEBE8', letterSpacing: '0.1em', textAlign: 'center',
                            opacity: isParentActive ? 1 : 0.5
                          }}
                        >
                          {link.name}
                        </span>
                      ) : (
                        <Link
                          href={link.href}
                          style={{
                            fontSize: '24px', fontFamily: 'Krungthep, Impact, sans-serif',
                            textTransform: 'uppercase', color: '#EBEBE8', textDecoration: 'none',
                            letterSpacing: '0.1em', textAlign: 'center',
                            opacity: isParentActive ? 1 : 0.5
                          }}
                        >
                          {link.name}
                        </Link>
                      )}
                      
                      {link.subItems && (
                        <span style={{ fontSize: '14px', color: '#EBEBE8', opacity: 0.5, fontFamily: 'monospace' }}>
                          {worksExpanded ? '[-]' : '[+]'}
                        </span>
                      )}
                    </div>

                    <AnimatePresence>
                      {link.subItems && worksExpanded && (
                        <motion.div
                          layout
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                          style={{ overflow: 'hidden', width: '100%' }}
                        >
                          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', paddingTop: '16px' }}>
                            {link.subItems.map(sub => {
                              const isSubActive = pathname === sub.href;
                              return (
                                <Link
                                  key={sub.name}
                                  href={sub.href}
                                  onClick={() => setIsOpen(false)}
                                  style={{
                                    fontSize: '16px', 
                                    fontFamily: 'Helvetica Neue, sans-serif',
                                    textTransform: 'uppercase', 
                                    color: isSubActive ? 'white' : '#8C8C88', // Highlight active
                                    fontWeight: isSubActive ? 'bold' : 'normal',
                                    textDecoration: 'none',
                                    letterSpacing: '0.1em',
                                    opacity: isSubActive ? 1 : 0.6
                                  }}
                                >
                                  {sub.name}
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
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