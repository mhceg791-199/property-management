import PlexusBackground from "../../../shared/PlexusCanvas/PlexusCanvas";

const GovernancePlexusOverlay = () => {
  const isDesktop = window.innerWidth > 1024;

  return (
    <div
      className="absolute top-0 left-0 w-full lg:w-1/2 h-full z-10 pointer-events-none border-t-2 border-mainGold/20"
      style={{
        maskImage: isDesktop
          ? "linear-gradient(to right, black 70%, transparent 100%)"
          : "linear-gradient(to bottom, black 50%, transparent 100%)",
        WebkitMaskImage: isDesktop
          ? "linear-gradient(to right, black 70%, transparent 100%)"
          : "linear-gradient(to bottom, black 50%, transparent 100%)",
      }}
    >
      <PlexusBackground
        particleCount={isDesktop ? 40 : 20}
        lineColor="rgba(197, 163, 99, 0.4)"
        className="opacity-100"
      />
    </div>
  );
};

export default GovernancePlexusOverlay;
