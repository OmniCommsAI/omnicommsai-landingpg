/**
 * AudioWaveVisualizer (Landing Page Edition)
 *
 * What: Glowing gradient line with shimmer animation and periodic ambient pulses.
 * Why: Visual branding element that hints at the voice-first product experience.
 *      Runs autonomously — no audio input needed.
 */

import { useRef, useEffect, useCallback } from "react";

interface AudioWaveVisualizerProps {
  height?: number;
  className?: string;
}

const GRADIENT_COLORS = ["#ff2f2f", "#ef7b16", "#8a43e1", "#d511fd"];

export function AudioWaveVisualizer({
  height = 40,
  className,
}: AudioWaveVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const shimmerOffsetRef = useRef(0);
  const smoothAmplitudeRef = useRef(0);
  const smoothShimmerXRef = useRef(0);
  const widthRef = useRef(800);

  /* Simulated ambient pulse — ramps up and decays periodically */
  const getSimulatedAmplitude = useCallback((): number => {
    const t = Date.now() * 0.001;
    /* Every ~8 seconds, fire a pulse that ramps up then decays */
    const cycle = t % 8;
    if (cycle < 3.2) {
      /* Ramp up (0-0.8s) then sustain (0.8-2.2s) then decay (2.2-3.2s) */
      if (cycle < 0.8) return (cycle / 0.8) * 1.0;
      if (cycle < 2.2) return 0.85 + Math.sin(cycle * 8) * 0.15;
      return Math.max(0, 1.0 * (1 - (cycle - 2.2) / 1.0));
    }
    return 0;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        widthRef.current = entry.contentRect.width;
      }
    });
    ro.observe(container);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gradientColors = GRADIENT_COLORS;

    const animate = () => {
      const width = widthRef.current;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const centerX = width / 2;
      const centerY = height / 2;

      const targetAmplitude = getSimulatedAmplitude();
      smoothAmplitudeRef.current +=
        (targetAmplitude - smoothAmplitudeRef.current) * 0.15;
      const amplitude = smoothAmplitudeRef.current;

      ctx.clearRect(0, 0, width, height);

      const shimmerSpeed = amplitude > 0.05 ? 0.5 : 12;
      shimmerOffsetRef.current =
        (shimmerOffsetRef.current + shimmerSpeed) % (width * 2);

      const baseThickness = 2;
      const time = Date.now() * 0.003;

      const getColorAtPosition = (pos: number): string => {
        const clampedPos = Math.max(0, Math.min(1, pos));
        const segmentCount = gradientColors.length - 1;
        const segment = Math.floor(clampedPos * segmentCount);
        const segmentPos = clampedPos * segmentCount - segment;
        if (segment >= segmentCount)
          return gradientColors[gradientColors.length - 1];
        return segmentPos < 0.5
          ? gradientColors[segment]
          : gradientColors[segment + 1];
      };

      const shimmerPos = shimmerOffsetRef.current / (width * 2);

      /* Edge fade gradient */
      const lineGradient = ctx.createLinearGradient(0, centerY, width, centerY);
      lineGradient.addColorStop(0, gradientColors[0] + "00");
      lineGradient.addColorStop(0.1, gradientColors[0] + "20");
      lineGradient.addColorStop(0.2, gradientColors[0] + "80");
      lineGradient.addColorStop(0.3, gradientColors[0]);
      lineGradient.addColorStop(0.4, gradientColors[1]);
      lineGradient.addColorStop(0.6, gradientColors[2]);
      lineGradient.addColorStop(0.7, gradientColors[3]);
      lineGradient.addColorStop(0.8, gradientColors[3] + "80");
      lineGradient.addColorStop(0.9, gradientColors[3] + "20");
      lineGradient.addColorStop(1, gradientColors[3] + "00");

      const edgeLineStart = 35;
      const pointLength = 15;

      /* Faint edge lines */
      ctx.save();
      ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(edgeLineStart, centerY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(width - edgeLineStart, centerY);
      ctx.lineTo(width, centerY);
      ctx.stroke();
      ctx.restore();

      const drawPointedLine = (thickness: number) => {
        ctx.beginPath();
        ctx.moveTo(edgeLineStart, centerY);
        ctx.lineTo(edgeLineStart + pointLength, centerY - thickness / 2);
        ctx.lineTo(
          width - edgeLineStart - pointLength,
          centerY - thickness / 2
        );
        ctx.lineTo(width - edgeLineStart, centerY);
        ctx.lineTo(
          width - edgeLineStart - pointLength,
          centerY + thickness / 2
        );
        ctx.lineTo(edgeLineStart + pointLength, centerY + thickness / 2);
        ctx.closePath();
      };

      /* Layer 1: Outer glow */
      ctx.save();
      ctx.shadowColor = gradientColors[1];
      ctx.shadowBlur = 25;
      ctx.fillStyle = lineGradient;
      ctx.globalAlpha = 0.5;
      drawPointedLine(baseThickness + 4);
      ctx.fill();
      ctx.restore();

      /* Layer 2: Mid glow */
      ctx.save();
      ctx.shadowColor = gradientColors[2];
      ctx.shadowBlur = 15;
      ctx.fillStyle = lineGradient;
      ctx.globalAlpha = 0.7;
      drawPointedLine(baseThickness + 2);
      ctx.fill();
      ctx.restore();

      /* Layer 3: Main line */
      ctx.save();
      ctx.shadowColor = gradientColors[1];
      ctx.shadowBlur = 8;
      ctx.fillStyle = lineGradient;
      drawPointedLine(baseThickness);
      ctx.fill();
      ctx.restore();

      /* Layer 4: White core */
      const coreGradient = ctx.createLinearGradient(
        edgeLineStart, centerY,
        width - edgeLineStart, centerY
      );
      coreGradient.addColorStop(0, "transparent");
      coreGradient.addColorStop(0.1, "rgba(255, 255, 255, 0.6)");
      coreGradient.addColorStop(0.5, "rgba(255, 255, 255, 0.9)");
      coreGradient.addColorStop(0.9, "rgba(255, 255, 255, 0.6)");
      coreGradient.addColorStop(1, "transparent");

      ctx.save();
      ctx.fillStyle = coreGradient;
      ctx.shadowColor = "#ffffff";
      ctx.shadowBlur = 4;
      ctx.globalAlpha = 0.4;
      drawPointedLine(1);
      ctx.fill();
      ctx.restore();

      /* Shimmer */
      const activeBlend = Math.min(1, amplitude * 5);
      const silentX = shimmerPos * width;
      const oscillation = Math.sin(shimmerOffsetRef.current * 0.05) * 0.05;
      const activeX = centerX + oscillation * width;
      const targetShimmerX =
        silentX * (1 - activeBlend) + activeX * activeBlend;

      smoothShimmerXRef.current +=
        (targetShimmerX - smoothShimmerXRef.current) * 0.15;
      const shimmerX = smoothShimmerXRef.current;

      let shimmerScale = 1;
      let shimmerOpacity = 1;

      if (activeBlend < 0.5) {
        const progress = silentX / width;
        if (progress < 0.5) {
          shimmerScale = progress / 0.5;
          shimmerOpacity = shimmerScale;
        } else {
          shimmerScale = 1 - (progress - 0.5) / 0.5;
          shimmerOpacity = shimmerScale;
        }
        shimmerScale += (1 - shimmerScale) * activeBlend * 2;
        shimmerOpacity += (1 - shimmerOpacity) * activeBlend * 2;
      }

      if (shimmerOpacity > 0.01) {
        const baseShimmerWidth = 50;
        const shimmerWidth = Math.max(2, baseShimmerWidth * shimmerScale);
        const shimmerHeight = Math.max(1, 4 * shimmerScale);

        const shimmerGradient = ctx.createLinearGradient(
          shimmerX - shimmerWidth, centerY,
          shimmerX + shimmerWidth, centerY
        );
        shimmerGradient.addColorStop(0, "transparent");
        shimmerGradient.addColorStop(
          0.2,
          `rgba(255, 255, 255, ${0.3 * shimmerOpacity})`
        );
        shimmerGradient.addColorStop(
          0.4,
          `rgba(255, 255, 255, ${0.8 * shimmerOpacity})`
        );
        shimmerGradient.addColorStop(
          0.5,
          `rgba(255, 255, 255, ${shimmerOpacity})`
        );
        shimmerGradient.addColorStop(
          0.6,
          `rgba(255, 255, 255, ${0.8 * shimmerOpacity})`
        );
        shimmerGradient.addColorStop(
          0.8,
          `rgba(255, 255, 255, ${0.3 * shimmerOpacity})`
        );
        shimmerGradient.addColorStop(1, "transparent");

        ctx.save();
        ctx.fillStyle = shimmerGradient;
        ctx.shadowColor = "#ffffff";
        ctx.shadowBlur = 15 * shimmerScale;
        ctx.globalAlpha = shimmerOpacity;
        ctx.beginPath();
        ctx.roundRect(
          shimmerX - shimmerWidth,
          centerY - shimmerHeight / 2,
          shimmerWidth * 2,
          shimmerHeight,
          shimmerHeight / 2
        );
        ctx.fill();
        ctx.fillStyle = `rgba(255, 255, 255, ${shimmerOpacity})`;
        ctx.shadowBlur = 20 * shimmerScale;
        ctx.beginPath();
        ctx.roundRect(
          shimmerX - shimmerWidth * 0.3,
          centerY - 1,
          shimmerWidth * 0.6,
          2,
          1
        );
        ctx.fill();
        ctx.restore();
      }

      /* Waveform bars during pulse */
      if (amplitude > 0.02) {
        const barCount = 32;
        const barWidth = 4;
        const barGap = 2;
        const totalBarsWidth = barCount * (barWidth + barGap);
        const startX = centerX - totalBarsWidth / 2;
        const glowIntensity = 10 + amplitude * 50;
        const intensityFactor = Math.min(1, amplitude * 2);

        ctx.save();
        for (let i = 0; i < barCount; i++) {
          const x = startX + i * (barWidth + barGap);
          const positionRatio = (x - startX) / totalBarsWidth;
          const barColor = getColorAtPosition(positionRatio);
          const distFromCenter =
            Math.abs(i - barCount / 2) / (barCount / 2);

          const wave1 = Math.sin(time * 2 + i * 0.4) * 0.5 + 0.5;
          const wave2 = Math.sin(time * 3.7 + i * 0.25) * 0.5 + 0.5;
          const wave3 = Math.sin(time * 1.3 + i * 0.6) * 0.5 + 0.5;
          const combinedWave = wave1 * 0.5 + wave2 * 0.3 + wave3 * 0.2;

          const centerFalloff = Math.pow(1 - distFromCenter, 2);
          const barHeight = amplitude * combinedWave * 80 * centerFalloff + 2;
          const barAlpha = amplitude * centerFalloff * 0.9 + 0.2;

          const glowColor =
            intensityFactor > 0.5 ? "#ffffff" : barColor;
          ctx.shadowColor = glowColor;
          ctx.shadowBlur = glowIntensity * (1 + intensityFactor);

          const whiteZone = 0.15 + intensityFactor * 0.25;
          const barGradient = ctx.createLinearGradient(
            x, centerY - barHeight,
            x, centerY + barHeight
          );
          barGradient.addColorStop(0, barColor + "00");
          barGradient.addColorStop(0.1, barColor);
          barGradient.addColorStop(0.5 - whiteZone, barColor);
          barGradient.addColorStop(0.5, "#ffffff");
          barGradient.addColorStop(0.5 + whiteZone, barColor);
          barGradient.addColorStop(0.9, barColor);
          barGradient.addColorStop(1, barColor + "00");

          ctx.globalAlpha = barAlpha;
          ctx.fillStyle = barGradient;

          const halfWidth = barWidth / 2;
          const centerBarX = x + halfWidth;
          const taperControl = 0.7;

          ctx.beginPath();
          ctx.moveTo(centerBarX, centerY - barHeight);
          ctx.quadraticCurveTo(
            centerBarX + halfWidth * (1 - taperControl),
            centerY - barHeight * 0.5,
            centerBarX + halfWidth,
            centerY
          );
          ctx.quadraticCurveTo(
            centerBarX + halfWidth * (1 - taperControl),
            centerY + barHeight * 0.5,
            centerBarX,
            centerY + barHeight
          );
          ctx.quadraticCurveTo(
            centerBarX - halfWidth * (1 - taperControl),
            centerY + barHeight * 0.5,
            centerBarX - halfWidth,
            centerY
          );
          ctx.quadraticCurveTo(
            centerBarX - halfWidth * (1 - taperControl),
            centerY - barHeight * 0.5,
            centerBarX,
            centerY - barHeight
          );
          ctx.closePath();
          ctx.fill();
        }
        ctx.restore();
      }

      /* Center highlight glow */
      if (amplitude > 0.05) {
        const glowColor =
          gradientColors[Math.floor(gradientColors.length / 2)];
        const highlightGradient = ctx.createRadialGradient(
          centerX, centerY, 0,
          centerX, centerY, 40 + amplitude * 60
        );
        highlightGradient.addColorStop(0, glowColor + "30");
        highlightGradient.addColorStop(0.4, glowColor + "15");
        highlightGradient.addColorStop(1, "transparent");
        ctx.fillStyle = highlightGradient;
        ctx.fillRect(0, 0, width, height);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      ro.disconnect();
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [height, getSimulatedAmplitude]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ width: "100%", height, overflow: "hidden" }}
    >
      <canvas ref={canvasRef} style={{ display: "block" }} />
    </div>
  );
}

export default AudioWaveVisualizer;
