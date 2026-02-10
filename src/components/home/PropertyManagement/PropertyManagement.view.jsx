import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
import SectorCard from "./components/SectorCard";

const PropertyManagementView = ({
  containerRef,
  sectors,
  activeSector,
  setActiveSector,
}) => {
  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-white text-mainColor p-6 md:p-12 overflow-hidden font-mono"
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto text-center relative z-10 mb-12">
        <h2 className="heading mb-6">
          <SectionHeader
            firstWord="How We"
            secondWord="Manage Properties"
          />
        </h2>

        <div className="space-y-4">
          <p className="intro-text text-lg md:text-xl italic text-mainColor/80">
            "We operate with a disciplined and structured management approach,
            designed to protect owners, occupants, and assets."
          </p>

          <p className="paragraph text-mainColor/70 max-w-3xl mx-auto">
          This approach ensures consistency, accountability, and long-term operational reliability.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="relative z-10 flex flex-wrap border border-lightColor bg-white shadow-2xl shadow-mainColor/5">
        {sectors.map((sector, i) => (
          <SectorCard
            key={sector.id}
            sector={sector}
            index={i}
            activeSector={activeSector}
            setActiveSector={setActiveSector}
          />
        ))}
      </div>
    </section>
  );
};

export default PropertyManagementView;
