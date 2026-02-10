import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
import MissionCard from "./components/MissionCard";
import VisionCard from "./components/VisionCard";

const MosaicMissionVisionView = ({
  sectionRef,
  missionRef,
  visionRef,
  rotateSquareRef,
  shakeSquareRef,
}) => {
  return (
    <section
      ref={sectionRef}
      className="bg-[#f5f2ed] min-h-screen py-12 px-4 md:px-12 lg:px-20 overflow-hidden relative flex flex-col justify-center"
    >
      {/* Blueprint Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10 md:opacity-20">
        <div className="blueprint-line-h absolute top-[10%] w-full h-px bg-mainColor" />
        <div className="blueprint-line-h absolute top-[90%] w-full h-px bg-mainColor" />
        <div className="blueprint-line-v absolute left-[5%] md:left-[10%] w-px md:w-[2px] h-full bg-mainColor" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-20">
        <header className="mb-12 md:mb-24 text-center">
          <SectionHeader firstWord="Our Mission &" secondWord="Vision" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 lg:gap-32">
          <MissionCard
            missionRef={missionRef}
            rotateSquareRef={rotateSquareRef}
          />

          <VisionCard
            visionRef={visionRef}
            shakeSquareRef={shakeSquareRef}
          />
        </div>
      </div>
    </section>
  );
};

export default MosaicMissionVisionView;
