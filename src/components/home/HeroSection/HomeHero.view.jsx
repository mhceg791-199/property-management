import { ArrowUpRight } from "lucide-react";
import HeroCanvas from "./components/HeroCanvas";
import HeroVideo from "./components/HeroVideo";
import HeroIndicators from "./components/HeroIndicators";

const HomeHeroView = ({
  canvasRef,
  slides,
  currentSlide,
  onSlideChange,
  onNavigate,
}) => {
  const slide = slides[currentSlide];

  return (
    <section className="relative min-h-screen bg-mainColor text-white overflow-hidden font-sans">
      <HeroCanvas canvasRef={canvasRef} />
      <HeroVideo />

      <div className="absolute left-4 md:left-10 bottom-0 hidden sm:block 
                      text-[40vw] md:text-[30vw] font-black 
                      text-white/[0.03] pointer-events-none">
        0{currentSlide + 1}
      </div>

      <main className="relative z-20 max-w-7xl mx-auto px-6 sm:px-10 pt-28 sm:pt-32 lg:pt-48 flex items-center min-h-[80vh]">
        <div className="max-w-5xl slide-content">
          <h1 className="text-[clamp(2rem,7vw,6rem)] font-black leading-[1.05] mb-8">
            <span className="block opacity-90">{slide.line1}</span>
            <span className="block italic" style={{ color: slide.color }}>
              {slide.line2}
            </span>
          </h1>

          <p className="text-white/60 italic mb-12 max-w-2xl border-l pl-6">
            {slide.sub}
          </p>

          <div className="flex flex-col sm:flex-row gap-10 items-start sm:items-center">
            <button
              onClick={onNavigate}
              className="group px-10 py-4 bg-mainGold text-mainColor font-bold flex items-center gap-3"
            >
              Get Started
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
            </button>

            <HeroIndicators
              slides={slides}
              currentSlide={currentSlide}
              onChange={onSlideChange}
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default HomeHeroView;
