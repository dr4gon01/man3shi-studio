"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Construction({ title = "ARCHITECTING" }: { title?: string }) {
  return (
    <div 
      className="flex flex-col items-center justify-center w-full min-h-screen bg-transparent"
      style={{ 
        fontFamily: 'Helvetica Neue, Arial, sans-serif' 
      }}
    >
      
      {/* 1. ANIMATED STATUS INDICATOR */}
      <motion.div
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: '8px',
          height: '8px',
          backgroundColor: '#EBEBE8', // Paper white
          borderRadius: '50%',
          marginBottom: '24px'
        }}
      />

      {/* 2. THE MESSAGE */}
      <h1 
        style={{ 
          fontSize: '14px', 
          letterSpacing: '0.2em', 
          textTransform: 'uppercase',
          color: '#EBEBE8',
          marginBottom: '16px',
          fontFamily: 'monospace'
        }}
      >
        {title}
      </h1>

      <p 
        style={{ 
          fontSize: '12px', 
          color: '#8C8C88', // Muted grey
          letterSpacing: '0.05em',
          maxWidth: '300px',
          textAlign: 'center',
          lineHeight: '1.6'
        }}
      >
        This section of the world is currently being forged.
        <br />
        Please check back soon.
      </p>

      {/* 3. RETURN HOME BUTTON */}
      <Link 
        href="/"
        style={{
          marginTop: '40px',
          fontSize: '10px',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          borderBottom: '1px solid #8C8C88',
          paddingBottom: '2px',
          color: '#8C8C88'
        }}
      >
        Return to Studio
      </Link>

    </div>
  );
}