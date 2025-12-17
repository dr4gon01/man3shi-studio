"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div 
      className="flex flex-col items-center justify-center w-full min-h-screen pt-10"
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '100vh', 
        paddingTop: '40px' 
      }}
    >
      
      {/* 1. SYMBOL */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],    
          opacity: [0.8, 1, 0.8] 
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative mb-6" 
        // RESPONSIVE FIX 1:
        // Width = 180px usually, but never more than 50% of screen on tiny phones
        style={{ 
          width: 'min(180px, 50vw)', 
          aspectRatio: '1/1', // Forces a perfect square
          marginBottom: '24px',
          position: 'relative'
        }} 
      >
        <Image
          src="/symbol.png" 
          alt="Man3shi Symbol"
          fill
          className="object-contain" 
          priority
        />
      </motion.div>

      {/* 2. WORDMARK (The "Screen Compatibility" Fix) */}
      <div 
        style={{ 
          position: 'relative',
          // THE FORMULA:
          // 1. Base width is 280px (looks good on desktop)
          // 2. On mobile, it shrinks to 80% of the screen width (80vw)
          width: 'min(280px, 80vw)',   
          
          // ASPECT RATIO LOCK:
          // Your image is 1166x412, which is roughly 2.83 : 1
          // This ensures the height calculates AUTOMATICALLY based on the width.
          aspectRatio: '1166 / 412',
          
          marginBottom: '16px' 
        }}
      >
        <Image
          src="/wordmark.png" 
          alt="MAN3SHI STUDIO"
          fill
          style={{ objectFit: 'contain' }} 
          priority
        />
      </div>

      {/* 3. TAGLINE */}
      <p 
        style={{
          fontSize: '10px', // Small text is usually safe, can use 'clamp' for advanced scaling
          fontFamily: 'monospace',
          letterSpacing: '0.4em',
          textTransform: 'uppercase',
          textAlign: 'center',
          opacity: 0.8,
          color: '#8C8C88',
          padding: '0 20px' // Safety padding for mobile edges
        }}
      >
        The Human Atelier
      </p>

    </div>
  );
}