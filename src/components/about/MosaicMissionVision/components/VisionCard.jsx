import PlexusBackground from "../../../shared/PlexusCanvas/PlexusCanvas";

const VisionCard = ({ visionRef, shakeSquareRef }) => {
  return (
    <div
      ref={visionRef}
      className="relative bg-mainColor p-8 md:p-12 shadow-xl text-white lg:translate-y-16 border-b-4 border-mainGold"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <PlexusBackground
          particleCount={35}
          lineColor="rgba(197, 163, 99, 0.5)"
          className="opacity-50"
        />
      </div>

      <div
        ref={shakeSquareRef}
        className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-16 h-16 md:w-24 md:h-24 border-2 md:border-4 border-mainGold/30 rotate-12 z-[1]"
      />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 md:w-12 h-[2px] bg-mainGold line-draw-inner" />
          <h3 className="text-2xl md:text-4xl font-bold text-mainGold uppercase tracking-tighter">
            Vision
          </h3>
        </div>

        <p className="paragraph font-medium text-blue-50/90">
          To become a premier force in fostering innovation and excellence
          across critical industries, empowering our portfolio companies to
          achieve unprecedented growth through strategic investment, operational
          expertise, and a steadfast commitment to sustainable development.
        </p>

        <div className="mt-8 flex gap-2">
          <div className="h-1 w-10 bg-mainGold line-draw-inner" />
          <div className="h-1 w-5 bg-mainGold opacity-40 line-draw-inner" />
        </div>
      </div>
    </div>
  );
};

export default VisionCard;
