import { ClipboardList, ArrowUp } from "lucide-react";
import PlexusBackground from "../../shared/PlexusCanvas/PlexusCanvas";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
import services from "../../../data/home/Services";
import useMosaicWhatWeDo from "./hooks/useMosaicWhatWeDo";

const MosaicWhatWeDo = () => {
  const {
    sectionRef,
    sliderRef,
    handlePreviousService,
  } = useMosaicWhatWeDo(services);

  const displayServices = [...services, ...services];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 bg-mainColor text-lightColor overflow-hidden"
    >
      {/* CAD Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#e9d9c5 1px, transparent 1px), linear-gradient(90deg, #e9d9c5 1px, transparent 1px)",
          backgroundSize: window.innerWidth > 768 ? "60px 60px" : "30px 30px",
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 mb-12 md:mb-20 items-end">
          <div className="lg:col-span-7">
            <div className="mb-6 md:mb-10">
              <SectionHeader firstWord="What We" secondWord="Do" />
            </div>

            <h3 className="reveal-text text-4xl sm:text-5xl md:text-7xl font-black leading-none uppercase tracking-tight text-lightColor">
              Disciplined <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mainGold to-lightColor/40 italic">
                Operations
              </span>
            </h3>
          </div>

          <div className="lg:col-span-5 border-l-2 md:border-l-4 border-lightColor/20 pl-4 md:pl-8">
            <p className="text-sm md:text-lg text-lightColor/60 leading-relaxed font-light">
              Mosaic Property Management delivers end-to-end property management
              services designed to ensure the efficient operation and proper
              stewardship of real estate assets.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-px border border-lightColor/10 bg-lightColor/10 overflow-hidden rounded-sm">
          {/* Left */}
          <div className="static-content bg-mainColor p-8 md:p-12 lg:p-20 relative overflow-hidden flex flex-col justify-center min-h-[300px]">
            <PlexusBackground
              particleCount={window.innerWidth > 768 ? 25 : 15}
              lineColor="rgba(197, 163, 99, 0.2)"
              className="opacity-100"
            />
            <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-mainGold/5 rounded-full blur-[80px] md:blur-[100px] -mr-24 -mt-24 md:-mr-32 md:-mt-32" />

            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-4 md:mb-8 flex items-center gap-4 text-lightColor">
                <ClipboardList className="text-mainGold" size={24} />
                Strategic Core
              </h3>
              <p className="text-sm md:text-lg text-lightColor/70 leading-relaxed md:leading-loose font-light">
                All services are delivered within approved budgets, documented
                procedures, and clear owner directives.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="bg-mainColor p-8 md:p-12 lg:p-20 flex flex-col justify-center relative min-h-[450px] md:min-h-[500px]">
            <div className="relative h-[280px] md:h-[330px] overflow-hidden z-10">
              <div ref={sliderRef} className="flex flex-col gap-6 md:gap-8">
                {displayServices.map((item, i) => {
                  const isOriginal = i < services.length;
                  return (
                    <div
                      key={i}
                      className="service-node flex gap-4 md:gap-6 h-20 items-start group transition-opacity duration-300"
                    >
                      <div className="text-mainGold shrink-0 p-2 md:p-3 bg-lightColor/5 border border-lightColor/10 rounded-sm group-hover:bg-mainGold/10 transition-all">
                        {item.icon}
                      </div>

                      <div className="flex-1">
                        <p className="font-bold uppercase text-[10px] md:text-sm tracking-[0.1em] md:tracking-[0.15em] mb-3 md:mb-4 text-lightColor group-hover:text-mainGold transition-colors">
                          {item.desc}
                        </p>

                        {isOriginal && (
                          <div className="w-full h-[1px] bg-lightColor/10 relative overflow-hidden">
                            <div
                              className={`progress-bar-${i} absolute top-0 left-0 h-full bg-mainGold w-0 shadow-[0_0_8px_rgba(197,163,99,0.5)]`}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              onClick={handlePreviousService}
              className="absolute bottom-4 right-4 md:bottom-8 md:right-10 z-30 group flex flex-col items-center gap-2 active:scale-90 transition-transform"
            >
              <div className="p-3 md:p-4 bg-lightColor/5 rounded-full border border-lightColor/10 group-hover:border-mainGold transition-all">
                <ArrowUp
                  size={20}
                  className="text-lightColor/60 group-hover:text-mainGold transition-colors"
                />
              </div>
              <span className="text-[7px] md:text-[8px] font-mono uppercase tracking-[0.3em] text-lightColor/30 group-hover:text-mainGold">
                Prev_Module
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MosaicWhatWeDo;
