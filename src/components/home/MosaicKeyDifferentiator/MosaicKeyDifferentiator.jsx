import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  Box,
  Layers,
  Zap,
  Settings,
  Maximize,
  ChevronRight,
} from "lucide-react";

import architecture from "../../../assets/engineering/architecture.png";
import electrical from "../../../assets/engineering/electrical.png";
import interior from "../../../assets/engineering/interior.png";
import mechanical from "../../../assets/engineering/mechaical.png";
import structural from "../../../assets/engineering/structural.png";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";

const MosaicKeyDifferentiator = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const imageRef = useRef(null);
  const cardRef = useRef(null);
  const intervalRef = useRef(null);
  const isHoveringRef = useRef(false);

  const SLIDE_DURATION = 3000; // 3 ثوانٍ

  const technicalData = [
    {
      title: "Architecture",
      code: "ARC-01",
      icon: <Layers />,
      image: architecture,
    },
    {
      title: "Interior Design",
      code: "INT-02",
      icon: <Box />,
      image: interior,
    },
    {
      title: "Mechanical",
      code: "MECH-03",
      icon: <Settings />,
      image: mechanical,
    },
    { title: "Electrical", code: "ELEC-04", icon: <Zap />, image: electrical },
    {
      title: "Structural",
      code: "STR-05",
      icon: <Maximize />,
      image: structural,
    },
  ];

  /* ================= GSAP Animation ================= */
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      cardRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
    ).fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.08 },
      { opacity: 1, scale: 1, duration: 0.6, ease: "expo.out" },
      "-=0.25",
    );
  }, [activeIdx]);

  /* ================= AUTO SLIDER ================= */
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      if (!isHoveringRef.current) {
        setActiveIdx((prev) =>
          prev === technicalData.length - 1 ? 0 : prev + 1,
        );
      }
    }, SLIDE_DURATION);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <section className="relative min-h-screen bg-white text-mainColor p-6 md:p-20 overflow-hidden font-mono">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#C5A36315_1px,transparent_1px),linear-gradient(to_bottom,#C5A36315_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-12 gap-14">
        {/* LEFT */}
        <div className="lg:col-span-5 space-y-10">
          <div>
            <SectionHeader firstWord="Our Key" secondWord="Differentiator" />
            <h3 className="text-xl font-bold text-mainGold mt-6 mb-4">
              Access to Enhanced Engineering Services
            </h3>
            <p className="paragraph text-mainColor/70 italic border-l-2 border-mainColor/30 pl-4">
              What sets{" "}
              <span className="text-mainColor font-bold">
                Mosaic Property Management
              </span>{" "}
              apart is access to integrated technical expertise through the
              Mosaic platform.
            </p>
          </div>

          {/* SELECTOR */}
          <div className="space-y-2 pt-3">
            {technicalData.map((item, idx) => (
              <button
                key={idx}
                onMouseEnter={() => {
                  isHoveringRef.current = true;
                  setIsPaused(true);
                  setActiveIdx(idx);
                }}
                onMouseLeave={() => {
                  isHoveringRef.current = false;
                  setIsPaused(false);
                }}
                className={`group relative w-full flex items-center p-4 border-l-4 transition-all duration-300 overflow-hidden
                ${
                  activeIdx === idx
                    ? "border-mainGold translate-x-2"
                    : "border-transparent hover:border-mainColor/10"
                }`}
              >
                {/* PROGRESS BAR BACKGROUND */}
                {activeIdx === idx && (
                  <div
                    className="absolute inset-0 bg-mainGold/10 -z-10 origin-left"
                    style={{
                      animation: isPaused
                        ? "none"
                        : `fillProgress ${SLIDE_DURATION}ms linear infinite`,
                    }}
                  />
                )}

                <span
                  className={`relative z-10 text-[10px] font-bold mr-4 transition-colors duration-300 ${activeIdx === idx ? "text-mainGold" : "text-mainColor/30"}`}
                >
                  0{idx + 1}
                </span>

                <span
                  className={`relative z-10 uppercase tracking-widest text-sm font-black transition-colors duration-300 ${activeIdx === idx ? "text-mainColor" : "text-mainColor/40"}`}
                >
                  {item.title}
                </span>

                {activeIdx === idx && (
                  <ChevronRight
                    size={16}
                    className="relative z-10 ml-auto text-mainGold animate-pulse"
                  />
                )}
              </button>
            ))}
          </div>

          <div className="pt-4 mt-4 border-t border-mainColor/10">
            <p className="paragraph text-mainColor/60">
              This allows us to address issues at their root, support informed
              decision-making, and manage properties with a deeper technical
              understanding — particularly for complex, aging, or multi-tenant
              assets.
            </p>
          </div>
        </div>

        {/* RIGHT – IMAGE */}
        <div className="lg:col-span-7 flex justify-center items-center relative">
          <div
            ref={cardRef}
            className="relative w-full max-w-[520px] min-h-[420px] bg-white border border-mainColor/10 shadow-2xl overflow-hidden"
          >
            <div className="relative w-full h-full p-8 bg-mainColor/5 flex items-center justify-center">
              <img
                ref={imageRef}
                src={technicalData[activeIdx].image}
                alt={technicalData[activeIdx].title}
                className="max-w-full max-h-full object-contain scale-90"
              />

              <div className="absolute top-4 right-4 bg-mainGold px-3 py-1 text-[10px] font-bold text-white tracking-widest">
                {technicalData[activeIdx].code}
              </div>

              <div className="absolute bottom-4 left-4 p-3 bg-mainColor text-white shadow-xl">
                {technicalData[activeIdx].icon}
              </div>

              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-mainGold/40" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-mainGold/40" />
            </div>
          </div>

          <div className="absolute -bottom-6 md:bottom-16 -right-6 md:right-16 w-full max-w-[520px] min-h-[460px] border border-mainGold/20 -z-10" />
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes fillProgress {
          0% {
            transform: scaleX(0);
          }
          100% {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
};

export default MosaicKeyDifferentiator;
