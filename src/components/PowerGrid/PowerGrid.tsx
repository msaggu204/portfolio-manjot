import React, { useEffect, useRef } from 'react';
import styles from './PowerGrid.module.css';

/**
 * Animated "power grid" canvas: drifting nodes joined by faint transmission
 * lines, with bright energy pulses travelling along random edges. Nodes near
 * the cursor link to it, so the grid feels alive under the mouse.
 *
 * Honors prefers-reduced-motion (renders a single static frame) and pauses
 * whenever the tab is hidden.
 */

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface Pulse {
  from: number;
  to: number;
  /** 0 → 1 progress along the edge */
  t: number;
  speed: number;
}

const LINK_DISTANCE = 170;
const MOUSE_DISTANCE = 220;
const NODE_COLOR = 'rgba(159, 176, 191, 0.55)';
const PULSE_COLOR = 'rgba(255, 108, 61, 0.9)';

function nodeCountFor(width: number): number {
  if (width < 600) return 32;
  if (width < 1100) return 52;
  return 70;
}

const PowerGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    let width = 0;
    let height = 0;
    let rafId = 0;
    let running = true;
    const mouse = { x: -9999, y: -9999 };

    const seed = () => {
      const count = nodeCountFor(width);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
      }));
      pulses = [];
    };

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = parent.clientWidth;
      height = parent.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
      if (reducedMotion) draw();
    };

    const spawnPulse = () => {
      const from = Math.floor(Math.random() * nodes.length);
      const a = nodes[from];
      // Pick a random neighbour that's actually linked
      const candidates: number[] = [];
      nodes.forEach((b, i) => {
        if (i === from) return;
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < LINK_DISTANCE) candidates.push(i);
      });
      if (candidates.length === 0) return;
      const to = candidates[Math.floor(Math.random() * candidates.length)];
      pulses.push({ from, to, t: 0, speed: 0.012 + Math.random() * 0.014 });
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Transmission lines
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d >= LINK_DISTANCE) continue;
          const alpha = (1 - d / LINK_DISTANCE) * 0.16;
          ctx.strokeStyle = `rgba(159, 176, 191, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // Cursor connections
      for (const n of nodes) {
        const d = Math.hypot(n.x - mouse.x, n.y - mouse.y);
        if (d >= MOUSE_DISTANCE) continue;
        const alpha = (1 - d / MOUSE_DISTANCE) * 0.35;
        ctx.strokeStyle = `rgba(255, 108, 61, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(n.x, n.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }

      // Nodes
      ctx.fillStyle = NODE_COLOR;
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }

      // Energy pulses
      ctx.fillStyle = PULSE_COLOR;
      for (const p of pulses) {
        const a = nodes[p.from];
        const b = nodes[p.to];
        if (!a || !b) continue;
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        ctx.shadowColor = PULSE_COLOR;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(x, y, 2.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    const step = () => {
      if (!running) return;

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -20) n.x = width + 20;
        if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        if (n.y > height + 20) n.y = -20;
      }

      pulses = pulses
        .map((p) => ({ ...p, t: p.t + p.speed }))
        .filter((p) => p.t < 1);
      if (pulses.length < 6 && Math.random() < 0.05) spawnPulse();

      draw();
      rafId = requestAnimationFrame(step);
    };

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const onMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    const onVisibility = () => {
      if (reducedMotion) return;
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(rafId);
      } else if (!running) {
        running = true;
        rafId = requestAnimationFrame(step);
      }
    };

    resize();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);

    if (reducedMotion) {
      draw(); // single static frame
    } else {
      window.addEventListener('mousemove', onMouseMove);
      canvas.addEventListener('mouseleave', onMouseLeave);
      rafId = requestAnimationFrame(step);
    }

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />;
};

export default PowerGrid;
