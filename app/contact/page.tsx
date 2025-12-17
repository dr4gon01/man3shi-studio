"use client";
import Image from "next/image";

export default function Contact() {
  return (
    <div 
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        fontFamily: 'Helvetica Neue, Arial, sans-serif'
      }}
    >
      
      {/* 1. THE STUDIO SEAL */}
      {/* OPTICAL CALIBRATION: 18px */}
      {/* 10px was too subtle, 30px was too aggressive. 18px is the balance. */}
      <div 
        style={{ 
          marginBottom: '40px', 
          opacity: 0.8, 
          paddingRight: '16px' // <--- The Sweet Spot
        }}
      >
         <Image
           src="/man3shi_white_tag.png" 
           alt="Signature"
           width={120}  
           height={60} 
           className="object-contain"
           priority
         />
      </div>

      {/* 2. HEADER */}
      <h1 
        style={{ 
          fontSize: '14px', 
          letterSpacing: '0.2em', 
          textTransform: 'uppercase', 
          color: '#EBEBE8',
          marginBottom: '24px',
          fontFamily: 'monospace'
        }}
      >
        Signal Input
      </h1>

      {/* 3. THE INVITATION */}
      <p 
        style={{ 
          fontSize: '14px', 
          color: '#8C8C88', 
          marginBottom: '40px',
          textAlign: 'center',
          lineHeight: '1.6',
          maxWidth: '400px',
          padding: '0 20px',
          fontWeight: 300
        }}
      >
        The studio is currently accepting inquiries for <br />
        <strong>academic dialogue</strong> and <strong>commercial collaborations</strong>.
      </p>

      {/* 4. THE ACTION BUTTON */}
      <a 
        href="mailto:nirmesh.gollamandala@gmail.com" 
        style={{
          border: '1px solid #EBEBE8',
          padding: '16px 32px',
          fontSize: '12px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: '#EBEBE8',
          textDecoration: 'none',
          cursor: 'pointer',
          transition: 'background 0.3s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
      >
        Initialize Contact
      </a>

    </div>
  );
}