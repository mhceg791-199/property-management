import React, { useEffect, useRef } from "react";

const PlexusBackground = ({ 
  dotColor = "rgba(197, 163, 99, 0.4)", 
  lineColor = "rgba(197, 163, 99, 0.15)",
  particleCount = 50,
  className = "" 
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrame;

    const resize = () => {
      // يأخذ حجم الـ parent div وليس الشاشة بالكامل
      const parent = canvas.parentElement;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = lineColor;
      ctx.fillStyle = dotColor;

      particles.forEach((p, i) => {
        p.update();
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 100) {
            ctx.lineWidth = 1 - dist / 100;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      animationFrame = requestAnimationFrame(animate);
    };

    resize();
    particles = Array.from({ length: particleCount }, () => new Particle());
    animate();

    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, [dotColor, lineColor, particleCount]);

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 pointer-events-none ${className}`} 
    />
  );
};

export default PlexusBackground;