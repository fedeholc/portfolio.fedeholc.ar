"use client";
import { useRef, useEffect } from "react";

export function Canvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) {
      return;
    }
    canvasRef.current.getContext("2d", {
      willReadFrequently: true,
    });

    const ctx = canvasRef.current.getContext("2d");

    let width = (canvasRef.current.width = window.innerWidth);
    let height = (canvasRef.current.height = window.innerHeight);

    const particleCount = 100;
    const maxDistance = 100;
    const particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = Math.random() * 2 - 1;
        this.vy = Math.random() * 2 - 1;
        this.color = `hsl(${Math.random() * 360}, 50%, 50%)`;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        if (ctx) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
          ctx.fillStyle = this.color;
          ctx.fill();
        }
      }
    }

    function init() {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      if (ctx) {
        ctx.clearRect(0, 0, width, height);

        particles.forEach((particle) => {
          particle.update();
          particle.draw();

          particles.forEach((otherParticle) => {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < maxDistance) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(128, 128, 128, ${
                1 - distance / maxDistance
              })`;
              ctx.stroke();
            }
          });
        });
      }
      requestAnimationFrame(animate);
    }

    function handleResize() {
      if (!canvasRef.current) {
        return;
      }
      width = canvasRef.current.width = window.innerWidth;
      height = canvasRef.current.height = window.innerHeight;
    }

    window.addEventListener("resize", handleResize);

    init();
    animate();
  }, [canvasRef]);

  return (
    <canvas
      id="animationCanvas"
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
    />
  );
}
