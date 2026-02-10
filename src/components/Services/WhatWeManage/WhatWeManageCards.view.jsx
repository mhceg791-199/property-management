import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
import manageItems from "../../../data/about/manageItems";
import ManageCard from "./components/ManageCard";
import DecorativeSquares from "./components/DecorativeSquares";

const WhatWeManageCardsView = ({
  sectionRef,
  rotateSquareRef,
  shakeSquareRef,
}) => {
  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f7f7f5] py-12 px-6 overflow-hidden text-mainColor font-sans"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#C5A363 1px, transparent 1px), linear-gradient(90deg, #C5A363 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-4 md:mb-8">
          <div className="text-center md:text-left mb-6">
            <SectionHeader firstWord="What We" secondWord="Manage" />
          </div>
          <p className="text-mainColor/60 text-sm md:text-base border-l-4 border-mainGold/40 pl-4 md:pl-6 italic max-w-2xl mx-auto md:mx-0">
            Our focus is clear and intentional.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-8 relative">
          <DecorativeSquares
            rotateSquareRef={rotateSquareRef}
            shakeSquareRef={shakeSquareRef}
          />

          {manageItems.map((item, index) => (
            <ManageCard key={index} item={item} />
          ))}
        </div>

        {/* Exclusion */}
        <p className="exclusion-panel text-[10px] md:text-xs tracking-[0.3em] text-mainGold/50 max-w-2xl uppercase mb-6 font-bold">
          We do not engage in residential sales, condominium sales, or
          condominium management.
        </p>

        <p className="paragraph font-bold text-mainColor/70 leading-relaxed max-w-3xl">
          Our services are dedicated exclusively to property management and
          operations.
        </p>
      </div>
    </section>
  );
};

export default WhatWeManageCardsView;
