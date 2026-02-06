import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {
  ShieldCheck,
  FileText,
  BarChart3,
  Settings,
  PenTool,
  Users,
  Plus,
} from "lucide-react";
import PlexusBackground from "../../shared/PlexusCanvas/PlexusCanvas";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";

const PropertyManagement = () => {
  const [activeSector, setActiveSector] = useState(null);
  const containerRef = useRef(null);

  const sectors = [
    {
      id: "01",
      icon: <FileText size={22} />,
      title: "Agreements",
      desc: "Clearly defined management agreements",
    },
    {
      id: "02",
      icon: <BarChart3 size={22} />,
      title: "Budgets",
      desc: "Approved budgets and financial controls",
    },
    {
      id: "03",
      icon: <Settings size={22} />,
      title: "Maintenance",
      desc: "Preventive maintenance planning",
    },
    {
      id: "04",
      icon: <PenTool size={22} />,
      title: "Operation",
      desc: "Documented operational procedures",
    },
    {
      id: "05",
      icon: <ShieldCheck size={22} />,
      title: "Reporting",
      desc: "Regular reporting and performance oversight",
    },
    {
      id: "06",
      icon: <Users size={22} />,
      title: "Communication",
      desc: "Professional communication with owners and tenants",
    },
  ];

  useEffect(() => {
    gsap.from(".grid-line", {
      scaleX: 0,
      scaleY: 0,
      stagger: 0.1,
      duration: 1.5,
      ease: "power3.inOut",
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-white text-mainColor p-6 md:p-12 overflow-hidden font-mono"
    >
      {/* --- Section Header --- */}
      <div className="max-w-4xl mx-auto text-center relative z-10 mb-12">
        <h2 className="heading leading-none text-mainColor mb-6">
          <SectionHeader firstWord="How We" secondWord="Manage Properties" />
        </h2>

        {/* --- Intro Text Content --- */}
        <div className="space-y-4 text-center">
          <p className="intro-text text-lg md:text-xl font-medium leading-relaxed text-mainColor/80 italic">
            "We operate with a disciplined and structured management approach,
            designed to protect owners, occupants, and assets."
          </p>
          <p className="paragraph leading-relaxed text-mainColor/70 max-w-2xl mx-auto">
            Our process ensures consistency, reliability, and accountability in
            every aspect of property management.
          </p>
        </div>
      </div>

      {/* --- The Blueprint Grid --- */}
      <div className="relative z-10 flex flex-wrap border border-lightColor bg-white shadow-2xl shadow-mainColor/5">
        {sectors.map((sector, i) => {
          const isInitiallyActive = i % 2 !== 0;
          const isActive =
            activeSector === i ? !isInitiallyActive : isInitiallyActive;

          return (
            <div
              key={sector.id}
              onMouseEnter={() => setActiveSector(i)}
              onMouseLeave={() => setActiveSector(null)}
              className={`relative h-[300px] w-full md:w-1/3 border-collapse border border-lightColor transition-all duration-700 ease-in-out cursor-crosshair overflow-hidden group
                ${isActive ? "bg-mainColor text-white" : "bg-white text-mainColor"}
              `}
            >
              {isActive && (
                <PlexusBackground
                  particleCount={25}
                  lineColor="rgba(197, 163, 99, 0.2)"
                  className="opacity-100"
                />
              )}

              {/* Sector ID */}
              <div
                className={`absolute top-4 left-4 text-[9px] font-bold z-20 transition-colors duration-500 
                ${isActive ? "text-mainGold" : "text-lightColor"}`}
              >
                BLOCK_{sector.id}
              </div>

              {/* Corner Icon */}
              <div
                className={`absolute bottom-4 right-4 z-20 transition-all duration-500 
                ${isActive ? "text-mainGold opacity-100" : "text-lightColor opacity-40"}`}
              >
                <Plus
                  size={16}
                  className={`${isActive ? "rotate-90" : "rotate-0"} transition-transform duration-700`}
                />
              </div>

              {/* Content */}
              <div className="h-full flex flex-col justify-center p-8 lg:p-10 relative z-20">
                <div
                  className={`mb-6 transition-all duration-700 
                  ${isActive ? "text-mainGold scale-110" : "text-mainColor opacity-80"}`}
                >
                  {sector.icon}
                </div>

                <h4
                  className={`text-lg font-black uppercase tracking-widest mb-4 transition-colors duration-500
                  ${isActive ? "text-white" : "text-mainColor"}`}
                >
                  {sector.title}
                </h4>

                <div
                  className={`transition-all duration-700 ${isActive ? "opacity-100 translate-y-0" : "opacity-100 translate-y-0"}`}
                >
                  <p
                    className={`paragraph leading-relaxed italic transition-colors duration-500 ${isActive ? "text-white/80" : "text-mainColor/60"}`}
                  >
                    {sector.desc}
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <div
                      className={`h-[1px] w-full relative overflow-hidden ${isActive ? "bg-white/10" : "bg-mainColor/10"}`}
                    >
                      <div
                        className={`absolute inset-0 bg-mainGold ${isActive ? "animate-[loading_2s_ease-in-out_infinite]" : ""}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default PropertyManagement;
