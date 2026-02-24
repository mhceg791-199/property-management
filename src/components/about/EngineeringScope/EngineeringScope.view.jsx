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
          backgroundSize: typeof window !== 'undefined' && window.innerWidth > 768 ? "80px 80px" : "40px 40px",
        }}
      />

      <div ref={triggerRef} className="max-w-7xl mx-auto relative">
        <ScopeHeader />

        {/* التعديل هنا: استخدام grid ليعرض 3 أعمدة في الشاشات الكبيرة */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10 mb-10 md:mb-20">
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
