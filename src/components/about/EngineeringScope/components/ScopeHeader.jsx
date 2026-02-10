import SectionHeader from "../../../shared/SectionHeaders/SectionHeader";

const ScopeHeader = () => {
  return (
    <div className="relative z-10 max-w-4xl mx-auto text-center mb-12 md:mb-20">
      <div className="mb-6 md:mb-10 inline-block w-full">
        <SectionHeader
          firstWord="Our Scope"
          secondWord="& Specialization"
        />
      </div>

      <div className="main-title-part relative p-1 inline-block w-full max-w-3xl">
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-mainGold hidden md:block" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-mainGold hidden md:block" />

        <div className="bg-white/[0.02] backdrop-blur-sm border border-white/5 px-4 py-6 md:px-8 md:py-8">
          <p className="text-base md:text-xl font-light leading-relaxed text-lightColor opacity-80 italic">
            Mosaic Property Management focuses{" "}
            <span className="text-white font-bold underline decoration-mainGold underline-offset-4">
              exclusively
            </span>{" "}
            on professional property management and operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScopeHeader;
