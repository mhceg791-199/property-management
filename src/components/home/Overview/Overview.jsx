import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import logo from "../../../assets/home/overview.webp";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
import { Link } from "react-router-dom";

const MosaicOverview = () => {
  const containerRef = useRef(null);
  const hexagonsRef = useRef([]);
  const logoRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Title Animation */
      gsap.from(".hero-title", {
        y: 60,
        opacity: 0,
        skewY: 3,
        duration: 1.4,
        ease: "expo.out",
        stagger: 0.15,
      });

      /* Floating Hexagons */
      hexagonsRef.current.forEach((hex, i) => {
        gsap.to(hex, {
          y: "random(-20,20)",
          x: "random(-15,15)",
          rotation: "random(-15,15)",
          duration: "random(4,6)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.15,
        });
      });

      /* Content Fade */
      gsap.from(".content-fade", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.6,
        stagger: 0.25,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const toggleLogoSize = () => {
    setIsZoomed((prev) => !prev);
    gsap.to(logoRef.current, {
      scale: isZoomed ? 1 : 2.5,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-white text-mainColor overflow-hidden font-sans"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-12 pb-24">
        {/* Top HUD */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 mb-12">
          <div className="font-mono text-[10px] text-mainGold tracking-[0.3em] uppercase space-y-1">
            <p className="opacity-60 italic">Subsidiary of Mosaic Holding</p>
            <p className="font-bold border-b border-mainGold/30 pb-1 inline-block">
              Mosaic Property Management
            </p>
          </div>

          <div className="sm:text-right font-mono">
            <p className="text-[10px] text-mainColor/40 uppercase tracking-widest mb-1 font-bold">
              Operational Efficiency
            </p>
            <p className="text-2xl sm:text-3xl font-black">99.8%</p>
          </div>
        </div>

        {/* Hero Title */}
        <div className="relative text-center mb-16">
          {/* Hexagons (hidden on small screens) */}
          <div className="hidden md:block">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                ref={(el) => (hexagonsRef.current[i] = el)}
                className="absolute border border-mainGold/10 w-24 h-24 opacity-20"
                style={{
                  clipPath:
                    "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  left: `${[5, 90, 15, 80, 50][i]}%`,
                  top: `${[0, 10, 60, 70, -20][i]}%`,
                }}
              />
            ))}
          </div>

          <h1 className="hero-title text-[clamp(2.2rem,7vw,6rem)] font-black leading-[0.9] tracking-tight uppercase italic">
            MOSAIC <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mainColor via-mainGold to-mainColor">
              MANAGEMENT
            </span>
          </h1>
        </div>

        <div className="text-center mb-14">
          <SectionHeader firstWord="Overview" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-5 content-fade">
            <p className="text-mainColor/70 text-base sm:text-lg leading-relaxed font-light">
              Mosaic Property Management is a subsidiary of{" "}
              <Link
                to="https://mosaicholding.com/"
                target="_blank"
                className="text-mainColor font-bold underline decoration-mainGold decoration-2 underline-offset-4"
              >
                Mosaic Holding Corporation
              </Link>
              . We are a licensed property management company providing
              comprehensive management, operation, and maintenance services for
              commercial, mixed-use, and institutional properties.
            </p>
          </div>

          {/* Center Logo */}
          <div className="lg:col-span-2 flex justify-center content-fade">
            <div
              onClick={toggleLogoSize}
              className="relative w-28 h-28 sm:w-32 sm:h-32 border border-mainColor/10 
                         rotate-45 bg-gray-50/60 flex items-center justify-center cursor-pointer"
            >
              <div className="absolute inset-4 border border-mainGold/30 animate-pulse" />
              <img
                ref={logoRef}
                src={logo}
                alt="Mosaic Logo"
                className="-rotate-45 w-16 sm:w-20 h-16 sm:h-20 object-contain"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-5 content-fade lg:text-right">
            <p className="text-mainColor/70 text-base sm:text-lg leading-relaxed font-light">
              We manage assets with a focus on operational efficiency,
              regulatory compliance, and long-term value protection. Backed by
              the Mosaic ecosystem, we combine professional property management
              with access to enhanced technical expertise — ensuring properties
              are managed with depth, structure, and foresight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MosaicOverview;
