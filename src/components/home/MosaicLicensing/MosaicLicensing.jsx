import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShieldCheck, Scale, Activity, Plus, ArrowRight } from "lucide-react";

import PlexusBackground from "../../shared/PlexusCanvas/PlexusCanvas";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
import slides from "../../../data/home/licensingSlides";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const MosaicLicensingSection = () => {
  const sectionRef = useRef(null);
  const slideContentRef = useRef(null);
  const bgIconRef = useRef(null);
  const nav = useNavigate();

  const [activeSlide, setActiveSlide] = useState(0);

  /* ================= AUTO SLIDER ================= */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  /* ================= GSAP ANIMATIONS ================= */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        slideContentRef.current,
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "expo.out",
        },
      );

      gsap.fromTo(
        bgIconRef.current,
        { opacity: 0, scale: 0.85, rotate: -25 },
        {
          opacity: 0.08,
          scale: 1,
          rotate: -12,
          duration: 1.6,
          ease: "power2.out",
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [activeSlide]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 px-4 md:px-10 bg-slate-50 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto bg-white border border-slate-200 shadow-2xl overflow-hidden rounded-lg flex flex-col lg:flex-row">
        {/* ================= LEFT ================= */}
        <div className="w-full lg:w-[55%] p-6 sm:p-10 lg:p-16 relative z-10">
          <SectionHeader
            firstWord="Licensed Property"
            secondWord="Management"
          />

          <div className="mt-8 space-y-6 max-w-xl">
            <p className="paragraph italic border-l-4 border-mainColor/30 pl-4 text-slate-700">
              Mosaic Property Management operates as a licensed entity, fully
              compliant with regulatory, operational, and reporting
              requirements.
            </p>

            <p className="paragraph text-slate-600">
              Licensing reflects our commitment to governance, accountability,
              and professional property stewardship.
            </p>
          </div>

          {/* ICON GRID */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-14 pt-10 border-t border-slate-100">
            {[
              { icon: <Scale size={22} />, label: "Legal Framework" },
              { icon: <ShieldCheck size={22} />, label: "Governance" },
              { icon: <Activity size={22} />, label: "Accountability" },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="text-mainGold mb-3">{item.icon}</div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="relative w-full lg:w-[45%] bg-mainColor flex items-center justify-center py-20 px-6 overflow-hidden">
          {/* Plexus */}
          <PlexusBackground
            particleCount={30}
            lineColor="rgba(197,163,99,0.5)"
            className="absolute inset-0 opacity-90"
          />

          {/* Background Icon */}
          <div
            ref={bgIconRef}
            className="absolute inset-0 flex items-center justify-center pointer-events-none text-white translate-x-1/4 translate-y-1/4"
          >
            {slides[activeSlide].bgIcon}
          </div>

          {/* Foreground Content */}
          <div
            ref={slideContentRef}
            className="relative z-10 flex flex-col items-center text-center"
          >
            {/* Seal */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 mb-8">
              <div className="absolute inset-0 border-2 border-dashed border-mainGold/30 rounded-full animate-[spin_18s_linear_infinite]" />
              <div className="absolute inset-3 border border-mainGold/20 rounded-full" />

              <div className="absolute inset-6 bg-mainGold rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(197,163,99,0.35)]">
                <div className="text-mainColor scale-110">
                  {slides[activeSlide].icon}
                </div>
              </div>
            </div>

            <h4 className="text-mainGold font-black tracking-[0.45em] uppercase text-xs sm:text-sm">
              {slides[activeSlide].title}
            </h4>

            {/* Pagination */}
            <div className="flex gap-3 mt-10">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    activeSlide === idx
                      ? "w-12 bg-mainGold"
                      : "w-4 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* --- NEW: Interactive Footer CTA --- */}
      <div className="cta-container max-w-7xl mx-auto mt-6 md:mt-12 relative z-10 border border-lightColor/20 p-8 md:p-12 bg-mainColor/5 overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-5">
          <Plus size={80} className="text-mainColor rotate-12" />
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-center relative z-10">
          <div className="md:col-span-8 space-y-4">
            <h3 className="cta-reveal text-xl md:text-3xl font-black uppercase tracking-tighter text-mainColor leading-tight">
              Looking for a licensed, <br />
              <span className="text-mainGold italic font-light">
                disciplined approach
              </span>{" "}
              to property management?
            </h3>
            <p className="paragraph text-mainColor/60 font-medium">
              Discover how Mosaic Property Management can support your asset.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end items-center">
            <button
              onClick={() => {
                nav("/contact-us");
                window.scrollTo(0, 0);
              }}
              className="cta-reveal group/btn relative flex items-center gap-4 bg-mainColor text-white px-8 py-4 uppercase text-xs font-bold tracking-[0.2em] hover:bg-mainGold hover:text-mainColor transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10">Connect With Us</span>
              <ArrowRight
                size={16}
                className="relative z-10 group-hover/btn:translate-x-2 transition-transform duration-500"
              />
              {/* Background Sweep effect */}
              <div className="absolute top-0 -left-full w-full h-full bg-mainGold group-hover/btn:left-0 transition-all duration-500 -z-0" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MosaicLicensingSection;
