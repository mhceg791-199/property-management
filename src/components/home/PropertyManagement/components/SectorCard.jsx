import { Plus } from "lucide-react";
import PlexusBackground from "../../../shared/PlexusCanvas/PlexusCanvas";

const SectorCard = ({
  sector,
  index,
  activeSector,
  setActiveSector,
}) => {
  const isInitiallyActive = index % 2 !== 0;
  const isActive =
    activeSector === index ? !isInitiallyActive : isInitiallyActive;

  return (
    <div
      onMouseEnter={() => setActiveSector(index)}
      onMouseLeave={() => setActiveSector(null)}
      className={`relative h-[300px] w-full md:w-1/3 border-collapse border border-lightColor
        transition-all duration-700 ease-in-out cursor-crosshair overflow-hidden group
        ${isActive ? "bg-mainColor text-white" : "bg-white text-mainColor"}
      `}
    >
      {isActive && (
        <PlexusBackground
          particleCount={25}
          lineColor="rgba(197, 163, 99, 0.4)"
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
          className={`transition-transform duration-700 ${
            isActive ? "rotate-90" : "rotate-0"
          }`}
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

        <p
          className={`paragraph leading-relaxed italic transition-colors duration-500
          ${isActive ? "text-white/80" : "text-mainColor/70"}`}
        >
          {sector.desc}
        </p>

        <div className="mt-6">
          <div
            className={`h-[1px] w-full relative overflow-hidden
            ${isActive ? "bg-white/10" : "bg-mainColor/10"}`}
          >
            <div
              className={`absolute inset-0 bg-mainGold ${
                isActive ? "animate-[loading_2s_ease-in-out_infinite]" : ""
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectorCard;
