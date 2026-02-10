import PlexusBackground from "../../../shared/PlexusCanvas/PlexusCanvas";

const ScopeNode = ({ sector, index }) => {
  return (
    <div
      className={`kinetic-node flex flex-col ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } items-center justify-between gap-6 md:gap-16 lg:gap-24`}
    >
      <div className="flex-1 w-full bg-mainColor/80 border border-white/10 backdrop-blur-md p-6 md:p-10 relative group hover:border-mainGold/40 transition-all duration-500 overflow-hidden rounded-sm">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40 md:opacity-100">
          <PlexusBackground
            particleCount={window.innerWidth > 768 ? 20 : 10}
            lineColor="rgba(197, 163, 99, 0.2)"
            className="h-full w-full"
          />
        </div>

        <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 text-5xl md:text-7xl font-black text-white/5 group-hover:text-mainGold/10 italic leading-none">
          {sector.id}
        </div>

        <div className="relative z-10">
          <div className="text-mainGold mb-4 md:mb-6 group-hover:scale-110 transition-transform inline-block">
            {sector.icon}
          </div>

          <h3 className="text-xl md:text-3xl font-black uppercase mb-3 md:mb-4 tracking-tight text-white group-hover:text-mainGold transition-colors">
            {sector.title}
          </h3>

          <p className="text-sm md:text-base text-lightColor/70 font-light leading-relaxed border-l-2 md:border-l-4 border-mainGold/30 pl-4 md:pl-6 italic">
            {sector.desc}
          </p>
        </div>
      </div>

      <div className="flex-1 hidden md:block" />
    </div>
  );
};

export default ScopeNode;
