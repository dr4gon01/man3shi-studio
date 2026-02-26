"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Copy, Check, FileText } from "lucide-react";

const hairline = "0.5px";
const borderColor = "rgba(255,255,255,0.10)";
const gold = "#d4a373";

// Your Zenodo Data Injected Here
const PAPER = {
  title: "Narrative Generation in Deterministic Systems: Emotion-Driven AI Co-Creation with Chess",
  authors: "Nirmesh Gollamandala",
  venue: "Zenodo",
  year: "2025",
  status: "Preprint",
  abstract: "Chaturanga is an interactive art installation that reinterprets chess—a canonical deterministic system—as a platform for AI-assisted emotional storytelling. Leveraging a virtual 8×8 word-mapped chessboard and a large language model (Google Gemini), participants assume the roles of three archetypal characters (Queen, Rook, Bishop) and generate bespoke narratives. This reframing invites reflection on loyalty, loss, and agency within a formal structure, demonstrating how AI can amplify human creativity in deterministic contexts.",
  contributions: [
    "Word-Tile Mapping: Defined 64-entry affective lexicas mapping emotional resonance to specific chess pieces.",
    "System Architecture: Developed a Python backend integrating virtual board states with the Gemini LLM for realtime narrative projection.",
    "Analytical Metrics: Computed sentiment and semantic-cohesion scores using VADER and Sentence-BERT to evaluate generated movement paths."
  ],
  links: {
    pdf: "https://zenodo.org/records/15701859",
    doi: "10.5281/zenodo.15701859",
    code: "https://github.com/dr4gon01/Chaturanga_app"
  },
  bibtex: `@misc{gollamandala2025narrative,\n  title={Narrative Generation in Deterministic Systems: Emotion-Driven AI Co-Creation with Chess},\n  author={Nirmesh Gollamandala},\n  year={2025},\n  publisher={Zenodo},\n  doi={10.5281/zenodo.15701859},\n  url={https://zenodo.org/records/15701859}\n}`,
  relatedWork: [
    { title: "Chaturanga", slug: "chaturanga" }
  ]
};

export default function ResearchDetailPage() {
  const [copied, setCopied] = useState(false);

  const copyBibtex = () => {
    navigator.clipboard.writeText(PAPER.bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ padding: "120px 20px 120px", minHeight: "100vh", color: "#EBEBE8", fontFamily: "Helvetica Neue, sans-serif", maxWidth: "800px", margin: "0 auto" }}>
      
      {/* BACK LINK */}
      <div style={{ marginBottom: "40px" }}>
        <Link 
          href="/research" 
          style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#888', textDecoration: 'none', fontSize: '12px', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em' }}
          className="hover:text-[#d4a373] transition-colors"
        >
          <ArrowLeft size={14} /> [ Back to Research ]
        </Link>
      </div>

      {/* HEADER */}
      <div style={{ marginBottom: "40px" }}>
        <div style={{ fontFamily: "monospace", fontSize: "12px", color: gold, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
          [{PAPER.year}] {PAPER.venue} — {PAPER.status}
        </div>
        <h1 style={{ fontSize: "32px", lineHeight: 1.2, fontWeight: 500, margin: "0 0 16px 0", letterSpacing: "-0.01em" }}>
          {PAPER.title}
        </h1>
        <p style={{ fontFamily: "monospace", fontSize: "14px", color: "#999", margin: 0 }}>
          {PAPER.authors}
        </p>
      </div>

      {/* PRIMARY ACTIONS */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "56px", borderBottom: `${hairline} solid ${borderColor}`, paddingBottom: "32px" }}>
        {PAPER.links.pdf && (
          <a href={PAPER.links.pdf} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', backgroundColor: '#EBEBE8', color: '#0a0a0a', fontSize: '12px', fontFamily: 'monospace', textTransform: 'uppercase', textDecoration: 'none', fontWeight: 'bold' }}>
            <FileText size={16} /> View Record
          </a>
        )}
        {PAPER.links.code && (
          <a href={PAPER.links.code} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', border: `1px solid ${borderColor}`, color: '#EBEBE8', fontSize: '12px', fontFamily: 'monospace', textTransform: 'uppercase', textDecoration: 'none' }} className="hover:border-white transition-colors">
            Source Code <ArrowUpRight size={14} />
          </a>
        )}
      </div>

      {/* ABSTRACT */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ fontFamily: "monospace", fontSize: "11px", color: "#666", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
          /// Abstract
        </h2>
        <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#EBEBE8", fontWeight: 300 }}>
          {PAPER.abstract}
        </p>
      </section>

      {/* CONTRIBUTIONS */}
      <section style={{ marginBottom: "56px" }}>
        <h2 style={{ fontFamily: "monospace", fontSize: "11px", color: "#666", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
          /// Key Contributions
        </h2>
        <ul style={{ paddingLeft: "20px", margin: 0 }}>
          {PAPER.contributions.map((bullet, i) => (
            <li key={i} style={{ fontSize: "15px", lineHeight: 1.7, color: "#EBEBE8", marginBottom: "12px", fontWeight: 300 }}>
              {bullet}
            </li>
          ))}
        </ul>
      </section>

      {/* CROSS-LINKING TO PRACTICE */}
      <section style={{ marginBottom: "56px", padding: "24px", border: `${hairline} solid ${borderColor}`, backgroundColor: "rgba(255,255,255,0.02)" }}>
        <h2 style={{ fontFamily: "monospace", fontSize: "11px", color: gold, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "16px" }}>
          /// Related Studio Work
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {PAPER.relatedWork.map(work => (
            <Link key={work.slug} href={`/works/${work.slug}`} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", textDecoration: "none", borderBottom: "0.5px dashed rgba(255,255,255,0.2)", paddingBottom: "8px" }} className="group">
              <span style={{ fontSize: "15px", color: "#EBEBE8" }} className="group-hover:text-[#d4a373] transition-colors">
                {work.title}
              </span>
              <span style={{ fontFamily: "monospace", fontSize: "10px", color: "#666", textTransform: "uppercase" }}>
                View Project →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* BIBTEX CITE */}
      <section>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "12px" }}>
          <h2 style={{ fontFamily: "monospace", fontSize: "11px", color: "#666", letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>
            /// Cite (BibTeX)
          </h2>
          <button onClick={copyBibtex} style={{ background: "none", border: "none", color: gold, fontFamily: "monospace", fontSize: "11px", textTransform: "uppercase", cursor: "pointer", display: "flex", alignItems: "center", gap: "6px" }}>
            {copied ? <><Check size={12} /> Copied</> : <><Copy size={12} /> Copy</>}
          </button>
        </div>
        <div style={{ padding: "16px", backgroundColor: "#050505", border: `${hairline} solid ${borderColor}`, overflowX: "auto" }}>
          <pre style={{ margin: 0, fontFamily: "monospace", fontSize: "12px", color: "#999", whiteSpace: "pre-wrap" }}>
            {PAPER.bibtex}
          </pre>
        </div>
      </section>

    </div>
  );
}