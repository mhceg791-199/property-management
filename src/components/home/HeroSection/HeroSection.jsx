import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

const HomeHero = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const timerRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      line1: "Licensed Property",
      line2: "Management.",
      sub: "Managed with Discipline.",
      color: "#c5a363",
    },
    {
      line1: "Protecting",
      line2: "Assets.",
      sub: "Optimizing Performance.",
      color: "#c5a363",
    },
    {
      line1: "Property",
      line2: "Management",
      sub: "Backed by Engineering Expertise.",
      color: "#c5a363",
    },
    {
      line1: "Beyond",
      line2: "Operations.",
      sub: "Built for Long-Term Value.",
      color: "#c5a363",
    },
  ];

  /* ===============================
     1. Plexus Canvas Background
  =============================== */
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrame;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
      }
      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
    }

    const init = () => {
      resize();
      particles = Array.from({ length: 80 }, () => new Particle());
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "rgba(197, 163, 99, 0.15)";
        ctx.fillStyle = "rgba(197, 163, 99, 0.4)";
        particles.forEach((p, i) => {
          p.update();
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
          ctx.fill();
          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
            if (dist < 150) {
              ctx.lineWidth = 1 - dist / 150;
              ctx.beginPath();
              ctx.moveTo(p.x, p.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        });
        animationFrame = requestAnimationFrame(animate);
      };
      animate();
    };

    init();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  /* ===============================
     2. Slider & GSAP Logic
  =============================== */
  const startTimer = () => {
    stopTimer();
    timerRef.current = setInterval(() => {
      const next = (currentSlide + 1) % slides.length;
      animateSlideChange(next);
    }, 4000);
  };

  const stopTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const animateSlideChange = (nextIndex) => {
    const tl = gsap.timeline();
    // أنيميشن الخروج
    tl.to(".slide-content", {
      y: -40,
      opacity: 0,
      duration: 0.6,
      ease: "power2.in",
      onComplete: () => {
        setCurrentSlide(nextIndex);
      },
    });
  };

  // تشغيل أنيميشن الدخول بمجرد تغيير الـ state
  useEffect(() => {
    gsap.fromTo(
      ".slide-content",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
    );
    startTimer(); // إعادة تشغيل التايمر مع كل تغيير يدوي أو تلقائي
    return () => stopTimer();
  }, [currentSlide]);

  const goToSlide = (index) => {
    if (index === currentSlide) return;
    stopTimer();
    animateSlideChange(index);
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-mainColor text-white overflow-hidden font-sans"
    >
      {/* 1. Background Layers */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
      />

      <div
        className="absolute top-0 right-0 w-full lg:w-2/3 h-full z-10 pointer-events-none opacity-30 lg:opacity-50"
        style={{
          maskImage: "linear-gradient(to left, black 40%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to left, black 40%, transparent 100%)",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero.webm" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-mainColor via-transparent to-transparent"></div>
      </div>

      {/* 2. Big Background Number (Decorative) */}
      <div className="absolute left-10 bottom-0 text-[30vw] font-black text-white/[0.03] leading-none pointer-events-none">
        0{currentSlide + 1}
      </div>

      {/* 3. Main Content Area */}
      <main className="relative z-20 container mx-auto px-10 pt-32 lg:pt-48 flex items-center min-h-[80vh]">
        <div className="max-w-5xl slide-content">
          {/* Top Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-[1px] w-8 bg-mainGold"></div>
            <p className="text-mainGold font-mono tracking-[0.4em] text-[10px] uppercase">
              Mosaic Property Management
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-[clamp(2.5rem,8vw,6rem)] font-black leading-[1.05] tracking-tighter mb-8 transition-all">
            <span className="block opacity-90 text-lightColor">
              {slides[currentSlide].line1}
            </span>
            <span
              style={{ color: slides[currentSlide].color }}
              className="block italic"
            >
              {slides[currentSlide].line2}
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-2xl text-white/60 font-light italic mb-12 max-w-2xl border-l border-white/10 pl-6">
            {slides[currentSlide].sub}
          </p>

          {/* Actions & Navigation */}
          <div className="flex flex-wrap gap-10 items-center">
            <button className="group relative px-10 py-4 bg-mainGold text-mainColor font-bold rounded-sm flex items-center gap-3 transition-all duration-500 hover:bg-mainColor hover:text-lightColor shadow-[0_20px_50px_rgba(197,163,99,0.15)]">
              <span className="tracking-[0.1em] text-xs uppercase">
                Get Started
              </span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            {/* Interactive Indicators */}
            <div className="flex gap-4 items-center">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className="group relative py-4 focus:outline-none"
                >
                  <div
                    className={`transition-all duration-700 rounded-full ${
                      currentSlide === i
                        ? "w-16 bg-mainGold h-[3px]"
                        : "w-4 bg-white/20 h-[3px] hover:bg-white/40"
                    }`}
                  />
                  <span
                    className={`absolute -bottom-2 left-0 text-lightColor text-[8px] font-mono transition-opacity duration-500 ${currentSlide === i ? "opacity-100" : "opacity-0"}`}
                  >
                    0{i + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeHero;
