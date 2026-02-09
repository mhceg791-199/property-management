import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
import PlexusBackground from "../../shared/PlexusCanvas/PlexusCanvas";

gsap.registerPlugin(ScrollTrigger);

const MosaicMissionVision = () => {
  const sectionRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const rotateSquareRef = useRef(null);
  const shakeSquareRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.from(".blueprint-line-h", {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          scaleX: 0,
          opacity: 0,
          duration: 2.5,
          stagger: 0.4,
          ease: "expo.inOut",
        });

        gsap.from(".blueprint-line-v", {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          scaleY: 0,
          opacity: 0,
          duration: 2.5,
          delay: 0.5,
          ease: "expo.inOut",
        });
      });

      gsap.to(rotateSquareRef.current, {
        rotation: 360 + 45,
        duration: 12,
        repeat: -1,
        ease: "none",
      });

      gsap.to(shakeSquareRef.current, {
        x: "+=10",
        y: "-=10",
        rotation: "+=5",
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      [missionRef, visionRef].forEach((ref) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        });

        tl.from(ref.current, {
          y: 50,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        })
          .from(
            ref.current.querySelectorAll(".line-draw-inner"),
            {
              width: 0,
              duration: 1,
              ease: "power2.inOut",
            },
            "-=0.5"
          )
          .from(
            ref.current.querySelectorAll(".geo-element-inner"),
            {
              scale: 0,
              opacity: 0,
              duration: 0.8,
              ease: "back.out(1.7)",
              stagger: 0.2,
            },
            "-=0.8"
          );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f5f2ed] min-h-screen py-12 px-4 md:px-12 lg:px-20 overflow-hidden font-sans relative flex flex-col justify-center"
    >
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-10 md:opacity-20">
        <div className="blueprint-line-h origin-center absolute top-[10%] left-0 w-full h-[1px] bg-mainColor" />
        <div className="blueprint-line-h origin-center absolute top-[90%] left-0 w-full h-[1px] bg-mainColor" />
        <div className="blueprint-line-v origin-center absolute left-[5%] md:left-[10%] top-0 w-[1px] md:w-[2px] h-full bg-mainColor" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-20">
        <header className="mb-12 md:mb-24 text-center">
          <SectionHeader firstWord="Our Mission &" secondWord="Vision" />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 lg:gap-32 items-stretch">
          
          {/* Mission Card */}
          <div
            ref={missionRef}
            className="relative bg-white p-8 md:p-12 shadow-xl border-t-4 border-mainGold flex flex-col justify-between"
          >
            <div
              ref={rotateSquareRef}
              className="absolute -top-6 -right-6 md:-top-10 md:-right-10 w-16 h-16 md:w-28 md:h-28 bg-mainColor opacity-5 md:opacity-10 rotate-45 -z-10"
            />

            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 md:w-12 h-[2px] bg-mainGold line-draw-inner" />
                <h3 className="text-2xl md:text-4xl font-bold text-mainColor tracking-tighter uppercase">
                  Mission
                </h3>
              </div>

              <p className="text-gray-700 leading-relaxed paragraph font-medium italic">
                Mosaic Property Management Company Ltd. is dedicated to enhancing
                the success of established mid-cap companies by providing
                comprehensive support, resources, and strategic insight. Through
                targeted acquisitions and a hands-on approach to value creation,
                we aim to build a synergistic portfolio of industry leaders
                committed to innovation, quality, and positive impact in their
                fields.
              </p>
            </div>
            <div className="mt-8 h-1 w-20 bg-mainGold line-draw-inner"></div>
          </div>

          <div
            ref={visionRef}
            className="relative bg-mainColor p-8 md:p-12 shadow-xl text-white lg:translate-y-16 border-b-4 border-mainGold"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <PlexusBackground
                particleCount={35}
                lineColor="rgba(197, 163, 99, 0.5)"
                className="opacity-50"
                />
            </div>
            
            <div
              ref={shakeSquareRef}
              className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-16 h-16 md:w-24 md:h-24 border-2 md:border-4 border-mainGold/30 rotate-12 z-[1]"
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 md:w-12 h-[2px] bg-mainGold line-draw-inner" />
                <h3 className="text-2xl md:text-4xl font-bold text-mainGold tracking-tighter uppercase">
                  Vision
                </h3>
              </div>

              <p className="text-blue-50/90 leading-relaxed paragraph font-medium">
                To become a premier force in fostering innovation and excellence
                across critical industries, empowering our portfolio companies to
                achieve unprecedented growth through strategic investment,
                operational expertise, and a steadfast commitment to sustainable
                development.
              </p>
            </div>

            <div className="mt-8 flex gap-2 relative z-10">
              <div className="h-1 w-10 bg-mainGold line-draw-inner"></div>
              <div className="h-1 w-5 bg-mainGold opacity-40 line-draw-inner"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MosaicMissionVision;
