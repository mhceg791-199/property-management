const MissionCard = ({ missionRef, rotateSquareRef }) => {
  return (
    <div
      ref={missionRef}
      className="relative bg-white p-8 md:p-12 shadow-xl border-t-4 border-mainGold flex flex-col justify-between"
    >
      <div
        ref={rotateSquareRef}
        className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-16 h-16 md:w-28 md:h-28 bg-mainColor opacity-5 md:opacity-10 rotate-45 -z-10"
      />

      <div>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 md:w-12 h-[2px] bg-mainGold line-draw-inner" />
          <h3 className="text-2xl md:text-4xl font-bold text-mainColor uppercase tracking-tighter">
            Mission
          </h3>
        </div>

        <p className="paragraph font-medium text-gray-700">
          Mosaic Property Management Company Ltd. is dedicated to enhancing the
          success of established mid-cap companies by providing comprehensive
          support, resources, and strategic insight. Through targeted
          acquisitions and a hands-on approach to value creation, we aim to
          build a synergistic portfolio of industry leaders committed to
          innovation, quality, and positive impact in their fields.
        </p>
      </div>

      <div className="mt-8 h-1 w-20 bg-mainGold line-draw-inner" />
    </div>
  );
};

export default MissionCard;
