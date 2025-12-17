"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "About", href: "/about" },
  { name: "Works", href: "/works" },
  { name: "Press", href: "/press" },
  { name: "Artifacts", href: "/shop" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <nav 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        boxSizing: 'border-box',
        padding: '40px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        zIndex: 100,
        backgroundColor: 'transparent'
      }}
    >
      
      {/* LEFT: THE CREATOR (Nirmesh Gollamandala) */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Link 
          href="/" 
          style={{ 
            fontWeight: 'bold', 
            fontSize: '14px', 
            letterSpacing: '0.05em', 
            textTransform: 'uppercase',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Nirmesh Gollamandala
        </Link>
        
        {/* Optional: Title */}
        <span 
          style={{ 
            fontSize: '10px', 
            marginTop: '4px',
            letterSpacing: '0.05em', 
            color: 'rgba(255,255,255,0.5)', 
            fontFamily: 'monospace' 
          }}
        >
          Creative Technologist
        </span>
      </div>

      {/* RIGHT: Navigation Links */}
      <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
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
      
    </nav>
  );
}