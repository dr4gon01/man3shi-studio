import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer"; // <--- IMPORT IT

export const metadata: Metadata = {
  title: "Man3shi Studio",
  description: "Creative Technologist & Human Atelier",
  icons: {
    icon: '/man3shi_white_tag.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" style={{ margin: 0, background: '#1c1f18' }}> {/* Ensure bg matches your green */}
        <Header />
        {children}
        <Footer /> {/* <--- ADD IT HERE */}
      </body>
    </html>
  );
}