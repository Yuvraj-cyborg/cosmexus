"use client";

import React, { useEffect, useRef } from "react";

interface SpacecraftSideViewProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function SpacecraftSideView({ className = "", width = 500, height = 250 }: SpacecraftSideViewProps) {
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

    // Side view center position
    const sideViewX = 50;
    const sideViewY = 80;

    // Fuselage - side view
    ctx.beginPath();
    ctx.moveTo(sideViewX, sideViewY + 30);
    ctx.quadraticCurveTo(sideViewX + 20, sideViewY + 25, sideViewX + 50, sideViewY + 22);
    ctx.lineTo(sideViewX + 100, sideViewY + 18);
    ctx.lineTo(sideViewX + 200, sideViewY + 15);
    ctx.lineTo(sideViewX + 280, sideViewY + 12);
    ctx.lineTo(sideViewX + 340, sideViewY + 10);
    ctx.lineTo(sideViewX + 380, sideViewY + 8);
    ctx.stroke();

    // Bottom fuselage
    ctx.beginPath();
    ctx.moveTo(sideViewX, sideViewY + 35);
    ctx.quadraticCurveTo(sideViewX + 20, sideViewY + 40, sideViewX + 50, sideViewY + 45);
    ctx.lineTo(sideViewX + 100, sideViewY + 50);
    ctx.lineTo(sideViewX + 200, sideViewY + 55);
    ctx.lineTo(sideViewX + 280, sideViewY + 58);
    ctx.lineTo(sideViewX + 340, sideViewY + 60);
    ctx.lineTo(sideViewX + 380, sideViewY + 62);
    ctx.stroke();

    // Nose cone
    ctx.beginPath();
    ctx.moveTo(sideViewX, sideViewY + 30);
    ctx.quadraticCurveTo(sideViewX - 5, sideViewY + 32, sideViewX, sideViewY + 35);
    ctx.stroke();

    // Cockpit canopy
    ctx.beginPath();
    ctx.moveTo(sideViewX + 40, sideViewY + 22);
    ctx.quadraticCurveTo(sideViewX + 50, sideViewY + 5, sideViewX + 70, sideViewY);
    ctx.quadraticCurveTo(sideViewX + 85, sideViewY - 2, sideViewX + 100, sideViewY + 18);
    ctx.stroke();

    // Vertical stabilizer
    ctx.beginPath();
    ctx.moveTo(sideViewX + 300, sideViewY + 10);
    ctx.lineTo(sideViewX + 310, sideViewY - 40);
    ctx.lineTo(sideViewX + 350, sideViewY - 50);
    ctx.lineTo(sideViewX + 380, sideViewY - 45);
    ctx.lineTo(sideViewX + 385, sideViewY + 8);
    ctx.stroke();

    // Wing profile
    ctx.lineWidth = 0.6;
    ctx.beginPath();
    ctx.moveTo(sideViewX + 150, sideViewY + 50);
    ctx.lineTo(sideViewX + 170, sideViewY + 60);
    ctx.lineTo(sideViewX + 250, sideViewY + 58);
    ctx.stroke();

    // Horizontal stabilizer
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.moveTo(sideViewX + 330, sideViewY + 60);
    ctx.lineTo(sideViewX + 360, sideViewY + 70);
    ctx.lineTo(sideViewX + 390, sideViewY + 65);
    ctx.stroke();

    // Engine nozzle
    ctx.beginPath();
    ctx.moveTo(sideViewX + 380, sideViewY + 8);
    ctx.lineTo(sideViewX + 400, sideViewY + 5);
    ctx.lineTo(sideViewX + 400, sideViewY + 65);
    ctx.lineTo(sideViewX + 380, sideViewY + 62);
    ctx.stroke();

    // Engine internal lines
    ctx.lineWidth = 0.4;
    ctx.beginPath();
    ctx.moveTo(sideViewX + 385, sideViewY + 15);
    ctx.lineTo(sideViewX + 395, sideViewY + 15);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(sideViewX + 385, sideViewY + 35);
    ctx.lineTo(sideViewX + 395, sideViewY + 35);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(sideViewX + 385, sideViewY + 55);
    ctx.lineTo(sideViewX + 395, sideViewY + 55);
    ctx.stroke();

    // Air intake
    ctx.lineWidth = 0.6;
    ctx.beginPath();
    ctx.moveTo(sideViewX + 110, sideViewY + 50);
    ctx.lineTo(sideViewX + 130, sideViewY + 70);
    ctx.lineTo(sideViewX + 160, sideViewY + 65);
    ctx.stroke();

    // Labels
    ctx.fillStyle = labelColor;
    ctx.font = "9px 'Geist Mono', monospace";
    ctx.strokeStyle = lightLineColor;
    ctx.lineWidth = 0.3;

    // Cockpit label
    ctx.beginPath();
    ctx.moveTo(sideViewX + 70, sideViewY - 5);
    ctx.lineTo(sideViewX + 70, sideViewY - 30);
    ctx.stroke();
    ctx.fillText("Pilot Station", sideViewX + 50, sideViewY - 35);

    // Stabilizer label
    ctx.beginPath();
    ctx.moveTo(sideViewX + 340, sideViewY - 48);
    ctx.lineTo(sideViewX + 340, sideViewY - 70);
    ctx.stroke();
    ctx.fillText("Vertical Fin", sideViewX + 320, sideViewY - 75);

    // Engine label
    ctx.beginPath();
    ctx.moveTo(sideViewX + 400, sideViewY + 35);
    ctx.lineTo(sideViewX + 430, sideViewY + 35);
    ctx.stroke();
    ctx.fillText("Exhaust", sideViewX + 435, sideViewY + 38);

    // Dimension lines
    ctx.strokeStyle = "#999";
    ctx.lineWidth = 0.3;
    ctx.fillStyle = "#666";
    ctx.font = "7px 'Geist Mono', monospace";

    // Length dimension
    ctx.beginPath();
    ctx.moveTo(sideViewX - 5, sideViewY + 100);
    ctx.lineTo(sideViewX + 400, sideViewY + 100);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(sideViewX - 5, sideViewY + 95);
    ctx.lineTo(sideViewX - 5, sideViewY + 105);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(sideViewX + 400, sideViewY + 95);
    ctx.lineTo(sideViewX + 400, sideViewY + 105);
    ctx.stroke();
    ctx.fillText("48.2m", sideViewX + 180, sideViewY + 115);

    // Height dimension
    ctx.beginPath();
    ctx.moveTo(sideViewX - 30, sideViewY - 50);
    ctx.lineTo(sideViewX - 30, sideViewY + 70);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(sideViewX - 35, sideViewY - 50);
    ctx.lineTo(sideViewX - 25, sideViewY - 50);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(sideViewX - 35, sideViewY + 70);
    ctx.lineTo(sideViewX - 25, sideViewY + 70);
    ctx.stroke();
    
    ctx.save();
    ctx.translate(sideViewX - 40, sideViewY + 20);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText("H = 12.8m", 0, 0);
    ctx.restore();

    // Side view label
    ctx.fillStyle = labelColor;
    ctx.font = "11px 'Geist Mono', monospace";
    ctx.textAlign = "center";
    ctx.fillText("COSMORAFT", width / 2, height - 25);
    ctx.font = "8px 'Geist Mono', monospace";
    ctx.fillStyle = lightLineColor;
    ctx.fillText("Profile View", width / 2, height - 10);
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
