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
      // 1. أنيميشن الخطوط الهندسية في الخلفية
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

      // 2. الدوران والاهتزاز للأشكال الخارجية
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

      // 3. أنيميشن دخول الكروت مع تأثير رسم الخطوط والعناصر الداخلية
      [missionRef, visionRef].forEach((ref) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
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
            "-=0.5",
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
            "-=0.8",
          );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f5f2ed] h-screen py-10 px-8 overflow-visible font-sans relative"
    >
      {/* Blueprint Grid الخلفية */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="blueprint-line-h origin-center absolute top-[15%] left-0 w-full h-[1px] bg-[#1a2b48]" />
        <div className="blueprint-line-h origin-center absolute top-[85%] left-0 w-full h-[1px] bg-[#1a2b48]" />
        <div className="blueprint-line-v origin-center absolute left-[10%] top-0 w-[2px] h-full bg-[#1a2b48]" />
      </div>

      <h2 className="heading leading-none text-mainColor mb-20 text-center relative z-20">
        <SectionHeader firstWord="Our Mission &" secondWord="Vision" />
      </h2>

      <div className="w-8xl mx-auto grid md:grid-cols-2 gap-20 relative z-10">
        {/* كارت المهمة - Mission */}
        <div
          ref={missionRef}
          className="relative bg-white p-10 shadow-2xl border-t-4 border-[#b89564] flex flex-col justify-between overflow-visible"
        >
          <div
            ref={rotateSquareRef}
            className="absolute -top-10 -right-10 w-28 h-28 bg-[#1a2b48] opacity-10 rotate-45 -z-10"
          />

          <div>
            {/* إضافة geo-element و line-draw قبل Mission */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[#b89564] line-draw-inner" />
              <h3 className="text-3xl font-bold text-[#1a2b48] tracking-tighter">
                Mission
              </h3>
            </div>

            <p className="text-gray-700 leading-relaxed text-lg font-medium">
              Mosaic Property Management Company Ltd. is dedicated to enhancing
              the success of established mid-cap companies by providing
              comprehensive support, resources, and strategic insight. Through
              targeted acquisitions and a hands-on approach to value creation,
              we aim to build a synergistic portfolio of industry leaders
              committed to innovation, quality, and positive impact in their
              fields.
            </p>
          </div>
          <div className="mt-8 h-1.5 w-24 bg-[#b89564] line-draw-inner"></div>
        </div>

        {/* كارت الرؤية - Vision */}
        <div
          ref={visionRef}
          className="relative bg-[#1a2b48] p-10 shadow-2xl text-white transform md:translate-y-20 border-b-4 border-[#b89564] overflow-visible"
        >
          <PlexusBackground
            particleCount={25}
            lineColor="rgba(197, 163, 99, 0.5)"
            className="opacity-100"
          />
          <div
            ref={shakeSquareRef}
            className="absolute -bottom-10 -left-10 w-24 h-24 border-4 border-[#b89564]/40 rotate-12 -z-10"
          />

          <div>
            {/* إضافة geo-element و line-draw قبل Vision */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[#b89564] line-draw-inner" />

              <h3 className="text-3xl font-bold text-[#b89564] tracking-tighter">
                Vision
              </h3>
            </div>

            <p className="text-blue-50 leading-relaxed text-lg opacity-90 font-medium">
              To become a premier force in fostering innovation and excellence
              across critical industries, empowering our portfolio companies to
              achieve unprecedented growth through strategic investment,
              operational expertise, and a steadfast commitment to sustainable
              development.
            </p>
          </div>
          <div className="mt-8 flex gap-2">
            <div className="h-1.5 w-10 bg-[#b89564] line-draw-inner"></div>
            <div className="h-1.5 w-5 bg-[#b89564] opacity-40 line-draw-inner"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MosaicMissionVision;
