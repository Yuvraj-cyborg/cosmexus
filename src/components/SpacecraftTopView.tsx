"use client";

import React, { useEffect, useRef } from "react";

interface SpacecraftTopViewProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function SpacecraftTopView({ className = "", width = 500, height = 600 }: SpacecraftTopViewProps) {
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
    ctx.font = "9px 'Geist Mono', monospace";

    // Center the top view
    const topViewX = width / 2;
    const topViewY = 60;
    
    // Fuselage - top view
    ctx.beginPath();
    ctx.moveTo(topViewX, topViewY);
    ctx.quadraticCurveTo(topViewX - 8, topViewY + 30, topViewX - 12, topViewY + 80);
    ctx.lineTo(topViewX - 15, topViewY + 150);
    ctx.lineTo(topViewX - 18, topViewY + 250);
    ctx.lineTo(topViewX - 22, topViewY + 320);
    ctx.lineTo(topViewX - 35, topViewY + 380);
    ctx.lineTo(topViewX - 40, topViewY + 420);
    ctx.lineTo(topViewX - 38, topViewY + 450);
    ctx.lineTo(topViewX - 25, topViewY + 460);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(topViewX, topViewY);
    ctx.quadraticCurveTo(topViewX + 8, topViewY + 30, topViewX + 12, topViewY + 80);
    ctx.lineTo(topViewX + 15, topViewY + 150);
    ctx.lineTo(topViewX + 18, topViewY + 250);
    ctx.lineTo(topViewX + 22, topViewY + 320);
    ctx.lineTo(topViewX + 35, topViewY + 380);
    ctx.lineTo(topViewX + 40, topViewY + 420);
    ctx.lineTo(topViewX + 38, topViewY + 450);
    ctx.lineTo(topViewX + 25, topViewY + 460);
    ctx.stroke();

    // Cockpit canopy
    ctx.beginPath();
    ctx.moveTo(topViewX - 6, topViewY + 50);
    ctx.quadraticCurveTo(topViewX, topViewY + 45, topViewX + 6, topViewY + 50);
    ctx.lineTo(topViewX + 5, topViewY + 100);
    ctx.quadraticCurveTo(topViewX, topViewY + 105, topViewX - 5, topViewY + 100);
    ctx.closePath();
    ctx.stroke();

    // Left wing
    ctx.beginPath();
    ctx.moveTo(topViewX - 15, topViewY + 180);
    ctx.lineTo(topViewX - 120, topViewY + 280);
    ctx.lineTo(topViewX - 130, topViewY + 300);
    ctx.lineTo(topViewX - 125, topViewY + 320);
    ctx.lineTo(topViewX - 22, topViewY + 320);
    ctx.stroke();
    
    ctx.lineWidth = 0.4;
    ctx.beginPath();
    ctx.moveTo(topViewX - 20, topViewY + 200);
    ctx.lineTo(topViewX - 100, topViewY + 290);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(topViewX - 18, topViewY + 240);
    ctx.lineTo(topViewX - 80, topViewY + 300);
    ctx.stroke();

    // Right wing
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.moveTo(topViewX + 15, topViewY + 180);
    ctx.lineTo(topViewX + 120, topViewY + 280);
    ctx.lineTo(topViewX + 130, topViewY + 300);
    ctx.lineTo(topViewX + 125, topViewY + 320);
    ctx.lineTo(topViewX + 22, topViewY + 320);
    ctx.stroke();

    ctx.lineWidth = 0.4;
    ctx.beginPath();
    ctx.moveTo(topViewX + 20, topViewY + 200);
    ctx.lineTo(topViewX + 100, topViewY + 290);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(topViewX + 18, topViewY + 240);
    ctx.lineTo(topViewX + 80, topViewY + 300);
    ctx.stroke();

    // Horizontal stabilizers
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.moveTo(topViewX - 35, topViewY + 400);
    ctx.lineTo(topViewX - 70, topViewY + 430);
    ctx.lineTo(topViewX - 65, topViewY + 450);
    ctx.lineTo(topViewX - 38, topViewY + 440);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(topViewX + 35, topViewY + 400);
    ctx.lineTo(topViewX + 70, topViewY + 430);
    ctx.lineTo(topViewX + 65, topViewY + 450);
    ctx.lineTo(topViewX + 38, topViewY + 440);
    ctx.stroke();

    // Vertical stabilizers
    ctx.lineWidth = 0.6;
    ctx.beginPath();
    ctx.moveTo(topViewX - 28, topViewY + 380);
    ctx.lineTo(topViewX - 32, topViewY + 440);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(topViewX + 28, topViewY + 380);
    ctx.lineTo(topViewX + 32, topViewY + 440);
    ctx.stroke();

