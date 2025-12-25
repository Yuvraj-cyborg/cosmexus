"use client";

import React, { useEffect, useRef } from "react";

interface SpacecraftProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Spacecraft({ className = "", width = 900, height = 700 }: SpacecraftProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size with device pixel ratio
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Drawing style - technical blueprint
    const lineColor = "#1a1a1a";
    const lightLineColor = "#666";
    const labelColor = "#333";
    
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 0.8;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.font = "9px 'Geist Mono', monospace";

    // ========== TOP VIEW (Main view - center) ==========
    const topViewX = 300;
    const topViewY = 80;
    
    // Fuselage - top view (elongated body)
    ctx.beginPath();
    // Nose cone
    ctx.moveTo(topViewX, topViewY);
    ctx.quadraticCurveTo(topViewX - 8, topViewY + 30, topViewX - 12, topViewY + 80);
    // Left fuselage
    ctx.lineTo(topViewX - 15, topViewY + 150);
    ctx.lineTo(topViewX - 18, topViewY + 250);
    ctx.lineTo(topViewX - 22, topViewY + 320);
    // Engine section widens
    ctx.lineTo(topViewX - 35, topViewY + 380);
    ctx.lineTo(topViewX - 40, topViewY + 420);
    // Engine nozzle
    ctx.lineTo(topViewX - 38, topViewY + 450);
    ctx.lineTo(topViewX - 25, topViewY + 460);
    ctx.stroke();

    // Right side fuselage
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

    // Cockpit canopy outline
    ctx.beginPath();
    ctx.moveTo(topViewX - 6, topViewY + 50);
    ctx.quadraticCurveTo(topViewX, topViewY + 45, topViewX + 6, topViewY + 50);
    ctx.lineTo(topViewX + 5, topViewY + 100);
    ctx.quadraticCurveTo(topViewX, topViewY + 105, topViewX - 5, topViewY + 100);
    ctx.closePath();
    ctx.stroke();

    // Left wing - swept delta
    ctx.beginPath();
    ctx.moveTo(topViewX - 15, topViewY + 180);
    ctx.lineTo(topViewX - 120, topViewY + 280);
    ctx.lineTo(topViewX - 130, topViewY + 300);
    ctx.lineTo(topViewX - 125, topViewY + 320);
    ctx.lineTo(topViewX - 22, topViewY + 320);
    ctx.stroke();
    
    // Wing detail lines
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

    // Right wing details
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
    // Left
    ctx.beginPath();
    ctx.moveTo(topViewX - 35, topViewY + 400);
    ctx.lineTo(topViewX - 70, topViewY + 430);
    ctx.lineTo(topViewX - 65, topViewY + 450);
    ctx.lineTo(topViewX - 38, topViewY + 440);
    ctx.stroke();
    // Right
    ctx.beginPath();
    ctx.moveTo(topViewX + 35, topViewY + 400);
    ctx.lineTo(topViewX + 70, topViewY + 430);
    ctx.lineTo(topViewX + 65, topViewY + 450);
    ctx.lineTo(topViewX + 38, topViewY + 440);
    ctx.stroke();

    // Vertical stabilizer (twin tails) - shown as lines from top
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

    // ========== SIDE VIEW (Right side) ==========
    const sideViewX = 550;
    const sideViewY = 120;
    const sideScale = 0.7;
    
    ctx.lineWidth = 0.8;
    // Fuselage side
    ctx.beginPath();
    // Top line
    ctx.moveTo(sideViewX, sideViewY);
    ctx.lineTo(sideViewX + 50 * sideScale, sideViewY - 5);
    ctx.lineTo(sideViewX + 150 * sideScale, sideViewY + 5);
    ctx.lineTo(sideViewX + 280 * sideScale, sideViewY + 10);
    ctx.lineTo(sideViewX + 350 * sideScale, sideViewY + 15);
    ctx.lineTo(sideViewX + 400 * sideScale, sideViewY + 10);
    ctx.stroke();

    // Bottom line
    ctx.beginPath();
    ctx.moveTo(sideViewX, sideViewY + 5);
    ctx.lineTo(sideViewX + 80 * sideScale, sideViewY + 35);
    ctx.lineTo(sideViewX + 180 * sideScale, sideViewY + 40);
    ctx.lineTo(sideViewX + 280 * sideScale, sideViewY + 45);
    ctx.lineTo(sideViewX + 350 * sideScale, sideViewY + 40);
    ctx.lineTo(sideViewX + 400 * sideScale, sideViewY + 25);
    ctx.stroke();

    // Cockpit canopy side view
    ctx.beginPath();
    ctx.moveTo(sideViewX + 40 * sideScale, sideViewY - 5);
    ctx.quadraticCurveTo(sideViewX + 60 * sideScale, sideViewY - 25, sideViewX + 100 * sideScale, sideViewY - 20);
    ctx.lineTo(sideViewX + 140 * sideScale, sideViewY + 5);
    ctx.stroke();

    // Vertical tail
    ctx.beginPath();
    ctx.moveTo(sideViewX + 300 * sideScale, sideViewY + 10);
    ctx.lineTo(sideViewX + 320 * sideScale, sideViewY - 50);
    ctx.lineTo(sideViewX + 380 * sideScale, sideViewY - 40);
    ctx.lineTo(sideViewX + 400 * sideScale, sideViewY + 10);
    ctx.stroke();

    // Horizontal stabilizer side
    ctx.beginPath();
    ctx.moveTo(sideViewX + 340 * sideScale, sideViewY + 35);
    ctx.lineTo(sideViewX + 420 * sideScale, sideViewY + 30);
    ctx.stroke();

    // Engine nozzle side
    ctx.beginPath();
    ctx.moveTo(sideViewX + 400 * sideScale, sideViewY + 10);
    ctx.lineTo(sideViewX + 420 * sideScale, sideViewY + 8);
    ctx.lineTo(sideViewX + 420 * sideScale, sideViewY + 27);
    ctx.lineTo(sideViewX + 400 * sideScale, sideViewY + 25);
    ctx.stroke();

    // ========== FRONT VIEW (Bottom right) ==========
    const frontViewX = 620;
    const frontViewY = 280;
    
    // Fuselage cross section
    ctx.beginPath();
    ctx.ellipse(frontViewX, frontViewY, 25, 20, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Cockpit
    ctx.beginPath();
    ctx.arc(frontViewX, frontViewY - 10, 10, Math.PI, 0);
    ctx.stroke();

    // Wings from front
    ctx.beginPath();
    ctx.moveTo(frontViewX - 25, frontViewY);
    ctx.lineTo(frontViewX - 80, frontViewY + 15);
    ctx.lineTo(frontViewX - 75, frontViewY + 20);
    ctx.lineTo(frontViewX - 25, frontViewY + 8);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(frontViewX + 25, frontViewY);
    ctx.lineTo(frontViewX + 80, frontViewY + 15);
    ctx.lineTo(frontViewX + 75, frontViewY + 20);
    ctx.lineTo(frontViewX + 25, frontViewY + 8);
    ctx.stroke();

    // Twin tails from front
    ctx.beginPath();
    ctx.moveTo(frontViewX - 15, frontViewY - 15);
    ctx.lineTo(frontViewX - 25, frontViewY - 60);
    ctx.lineTo(frontViewX - 20, frontViewY - 60);
    ctx.lineTo(frontViewX - 10, frontViewY - 15);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(frontViewX + 15, frontViewY - 15);
    ctx.lineTo(frontViewX + 25, frontViewY - 60);
    ctx.lineTo(frontViewX + 20, frontViewY - 60);
    ctx.lineTo(frontViewX + 10, frontViewY - 15);
    ctx.stroke();

    // ========== CROSS SECTION DETAILS ==========
    const crossX = 680;
    const crossY = 420;
    
    // Section cut indicator
    ctx.lineWidth = 0.5;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(crossX - 50, crossY);
    ctx.lineTo(crossX + 50, crossY);
    ctx.stroke();
    ctx.setLineDash([]);

    // Fuselage section
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.ellipse(crossX, crossY + 40, 30, 25, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Internal structure lines
    ctx.lineWidth = 0.4;
    ctx.beginPath();
    ctx.moveTo(crossX - 25, crossY + 30);
    ctx.lineTo(crossX + 25, crossY + 30);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(crossX, crossY + 20);
    ctx.lineTo(crossX, crossY + 60);
    ctx.stroke();

    // ========== LABELS ==========
    ctx.fillStyle = labelColor;
    ctx.font = "9px 'Geist Mono', monospace";
    ctx.lineWidth = 0.3;
    ctx.strokeStyle = lightLineColor;

    // Top view labels
    // A - Nose/Radar
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

    // G - Horizontal Stabilizer
    ctx.font = "9px 'Geist Mono', monospace";
    ctx.beginPath();
    ctx.moveTo(topViewX - 60, topViewY + 440);
    ctx.lineTo(topViewX - 100, topViewY + 480);
    ctx.stroke();
    ctx.fillText("G", topViewX - 105, topViewY + 478);
    ctx.font = "7px 'Geist Mono', monospace";
    ctx.fillText("H-Stabilizer", topViewX - 110, topViewY + 490);

    // Side view label
    ctx.font = "8px 'Geist Mono', monospace";
    ctx.fillStyle = lightLineColor;
    ctx.fillText("SIDE ELEVATION", sideViewX + 80, sideViewY - 60);
    ctx.beginPath();
    ctx.moveTo(sideViewX + 80, sideViewY - 55);
    ctx.lineTo(sideViewX + 180, sideViewY - 55);
    ctx.stroke();

    // Front view label
    ctx.fillText("FRONT VIEW", frontViewX - 30, frontViewY - 80);
    ctx.beginPath();
    ctx.moveTo(frontViewX - 30, frontViewY - 75);
    ctx.lineTo(frontViewX + 40, frontViewY - 75);
    ctx.stroke();

    // Cross section label
    ctx.fillText("SECTION A-A", crossX - 30, crossY - 10);

    // ========== DIMENSION LINES ==========
    ctx.strokeStyle = "#999";
    ctx.lineWidth = 0.3;
    ctx.fillStyle = "#666";
    ctx.font = "7px 'Geist Mono', monospace";

    // Length dimension
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

    // Wingspan dimension
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

    // ========== TITLE BLOCK ==========
    ctx.strokeStyle = lineColor;
    ctx.fillStyle = labelColor;
    ctx.lineWidth = 0.5;

    // Border for title
    ctx.beginPath();
    ctx.rect(30, height - 80, 200, 60);
    ctx.stroke();

    ctx.font = "11px 'Geist Mono', monospace";
    ctx.fillText("BAYRONIK V1", 40, height - 60);
    ctx.font = "8px 'Geist Mono', monospace";
    ctx.fillStyle = lightLineColor;
    ctx.fillText("Orbital Transport Vessel", 40, height - 45);
    ctx.fillText("Scale: 1:200", 40, height - 32);
    ctx.fillText("DWG: CSX-001-A", 140, height - 32);

    // Cosmexus logo text
    ctx.font = "9px 'Geist Mono', monospace";
    ctx.fillStyle = labelColor;
    ctx.fillText("COSMEXUS AEROSPACE", 40, height - 90);

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
