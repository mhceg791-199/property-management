import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import logo from "../../../assets/home/3u.png";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
import { Link } from "react-router-dom";

const MosaicOverview = () => {
  const containerRef = useRef(null);
  const hexagonsRef = useRef([]);
  const logoRef = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. أنيميشن العناوين
      gsap.from(".hero-title", {
        y: 80,
        opacity: 0,
        skewY: 3,
        duration: 1.5,
        ease: "expo.out",
        stagger: 0.2,
      });

      // 2. حركة الأشكال السداسية
      hexagonsRef.current.forEach((hex, i) => {
        gsap.to(hex, {
          y: "random(-30, 30)",
          x: "random(-20, 20)",
          rotation: "random(-20, 20)",
          duration: "random(4, 6)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.1,
        });
      });

      // 3. خط المسح
      gsap.fromTo(
        ".scan-line",
        { top: "0%" },
        { top: "100%", duration: 6, repeat: -1, ease: "none" },
      );

      // 4. ظهور الفقرات
      gsap.from(".content-fade", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 0.8,
        stagger: 0.3,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const toggleLogoSize = () => {
    setIsZoomed((prev) => !prev);
    gsap.to(logoRef.current, {
      scale: isZoomed ? 1 : 3, // تكبير أو تصغير
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-white text-mainColor overflow-hidden font-sans"
    >
      {/* الخلفية الشبكية */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#1C2536 1px, transparent 1px), linear-gradient(90deg, #1C2536 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 container mx-auto px-6 pt-12 flex flex-col items-center">
        {/* الجزء العلوي (Data HUD) */}
        <div className="w-full flex justify-between items-start mb-10 px-4">
          <div className="font-mono text-[10px] text-mainGold space-y-1 tracking-[0.3em] uppercase">
            <p className="opacity-60 italic">Subsidiary of Mosaic Holding</p>
            <p className="font-bold border-b border-mainGold/20 pb-1">
              Protocol: Licensed_Ops // 2026
            </p>
          </div>

          <div className="text-right font-mono">
            <p className="text-[10px] text-mainColor/40 uppercase tracking-widest mb-1 font-bold">
              Operational Efficiency
            </p>
            <p className="text-3xl font-black text-mainColor">99.8%</p>
          </div>
        </div>

        {/* العنوان الرئيسي */}
        <div className="text-center mb-12 relative w-full">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              ref={(el) => (hexagonsRef.current[i] = el)}
              className="absolute border border-mainGold/10 w-24 h-24 pointer-events-none opacity-20"
              style={{
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                left: `${[5, 90, 15, 80, 50][i]}%`,
                top: `${[0, 10, 60, 70, -20][i]}%`,
                backgroundColor: i % 2 === 0 ? "transparent" : "#C5A363/5",
              }}
            />
          ))}

          <h3 className="hero-title text-[clamp(2.5rem,8vw,6.5rem)] font-black leading-[0.85] tracking-tighter uppercase italic">
            MOSAIC <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mainColor via-mainGold to-mainColor">
              MANAGEMENT
            </span>
          </h3>
        </div>

        <h2 className="heading text-center leading-none text-mainColor mb-10">
          <SectionHeader firstWord="Overview" />
        </h2>

        {/* توزيع المحتوى النصي */}
        <div className="w-full grid lg:grid-cols-12 gap-16 items-start">
          {/* Overview Section */}
          <div className="lg:col-span-5 content-fade space-y-6">
            {/* <div className="flex items-center gap-3">
               <div className="h-[2px] w-12 bg-mainGold" />
               <h2 className="text-head font-bold tracking-[0.4em] uppercase text-mainColor">Overview</h2>
            </div> */}

            <p className="text-mainColor/70 text-lg leading-relaxed font-light">
              Mosaic Property Management is a subsidiary of <br />
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

          {/* Central Logo with Popup */}
          <div className="lg:col-span-2 flex justify-center mt-16 py-10 lg:py-0">
            <div
              className="relative w-32 h-32 border border-mainColor/5 rotate-45 flex items-center justify-center bg-gray-50/50 cursor-pointer"
              onClick={toggleLogoSize}
            >
              <div className="absolute inset-4 border border-mainGold/30 animate-[pulse_4s_infinite]" />
              <img
                ref={logoRef}
                src={logo}
                alt="Mosaic Logo"
                className="-rotate-45 w-20 h-20 object-contain"
              />
            </div>
          </div>

          {/* Focus & Value Section */}
          <div className="lg:col-span-5 content-fade space-y-6 lg:text-right">
            <p className="text-mainColor/70 text-lg leading-relaxed font-light">
              We manage assets with a focus on operational efficiency,
              regulatory compliance, and long-term value protection. Backed by
              the Mosaic ecosystem, we combine professional property management
              with access to enhanced technical expertise — ensuring properties
              are managed with depth, structure, and foresight.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MosaicOverview;
