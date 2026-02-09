import { useEffect, useRef } from "react";
import gsap from "gsap";
import vid from "../../../assets/about/vid-about.mp4";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
import PlexusBackground from "../../shared/PlexusCanvas/PlexusCanvas";
import principles from "../../../data/about/principles";

const GovernanceStructuralHero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".gov-animate", {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        clearProps: "all", 
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen bg-mainColor text-lightColor overflow-hidden font-sans flex items-center"
    >
      {/* 1. Plexus Background - Left Side Overlay */}
      <div
        className="absolute top-0 left-0 w-full lg:w-1/2 h-full z-10 pointer-events-none border-t-2 border-mainGold/20"
        style={{
          maskImage: window.innerWidth > 1024 
            ? "linear-gradient(to right, black 70%, transparent 100%)" 
            : "linear-gradient(to bottom, black 50%, transparent 100%)",
          WebkitMaskImage: window.innerWidth > 1024 
            ? "linear-gradient(to right, black 70%, transparent 100%)" 
            : "linear-gradient(to bottom, black 50%, transparent 100%)",
        }}
      >
        <PlexusBackground
          particleCount={window.innerWidth > 768 ? 40 : 20}
          lineColor="rgba(197, 163, 99, 0.4)"
          className="opacity-100"
        />
      </div>

      {/* 2. Video Background - Right Side */}
      <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full z-0 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-20 lg:opacity-30"
        >
          <source src={vid} type="video/mp4" />
        </video>
        {/* Layer to blend video with background */}
        <div className="absolute inset-0 bg-gradient-to-t from-mainColor via-mainColor/80 lg:via-transparent to-transparent lg:bg-gradient-to-l lg:from-mainColor lg:to-transparent" />
      </div>

      {/* 3. Main Content Container */}
      <div className="relative z-30 container mx-auto px-6 py-24 lg:py-0">
        <div className="w-full max-w-5xl">
          
          {/* Section Header */}
          <div className="gov-animate mb-12">
            <SectionHeader
              firstWord="Professional Standards"
              secondWord="& Governance"
            />
          </div>

          <div className="space-y-8 lg:space-y-12">
            {/* Intro Text */}
            <p className="gov-animate text-base md:text-xl opacity-85 italic max-w-xl border-l-4 border-mainGold/60 pl-6 leading-relaxed">
              Our operations are guided by clearly defined policies, procedures,
              and professional standards.
            </p>

            <p className="gov-animate text-base md:text-lg opacity-90 font-medium">
              Mosaic Property Management operates with a governance framework
              designed to ensure:
            </p>

            {/* Principles Grid - الحل النهائي لمشكلة الاختفاء */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl relative z-40">
              {principles && principles.length > 0 ? (
                principles.map((p, i) => (
                  <div
                    key={i}
                    className="gov-animate flex items-center gap-4 bg-white/[0.03] backdrop-blur-sm p-4 md:p-5 border border-white/10 hover:border-mainGold/50 hover:bg-white/[0.08] transition-all duration-500 group"
                  >
                    <span className="text-mainGold group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {p.icon}
                    </span>
                    <span className="text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-lightColor">
                      {p.text || p.title || "Standardized Procedure"}
                    </span>
                  </div>
                ))
              ) : (
                <div className="text-mainGold text-xs italic opacity-50">
                  
                </div>
              )}
            </div>

            {/* Closing Statement */}
            <p className="gov-animate text-sm md:text-base lg:text-lg opacity-70 leading-relaxed max-w-3xl">
              These principles shape our internal culture and ensure that we
              operate with 
              <span className="text-white font-bold ml-2">
                integrity, transparency, and reliability
              </span> 
             {" "} — for property owners, tenants, and stakeholders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceStructuralHero;