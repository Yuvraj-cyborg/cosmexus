"use client";

import React from "react";
import CuttingMatGrid from "./CuttingMatGrid";
import SpacecraftFrontView from "./SpacecraftFrontView";

export default function MissionSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 relative overflow-hidden bg-background">
      {/* Cutting mat grid background */}
      <CuttingMatGrid />

      {/* Section label - top left */}
      <div className="absolute top-8 left-8 text-[10px] font-mono tracking-widest text-muted-foreground">
        <div>SECTION 03</div>
        <div>FRONT VIEW</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Section header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-2xl md:text-3xl font-mono font-bold text-foreground tracking-tight">
            MISSION OBJECTIVES
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Front view spacecraft centered */}
        <div className="flex justify-center mb-12">
          <SpacecraftFrontView width={280} height={220} />
        </div>

        {/* Timeline/Roadmap style layout */}
        <div className="relative">
          {/* Central vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border transform -translate-x-1/2 hidden md:block" />

          {/* Mission items */}
          <div className="space-y-16 md:space-y-24">
            {/* Phase 1 */}
            <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
              <div className="md:text-right md:pr-12 relative">
                <div className="hidden md:block absolute right-0 top-1/2 w-8 h-px bg-border transform translate-x-4" />
                <div className="hidden md:block absolute right-0 top-1/2 w-3 h-3 rounded-full bg-foreground transform translate-x-12 -translate-y-1/2" />
                
                <div className="text-xs font-mono text-muted-foreground mb-2">PHASE 01 — Q2 2025</div>
                <h3 className="text-lg font-mono font-bold text-foreground mb-2">Bayronik Development</h3>
                <p className="text-sm font-mono text-muted-foreground">
                  Complete design and prototype testing of the Bayronik V1 orbital transport vessel. 
                  Focus on propulsion efficiency and structural integrity.
                </p>
                
                {/* Technical callout */}
                <div className="mt-4 inline-block border border-border p-3">
                  <div className="text-[10px] font-mono text-muted-foreground">TARGET SPECS</div>
                  <div className="text-xs font-mono text-foreground mt-1">
                    Payload: 2,400 kg • Range: LEO • ΔV: 4.2 km/s
                  </div>
                </div>
              </div>
              <div className="hidden md:block" />
            </div>

            {/* Phase 2 */}
            <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
              <div className="hidden md:block" />
              <div className="md:pl-12 relative">
                <div className="hidden md:block absolute left-0 top-1/2 w-8 h-px bg-border transform -translate-x-4" />
                <div className="hidden md:block absolute left-0 top-1/2 w-3 h-3 rounded-full bg-foreground transform -translate-x-12 -translate-y-1/2" />
                
                <div className="text-xs font-mono text-muted-foreground mb-2">PHASE 02 — Q4 2025</div>
                <h3 className="text-lg font-mono font-bold text-foreground mb-2">Orbital Test Flights</h3>
                <p className="text-sm font-mono text-muted-foreground">
                  Execute unmanned test flights to validate navigation systems, 
                  thermal protection, and communication arrays in orbital conditions.
                </p>
                
                <div className="mt-4 inline-block border border-border p-3">
                  <div className="text-[10px] font-mono text-muted-foreground">OBJECTIVES</div>
                  <div className="text-xs font-mono text-foreground mt-1">
                    Orbits: 12 • Duration: 72h • Data: 4TB telemetry
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="md:grid md:grid-cols-2 md:gap-16 items-center">
              <div className="md:text-right md:pr-12 relative">
                <div className="hidden md:block absolute right-0 top-1/2 w-8 h-px bg-border transform translate-x-4" />
                <div className="hidden md:block absolute right-0 top-1/2 w-3 h-3 rounded-full border-2 border-foreground bg-background transform translate-x-12 -translate-y-1/2" />
                
                <div className="text-xs font-mono text-muted-foreground mb-2">PHASE 03 — 2026</div>
                <h3 className="text-lg font-mono font-bold text-foreground mb-2">Commercial Operations</h3>
                <p className="text-sm font-mono text-muted-foreground">
                  Begin commercial satellite deployment services and establish 
                  partnerships with research institutions for orbital experiments.
                </p>
                
                <div className="mt-4 inline-block border border-border p-3">
                  <div className="text-[10px] font-mono text-muted-foreground">PROJECTIONS</div>
                  <div className="text-xs font-mono text-foreground mt-1">
                    Missions: 6/year • Revenue: Series A target
                  </div>
                </div>
              </div>
              <div className="hidden md:block" />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-4 text-xs font-mono text-muted-foreground mb-6">
            <span className="h-px w-12 bg-border" />
            <span>JOIN THE MISSION</span>
            <span className="h-px w-12 bg-border" />
          </div>
          <div className="flex justify-center gap-4">
            <a 
              href="/bayronik"
              className="px-6 py-2.5 bg-foreground text-background rounded text-xs font-mono hover:bg-foreground/90 transition-colors"
            >
              VIEW PROJECTS
            </a>
            <button 
              className="px-6 py-2.5 border border-foreground/30 rounded text-xs font-mono text-foreground hover:border-foreground/60 transition-colors"
            >
              CONTACT US
            </button>
          </div>
        </div>
      </div>

      {/* Bottom annotation */}
      <div className="absolute bottom-8 left-8 text-[9px] font-mono text-muted-foreground/60">
        <div>REF: CSX-MISSION-001</div>
      </div>
      
      <div className="absolute bottom-8 right-8 text-[9px] font-mono text-muted-foreground/60 text-right">
        <div>PAGE 3 OF 3</div>
      </div>
    </section>
  );
}
