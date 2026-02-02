import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd"; // Ensure you created this component from our SEO step

// --- MAN3SHI BRAND IDENTITY ---
// Status: ARTIST / CREATIVE TECHNOLOGIST (No Corporate Data Science)
export const metadata: Metadata = {
  metadataBase: new URL('https://www.man3shistudio.com'),
  title: {
    default: "Man3shi Studio | Generative Zen & Experiential Design",
    template: "%s | Man3shi Studio", // e.g., "The Lab | Man3shi Studio"
  },
  description:
    "The interdisciplinary atelier of Nirmesh Gollamandala. Specializing in generative art, installation systems, and the intersection of South Asian cultural memory and calm technology.",
  keywords: [
    "Man3shi Studio",
    "Nirmesh Gollamandala",
    "Creative Technologist",
    "Generative Design",
    "New Media Art",
    "Interactive Installation",
    "Desi X Street",
    "Chicago Artist",
    "Experiential Design"
  ],
  authors: [{ name: "Man3shi" }],
  creator: "Man3shi Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.man3shistudio.com",
    title: "Man3shi Studio",
    description: "Generative Zen. Digital Systems. Human Perception.",
    siteName: "Man3shi Studio",
    images: [
      {
        url: "/og_man3shi_main.jpg", // Make sure this file exists in /public
        width: 1200,
        height: 630,
        alt: "Man3shi Studio Selected Works",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Man3shi Studio",
    description: "Generative Zen. An artist who can code.",
    images: ["/og-man3shi-main.jpg"],
  },
  icons: {
    icon: "/favicon.png", // Updated to match your file
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Note: I kept your specific background color (#1c1f18). 
        Ensure this matches your Tailwind 'bg-background' variable to avoid conflicts.
      */}
      <body className="antialiased" style={{ margin: 0, background: '#1c1f18' }}>
        <JsonLd /> {/* Injects the "Organization" schema for Google */}
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}