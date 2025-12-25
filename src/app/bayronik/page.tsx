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
      <div className="relative z-10 px-6 md:px-12 py-12 max-w-6xl mx-auto">
        
        {/* Title block */}
        <div className="border border-border p-6 md:p-8 mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-border" />
            <div className="text-[10px] font-mono text-muted-foreground">HIGH-FIDELITY BARYONIC FIELD EMULATOR</div>
            <div className="h-px flex-1 bg-border" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-mono font-bold text-foreground tracking-tight text-center mb-4">
            BAYRONIK
          </h1>
          
          <p className="text-sm font-mono text-muted-foreground text-center max-w-2xl mx-auto">
            An AI-powered computational framework that predicts baryonic corrections in milliseconds, 
            replacing months of supercomputer time with instant inference on standard hardware.
          </p>
        </div>

        {/* Results visualization - lazy loaded */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-4">
            <div className="text-[10px] font-mono text-muted-foreground">FIG. 01 — SIMULATION OUTPUT</div>
            <div className="text-[10px] font-mono text-muted-foreground">2D MASS DENSITY MAP</div>
          </div>
          
          <div className="border border-border p-2 bg-background">
            <div className="relative aspect-square md:aspect-[16/10] overflow-hidden">
              <Image
                src="/results.jpg"
                alt="Bayronik simulation results - 2D mass density map showing baryonic field distribution"
                fill
                className="object-cover"
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDAwUBAAAAAAAAAAAAAQIDAAQRBRIhBhMiMUFR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEQA/wCMdO6sudNsLi1htbRopgA+9WJXByOOeOKKKNUAYFhLMrYn/9k="
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
              />
              {/* Corner markers */}
              <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-foreground/40" />
              <div className="absolute top-2 right-2 w-4 h-4 border-r border-t border-foreground/40" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-l border-b border-foreground/40" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-foreground/40" />
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-2">
            <div className="text-[9px] font-mono text-muted-foreground/60">SCALE: 256×256 px</div>
            <div className="text-[9px] font-mono text-muted-foreground/60">FORMAT: MASS DENSITY Σ</div>
          </div>
        </div>

        {/* Problem & Solution Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* The Problem */}
          <div className="border border-border p-6">
            <div className="text-xs font-mono text-muted-foreground mb-3">❯ THE PROBLEM</div>
            <h3 className="text-lg font-mono font-bold text-foreground mb-3">The Baryonic Bias</h3>
            <p className="text-sm font-mono text-muted-foreground leading-relaxed mb-4">
              Precision cosmology relies on weak gravitational lensing. But &quot;baryonic physics&quot;—supernova 
              explosions and AGN feedback—violently redistribute matter, biasing our measurements of 
              Dark Matter density (Ω<sub>m</sub>) and cosmic clumpiness (σ<sub>8</sub>).
            </p>
            <div className="border-t border-border pt-4">
              <div className="text-[10px] font-mono text-muted-foreground mb-2">CURRENT SOLUTION</div>
              <p className="text-xs font-mono text-foreground">
                Full hydrodynamic simulations → Months on supercomputers
              </p>
            </div>
          </div>

          {/* The Solution */}
          <div className="border border-border p-6">
            <div className="text-xs font-mono text-muted-foreground mb-3">❯ THE SOLUTION</div>
            <h3 className="text-lg font-mono font-bold text-foreground mb-3">AI-Powered Emulation</h3>
            <p className="text-sm font-mono text-muted-foreground leading-relaxed mb-4">
              Bayronik learns the mapping function F that transforms cheap gravity-only simulations 
              into hydrodynamic fidelity:
            </p>
            <div className="bg-foreground/5 border border-border p-3 font-mono text-sm text-center mb-4">
              Hydro Map ≈ Gravity-Only Map + F(Gravity-Only Map)
            </div>
            <div className="border-t border-border pt-4">
              <div className="text-[10px] font-mono text-muted-foreground mb-2">BAYRONIK SOLUTION</div>
              <p className="text-xs font-mono text-foreground">
                AI inference → Milliseconds on a laptop
              </p>
            </div>
          </div>
        </div>

        {/* Technical Architecture */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-xl font-mono font-bold text-foreground">TECHNICAL ARCHITECTURE</h2>
            <div className="h-px flex-1 bg-border" />
          </div>
          
          <div className="text-xs font-mono text-muted-foreground text-center mb-8">
            The &quot;Rust-Sandwich&quot; — Hybrid architecture balancing training flexibility with inference performance
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Physics Engine */}
            <div className="border border-border p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 border border-foreground/30 flex items-center justify-center font-mono text-xs">A</div>
                <div>
                  <div className="text-sm font-mono font-bold text-foreground">bayronik-core</div>
                  <div className="text-[10px] font-mono text-muted-foreground">RUST</div>
                </div>
              </div>
              <div className="text-xs font-mono text-muted-foreground mb-3">PHYSICS ENGINE</div>
              <ul className="space-y-2 text-xs font-mono text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">→</span>
                  <span>Particle-Mesh (PM) N-body simulator</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">→</span>
                  <span>Zel&apos;dovich Approximation init</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">→</span>
                  <span>KDK leapfrog integrator</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">→</span>
                  <span>FFT-based Poisson solver</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">→</span>
                  <span>Cloud-in-Cell (CIC) projection</span>
                </li>
              </ul>
            </div>

            {/* AI Brain */}
            <div className="border border-border p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 border border-foreground/30 flex items-center justify-center font-mono text-xs">B</div>
                <div>
                  <div className="text-sm font-mono font-bold text-foreground">bayronik-model</div>
                  <div className="text-[10px] font-mono text-muted-foreground">PYTHON / PYTORCH</div>
                </div>
              </div>
              <div className="text-xs font-mono text-muted-foreground mb-3">AI BRAIN</div>
              <ul className="space-y-2 text-xs font-mono text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">→</span>
                  <span>Deep U-Net (Encoder-Decoder)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">→</span>
                  <span>Residual learning strategy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">→</span>
                  <span>CAMELS LH training suite</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">→</span>
                  <span>Memory-mapped data pipeline</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">→</span>
                  <span>T4 GPU cloud training</span>
                </li>
              </ul>
            </div>

            {/* Inference Engine */}
            <div className="border border-border p-5">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 border border-foreground/30 flex items-center justify-center font-mono text-xs">C</div>
                <div>
                  <div className="text-sm font-mono font-bold text-foreground">bayronik-infer</div>
                  <div className="text-[10px] font-mono text-muted-foreground">RUST</div>
                </div>
              </div>
              <div className="text-xs font-mono text-muted-foreground mb-3">INFERENCE ENGINE</div>
              <ul className="space-y-2 text-xs font-mono text-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">→</span>
                  <span>tch-rs LibTorch bindings</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">→</span>
                  <span>TorchScript model loading</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">→</span>
                  <span>Interactive TUI interface</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">→</span>
                  <span>Braille heatmap renderer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-muted-foreground">→</span>
                  <span>Closed-loop generation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-xl font-mono font-bold text-foreground">SPECIFICATIONS</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="border border-border p-4 text-center">
              <div className="text-2xl font-mono font-bold text-foreground mb-1">~ms</div>
              <div className="text-[10px] font-mono text-muted-foreground">INFERENCE TIME</div>
            </div>
            <div className="border border-border p-4 text-center">
              <div className="text-2xl font-mono font-bold text-foreground mb-1">1000+</div>
              <div className="text-[10px] font-mono text-muted-foreground">TRAINING SIMS</div>
            </div>
            <div className="border border-border p-4 text-center">
              <div className="text-2xl font-mono font-bold text-foreground mb-1">256²</div>
              <div className="text-[10px] font-mono text-muted-foreground">OUTPUT RESOLUTION</div>
            </div>
            <div className="border border-border p-4 text-center">
              <div className="text-2xl font-mono font-bold text-foreground mb-1">TB+</div>
              <div className="text-[10px] font-mono text-muted-foreground">DATASET SIZE</div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-border" />
            <h2 className="text-xl font-mono font-bold text-foreground">KEY THEORIES</h2>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-2 border-foreground/20 pl-4">
              <div className="text-xs font-mono text-muted-foreground mb-1">01</div>
              <div className="text-sm font-mono font-bold text-foreground mb-2">Residual Learning</div>
              <p className="text-xs font-mono text-muted-foreground">
                The model predicts the residual difference between gravity-only and hydro maps, 
                acting as a &quot;physics leash&quot; that prevents hallucinations and respects underlying dark matter structure.
              </p>
            </div>
            <div className="border-l-2 border-foreground/20 pl-4">
              <div className="text-xs font-mono text-muted-foreground mb-1">02</div>
              <div className="text-sm font-mono font-bold text-foreground mb-2">Zel&apos;dovich Initialization</div>
              <p className="text-xs font-mono text-muted-foreground">
                Instead of random noise, generates displacement vectors via Inverse FFT from cosmological 
                Power Spectrum P(k), ensuring physically accurate initial clustering and velocity flows.
              </p>
            </div>
            <div className="border-l-2 border-foreground/20 pl-4">
              <div className="text-xs font-mono text-muted-foreground mb-1">03</div>
              <div className="text-sm font-mono font-bold text-foreground mb-2">Memory-Mapped Training</div>
              <p className="text-xs font-mono text-muted-foreground">
                Custom cloud-to-cloud ETL pipeline (Flatiron → Colab → Drive) with numpy.memmap 
                to stream multi-terabyte datasets on a single T4 GPU.
              </p>
            </div>
            <div className="border-l-2 border-foreground/20 pl-4">
              <div className="text-xs font-mono text-muted-foreground mb-1">04</div>
              <div className="text-sm font-mono font-bold text-foreground mb-2">Braille Visualization</div>
              <p className="text-xs font-mono text-muted-foreground">
                Custom terminal renderer using Braille Unicode characters to display high-fidelity 
                256² density fields directly in the CLI with minimal overhead.
              </p>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="border border-border p-6 text-center">
          <div className="text-xs font-mono text-muted-foreground mb-2">PROJECT STATUS</div>
          <div className="text-lg font-mono font-bold text-foreground mb-4">IN ACTIVE DEVELOPMENT</div>
          <div className="flex justify-center gap-4">
            <Link 
              href="/"
              className="px-5 py-2 border border-foreground/30 rounded text-xs font-mono text-foreground hover:border-foreground/60 transition-colors"
            >
              ← BACK TO HOME
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom annotations */}
      <div className="relative z-20 px-8 py-6">
        <div className="flex justify-between text-[9px] font-mono text-muted-foreground/60">
          <div>
            <div>DRAWING NO: CSX-BYR-001</div>
            <div>DATE: 2025.12.25</div>
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
