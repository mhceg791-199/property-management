import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
import TechnicalPillarsGrid from "./components/TechnicalPillarsGrid";

const MosaicApproachView = ({
  containerRef,
  technicalPillars,
}) => {
  return (
    <section
      ref={containerRef}
      className="relative bg-mainColor py-20 px-4 sm:px-8 lg:px-16 text-lightColor overflow-hidden"
    >
      {/* Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #C5A363 1px, transparent 1px), linear-gradient(to bottom, #C5A363 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10">
        {/* LEFT */}
        <div className="space-y-8">
          <div className="content-fade">
            <SectionHeader
              firstWord="Why Our"
              secondWord="Approach is Different"
            />
          </div>

          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-mainGold uppercase leading-tight content-fade">
            Most property managers coordinate. <br />
            <span className="text-lightColor font-light">
              We manage with depth.
            </span>
          </h3>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed border-l-4 border-mainGold/40 pl-5 content-fade">
            As part of the Mosaic platform, Mosaic Property Management provides
            owners with access to enhanced engineering and technical expertise.
          </p>

          <TechnicalPillarsGrid pillars={technicalPillars} />

          <p className="text-gray-500 text-sm sm:text-base content-fade">
            This approach enables accurate diagnosis, informed decision-making,
            reduced operational risk, and disciplined long-term performance.
          </p>
        </div>

        {/* RIGHT */}
        <div className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-[620px]">
          <div className="eng-layer absolute inset-0 bg-white/[0.02] md:mt-2 md:ml-4 border border-white/10 p-6 backdrop-blur-sm">
            <span className="text-[10px] font-mono opacity-30">
              Property Management
            </span>
          </div>

          <div className="eng-layer absolute inset-4 sm:inset-6 lg:inset-10 bg-white/[0.03] border border-white/10 shadow-2xl p-6 sm:p-10 flex flex-col justify-center gap-6">
            <div className="draw-line absolute left-6 top-8 bottom-8 w-px bg-mainGold/40" />

            {technicalPillars.map((p, i) => (
              <div key={i} className="flex items-center gap-5">
                <div className="w-9 h-9 ms-4 rounded-full bg-mainColor border border-mainGold flex items-center justify-center text-mainGold">
                  {p.icon}
                </div>
                <span className="text-base sm:text-lg font-black uppercase tracking-[0.18em]">
                  {p.name}
                </span>
              </div>
            ))}
          </div>

          <div className="eng-layer absolute inset-10 lg:inset-20 border-4 lg:border-8 border-mainGold/50 hidden md:block" />
        </div>
      </div>
    </section>
  );
};

export default MosaicApproachView;
