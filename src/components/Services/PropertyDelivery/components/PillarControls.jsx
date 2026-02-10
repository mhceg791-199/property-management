import { ArrowLeft, ArrowRight } from "lucide-react";
import pillars from "../../../../data/services/pillars";

const PillarControls = ({
  activeSlide,
  setActiveSlide,
  prevSlide,
  nextSlide,
}) => {
  return (
    <div className="flex items-center gap-8 md:translate-y-48">
      <button onClick={prevSlide} className="p-4 border border-lightColor/20">
        <ArrowLeft />
      </button>

      <div className="flex gap-2">
        {pillars.map((_, i) => (
          <span
            key={i}
            onClick={() => setActiveSlide(i)}
            className={`h-[2px] cursor-pointer transition-all ${
              activeSlide === i
                ? "w-12 bg-mainGold"
                : "w-4 bg-lightColor/30"
            }`}
          />
        ))}
      </div>

      <button onClick={nextSlide} className="p-4 border border-lightColor/20">
        <ArrowRight />
      </button>
    </div>
  );
};

export default PillarControls;
