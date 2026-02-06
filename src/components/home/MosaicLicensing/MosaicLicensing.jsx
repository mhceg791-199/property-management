import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShieldCheck,
  Scale,
  BadgeCheck,
  Activity,
  Settings,
  ClipboardCheck,
  Database,
} from "lucide-react";
import PlexusBackground from "../../shared/PlexusCanvas/PlexusCanvas";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const MosaicLicensingSection = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const slideContentRef = useRef(null);
  const bgIconRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Verified Entity",
      icon: <BadgeCheck size={64} className="text-mainColor" />,
      bgIcon: <ClipboardCheck size={400} />,
    },
    {
      id: 2,
      title: "Regulatory Sync",
      icon: <Scale size={64} className="text-mainColor" />,
      bgIcon: <ShieldCheck size={400} />,
    },
    {
      id: 3,
      title: "Operational Framework",
      icon: <Settings size={64} className="text-mainColor" />,
      bgIcon: <Database size={400} />,
    },
  ];

  /* ================= AUTO SLIDE LOGIC ================= */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  /* ================= GSAP ANIMATIONS ================= */
  useEffect(() => {
    const ctx = gsap.context(() => {
      // أنيميشن المحتوى الأمامي (Text & Seal)
      gsap.fromTo(
        slideContentRef.current,
        { y: 30, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 1, ease: "expo.out" },
      );

      // أنيميشن الأيقونة الخلفية العملاقة
      gsap.fromTo(
        bgIconRef.current,
        { opacity: 0, scale: 0.8, rotate: -20 },
        {
          opacity: 0.1,
          scale: 1,
          rotate: -12,
          duration: 1.5,
          ease: "power2.out",
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeSlide]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#f8f9fa] flex items-center justify-center p-6 overflow-hidden font-sans"
    >
      {/* Blueprint Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#1C2536 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      ></div>

      <div
        ref={cardRef}
        className="relative w-full max-w-7xl bg-white border border-slate-200 shadow-2xl overflow-hidden flex flex-col md:flex-row h-[80vh]"
      >
        {/* Scanning Line */}
        <div className="scan-line absolute left-0 top-0 w-full h-[2px] bg-mainGold/30 z-20 pointer-events-none"></div>

        {/* LEFT: CONTENT AREA */}
        <div className="flex-[1.4] p-10 md:p-16 border-r border-slate-100 relative bg-white z-10">
          <h2 className="heading leading-none text-mainColor mb-10">
            <SectionHeader
              firstWord="Licensed Property"
              secondWord="Management"
            />
          </h2>

          <div className="text-slate-600 leading-relaxed max-w-xl">
            <p className="paragraph font-medium text-slate-800 italic border-l-4 border-mainColor/20 pl-4">
              Mosaic Property Management operates as a licensed entity, in full
              compliance with regulatory, operational, and reporting
              requirements.
            </p>
            <p className="paragraph opacity-80 font-light mt-14">
              Licensing reflects our commitment to professionalism, governance,
              and accountability. Owners can trust that their properties are
              managed responsibly.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-slate-100">
            {[
              { icon: <Scale />, label: "Legal Framework" },
              { icon: <ShieldCheck />, label: "Governance" },
              { icon: <Activity />, label: "Accountability" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center group"
              >
                <div className="text-mainGold mb-3 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="text-[9px] font-bold uppercase text-slate-400 tracking-widest leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: ANIMATED VISUAL SLIDER */}
        <div className="flex-1 bg-mainColor p-12 flex flex-col items-center justify-center relative overflow-hidden min-h-[500px]">
          {/* Plexus Background Canvas */}
          <PlexusBackground
            particleCount={35}
            lineColor="rgba(197, 163, 99, 0.3)"
            className="opacity-100"
          />

          {/* BACKGROUND ICON (The Dynamic Element) */}
          <div
            ref={bgIconRef}
            className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none text-white translate-x-1/4 translate-y-1/4"
          >
            {slides[activeSlide].bgIcon}
          </div>

          {/* FRONT SLIDER CONTENT */}
          <div
            ref={slideContentRef}
            className="relative z-10 flex flex-col items-center w-full"
          >
            {/* Engineering Seal */}
            <div className="relative w-48 h-48 mb-8">
              {/* Spinning Outer Gear UI */}
              <div className="absolute inset-0 border-2 border-dashed border-mainGold/30 rounded-full animate-[spin_15s_linear_infinite]"></div>
              <div className="absolute inset-3 border border-mainGold/20 rounded-full"></div>

              <div className="absolute inset-6 bg-mainGold rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(197,163,99,0.3)] transition-all duration-700 transform">
                <div className="text-mainColor transition-transform duration-500 scale-110">
                  {slides[activeSlide].icon}
                </div>
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-mainGold font-black tracking-[0.5em] uppercase text-sm mb-2 drop-shadow-lg">
                {slides[activeSlide].title}
              </h4>
            </div>

            {/* Pagination Controls */}
            <div className="flex gap-4 mt-12">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`group relative h-1 transition-all duration-500 rounded-full ${
                    activeSlide === idx
                      ? "w-12 bg-mainGold"
                      : "w-4 bg-white/20 hover:bg-white/40"
                  }`}
                >
                  {activeSlide === idx && (
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[8px] text-mainGold font-bold">
                      0{idx + 1}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MosaicLicensingSection;