    // Engine nozzles
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.arc(topViewX - 30, topViewY + 455, 8, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(topViewX + 30, topViewY + 455, 8, 0, Math.PI * 2);
    ctx.stroke();

    // Air intakes
    ctx.beginPath();
    ctx.moveTo(topViewX - 18, topViewY + 150);
    ctx.lineTo(topViewX - 30, topViewY + 160);
    ctx.lineTo(topViewX - 32, topViewY + 200);
    ctx.lineTo(topViewX - 20, topViewY + 210);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(topViewX + 18, topViewY + 150);
    ctx.lineTo(topViewX + 30, topViewY + 160);
    ctx.lineTo(topViewX + 32, topViewY + 200);
    ctx.lineTo(topViewX + 20, topViewY + 210);
    ctx.stroke();

    // Labels
    ctx.fillStyle = labelColor;
    ctx.font = "9px 'Geist Mono', monospace";
    ctx.lineWidth = 0.3;
    ctx.strokeStyle = lightLineColor;

    // A - Radar
    ctx.beginPath();
    ctx.moveTo(topViewX, topViewY + 20);
    ctx.lineTo(topViewX - 60, topViewY - 20);
    ctx.stroke();
    ctx.fillText("A", topViewX - 65, topViewY - 22);
    ctx.font = "7px 'Geist Mono', monospace";
    ctx.fillText("Radar Dome", topViewX - 60, topViewY - 10);

    // B - Cockpit
    ctx.font = "9px 'Geist Mono', monospace";
    ctx.beginPath();
    ctx.moveTo(topViewX + 10, topViewY + 75);
    ctx.lineTo(topViewX + 70, topViewY + 50);
    ctx.stroke();
    ctx.fillText("B", topViewX + 75, topViewY + 48);
    ctx.font = "7px 'Geist Mono', monospace";
    ctx.fillText("Cockpit", topViewX + 70, topViewY + 60);

    // C - Air Intake
    ctx.font = "9px 'Geist Mono', monospace";
    ctx.beginPath();
    ctx.moveTo(topViewX - 30, topViewY + 180);
    ctx.lineTo(topViewX - 80, topViewY + 140);
    ctx.stroke();
    ctx.fillText("C", topViewX - 85, topViewY + 138);
    ctx.font = "7px 'Geist Mono', monospace";
    ctx.fillText("Air Intake", topViewX - 80, topViewY + 150);

    // D - Main Wing
    ctx.font = "9px 'Geist Mono', monospace";
    ctx.beginPath();
    ctx.moveTo(topViewX - 80, topViewY + 270);
    ctx.lineTo(topViewX - 140, topViewY + 240);
    ctx.stroke();
    ctx.fillText("D", topViewX - 145, topViewY + 238);
    ctx.font = "7px 'Geist Mono', monospace";
    ctx.fillText("Delta Wing", topViewX - 145, topViewY + 250);

    // E - Vertical Stabilizer
    ctx.font = "9px 'Geist Mono', monospace";
    ctx.beginPath();
    ctx.moveTo(topViewX + 30, topViewY + 410);
    ctx.lineTo(topViewX + 90, topViewY + 390);
    ctx.stroke();
    ctx.fillText("E", topViewX + 95, topViewY + 388);
    ctx.font = "7px 'Geist Mono', monospace";
    ctx.fillText("Twin Tail", topViewX + 90, topViewY + 400);

    // F - Engine
    ctx.font = "9px 'Geist Mono', monospace";
    ctx.beginPath();
    ctx.moveTo(topViewX + 30, topViewY + 455);
    ctx.lineTo(topViewX + 80, topViewY + 480);
    ctx.stroke();
    ctx.fillText("F", topViewX + 85, topViewY + 478);
    ctx.font = "7px 'Geist Mono', monospace";
    ctx.fillText("Ion Thrusters", topViewX + 80, topViewY + 490);

    // Dimension lines
    ctx.strokeStyle = "#999";
    ctx.lineWidth = 0.3;
    ctx.fillStyle = "#666";
    ctx.font = "7px 'Geist Mono', monospace";

    // Length
    ctx.beginPath();
    ctx.moveTo(topViewX - 160, topViewY);
    ctx.lineTo(topViewX - 160, topViewY + 460);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(topViewX - 165, topViewY);
    ctx.lineTo(topViewX - 155, topViewY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(topViewX - 165, topViewY + 460);
    ctx.lineTo(topViewX - 155, topViewY + 460);
    ctx.stroke();
    
    ctx.save();
    ctx.translate(topViewX - 170, topViewY + 230);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText("L = 48.2m", 0, 0);
    ctx.restore();

    // Wingspan
    ctx.beginPath();
    ctx.moveTo(topViewX - 130, topViewY + 340);
    ctx.lineTo(topViewX + 130, topViewY + 340);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(topViewX - 130, topViewY + 335);
    ctx.lineTo(topViewX - 130, topViewY + 345);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(topViewX + 130, topViewY + 335);
    ctx.lineTo(topViewX + 130, topViewY + 345);
    ctx.stroke();
    ctx.fillText("W = 32.6m", topViewX - 20, topViewY + 355);

    // COSMORAFT label at bottom center
    ctx.fillStyle = labelColor;
    ctx.font = "11px 'Geist Mono', monospace";
    ctx.textAlign = "center";
    ctx.fillText("COSMORAFT", topViewX, height - 30);
    ctx.font = "8px 'Geist Mono', monospace";
    ctx.fillStyle = lightLineColor;
    ctx.fillText("Orbital Transport Vessel", topViewX, height - 15);
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
