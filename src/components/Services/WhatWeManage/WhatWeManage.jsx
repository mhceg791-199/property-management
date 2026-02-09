import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
import manageItems from "../../../data/about/manageItems";


gsap.registerPlugin(ScrollTrigger);

const WhatWeManageCards = () => {
  const sectionRef = useRef(null);
  const rotateSquareRef = useRef(null);
  const shakeSquareRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".manage-card").forEach((card) => {
        gsap.fromTo(
          card,
          { y: 80, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          },
        );
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

      gsap.fromTo(
        ".exclusion-panel",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".exclusion-panel",
            start: "top 90%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  

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
        {/* <div className="text-center mb-6">
          <SectionHeader firstWord="What We" secondWord="Manage" />
        </div>
        <p className="text-mainColor paragraph mb-5 border-l-4 border-mainGold/30 pl-6 italic">
          Our focus is clear and intentional.
        </p> */}

        <div className="mb-4 md:mb-8">
          <div className="text-center md:text-left mb-6">
            <SectionHeader firstWord="What We" secondWord="Manage" />
          </div>
          <p className="text-mainColor text-sm md:text-base border-l-4 border-mainGold/40 pl-4 md:pl-6 italic max-w-2xl mx-auto md:mx-0">
            Our focus is clear and intentional.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-8">
          <div
            ref={rotateSquareRef}
            className="absolute top-20 -right-10 w-28 h-28 bg-mainColor opacity-10 rotate-45 z-10"
          />
          <div
            ref={shakeSquareRef}
            className="absolute bottom-12 -left-10 w-24 h-24 border-4 border-mainGold/40 rotate-12 z-10"
          />
          {manageItems.map((item, index) => (
            <div
              key={index}
              className="manage-card relative h-96 bg-white border border-gray-200 overflow-hidden
                         transition-all duration-500 hover:shadow-xl group"
            >
              {/* Image */}
              <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-20
                           group-hover:opacity-30 transition-opacity duration-500"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Image */}
              <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat 
             opacity-20 grayscale group-hover:opacity-100 group-hover:grayscale-0 
             transition-all duration-700 ease-in-out transform group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Gold hover frame */}
              <div className="absolute inset-0 border border-transparent group-hover:border-mainGold/40 transition-colors duration-500" />

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 border border-mainGold/40 text-mainGold bg-mainGold/5">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-mainColor group-hover:text-mainGold transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-base leading-relaxed border-l-2 border-mainGold pl-4">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Exclusion Panel */}
        <p className="text-[10px] md:text-xs tracking-[0.3em] text-mainGold/50 max-w-2xl uppercase mb-6 font-bold">
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

export default WhatWeManageCards;


// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Building2, Factory, ShoppingBag } from "lucide-react";

// import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
// import commercial from "../../../assets/services/commercial.webp";
// import industrial from "../../../assets/services/industrial.webp";
// import retail from "../../../assets/services/retail.webp";

// gsap.registerPlugin(ScrollTrigger);

// const WhatWeManageCards = () => {
//   const sectionRef = useRef(null);
//   const rotateSquareRef = useRef(null);
//   const shakeSquareRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // أنيميشن ظهور الكروت
//       gsap.utils.toArray(".manage-card").forEach((card) => {
//         gsap.fromTo(
//           card,
//           { y: 50, opacity: 0, scale: 0.98 },
//           {
//             y: 0,
//             opacity: 1,
//             scale: 1,
//             duration: 1,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: card,
//               start: "top 90%",
//             },
//           }
//         );
//       });

//       // أنيميشن المربع الدوار (يتم إخفاؤه في الجوال برمجياً أو عبر CSS)
//       gsap.to(rotateSquareRef.current, {
//         rotation: 360 + 45,
//         duration: 15,
//         repeat: -1,
//         ease: "none",
//       });

//       // أنيميشن المربع المهتز
//       gsap.to(shakeSquareRef.current, {
//         x: "+=8",
//         y: "-=8",
//         rotation: "+=5",
//         duration: 3,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//       });

//       // أنيميشن لوحة الاستثناءات
//       gsap.fromTo(
//         ".exclusion-area",
//         { y: 30, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: ".exclusion-area",
//             start: "top 95%",
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   const manageItems = [
//     {
//       title: "Commercial",
//       icon: <Building2 className="w-6 h-6" />,
//       description:
//         "Office buildings, mixed-use assets, and administrative complexes designed for high-tier professional operations.",
//       image: commercial,
//     },
//     {
//       title: "Industrial",
//       icon: <Factory className="w-6 h-6" />,
//       description:
//         "Warehouses, logistics facilities, and light industrial assets managed with structural and technical precision.",
//       image: industrial,
//     },
//     {
//       title: "Retail",
//       icon: <ShoppingBag className="w-6 h-6" />,
//       description:
//         "Retail centers, standalone units, and commercial plazas focused on consumer flow and asset performance.",
//       image: retail,
//     },
//   ];

//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-[#f7f7f5] py-16 md:py-24 px-4 sm:px-8 lg:px-12 overflow-hidden text-mainColor font-sans"
//     >
//       {/* Background Grid - Adaptive opacity */}
//       <div
//         className="absolute inset-0 opacity-[0.03] md:opacity-[0.05] pointer-events-none"
//         style={{
//           backgroundImage:
//             "linear-gradient(#C5A363 1px, transparent 1px), linear-gradient(90deg, #C5A363 1px, transparent 1px)",
//           backgroundSize: "clamp(40px, 10vw, 80px) clamp(40px, 10vw, 80px)",
//         }}
//       />

//       {/* Decorative Squares - Hidden on small screens to prevent overlap */}
//       <div
//         ref={rotateSquareRef}
//         className="hidden lg:block absolute top-20 -right-10 w-28 h-28 bg-mainColor opacity-5 rotate-45 z-0"
//       />
//       <div
//         ref={shakeSquareRef}
//         className="hidden md:block absolute bottom-20 -left-10 w-20 h-20 border-2 border-mainGold/20 rotate-12 z-0"
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header Section */}
//         <div className="mb-12 md:mb-16">
//           <div className="text-center md:text-left mb-6">
//             <SectionHeader firstWord="What We" secondWord="Manage" />
//           </div>
//           <p className="text-mainColor text-sm md:text-base border-l-4 border-mainGold/40 pl-4 md:pl-6 italic max-w-2xl mx-auto md:mx-0">
//             Our focus is clear and intentional. We manage assets where our
//             technical depth adds the most significant value.
//           </p>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
//           {manageItems.map((item, index) => (
//             <div
//               key={index}
//               className="manage-card relative h-[400px] md:h-[450px] bg-white border border-gray-200 overflow-hidden 
//                          group transition-all duration-500 hover:shadow-2xl flex flex-col justify-end"
//             >
//               {/* Image Layer - Optimized for all screen sizes */}
//               <div
//                 className="absolute inset-0 bg-contain bg-center bg-no-repeat 
//                             group-hover:opacity-100 group-hover:grayscale-0 
//                            transition-all duration-1000 ease-in-out transform group-hover:scale-105 pointer-events-none"
//                 style={{ 
//                   backgroundImage: `url(${item.image})`,
//                   backgroundSize: '85% auto'
//                 }}
//               />

//               {/* Gradient Overlay for text readability */}
//               <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />

//               {/* Gold Border on Hover */}
//               <div className="absolute inset-0 border-2 border-transparent group-hover:border-mainGold/20 transition-all duration-500 z-20" />

//               {/* Content Box */}
//               <div className="relative z-30 p-6 md:p-8">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="p-2 border border-mainGold/30 text-mainGold bg-mainGold/5 rounded-sm">
//                     {item.icon}
//                   </div>
//                   <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight text-mainColor group-hover:text-mainGold transition-colors">
//                     {item.title}
//                   </h3>
//                 </div>

//                 <p className="text-gray-600 text-sm md:text-base leading-relaxed border-l-2 border-mainGold pl-4">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Exclusion Area & CTA Footer */}
//         <div className="exclusion-area border-t border-gray-200 pt-10">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
//             <div className="max-w-2xl">
//               <p className="text-[9px] md:text-[11px] tracking-[0.3em] text-mainGold font-black uppercase mb-3">
//                 Strategic Exclusions
//               </p>
//               <p className="text-sm md:text-base font-bold text-mainColor/80 leading-relaxed italic">
//                 We do not engage in residential or condominium sales and management. 
//                 Our services are dedicated exclusively to technical property operations.
//               </p>
//             </div>
            
//             {/* Small HUD indicator for visual polish */}
//             <div className="hidden lg:flex items-center gap-3 opacity-20">
//               <div className="h-[1px] w-12 bg-mainColor" />
//               <span className="text-[10px] font-mono tracking-widest uppercase">Specialized_Ops</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhatWeManageCards;