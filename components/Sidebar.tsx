"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "About", href: "/about" }, // We will add a "Services" list here later
  { 
    name: "Works", 
    href: "/works", 
    subItems: [
      { name: "Commissions", href: "/works/commissions" }, // "I am open for business"
      { name: "Collaborations", href: "/works/collaborations" },     // "Collaborations with others"
      { name: "Lab", href: "/works/lab" }                  // "I know advanced tech"
    ]
  },
  { name: "Press", href: "/press" },
  { name: "Inventory", href: "/inventory" },
  { name: "Contact", href: "/contact" },
];

const workSubLinks = [
  { name: "Physical", href: "/works/physical" },
  { name: "Digital", href: "/works/digital" },
  { name: "Research", href: "/works/research" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const isWorksActive = pathname.startsWith("/works");

  return (
    <nav className="h-full flex flex-col justify-between py-2">
      {/* 1. Identity */}
      <div className="mb-8 md:mb-0">
        <Link href="/" className="group block">
          <h1 className="text-xl md:text-2xl font-bold tracking-tighter uppercase text-paper group-hover:text-white transition-colors">
            Man3shi
          </h1>
          {/* UPDATED TEXT HERE */}
          <p className="text-[10px] font-mono text-muted mt-1 tracking-widest uppercase group-hover:text-paper transition-colors">
            The human Atelier
          </p>
        </Link>
      </div>

      {/* 2. Menu Links */}
      <div className="flex flex-col gap-4 text-sm font-medium">
        {links.map((link) => {
          const isActive = pathname === link.href || (link.href === "/works" && isWorksActive);
          return (
            <div key={link.href}>
              <Link
                href={link.href}
                className={`block transition-all duration-300 ${
                  isActive 
                    ? "text-white translate-x-1 font-bold" 
                    : "text-muted hover:text-paper hover:translate-x-1"
                }`}
              >
                {link.name}
              </Link>

              {/* Sub-menu */}
              {link.name === "Works" && isWorksActive && (
                <div className="ml-0 mt-3 flex flex-col gap-2 border-l border-white/10 pl-4">
                  {workSubLinks.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className={`block text-xs font-mono transition-colors ${
                        pathname === sub.href ? "text-paper font-bold" : "text-muted/60 hover:text-paper"
                      }`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* 3. Footer */}
      <div className="hidden md:block text-[10px] font-mono text-muted/30 uppercase tracking-widest">
        <p>Est. 2025</p>
        <p>Hyd / Earth</p>
      </div>
    </nav>
  );
}