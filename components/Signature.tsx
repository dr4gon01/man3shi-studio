"use client";
import Image from "next/image";

export default function SignatureTag() {
  return (
    <>
      {/* 1. DESKTOP VERSION (Fixed & Floating) */}
      {/* hidden on mobile (hidden), visible on md screens (md:block) */}
      <div 
        className="hidden md:block fixed bottom-10 right-10 z-50 pointer-events-none mix-blend-difference"
      >
         <Image
           src="/man3shi_white_tag.png" // Ensure this path is correct
           alt="Signature"
           width={150}  
           height={80} 
           className="object-contain opacity-80"
         />
      </div>

      {/* 2. MOBILE VERSION (Static & Scrollable) */}
      {/* visible on mobile (block), hidden on md screens (md:hidden) */}
      {/* We add it as a footer signature that you scroll down to see */}
      <div className="block md:hidden w-full flex justify-end mt-12 pb-8 pr-6 opacity-60">
         <Image
           src="/man3shi_white_tag.png"
           alt="Signature"
           width={120}  
           height={60} 
           className="object-contain"
         />
      </div>
    </>
  );
}