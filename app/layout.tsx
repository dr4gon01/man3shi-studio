import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Man3shi Studio",
  description: "The Human Atelier",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen relative flex flex-col">
        
        {/* 1. TOP: The Header (Replaces Sidebar) */}
        <header className="w-full z-50">
          <Header />
        </header>

        {/* 2. CENTER: Main Content Area */}
        {/* We use flex-grow to ensure it fills the screen */}
        <main className="flex-1 w-full relative z-10">
          {children}
        </main>

        {/* 3. BOTTOM RIGHT: The Signature Tag */}
        <div 
          style={{ 
            position: 'fixed', 
            bottom: '40px', 
            right: '40px', 
            zIndex: 9999,
            pointerEvents: 'none'
          }}
        >
           {/* <Image
             src="/man3shi_white_tag.png"
             alt="Signature"
             width={180}  
             height={100} 
             className="object-contain"
             priority
           /> */}
        </div>

      </body>
    </html>
  );
}