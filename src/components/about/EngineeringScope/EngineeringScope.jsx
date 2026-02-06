import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Building2, Factory, ShoppingBag } from "lucide-react";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
import PlexusBackground from "../../shared/PlexusCanvas/PlexusCanvas";

gsap.registerPlugin(ScrollTrigger);

const EngineeringScope = () => {
  const containerRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. أنيميشن العنوان
      gsap.from(".main-title-part", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
      });

      // 2. أنيميشن العمود الفقري
      gsap.from(".central-spine", {
        height: 0,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1.5,
        },
      });

      // 3. أنيميشن العناصر
      gsap.utils.toArray(".kinetic-node").forEach((node, i) => {
        const isEven = i % 2 === 0;
        gsap.from(node, {
          x: isEven ? -150 : 150,
          opacity: 0,
          scale: 0.8,
          rotationY: isEven ? 20 : -20,
          scrollTrigger: {
            trigger: node,
            start: "top 90%",
            end: "top 60%",
            scrub: 1,
          },
        });
      });

      // 4. أنيميشن نص الالتزام
      gsap.from(".focus-statement", {
        opacity: 0,
        y: 30,
        duration: 1.5,
        scrollTrigger: {
          trigger: ".focus-statement",
          start: "top 95%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const sectors = [
    {
      id: "01",
      title: "Commercial",
      icon: <Building2 size={32} />,
      desc: "Commercial property management",
    },
    {
      id: "02",
      title: "Industrial",
      icon: <Factory size={32} />,
      desc: "Industrial property management",
    },
    {
      id: "03",
      title: "Retail",
      icon: <ShoppingBag size={32} />,
      desc: "Retail property management",
    },
  ];

  return (
    <section
      ref={containerRef}
      className="relative bg-mainColor py-24 px-6 overflow-hidden text-lightColor font-mono"
    >
      {/* Background Grid */}
      <div
        className="bg-grid absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #C5A363 1px, transparent 1px), linear-gradient(to bottom, #C5A363 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div ref={triggerRef} className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-10 inline-block">
            <SectionHeader
              firstWord="Our Scope"
              secondWord="& Specialization"
            />
          </div>

          <div className="main-title-part relative p-1 inline-block">
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-mainGold" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-mainGold" />

            <div className="bg-white/[0.02] backdrop-blur-sm border border-white/5 px-8 py-6 max-w-3xl">
              <p className="text-lg md:text-xl font-light leading-relaxed text-lightColor opacity-80 normal-case italic">
                Mosaic Property Management focuses{" "}
                <span className="text-white font-bold underline decoration-mainGold">
                  exclusively
                </span>{" "}
                on professional property management and operations.
              </p>
            </div>
          </div>
        </div>

        {/* Matrix Nodes */}
        <div className="space-y-12 relative z-10 mb-20 mt-20">
          <div className="central-spine absolute left-[50%] -translate-x-1/2 w-[1px] bg-gradient-to-b from-mainGold via-mainGold/50 to-transparent h-full z-0 hidden md:block" />

          {sectors.map((sector, i) => (
            <div
              key={i}
              className={`kinetic-node flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center justify-between gap-10`}
            >
              {/* Card */}
              <div className="flex-1 w-full bg-mainColor/90 border border-white/10 backdrop-blur-md p-10 relative group hover:border-mainGold/50 transition-all duration-500">
                <PlexusBackground
                  particleCount={25}
                  lineColor="rgba(197, 163, 99, 0.3)"
                  className="opacity-100"
                />
                <div className="absolute -top-4 -left-4 text-6xl font-black text-white/5 group-hover:text-mainGold/10 transition-colors italic leading-none">
                  {sector.id}
                </div>

                <div className="relative z-10">
                  <div className="text-mainGold mb-6 group-hover:scale-110 transition-transform inline-block">
                    {sector.icon}
                  </div>
                  <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter text-white group-hover:text-mainGold transition-colors">
                    {sector.title}
                  </h3>
                  <p className="text-lightColor/60 font-light leading-relaxed border-l-4 border-mainGold/30 pl-6 italic">
                    {sector.desc}
                  </p>
                </div>
              </div>
              <div className="flex-1 hidden md:block" />
            </div>
          ))}
        </div>

        {/* Exclusion/Focus Statement*/}
        <div className="focus-statement relative z-10 mx-auto mt-10 text-center">
          <p className="text-[10px] md:text-xs tracking-[0.3em] text-mainGold/50 max-w-2xl mx-auto uppercase mb-6 font-bold">
            We do not engage in residential sales, condominium sales, or
            condominium management.
          </p>

          <p className="paragraph font-light text-lightColor/70 leading-relaxed px-4 max-w-3xl mx-auto">
            This clear scope allows us to maintain
            <span className="text-white font-medium italic">
              {" "}
              focus, depth, and consistency{" "}
            </span>
            across the assets we manage.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EngineeringScope;
