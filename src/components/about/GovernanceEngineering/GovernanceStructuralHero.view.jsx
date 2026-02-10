import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
import principles from "../../../data/about/principles";
import GovernanceVideoBackground from "./components/GovernanceVideoBackground";
import GovernancePlexusOverlay from "./components/GovernancePlexusOverlay";

const GovernanceStructuralHeroView = ({ containerRef }) => {
  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-mainColor text-lightColor overflow-hidden font-sans flex items-center"
    >
      {/* Plexus Overlay */}
      <GovernancePlexusOverlay />

      {/* Video Background */}
      <GovernanceVideoBackground />

      {/* Main Content */}
      <div className="relative z-30 container mx-auto px-6 py-24 lg:py-0">
        <div className="w-full max-w-5xl">
          {/* Header */}
          <div className="gov-animate mb-12">
            <SectionHeader
              firstWord="Professional Standards"
              secondWord="& Governance"
            />
          </div>

          <div className="space-y-8 lg:space-y-12">
            {/* Intro */}
            <p className="gov-animate text-base md:text-xl opacity-85 italic max-w-xl border-l-4 border-mainGold/60 pl-6 leading-relaxed">
              Our operations are guided by clearly defined policies, procedures,
              and professional standards.
            </p>

            <p className="gov-animate text-base md:text-lg opacity-90 font-medium">
              Mosaic Property Management operates with a governance framework
              designed to ensure:
            </p>

            {/* Principles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-3xl relative z-40">
              {principles.map((p, i) => (
                <div
                  key={i}
                  className="gov-animate flex items-center gap-4 bg-white/[0.03] backdrop-blur-sm p-4 md:p-5 border border-white/10 hover:border-mainGold/50 hover:bg-white/[0.08] transition-all duration-500 group"
                >
                  <span className="text-mainGold group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {p.icon}
                  </span>
                  <span className="text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-lightColor">
                    {p.text || p.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Closing */}
            <p className="gov-animate text-sm md:text-base lg:text-lg opacity-70 leading-relaxed max-w-3xl">
              These principles shape our internal culture and ensure that we
              operate with
              <span className="text-white font-bold ml-2">
                integrity, transparency, and reliability
              </span>{" "}
              — for property owners, tenants, and stakeholders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceStructuralHeroView;
