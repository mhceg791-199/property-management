import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
import pillars from "../../../data/services/pillars";
import PillarControls from "./components/PillarControls";
import PillarSlideCard from "./components/PillarSlideCard";
import BackgroundGrid from "./components/BackgroundGrid";

const MosaicPillarSliderView = ({
  containerRef,
  activeSlide,
  setActiveSlide,
  nextSlide,
  prevSlide,
  autoPlayRef,
}) => {
  return (
    <section
      ref={containerRef}
      onMouseEnter={() => clearInterval(autoPlayRef.current)}
      onMouseLeave={() => (autoPlayRef.current = setInterval(nextSlide, 5000))}
      className="relative min-h-screen bg-mainColor text-lightColor flex items-center overflow-hidden py-24 px-6"
    >
      <div className="bg-number absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black italic text-lightColor pointer-events-none">
        {pillars[activeSlide].id}
      </div>

      <BackgroundGrid />

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-16">
        {/* Left */}
        <div className="lg:col-span-5 space-y-10">
          <div className="flex items-center gap-4 text-mainGold mb-4">
            <span className="w-10 h-[2px] bg-mainGold" />
            <span className="text-xs uppercase tracking-[0.35em]">
              Property Management
            </span>
          </div>

          <SectionHeader firstWord="How We Deliver" />

          <p className="text-lg opacity-80 max-w-xl border-l-4 border-mainGold/40 pl-6">
            Property management is not a single task. It is a system of
            coordinated responsibilities. Our services are structured around
            four integrated pillars.
          </p>

          <PillarControls
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
            prevSlide={prevSlide}
            nextSlide={nextSlide}
          />
        </div>

        {/* Right */}
        <div className="lg:col-span-7">
          <PillarSlideCard pillar={pillars[activeSlide]} />

          <p className="mt-5 text-lightColor text-xl leading-loose">
            Each pillar operates within clearly defined management agreements,
            approved budgets and professional standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MosaicPillarSliderView;
