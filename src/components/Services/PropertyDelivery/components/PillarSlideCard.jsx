import PlexusBackground from "../../../shared/PlexusCanvas/PlexusCanvas";

const PillarSlideCard = ({ pillar }) => {
  return (
    <div className="slide-content-box bg-white/5 backdrop-blur-xl border border-lightColor/10 p-12 relative min-h-[520px] flex flex-col justify-between">
      <PlexusBackground
        particleCount={45}
        lineColor="rgba(197, 163, 99, 0.5)"
      />

      <div className="flex justify-between mb-12">
        <div className="p-4 bg-mainGold/10 text-mainGold">
          {pillar.icon}
        </div>
        <span className="text-6xl font-black italic text-lightColor/10">
          {pillar.id}
        </span>
      </div>

      <h3 className="text-2xl font-black uppercase mb-8">
        {pillar.title}
      </h3>

      <ul className="space-y-4">
        {pillar.content.map((item, idx) => (
          <li key={idx} className="flex gap-4 text-lightColor/70">
            <span className="w-1.5 h-1.5 bg-mainGold rotate-45 mt-1.5" />
            <span className="uppercase tracking-wide text-sm">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PillarSlideCard;
