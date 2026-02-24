import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
import { Link } from "react-router-dom";
import FloatingHexagons from "./components/FloatingHexagons";
import ZoomableLogo from "./components/ZoomableLogo";

const MosaicOverviewView = ({
  containerRef,
  hexagonsRef,
  logoRef,
  onLogoClick,
  logo,
}) => {
  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-white text-mainColor overflow-hidden font-sans"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-12 pb-24">
        {/* Top HUD */}
        <div className="flex flex-col sm:flex-row justify-between gap-6 mb-12">
          <div className="font-mono text-[10px] text-mainGold tracking-[0.3em] uppercase space-y-1">
            <p className="opacity-60 italic">Subsidiary of Mosaic Holding</p>
            <p className="font-bold border-b border-mainGold/30 pb-1 inline-block">
              Mosaic Property Management
            </p>
          </div>

          <div className="sm:text-right font-mono">
            <p className="text-[10px] text-mainColor/40 uppercase tracking-widest mb-1 font-bold">
              Operational Efficiency
            </p>
            <p className="text-2xl sm:text-3xl font-black">99.8%</p>
          </div>
        </div>

        {/* Hero Title */}
        <div className="relative text-center mb-16">
          <FloatingHexagons hexagonsRef={hexagonsRef} />

          <h2 className="hero-title text-[clamp(2.2rem,7vw,6rem)] font-black leading-[0.9] tracking-tight uppercase italic">
            MOSAIC <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mainColor via-mainGold to-mainColor">
              MANAGEMENT
            </span>
          </h2>
        </div>

        <div className="text-center mb-14">
          <SectionHeader firstWord="Overview" />
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 content-fade">
            <p className="text-mainColor/70 text-lg leading-relaxed">
              Mosaic Property Management is a subsidiary of <br/>
              <Link
                to="https://mosaicholding.com/"
                target="_blank"
                className="font-bold underline decoration-mainGold"
              >
                Mosaic Holding Corporation
              </Link>
              . We are a licensed property management company providing
              comprehensive management, operation, and maintenance services for
              commercial, mixed-use, and institutional properties.
            </p>
          </div>

          <div className="lg:col-span-2 flex justify-center content-fade">
            <ZoomableLogo logoRef={logoRef} logo={logo} onClick={onLogoClick} />
          </div>

          <div className="lg:col-span-5 content-fade lg:text-right">
            <p className="text-mainColor/70 text-lg leading-relaxed">
              We manage assets with a focus on operational efficiency,
              regulatory compliance, and long-term value protection. Backed by
              the Mosaic ecosystem, we combine professional property management
              with access to enhanced technical expertise — ensuring properties
              are managed with depth, structure, and foresight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MosaicOverviewView;
