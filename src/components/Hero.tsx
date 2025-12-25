"use client";

import { useRef } from "react";
import Link from "next/link";
import SpacecraftTopView from "./SpacecraftTopView";
import CuttingMatGrid from "./CuttingMatGrid";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={containerRef}
      className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 py-12 relative overflow-hidden bg-background"
    >
      {/* Cutting mat grid background */}
      <CuttingMatGrid />

      {/* Centered title at top */}
      <div className="absolute top-10 left-0 right-0 z-30 px-6 md:px-12 py-8">
        <div className="flex flex-col items-center">
          <Link href="/" className="group">
            <span className="font-mono text-lg md:text-xl tracking-[0.3em] text-foreground group-hover:text-muted-foreground transition-colors">
              COSMEXUS
            </span>
          </Link>
        </div>
      </div>

      {/* Section label - top left (below nav) */}
      <div className="pointer-events-none absolute top-10 left-8 z-20 text-[10px] font-mono tracking-widest text-muted-foreground">
        <div className="flex flex-col items-start gap-1">
          <div>SECTION 01</div>
          <div>TOP VIEW</div>
        </div>
      </div>

      {/* Top-right status indicator */}
      <div className="pointer-events-none absolute top-10 right-8 z-20 text-[10px] font-mono tracking-widest text-muted-foreground">
        <div className="flex flex-col items-end gap-1">
          <div>SCALE: 1:200</div>
          <div>UNITS: METRIC</div>
        </div>
      </div>

      {/* Main content - centered spacecraft top view */}
      <div className="relative z-10 flex flex-col items-center mt-16">
        {/* Spacecraft top view */}
        <div className="relative">
          <SpacecraftTopView width={500} height={580} className="relative z-10" />
        </div>

        {/* Action buttons below */}
        <div className="flex gap-4 mt-6">
          <a 
            href="/bayronik"
            className="px-5 py-2 bg-foreground text-background rounded text-xs font-mono hover:bg-foreground/90 transition-colors"
          >
            VIEW PROJECTS
          </a>
          <a 
            href="#about"
            className="px-5 py-2 border border-foreground/30 rounded text-xs font-mono text-foreground hover:border-foreground/60 transition-colors"
          >
            LEARN MORE
          </a>
        </div>
      </div>

      {/* Bottom annotations */}
      <div className="absolute bottom-8 left-8 text-[9px] font-mono text-muted-foreground/60">
        <div>DRAWING NO: CSX-001-A</div>
        <div>DATE: 2025.12.25</div>
      </div>
      
      <div className="absolute bottom-8 right-8 text-[9px] font-mono text-muted-foreground/60 text-right">
        <div>APPROVED: ✓</div>
        <div>PAGE 1 OF 3</div>
      </div>
    </section>
  );
}
