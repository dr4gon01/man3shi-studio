"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // Optional: If you want the footer hidden on Home too, uncomment this:
  // if (pathname === '/') return null; 

  return (
    <footer style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      // SLIM DIMENSIONS
      padding: '8px 20px', // Reduced padding for a thinner look
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 100,
      mixBlendMode: 'difference', // Cool effect: ensures text is visible on any background
      color: '#EBEBE8',
      fontSize: '10px',
      fontFamily: 'monospace',
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      boxSizing: 'border-box'
    }}>
      
      {/* LEFT: COPYRIGHT */}
      <div style={{ opacity: 0.5 }}>
        © {new Date().getFullYear()} MAN3SHI STUDIO
      </div>

      {/* RIGHT: SOCIALS */}
      <div style={{ display: 'flex', gap: '24px' }}>
        <Link 
          href="https://www.instagram.com/man3shi.studio/" 
          target="_blank"
          style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
        >
          INSTAGRAM ↗
        </Link>
        
        <Link 
          href="https://www.linkedin.com/in/nirmesh-gollamandala/" 
          target="_blank"
          style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
        >
          LINKEDIN ↗
        </Link>
      </div>

    </footer>
  );
}