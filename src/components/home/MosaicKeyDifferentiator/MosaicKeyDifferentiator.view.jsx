import { ChevronRight } from "lucide-react";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
import { Fragment } from "react";

const MosaicKeyDifferentiatorView = ({
  technicalData,
  activeIdx,
  isPaused,
  duration,
  imageRef,
  cardRef,
  onActivate,
  onDeactivate,
}) => {
  return (
    <section className="relative text-mainColor overflow-hidden py px-4 md:px-12 font-mono">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
        {/* LEFT */}
        <div className="lg:col-span-5 space-y-10">
          <div>
            <SectionHeader firstWord="Our Key" secondWord="Differentiator" />

            <h3 className="text-mainGold font-bold mt-6 mb-4 text-[clamp(1rem,3vw,1.25rem)]">
              Access to Enhanced Engineering Services
            </h3>

            <p className="italic text-mainColor/70 border-l-4 border-mainColor/30 pl-4 paragraph leading-relaxed">
              What sets{" "}
              <span className="font-bold text-mainColor">
                Mosaic Property Management
              </span>{" "}
              apart is access to integrated technical expertise through the
              subsidiaries of Mosaic Holding.
            </p>
          </div>

          {/* SELECTOR */}
          <div className="space-y-2 pt-4">
            {technicalData.map((item, idx) => {
              const isActive = activeIdx === idx;

              return (
                <button
                  key={idx}
                  onMouseEnter={() => onActivate(idx)}
                  onMouseLeave={onDeactivate}
                  onClick={() => onActivate(idx)}
                  className={`group relative w-full flex items-center gap-4 px-4 py-3 border-l-4 transition-all duration-300
                    ${
                      isActive
                        ? "border-mainGold translate-x-1"
                        : "border-transparent hover:border-mainColor/10"
                    }`}
                >
                  {isActive && (
                    <div
                      className="absolute inset-0 bg-mainGold/10 -z-10 origin-left"
                      style={{
                        animation: isPaused
                          ? "none"
                          : `fillProgress ${duration}ms linear infinite`,
                      }}
                    />
                  )}

                  <span
                    className={`text-[10px] font-bold transition-colors
                      ${isActive ? "text-mainGold" : "text-mainColor/30"}`}
                  >
                    0{idx + 1}
                  </span>

                  <span
                    className={`uppercase tracking-widest text-xs md:text-sm font-black transition-colors
                      ${isActive ? "text-mainColor" : "text-mainColor/40"}`}
                  >
                    {item.title}
                  </span>
                  {isActive && (
                    <span
                      className={`text-[12px] font-bold transition-all duration-300
      ${isActive ? "opacity-100 text-mainGold" : "opacity-40 text-mainColor"}`}
                    >
                      PROVIDED BY:
                      {technicalData[activeIdx].companies.map(
                        (company, idx) => (
                          <Fragment key={idx}> {company.name} </Fragment>
                        ),
                      )}
                    </span>
                  )}

                  {isActive && (
                    <ChevronRight
                      size={16}
                      className="ml-auto text-mainGold animate-pulse"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-6 border-t border-mainColor/10">
            <p className="text-mainColor/70 paragraph leading-relaxed">
              This allows us to address issues at their root, support informed
              decision-making, and manage properties with a deeper technical
              understanding — particularly for complex, aging, or multi-tenant
              assets.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:col-span-7 flex justify-center items-center relative">
          <div
            ref={cardRef}
            className="relative w-full max-w-[520px] min-h-[330px] md:min-h-[420px] bg-white border border-mainColor/10 shadow-2xl overflow-hidden"
          >
            <div className="relative w-full h-full p-6 md:p-8 bg-mainColor/5 flex items-center justify-center">
              <img
                ref={imageRef}
                src={technicalData[activeIdx].image}
                alt={technicalData[activeIdx].title}
                className="max-w-full max-h-full object-contain"
              />

              <span className="absolute top-4 right-4 bg-mainGold px-3 py-1 text-[9px] md:text-[10px] font-bold text-white tracking-widest">
                {technicalData[activeIdx].code}
              </span>

              <div className="absolute bottom-4 left-4 p-3 bg-mainColor text-white shadow-xl">
                {technicalData[activeIdx].icon}
              </div>

              {/* Company Badge */}
              <div className="absolute top-4 left-4 space-y-1">
                {technicalData[activeIdx].companies.map((company, idx) => (
                  <a
                    key={idx}
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white/95 backdrop-blur-sm px-3 py-1.5 text-sm md:text-xl font-bold text-mainColor tracking-wide border-l-2 border-mainGold shadow-md hover:bg-mainGold hover:text-white transition"
                  >
                    {company.name}
                  </a>
                ))}
              </div>

              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-mainGold/40" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-mainGold/40" />
            </div>
          </div>

          <div className="absolute -bottom-6 md:bottom-16 -right-6 md:right-16 w-full max-w-[520px] min-h-[400px] border border-mainGold/20 -z-10" />
        </div>
      </div>
    </section>
  );
};

export default MosaicKeyDifferentiatorView;
