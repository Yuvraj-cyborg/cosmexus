"use client";

import React from "react";
import CuttingMatGrid from "./CuttingMatGrid";
import SpacecraftSideView from "./SpacecraftSideView";

export default function AboutSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 py-24 relative overflow-hidden bg-background">
      {/* Cutting mat grid background */}
      <CuttingMatGrid />

      {/* Section label - top left */}
      <div className="absolute top-8 left-8 text-[10px] font-mono tracking-widest text-muted-foreground">
        <div>SECTION 02</div>
        <div>PROFILE VIEW</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section header with technical styling */}
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-2xl md:text-3xl font-mono font-bold text-foreground tracking-tight">
            ABOUT COSMEXUS
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left column - main description */}
          <div className="space-y-6">
            <div className="border-l-2 border-foreground/20 pl-4">
              <div className="text-xs font-mono text-muted-foreground mb-2">❯ COMPANY_PROFILE</div>
              <p className="text-sm font-mono text-foreground leading-relaxed">
                Cosmexus is a space technology startup dedicated to advancing humanity&apos;s 
                reach beyond Earth. We design, develop, and deploy next-generation spacecraft 
                systems for orbital transport and deep space exploration.
              </p>
            </div>

            <div className="border-l-2 border-foreground/20 pl-4">
              <div className="text-xs font-mono text-muted-foreground mb-2">❯ VISION</div>
              <p className="text-sm font-mono text-foreground leading-relaxed">
                To establish sustainable infrastructure for interplanetary travel, 
                making space accessible for research, commerce, and human settlement.
              </p>
            </div>

            {/* Technical specs box */}
            <div className="border border-border p-4 mt-8">
              <div className="text-xs font-mono text-muted-foreground mb-3">SPECIFICATIONS</div>
              <div className="grid grid-cols-2 gap-4 text-xs font-mono">
                <div>
                  <div className="text-muted-foreground">Founded</div>
                  <div className="text-foreground">2024</div>
                </div>
                <div>
                  <div className="text-muted-foreground">HQ Location</div>
                  <div className="text-foreground">India</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Focus Area</div>
                  <div className="text-foreground">Orbital Systems</div>
                </div>
                <div>
                  <div className="text-muted-foreground">Team Size</div>
                  <div className="text-foreground">Stealth</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - spacecraft side view */}
          <div className="relative flex items-center justify-center">
            <SpacecraftSideView width={480} height={220} />
          </div>
        </div>

        {/* Key capabilities below */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-border">
          <div>
            <div className="text-xs font-mono text-muted-foreground mb-1">01</div>
            <div className="text-sm font-mono font-bold text-foreground">Propulsion</div>
            <p className="text-xs font-mono text-muted-foreground mt-1">
              Ion & plasma propulsion
            </p>
          </div>
          <div>
            <div className="text-xs font-mono text-muted-foreground mb-1">02</div>
            <div className="text-sm font-mono font-bold text-foreground">Navigation</div>
            <p className="text-xs font-mono text-muted-foreground mt-1">
              Autonomous AI systems
            </p>
          </div>
          <div>
            <div className="text-xs font-mono text-muted-foreground mb-1">03</div>
            <div className="text-sm font-mono font-bold text-foreground">Life Support</div>
            <p className="text-xs font-mono text-muted-foreground mt-1">
              Closed-loop systems
            </p>
          </div>
          <div>
            <div className="text-xs font-mono text-muted-foreground mb-1">04</div>
            <div className="text-sm font-mono font-bold text-foreground">Comms</div>
            <p className="text-xs font-mono text-muted-foreground mt-1">
              Quantum encryption
            </p>
          </div>
        </div>
      </div>

      {/* Bottom annotation */}
      <div className="absolute bottom-8 left-8 text-[9px] font-mono text-muted-foreground/60">
        <div>REF: CSX-ABOUT-001</div>
      </div>
      
      <div className="absolute bottom-8 right-8 text-[9px] font-mono text-muted-foreground/60 text-right">
        <div>PAGE 2 OF 3</div>
      </div>
    </section>
  );
}
