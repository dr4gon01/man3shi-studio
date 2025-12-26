'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Connect() {
    return (
        // 1. CONTAINER: Covers entire screen, stays on top (z-9999)
        <div className="fixed top-0 left-0 w-screen h-screen z-[9999] bg-[#1c1f18] flex items-center justify-center p-6">

            {/* 2. THE CARD: Responsive width (safe for phones) */}
            <div className="w-full max-w-[350px] border border-[#333] bg-[#1c1f18] p-8 flex flex-col items-center shadow-2xl relative">

                {/* Ornamental Corner Markers */}
                <div className="absolute top-[-1px] left-[-1px] w-3 h-3 border-t border-l border-[#d4a373]"></div>
                <div className="absolute bottom-[-1px] right-[-1px] w-3 h-3 border-b border-r border-[#d4a373]"></div>

                {/* 3. LOGO */}
                <div className="relative w-36 h-16 mb-8 opacity-90">
                    <Image
                        src="/man3shi_white_tag.png"
                        alt="Man3shi Studio"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                {/* 4. IDENTITY */}
                <div className="text-center mb-10 w-full">
                    <h2 className="text-[12px] tracking-[0.2em] font-bold text-white uppercase mb-3 leading-relaxed">
                        Nirmesh Gollamandala
                    </h2>
                    <p className="text-[9px] tracking-[0.25em] text-[#888] uppercase">
                        Principal Creative Technologist
                    </p>
                </div>

                {/* 5. ACTIONS (Optimized for Touch) */}
                <div className="w-full flex flex-col gap-5">

                    {/* PRIMARY: Save Contact - Extra padding (py-5) for easy tapping */}
                    <a
                        href="/api/vcard" // <--- CHANGED: Points to the API route, not the file
                        // download="Nirmesh-Man3shi.vcf" // <--- REMOVE: The API handles the filename now
                        className="block w-full bg-[#d4a373] py-5 text-center active:bg-white hover:bg-white transition-colors duration-200"
                    >
                        <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1c1f18]">
                            [ Save Contact ]
                        </span>
                    </a>

                    {/* SECONDARY: Enter Studio */}
                    <Link
                        href="/"
                        className="block w-full border border-[#333] py-5 text-center active:border-white hover:border-white transition-colors duration-200 group"
                    >
                        <span className="text-[10px] uppercase tracking-[0.2em] text-[#666] group-hover:text-white transition-colors">
                            Enter Studio
                        </span>
                    </Link>

                </div>

                {/* 6. FOOTER NOTE - Updated Year */}
                <div className="mt-8 pt-5 border-t border-[#333] w-full text-center">
                    <p className="text-[8px] text-[#444] tracking-widest font-mono">
                        HYD / IN — EST. 2025
                    </p>
                </div>

            </div>
        </div>
    )
}