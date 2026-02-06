import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  Settings,
  Landmark,
  Users,
  ShieldCheck,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
import PlexusBackground from "../../shared/PlexusCanvas/PlexusCanvas";

const MosaicPillarSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef(null);
  const autoPlayRef = useRef(null); // مرجع للتايمر

  const pillars = [
    {
      id: "01",
      title: "Operations & Maintenance",
      icon: <Settings className="w-12 h-12" />,
      content: [
        "Day-to-day property operations",
        "Preventive maintenance planning",
        "Coordination of repairs and service providers",
        "Emergency response and issue resolution",
        "Oversight of building systems",
      ],
    },
    {
      id: "02",
      title: "Financial & Administrative Management",
      icon: <Landmark className="w-12 h-12" />,
      content: [
        "Operating budget preparation and control",
        "Rent collection and expense management",
        "Financial tracking and owner reporting",
        "Utility, insurance, and service coordination",
        "Record keeping and documentation",
      ],
    },
    {
      id: "03",
      title: "Tenant & Stakeholder Management",
      icon: <Users className="w-12 h-12" />,
      content: [
        "Lease administration and coordination",
        "Tenant communication and issue handling",
        "Move-ins, move-outs, and inspections",
        "Enforcement of lease terms and property rules",
        "Liaison with contractors and authorities",
      ],
    },
    {
      id: "04",
      title: "Compliance & Risk Oversight",
      icon: <ShieldCheck className="w-12 h-12" />,
      content: [
        "Regulatory and safety compliance",
        "Insurance coordination and documentation",
        "Risk mitigation and operational governance",
        "Action in line with approved authority and agreements",
      ],
    },
  ];

  // دالة التنقل للسلايد القادم
  const nextSlide = () => setActiveSlide((p) => (p + 1) % pillars.length);
  const prevSlide = () =>
    setActiveSlide((p) => (p - 1 + pillars.length) % pillars.length);

  /* ===============================
     1. التبديل التلقائي (Auto Play Logic)
  =============================== */
  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 4000);
    };

    startAutoPlay();

    // تنظيف التايمر عند مسح المكون من الذاكرة
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [activeSlide]);

  /* ===============================
     2. أنيميشن GSAP (كما هو بدون تغيير)
  =============================== */
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".slide-content-box", {
      opacity: 0,
      x: -20,
      duration: 0.3,
      ease: "power2.in",
    }).fromTo(
      ".slide-content-box",
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8, ease: "power4.out" },
    );

    gsap.fromTo(
      ".bg-number",
      { scale: 0.85, opacity: 0 },
      { scale: 1, opacity: 0.04, duration: 1.5, ease: "expo.out" },
    );
  }, [activeSlide]);

  return (
    <section
      ref={containerRef}
      // أضفنا onMouseEnter و onMouseLeave لإيقاف السلايدر مؤقتاً عند القراءة
      onMouseEnter={() => clearInterval(autoPlayRef.current)}
      onMouseLeave={() => {
        autoPlayRef.current = setInterval(nextSlide, 5000);
      }}
      className="relative min-h-screen bg-mainColor text-lightColor flex items-center overflow-hidden py-24 px-6"
    >
      {/* الرقم الخلفي */}
      <div className="bg-number absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black italic text-lightColor pointer-events-none select-none">
        {pillars[activeSlide].id}
      </div>

      {/* Grid هندسي */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(197,163,99,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(197,163,99,.6) 1px, transparent 1px)",
          backgroundSize: "90px 90px",
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-16">
        {/* Left */}
        <div className="lg:col-span-5 space-y-10">
          <div className="flex items-center gap-4 text-mainGold mb-5">
            <span className="w-10 h-[2px] bg-mainGold"></span>
            <span className="text-xs uppercase tracking-[0.35em] font-medium">
              Property Management
            </span>
          </div>

          <SectionHeader firstWord="How We Deliver" />

          <p className="text-lg opacity-80 max-w-xl border-l-4 border-mainGold/40 pl-6 mt-10">
            Property management is not a single task. It is a system of
            coordinated responsibilities structured around four integrated
            pillars.
          </p>

          {/* Controls */}
          <div className="flex items-center gap-8 md:translate-y-40">
            <button
              onClick={prevSlide}
              className="p-4 border border-lightColor/20 hover:bg-mainGold hover:text-mainColor transition-all"
            >
              <ArrowLeft />
            </button>

            <div className="flex gap-2">
              {pillars.map((_, i) => (
                <span
                  key={i}
                  onClick={() => setActiveSlide(i)} // جعل المؤشرات قابلة للضغط أيضاً
                  className={`h-[2px] cursor-pointer transition-all ${
                    activeSlide === i
                      ? "w-12 bg-mainGold"
                      : "w-4 bg-lightColor/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-4 border border-lightColor/20 hover:bg-mainGold hover:text-mainColor transition-all"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="lg:col-span-7">
          <div className="slide-content-box bg-white/5 backdrop-blur-xl border border-lightColor/10 p-12 relative min-h-[520px] flex flex-col justify-between">
            <PlexusBackground
              particleCount={40}
              lineColor="rgba(197, 163, 99, 0.5)"
              className="opacity-100"
            />
            <div className="flex justify-between mb-12">
              <div className="p-4 bg-mainGold/10 text-mainGold">
                {pillars[activeSlide].icon}
              </div>
              <span className="text-6xl font-black italic text-lightColor/10">
                {pillars[activeSlide].id}
              </span>
            </div>

            <h3 className="text-2xl font-black uppercase mb-8 text-lightColor group-hover:text-mainGold transition-colors">
              {pillars[activeSlide].title}
            </h3>

            <ul className="space-y-4">
              {pillars[activeSlide].content.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-4 text-lightColor/70"
                >
                  <span className="w-1.5 h-1.5 bg-mainGold rotate-45"></span>
                  <span className="uppercase tracking-wide text-sm md:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-5 text-lightColor text-xl text-center lg:text-left leading-loose">
            Each pillar operates within clearly defined management agreements,
            approved budgets, and professional standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MosaicPillarSlider;
