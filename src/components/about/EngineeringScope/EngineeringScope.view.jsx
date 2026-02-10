import sectors from "../../../data/about/sectors";
import ScopeHeader from "./components/ScopeHeader";
import ScopeNode from "./components/ScopeNode";
import FocusStatement from "./components/FocusStatement";

const EngineeringScopeView = ({ containerRef, triggerRef }) => {
  return (
    <section
      ref={containerRef}
      className="relative bg-mainColor py-16 md:py-24 px-4 md:px-8 overflow-hidden text-lightColor font-mono"
    >
      <div
        className="bg-grid absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #C5A363 1px, transparent 1px), linear-gradient(to bottom, #C5A363 1px, transparent 1px)`,
          backgroundSize: window.innerWidth > 768 ? "80px 80px" : "40px 40px",
        }}
      />

      <div ref={triggerRef} className="max-w-7xl mx-auto relative">
        <ScopeHeader />

        <div className="space-y-8 md:space-y-24 relative z-10 mb-10 md:mb-20">
          <div className="central-spine absolute left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-b from-mainGold via-mainGold/40 to-transparent h-full z-0 hidden md:block" />

          {sectors.map((sector, i) => (
            <ScopeNode key={i} sector={sector} index={i} />
          ))}
        </div>

        <FocusStatement />
      </div>
    </section>
  );
};

export default EngineeringScopeView;
