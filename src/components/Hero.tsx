"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      const cssWidth = canvas.offsetWidth || canvas.clientWidth || 0;
      const cssHeight = canvas.offsetHeight || canvas.clientHeight || 0;

      const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 3));
      const desiredWidth = Math.floor(cssWidth * dpr);
      const desiredHeight = Math.floor(cssHeight * dpr);

      const MAX_DIM = 16384;
      const MAX_AREA = 16777216; // ~16MP safe area cap

      const scaleFactor = Math.min(
        1,
        MAX_DIM / Math.max(desiredWidth, 1),
        MAX_DIM / Math.max(desiredHeight, 1),
        Math.sqrt(MAX_AREA / Math.max(desiredWidth * desiredHeight, 1)),
      );

      const effectiveDpr = dpr * scaleFactor;
      const pixelWidth = Math.max(1, Math.floor(cssWidth * effectiveDpr));
      const pixelHeight = Math.max(1, Math.floor(cssHeight * effectiveDpr));

      canvas.width = pixelWidth;
      canvas.height = pixelHeight;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(effectiveDpr, effectiveDpr);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let rafId = 0;
    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      const centerX = width / 2;
      const centerY = height / 2;
      const anchorX = width * 0.72; // right-side focal point
      const anchorY = height * 0.5;
      const time = Date.now() * 0.0001;

      ctx.fillStyle = "rgb(6, 6, 10)";
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(100, 120, 140, 0.08)";
      ctx.lineWidth = 0.5;
      const gridSize = 60;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      ctx.fillStyle = "rgba(200, 200, 220, 0.6)";
      for (let i = 0; i < 40; i++) {
        const x =
          (centerX +
            Math.sin(i * 12.9898) * width * 0.6 +
            Math.cos(time * 0.1 + i) * 5) %
          width;
        const y =
          (centerY +
            Math.cos(i * 78.233) * height * 0.6 +
            Math.sin(time * 0.08 + i) * 5) %
          height;
        const size = Math.sin(i * 4.5) * 0.5 + 0.8;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Black-hole like radial gradient at the right focal point
      const g = ctx.createRadialGradient(
        anchorX,
        anchorY,
        0,
        anchorX,
        anchorY,
        260,
      );
      g.addColorStop(0, "rgba(0,0,0,1)");
      g.addColorStop(0.15, "rgba(10,10,18,0.95)");
      g.addColorStop(0.3, "rgba(203,133,92,0.18)");
      g.addColorStop(0.6, "rgba(20,20,30,0.05)");
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      // Accretion ring
      ctx.strokeStyle = "rgba(203,133,92,0.25)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(anchorX, anchorY, 140, 0, Math.PI * 2);
      ctx.stroke();

      const orbitAngle = time * 0.5;
      const orbitRadius = 140;
      const pointX = anchorX + Math.cos(orbitAngle) * orbitRadius;
      const pointY = anchorY + Math.sin(orbitAngle) * orbitRadius;

      ctx.fillStyle = "rgba(200, 140, 100, 0.8)";
      ctx.beginPath();
      ctx.arc(pointX, pointY, 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeStyle = "rgba(200, 140, 100, 0.2)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(anchorX, anchorY);
      ctx.lineTo(pointX, pointY);
      ctx.stroke();

      ctx.fillStyle = "rgba(200, 140, 100, 0.4)";
      ctx.beginPath();
      ctx.arc(anchorX, anchorY, 2, 0, Math.PI * 2);
      ctx.fill();

      const scanY = anchorY + Math.sin(time * 3) * 80;
      ctx.strokeStyle = "rgba(150, 180, 220, 0.1)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(anchorX - 150, scanY);
      ctx.lineTo(anchorX + 150, scanY);
      ctx.stroke();

      rafId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-start px-6 md:px-12 py-24 relative overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(135deg, rgba(6,6,10,1) 0%, rgba(15,15,25,1) 100%)",
        }}
      />

      <div className="pointer-events-none absolute top-6 right-6 z-20 text-[11px] font-mono tracking-widest text-muted-foreground">
        STATUS • EXPEDITION-02
      </div>

      <div className="w-full max-w-4xl relative z-10">
        <div className="space-y-6 text-left">
          <div className="text-xs font-mono text-muted-foreground tracking-widest">
            &gt; COSMEXUS
          </div>
          <h1 className="text-5xl md:text-7xl font-mono font-extrabold text-foreground leading-[1.05] tracking-tight max-w-2xl">
            BEYOND REALMS
          </h1>
          <p className="text-sm md:text-base text-muted-foreground font-mono max-w-xl leading-relaxed">
            Exploring multiverse through innovation and cosmic discovery.
          </p>
        </div>
      </div>
    </section>
  );
}
