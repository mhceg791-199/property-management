import { useEffect } from "react";
import gsap from "gsap";
import { Scale, ShieldCheck, FileCheck, Award } from "lucide-react";
import vid from "../../../assets/about/vid-about.mp4";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
import PlexusBackground from "../../shared/PlexusCanvas/PlexusCanvas";

const GovernanceStructuralHero = () => {
  useEffect(() => {
    gsap.from(".gov-animate", {
      opacity: 0,
      y: 60,
      stagger: 0.15,
      duration: 1.4,
      ease: "power4.out",
      delay: 0.4,
    });
  }, []);

  const principles = [
    { text: "Ethical Conduct", icon: <Scale size={18} /> },
    { text: "Regulatory Compliance", icon: <ShieldCheck size={18} /> },
    { text: "Professional Accountability", icon: <FileCheck size={18} /> },
    { text: "Ongoing Development", icon: <Award size={18} /> },
  ];

  return (
    <div className="relative min-h-screen bg-mainColor text-lightColor overflow-hidden font-sans">
      {/* 1. الحاوية الخاصة بالـ Plexus (الجزء الأيسر فقط) */}
      <div
        className="absolute top-0 left-0 w-full lg:w-1/2 h-full z-0 pointer-events-none"
        style={{
          maskImage: "linear-gradient(to right, black 70%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 70%, transparent 100%)",
        }}
      >
        <PlexusBackground
          particleCount={45}
          lineColor="rgba(197, 163, 99, 0.5)"
          className="opacity-100"
        />
      </div>

      {/* 2. Background Video (الجزء الأيمن) */}
      <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full z-10 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src={vid} type="video/mp4" />
        </video>
        {/* تدرج لوني لمنع التداخل مع الجزء الأيسر */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-mainColor via-transparent to-transparent hidden lg:block" /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-mainColor via-transparent to-transparent" />
      </div>

      {/* 3. Main Content Area */}
      <div className="relative z-20 container mx-auto px-6 min-h-screen flex items-center">
        <div className="w-full">
          <div className="space-y-10">
            <div className="gov-animate mb-10">
              <SectionHeader
                firstWord=" Professional Standards "
                secondWord="& Governance"
              />
            </div>

            <p className="gov-animate text-lg opacity-80 italic max-w-xl border-l-4 border-mainGold/40 pl-6 text-lightColor">
              Our operations are guided by clearly defined policies, procedures,
              and professional standards.
            </p>

            <p className="gov-animate text-lg opacity-90 leading-relaxed text-lightColor">
              Mosaic Property Management operates with a governance framework
              designed to ensure:
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-2xl">
              {principles.map((p, i) => (
                <div
                  key={i}
                  className="gov-animate flex items-center gap-3 text-sm font-bold uppercase tracking-wide bg-white/5 p-4 border border-white/10 hover:border-mainGold transition-colors duration-300 group"
                >
                  <span className="text-mainGold group-hover:scale-110 transition-transform duration-300">
                    {p.icon}
                  </span>
                  {p.text}
                </div>
              ))}
            </div>

            <p className="gov-animate text-lg opacity-70 leading-relaxed mt-12 max-w-4xl">
              These principles shape our internal culture and ensure that we
              operate with
              <span className="text-white font-bold">
                {" "}
                integrity, transparency, and reliability
              </span>
              — for property owners, tenants, and stakeholders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceStructuralHero;
