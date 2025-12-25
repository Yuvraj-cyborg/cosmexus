"use client";

import React, { useEffect, useRef } from "react";

interface SpacecraftFrontViewProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function SpacecraftFrontView({ className = "", width = 300, height = 250 }: SpacecraftFrontViewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, width, height);

    const lineColor = "#1a1a1a";
    const lightLineColor = "#666";
    const labelColor = "#333";
    
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 0.8;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    // Front view center
    const frontViewX = width / 2;
    const frontViewY = 50;

    // Fuselage cross-section
    ctx.beginPath();
    ctx.ellipse(frontViewX, frontViewY + 60, 25, 30, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Cockpit canopy
    ctx.beginPath();
    ctx.ellipse(frontViewX, frontViewY + 35, 12, 15, 0, Math.PI, Math.PI * 2);
    ctx.stroke();

    // Cockpit frame line
    ctx.lineWidth = 0.4;
    ctx.beginPath();
    ctx.moveTo(frontViewX, frontViewY + 20);
    ctx.lineTo(frontViewX, frontViewY + 50);
    ctx.stroke();

    // Left wing
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.moveTo(frontViewX - 25, frontViewY + 70);
    ctx.lineTo(frontViewX - 100, frontViewY + 100);
    ctx.lineTo(frontViewX - 105, frontViewY + 105);
    ctx.lineTo(frontViewX - 95, frontViewY + 108);
    ctx.lineTo(frontViewX - 25, frontViewY + 78);
    ctx.stroke();

    // Right wing
    ctx.beginPath();
    ctx.moveTo(frontViewX + 25, frontViewY + 70);
    ctx.lineTo(frontViewX + 100, frontViewY + 100);
    ctx.lineTo(frontViewX + 105, frontViewY + 105);
    ctx.lineTo(frontViewX + 95, frontViewY + 108);
    ctx.lineTo(frontViewX + 25, frontViewY + 78);
    ctx.stroke();

    // Left vertical stabilizer
    ctx.beginPath();
    ctx.moveTo(frontViewX - 20, frontViewY + 40);
    ctx.lineTo(frontViewX - 35, frontViewY + 10);
    ctx.lineTo(frontViewX - 30, frontViewY + 5);
    ctx.lineTo(frontViewX - 18, frontViewY + 35);
    ctx.stroke();

    // Right vertical stabilizer
    ctx.beginPath();
    ctx.moveTo(frontViewX + 20, frontViewY + 40);
    ctx.lineTo(frontViewX + 35, frontViewY + 10);
    ctx.lineTo(frontViewX + 30, frontViewY + 5);
    ctx.lineTo(frontViewX + 18, frontViewY + 35);
    ctx.stroke();

    // Left engine
    ctx.beginPath();
    ctx.ellipse(frontViewX - 20, frontViewY + 100, 12, 15, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(frontViewX - 20, frontViewY + 100, 8, 0, Math.PI * 2);
    ctx.stroke();

    // Right engine
    ctx.beginPath();
    ctx.ellipse(frontViewX + 20, frontViewY + 100, 12, 15, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(frontViewX + 20, frontViewY + 100, 8, 0, Math.PI * 2);
    ctx.stroke();

    // Intake ducts
    ctx.lineWidth = 0.5;
    ctx.beginPath();
    ctx.moveTo(frontViewX - 25, frontViewY + 55);
    ctx.lineTo(frontViewX - 40, frontViewY + 65);
    ctx.lineTo(frontViewX - 38, frontViewY + 85);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(frontViewX + 25, frontViewY + 55);
    ctx.lineTo(frontViewX + 40, frontViewY + 65);
    ctx.lineTo(frontViewX + 38, frontViewY + 85);
    ctx.stroke();

    // Labels
    ctx.fillStyle = labelColor;
    ctx.font = "8px 'Geist Mono', monospace";
    ctx.strokeStyle = lightLineColor;
    ctx.lineWidth = 0.3;

    // Twin tail label
    ctx.beginPath();
    ctx.moveTo(frontViewX - 32, frontViewY + 8);
    ctx.lineTo(frontViewX - 60, frontViewY - 10);
    ctx.stroke();
    ctx.fillText("Twin Stabilizers", frontViewX - 100, frontViewY - 12);

    // Wing label
    ctx.beginPath();
    ctx.moveTo(frontViewX + 95, frontViewY + 102);
    ctx.lineTo(frontViewX + 115, frontViewY + 90);
    ctx.stroke();
    ctx.fillText("Wing", frontViewX + 118, frontViewY + 93);

    // Engine label
    ctx.beginPath();
    ctx.moveTo(frontViewX + 32, frontViewY + 100);
    ctx.lineTo(frontViewX + 55, frontViewY + 130);
    ctx.stroke();
    ctx.fillText("Ion Thruster", frontViewX + 58, frontViewY + 133);

    // Dimension lines
    ctx.strokeStyle = "#999";
    ctx.lineWidth = 0.3;
    ctx.fillStyle = "#666";
    ctx.font = "7px 'Geist Mono', monospace";

    // Wingspan
    ctx.beginPath();
    ctx.moveTo(frontViewX - 105, frontViewY + 130);
    ctx.lineTo(frontViewX + 105, frontViewY + 130);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(frontViewX - 105, frontViewY + 125);
    ctx.lineTo(frontViewX - 105, frontViewY + 135);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(frontViewX + 105, frontViewY + 125);
    ctx.lineTo(frontViewX + 105, frontViewY + 135);
    ctx.stroke();
    ctx.textAlign = "center";
    ctx.fillText("32.6m", frontViewX, frontViewY + 145);

    // Height
    ctx.beginPath();
    ctx.moveTo(frontViewX - 120, frontViewY + 5);
    ctx.lineTo(frontViewX - 120, frontViewY + 115);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(frontViewX - 125, frontViewY + 5);
    ctx.lineTo(frontViewX - 115, frontViewY + 5);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(frontViewX - 125, frontViewY + 115);
    ctx.lineTo(frontViewX - 115, frontViewY + 115);
    ctx.stroke();
    
    ctx.save();
    ctx.translate(frontViewX - 130, frontViewY + 70);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText("12.8m", 0, 0);
    ctx.restore();

    // Front view label
    ctx.fillStyle = labelColor;
    ctx.font = "11px 'Geist Mono', monospace";
    ctx.textAlign = "center";
    ctx.fillText("COSMORAFT", frontViewX, height - 25);
    ctx.font = "8px 'Geist Mono', monospace";
    ctx.fillStyle = lightLineColor;
    ctx.fillText("Front View", frontViewX, height - 10);
    ctx.textAlign = "left";

  }, [width, height]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={className}
      style={{ width, height }}
    />
  );
}
