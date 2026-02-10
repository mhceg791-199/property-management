import PlexusBackground from "../../shared/PlexusCanvas/PlexusCanvas";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";

import LicensingIconGrid from "./components/LicensingIconGrid";
import LicensingCTA from "./components/LicensingCTA";

const MosaicLicensingView = ({
  sectionRef,
  slideContentRef,
  bgIconRef,
  slides,
  activeSlide,
  setActiveSlide,
  onNavigate,
}) => {
  return (
    <section
      ref={sectionRef}
      className="relative w-full py-20 px-4 md:px-10 bg-slate-50 overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto bg-white border border-slate-200 shadow-2xl rounded-lg flex flex-col lg:flex-row overflow-hidden">
        {/* LEFT */}
        <div className="w-full lg:w-[55%] p-6 sm:p-10 lg:p-16 relative z-10">
          <SectionHeader
            firstWord="Licensed Property"
            secondWord="Management"
          />

          <div className="mt-8 space-y-6 max-w-xl">
            <p className="paragraph italic border-l-4 border-mainColor/30 pl-4 text-mainColor/80">
              Mosaic Property Management operates as a licensed property
              management company, in compliance with applicable regulatory,
              operational, and reporting requirements.
            </p>
            <p className="paragraph text-mainColor/70">
              Licensing reflects our commitment to professionalism, governance,
              and accountability. Owners can trust that their properties are
              managed responsibly, transparently, and within established legal
              and professional frameworks.
            </p>
          </div>

          <LicensingIconGrid />
        </div>

        {/* RIGHT */}
        <div className="relative w-full lg:w-[45%] bg-mainColor flex items-center justify-center py-20 px-6 overflow-hidden">
          <PlexusBackground
            particleCount={30}
            lineColor="rgba(197,163,99,0.5)"
            className="absolute inset-0 opacity-90"
          />

          <div
            ref={bgIconRef}
            className="absolute inset-0 flex items-center justify-center text-white pointer-events-none translate-x-1/4 translate-y-1/4"
          >
            {slides[activeSlide].bgIcon}
          </div>

          <div
            ref={slideContentRef}
            className="relative z-10 flex flex-col items-center text-center"
          >
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 mb-8">
              <div className="absolute inset-0 border-2 border-dashed border-mainGold/30 rounded-full animate-[spin_18s_linear_infinite]" />
              <div className="absolute inset-3 border border-mainGold/20 rounded-full" />
              <div className="absolute inset-6 bg-mainGold rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(197,163,99,0.35)]">
                {slides[activeSlide].icon}
              </div>
            </div>

            <h4 className="text-mainGold font-black tracking-[0.45em] uppercase text-xs sm:text-sm">
              {slides[activeSlide].title}
            </h4>

            <div className="flex gap-3 mt-10">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveSlide(idx)}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    activeSlide === idx ? "w-12 bg-mainGold" : "w-4 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <LicensingCTA onNavigate={onNavigate} />
    </section>
  );
};

export default MosaicLicensingView;
