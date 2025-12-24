"use client";
import { cvData } from "../data/cv"; 
import { motion } from "framer-motion";

export default function CV() {
  return (
    <div style={{ 
      backgroundColor: '#1c1f18', 
      color: '#EBEBE8',           
      minHeight: '100vh',
      fontFamily: 'Helvetica Neue, Arial, sans-serif',
      padding: '100px 40px'
    }}>
      
      {/* 1. HEADER SECTION (Updated for Line Break) */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ 
          maxWidth: '800px', 
          margin: '0 auto 80px auto', 
          borderBottom: '1px solid #333', 
          paddingBottom: '40px' 
        }}
      >
        <h1 style={{ 
          fontFamily: 'Krungthep, Impact, sans-serif', 
          fontSize: '36px', 
          textTransform: 'uppercase', 
          letterSpacing: '0.05em',
          marginBottom: '8px'
        }}>
          {cvData.header.name}
        </h1>

        {/* FLEX CONTAINER FOR INFO */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'flex-start', // Aligns items to top
          flexWrap: 'wrap', 
          gap: '20px', 
          fontFamily: 'monospace', 
          fontSize: '12px', 
          opacity: 0.7 
        }}>
          
          {/* LEFT: Role (Takes up available space) */}
          <span style={{ maxWidth: '60%', lineHeight: '1.4' }}>
            {cvData.header.role}
          </span>

          {/* RIGHT: Location & Email (Stacked Vertically) */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                        
            {/* Email (Now on its own line) */}
            <a 
              href={`mailto:${cvData.header.email}`} 
              className="hover:text-white transition-colors"
              style={{ textDecoration: 'none', borderBottom: '1px solid #555' }}
            >
              {cvData.header.email}
            </a>

          </div>
        </div>
      </motion.div>

      {/* 2. DYNAMIC SECTIONS LOOP (Same as before) */}
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {cvData.sections.map((section, index) => (
          <motion.div 
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            style={{ marginBottom: '60px' }}
          >
            <h3 style={{ 
              fontFamily: 'monospace', 
              fontSize: '11px', 
              textTransform: 'uppercase', 
              letterSpacing: '0.2em', 
              color: '#888',
              marginBottom: '30px',
              borderLeft: '2px solid #d4a373', 
              paddingLeft: '12px'
            }}>
              {section.title}
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {section.items.map((item, i) => (
                <div key={i} style={{ 
                  display: 'grid', 
                  gridTemplateColumns: '80px 1fr', 
                  gap: '20px',
                  alignItems: 'baseline'
                }}>
                  <span style={{ fontFamily: 'monospace', fontSize: '12px', color: '#666' }}>
                    {item.year}
                  </span>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: '500', marginBottom: '4px', color: '#EBEBE8' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '13px', opacity: 0.6, fontStyle: 'normal', marginBottom: '6px' }}>
                      {item.org} <span style={{ opacity: 0.3, margin: '0 6px' }}>/</span> {item.location}
                    </div>
                    {/* Render Details if they exist */}
                    {(item as any).details && (
                      <div style={{ fontSize: '13px', opacity: 0.8, color: '#bbb', fontStyle: 'italic', maxWidth: '550px', lineHeight: '1.6', marginTop: '4px' }}>
                        {(item as any).details}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* 3. DOWNLOAD BUTTON */}
      <div style={{ maxWidth: '800px', margin: '80px auto 0 auto', textAlign: 'right' }}>
        <button 
          onClick={() => window.print()} 
          style={{ 
            background: 'transparent', border: '1px solid #333', color: '#666', 
            padding: '12px 24px', fontFamily: 'monospace', fontSize: '11px',
            cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.1em'
          }}
          className="hover:border-white hover:text-white transition-all"
        >
          Download PDF [↓]
        </button>
      </div>

    </div>
  );
}