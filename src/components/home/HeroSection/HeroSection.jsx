import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import slides from "../../../data/home/slides";

const HomeHero = () => {
  const navigate = useNavigate();
  const canvasRef = useRef(null);
  const timerRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);

  /* ===============================
     Plexus Canvas Background
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
      particles = Array.from({ length: 70 }, () => new Particle());

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "rgba(197,163,99,0.15)";
        ctx.fillStyle = "rgba(197,163,99,0.4)";

        particles.forEach((p, i) => {
          p.update();
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
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
     Slider Logic
  =============================== */
  const animateSlideChange = (nextIndex) => {
    gsap.to(".slide-content", {
      y: -40,
      opacity: 0,
      duration: 0.6,
      ease: "power2.in",
      onComplete: () => setCurrentSlide(nextIndex),
    });
  };

  useEffect(() => {
    gsap.fromTo(
      ".slide-content",
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
    );

    timerRef.current = setInterval(() => {
      animateSlideChange((currentSlide + 1) % slides.length);
    }, 4500);

    return () => clearInterval(timerRef.current);
  }, [currentSlide]);

  return (
    <section className="relative min-h-screen bg-mainColor text-white overflow-hidden font-sans">
      {/* Plexus Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 pointer-events-none opacity-20 md:opacity-40"
      />

      {/* Video Layer */}
      <div
        className="absolute top-0 right-0 w-full lg:w-2/3 h-full z-10 pointer-events-none 
                   opacity-20 md:opacity-30 lg:opacity-50"
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
          className="w-full h-full object-cover scale-110"
        >
          <source src="/hero.webm" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-mainColor via-mainColor/40 to-transparent" />
      </div>

      {/* Background Number */}
      <div
        className="absolute left-4 md:left-10 bottom-0 hidden sm:block 
                      text-[40vw] md:text-[30vw] font-black 
                      text-white/[0.03] pointer-events-none"
      >
        0{currentSlide + 1}
      </div>

      {/* Content */}
      <main
        className="relative z-20 max-w-7xl mx-auto 
                       px-6 sm:px-10 
                       pt-28 sm:pt-32 lg:pt-48 
                       flex items-center min-h-[80vh]"
      >
        <div className="max-w-5xl slide-content">
          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-mainGold" />
            <span className="text-mainGold font-mono tracking-[0.35em] text-[10px] uppercase">
              Mosaic Property Management
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-[clamp(2rem,7vw,6rem)] font-black leading-[1.05] tracking-tight mb-6 sm:mb-8">
            <span className="block opacity-90">
              {slides[currentSlide].line1}
            </span>
            <span
              className="block italic"
              style={{ color: slides[currentSlide].color }}
            >
              {slides[currentSlide].line2}
            </span>
          </h1>

          {/* Sub */}
          <p
            className="text-base sm:text-lg md:text-2xl text-white/60 italic 
                        mb-10 sm:mb-12 max-w-xl md:max-w-2xl 
                        border-l border-white/10 pl-4 sm:pl-6"
          >
            {slides[currentSlide].sub}
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-10 items-start sm:items-center">
            <button
              onClick={() => navigate("/about")}
              className="group px-8 sm:px-10 py-4 bg-mainGold text-mainColor 
                         font-bold flex items-center gap-3 
                         transition-all duration-500 
                         hover:bg-mainColor hover:text-lightColor
                         shadow-[0_20px_50px_rgba(197,163,99,0.15)]"
            >
              <span className="tracking-[0.1em] text-xs uppercase">
                Get Started
              </span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            {/* Indicators */}
            <div className="flex gap-3 sm:gap-4">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => animateSlideChange(i)}
                  className="relative py-3"
                >
                  <div
                    className={`transition-all duration-700 rounded-full ${
                      currentSlide === i
                        ? "w-12 sm:w-16 bg-mainGold h-[3px]"
                        : "w-4 bg-white/20 h-[3px]"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HomeHero;
