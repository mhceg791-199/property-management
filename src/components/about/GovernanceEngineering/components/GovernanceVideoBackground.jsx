import vid from "../../../../assets/about/vid-about.webm";

const GovernanceVideoBackground = () => {
  return (
    <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full z-0 pointer-events-none">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover opacity-20 lg:opacity-30"
      >
        <source src={vid} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-mainColor via-mainColor/80 lg:via-transparent to-transparent lg:bg-gradient-to-l lg:from-mainColor lg:to-transparent" />
    </div>
  );
};

export default GovernanceVideoBackground;
