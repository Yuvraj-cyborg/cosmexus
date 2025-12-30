"use client";

import Image from "next/image";
import Link from "next/link";
import CuttingMatGrid from "@/components/CuttingMatGrid";

export default function BayronikPage() {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Cutting mat grid background */}
      <CuttingMatGrid />

      <header className="relative z-20 px-6 md:px-12 py-12">
      </header>

      {/* Section label */}
      <div className="absolute top-16 left-8 text-[10px] font-mono tracking-widest text-muted-foreground z-20">
        <div>PROJECT 01</div>
        <div>BAYRONIK</div>
      </div>

      {/* Main content */}
      <div className="relative z-10 px-6 md:px-16 lg:px-24 py-12 max-w-6xl">
        
        {/* Title section - left aligned, minimal */}
        <div className="mb-16">
          <h1 className="text-3xl md:text-4xl font-mono font-bold text-foreground tracking-tight mb-4">
            Bayronik
          </h1>
          
          <p className="text-lg font-sans text-foreground leading-relaxed max-w-3xl mb-6">
            Making supercomputer simulations obsolete. Bayronik uses AI to predict baryonic effects on cosmic structure turning 3 months of compute time into 50 milliseconds.
          </p>

          {/* Backed by badge */}
          <div className="inline-flex items-center">
            <div className="flex items-center border-l-2 border-foreground/20 pl-4">
              <span className="text-[15px] font-mono text-muted-foreground tracking-[0.1em] uppercase">Backed by</span>
              <Image
                src="/merge.png"
                alt="Merge"
                width={140}
                height={45}
                className="h-11 w-auto"
              />
            </div>
          </div>
        </div>

        {/* Results visualization - lazy loaded */}
        <div className="mb-16">
          <div className="text-xs font-mono text-muted-foreground mb-3">Simulation Output</div>
          
          <div className="relative aspect-square md:aspect-[16/10] overflow-hidden bg-foreground/5">
            <Image
              src="/results.jpg"
              alt="Bayronik simulation results - 2D mass density map showing baryonic field distribution"
              fill
              className="object-cover"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDAwUBAAAAAAAAAAAAAQIDAAQRBRIhBhMiMUFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEQA/wCMdO6kudNsLi1htbRopgA+9WJXByOOeOKKKNUAYFhLMrYn/9k="
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
            />
          </div>
          
          <div className="text-xs font-mono text-muted-foreground mt-2">2D Mass Density Map (256×256)</div>
        </div>

        {/* Problem & Solution */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* The Problem */}
          <div>
            <h2 className="text-lg font-mono font-bold text-foreground mb-4">The Problem</h2>
            <p className="text-base font-sans text-muted-foreground leading-relaxed mb-4">
              Dark matter research is broken. Baryonic effects—supernovae and black hole feedback—corrupt our cosmic measurements.
            </p>
            <p className="text-base font-sans text-muted-foreground leading-relaxed">
              Running the simulations to fix this takes <span className="font-semibold text-foreground">months on a supercomputer</span>.
            </p>
          </div>

          {/* The Solution */}
          <div>
            <h2 className="text-lg font-mono font-bold text-foreground mb-4">Our Approach</h2>
            <p className="text-base font-sans text-muted-foreground leading-relaxed mb-4">
              We trained a deep neural network on 1,000+ hydrodynamic simulations from the CAMELS suite.
            </p>
            <p className="text-base font-sans text-muted-foreground leading-relaxed">
              Now it runs in <span className="font-semibold text-foreground">50ms on a laptop</span>. Same physics, 1,000,000× faster.
            </p>
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="mb-16">
          <h2 className="text-lg font-mono font-bold text-foreground mb-8">The Stack</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-sm font-mono font-bold text-muted-foreground w-8">01</span>
              <div>
                <div className="text-base font-mono font-semibold text-foreground mb-1">bayronik-core <span className="text-muted-foreground font-normal">/ Rust</span></div>
                <p className="text-sm font-sans text-muted-foreground">N-body physics engine with FFT Poisson solver. Runs gravity-only simulations from cosmological initial conditions.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-sm font-mono font-bold text-muted-foreground w-8">02</span>
              <div>
                <div className="text-base font-mono font-semibold text-foreground mb-1">bayronik-model <span className="text-muted-foreground font-normal">/ PyTorch</span></div>
                <p className="text-sm font-sans text-muted-foreground">Deep U-Net trained on CAMELS hydrodynamic simulations. Predicts baryonic corrections as residual fields.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-sm font-mono font-bold text-muted-foreground w-8">03</span>
              <div>
                <div className="text-base font-mono font-semibold text-foreground mb-1">bayronik-infer <span className="text-muted-foreground font-normal">/ Rust</span></div>
                <p className="text-sm font-sans text-muted-foreground">User-facing CLI with interactive TUI. Renders 256² density fields in terminal using Braille characters.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Innovations */}
        <div className="mb-16">
          <h2 className="text-lg font-mono font-bold text-foreground mb-6">What Makes It Work</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-base font-mono font-semibold text-foreground mb-2">Residual Learning</h3>
              <p className="text-sm font-sans text-muted-foreground">
                Predicts the delta between gravity-only and hydro simulations—preventing hallucinations while respecting dark matter structure.
              </p>
            </div>
            <div>
              <h3 className="text-base font-mono font-semibold text-foreground mb-2">Cosmological IC</h3>
              <p className="text-sm font-sans text-muted-foreground">
                Zel&apos;dovich initialization from power spectrum P(k) ensures physically accurate initial conditions.
              </p>
            </div>
            <div>
              <h3 className="text-base font-mono font-semibold text-foreground mb-2">Memory-Mapped I/O</h3>
              <p className="text-sm font-sans text-muted-foreground">
                Streams terabyte-scale simulation data on a single T4 GPU. Trained on free-tier Colab.
              </p>
            </div>
            <div>
              <h3 className="text-base font-mono font-semibold text-foreground mb-2">Terminal Viz</h3>
              <p className="text-sm font-sans text-muted-foreground">
                Braille-character renderer displays 256² density maps directly in the CLI. No GUI required.
              </p>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="py-8">
          <div className="text-sm font-mono text-muted-foreground mb-3">PROJECT STATUS</div>
          <div className="text-lg font-mono font-bold text-foreground mb-6">IN ACTIVE DEVELOPMENT</div>
        </div>
      </div>

      {/* Centered back navigation */}
      <div className="relative z-20 flex justify-center py-8">
        <Link 
          href="/"
          className="text-xs font-mono text-foreground hover:text-muted-foreground transition-colors"
        >
          ← BACK TO HOME
        </Link>
      </div>

      {/* Bottom annotations */}
      <div className="relative z-20 px-8 py-8">
        <div className="flex justify-between text-[9px] font-mono text-muted-foreground/60">
          <div>
            <div>DRAWING NO: CSX-BYR-001</div>
            <div>DATE: 2025.12.31</div>
          </div>
          <div className="text-right">
            <div>REF: CAMELS-LH</div>
            <div>VERSION: 0.1.0</div>
          </div>
        </div>
      </div>
    </main>
  );
}
