const HeroVideo = () => (
  <div
    className="absolute top-0 right-0 w-full lg:w-2/3 h-full z-10 pointer-events-none 
               opacity-20 md:opacity-30 lg:opacity-50"
    style={{
      maskImage: "linear-gradient(to left, black 40%, transparent 100%)",
      WebkitMaskImage: "linear-gradient(to left, black 40%, transparent 100%)",
    }}
  >
    <video autoPlay muted loop playsInline className="w-full h-full object-cover scale-110">
      <source src="/hero.webm" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-gradient-to-t from-mainColor via-mainColor/40 to-transparent" />
  </div>
);

export default HeroVideo;
