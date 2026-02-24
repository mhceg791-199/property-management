import PlexusBackground from "../../../shared/PlexusCanvas/PlexusCanvas";

const ScopeNode = ({ sector, index }) => {
  return (
    <div className="kinetic-node h-full">
      <div className="h-full bg-mainColor/80 border border-white/10 backdrop-blur-md p-6 md:p-8 relative group hover:border-mainGold/40 transition-all duration-500 overflow-hidden rounded-sm flex flex-col">
        
        {/* Plexus Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <PlexusBackground
            particleCount={15}
            lineColor="rgba(197, 163, 99, 0.2)"
            className="h-full w-full"
          />
        </div>

        {/* ID Number */}
        <div className="absolute -top-2 -left-2 text-5xl md:text-6xl font-black text-white/5 group-hover:text-mainGold/10 italic leading-none transition-colors">
          {sector.id}
        </div>

        <div className="relative z-10 flex flex-col h-full">
          <div className="text-mainGold mb-4 group-hover:scale-110 transition-transform inline-block">
            {sector.icon}
          </div>

          <h3 className="text-xl font-black uppercase mb-3 tracking-tight text-white group-hover:text-mainGold transition-colors">
            {sector.title}
          </h3>

          {/* flex-grow يضمن أن جميع النصوص تنتهي عند نفس المستوى ليظل ارتفاع الكروت متساوياً */}
          <p className="text-sm text-lightColor/70 font-light leading-relaxed border-l-2 border-mainGold/30 pl-4 italic flex-grow">
            {sector.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScopeNode;