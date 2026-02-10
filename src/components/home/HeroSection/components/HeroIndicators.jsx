const HeroIndicators = ({ slides, currentSlide, onChange }) => (
  <div className="flex gap-3 sm:gap-4">
    {slides.map((_, i) => (
      <button key={i} onClick={() => onChange(i)} className="relative py-3">
        <div
          className={`transition-all duration-700 rounded-full ${
            currentSlide === i
              ? "w-12 sm:w-16 bg-mainGold h-[3px]"
              : "w-4 bg-white/20 h-[3px]"
          }`}
        />
      </button>
    ))}
  </div>
);

export default HeroIndicators;
