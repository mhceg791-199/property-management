// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Box, Settings, Zap, Ruler, ShieldCheck } from "lucide-react";
// import SectionHeader from "../../shared/SectionHeaders/SectionHeader";

// gsap.registerPlugin(ScrollTrigger);

// const EngineeringDifference = () => {
//   const containerRef = useRef(null);
//   const layersRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Exploded View Layers
//       gsap.from(".eng-layer", {
//         y: 120,
//         opacity: 0,
//         rotateX: -25,
//         stagger: 0.25,
//         duration: 1.6,
//         ease: "expo.out",
//         scrollTrigger: {
//           trigger: containerRef.current, // ← السكشن نفسه
//           start: "top 75%",
//           toggleActions: "play none none none",
//           once: true, // ← مهم جدًا
//         },
//       });

//       // Blueprint Lines
//       gsap.from(".draw-line", {
//         scaleY: 0,
//         transformOrigin: "top",
//         duration: 2,
//         ease: "power4.inOut",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 70%",
//           toggleActions: "play none none none",
//           once: true,
//         },
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   const technicalPillars = [
//     { name: "Architectural", icon: <Box size={20} /> },
//     { name: "Mechanical", icon: <Settings size={20} /> },
//     { name: "Electrical", icon: <Zap size={20} /> },
//     { name: "Structural", icon: <Ruler size={20} /> },
//   ];

//   return (
//     <section
//       ref={containerRef}
//       className="relative min-h-screen bg-mainColor py-24 px-6 overflow-hidden text-lightColor font-sans"
//     >
//       {/* Background Blueprint Grid */}
//       <div
//         className="absolute inset-0 opacity-[0.03] pointer-events-none"
//         style={{
//           backgroundImage:
//             "linear-gradient(to right, #C5A363 1px, transparent 1px), linear-gradient(to bottom, #C5A363 1px, transparent 1px)",
//           backgroundSize: "50px 50px",
//         }}
//       />

//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
//         {/* Left Side: Content */}
//         <div className="z-10">
//           <div className="mb-8">
//             <SectionHeader
//               firstWord="Why Our"
//               secondWord="Approach is Different"
//             />
//           </div>

//           <h3 className="text-xl md:text-2xl font-bold mb-6 text-mainGold leading-tight uppercase tracking-tight">
//             Most property managers coordinate. <br />
//             <span className="text-lightColor">We manage with depth.</span>
//           </h3>

//           <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-4 border-mainGold/40 pl-6">
//             As part of the Mosaic platform, Mosaic Property Management provides
//             owners with access to enhanced engineering and technical expertise,
//             including architectural, mechanical, electrical, and structural
//             insight when required.
//           </p>

//           {/* التخصصات الأربعة في الشبكة اليسرى */}
//           <div className="grid grid-cols-2 gap-4">
//             {technicalPillars.map((item, i) => (
//               <div
//                 key={i}
//                 className="flex items-center gap-3 bg-white/5 p-4 border border-white/10 group hover:border-mainGold transition-all"
//               >
//                 <div className="text-mainGold group-hover:scale-110 transition-transform">
//                   {item.icon}
//                 </div>
//                 <span className="text-sm font-bold uppercase tracking-wider">
//                   {item.name} Insight
//                 </span>
//               </div>
//             ))}
//           </div>

//           <p className="mt-8 text-gray-500 text-base">
//             This approach allows for accurate diagnosis, informed
//             decision-making, reduced operational risk, and property management
//             that is disciplined, accountable, and built for long-term
//             performance.
//           </p>
//         </div>

//         {/* Right Side: Engineering Layers */}
//         <div ref={layersRef} className="relative h-[600px] perspective-1000">
//           {/* Layer 1: Structural Grid */}
//           <div className="eng-layer absolute inset-0 bg-white/[0.02] border border-white/10 backdrop-blur-sm -translate-z-20 p-8">
//             <div className="flex justify-between items-start opacity-30">
//               <span className="font-mono text-[10px]">Property Management</span>
//             </div>
//           </div>

//           {/* Layer 2: Technical Expertise Boxes */}
//           <div className="eng-layer absolute inset-0 top-10 left-10 bg-white/[0.03] border border-white/10 shadow-2xl -translate-z-10 p-12 flex flex-col justify-center gap-6">
//             <div className="draw-line absolute left-8 top-12 bottom-12 w-[1px] bg-mainGold/40" />
//             {technicalPillars.map((p, i) => (
//               <div key={i} className="flex items-center gap-6 relative z-10">
//                 <div className="w-10 h-10 rounded-full bg-mainColor border border-mainGold flex items-center justify-center text-mainGold shadow-glow transition-transform hover:scale-110 cursor-pointer">
//                   {p.icon}
//                 </div>
//                 <span className="text-xl font-black uppercase tracking-[0.2em]">
//                   {p.name}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* Layer 3: Top Result Frame */}
//           <div className="eng-layer absolute inset-0 top-20 left-20 border-8 border-mainGold/50 p-1 text-mainColor flex items-center justify-center">
//             <div className="w-full h-full bg-mainColor/20 backdrop-blur-md flex flex-col justify-center items-center text-center p-6">
//               <ShieldCheck
//                 size={40}
//                 className="text-mainGold mb-4 opacity-80"
//               />
//             </div>
//           </div>

//           {/* Decorative Technical Callouts */}
//           <div className="absolute -right-4 top-1/4 eng-layer hidden xl:block">
//             <div className="bg-white/5 border border-white/10 p-4 backdrop-blur-md w-40">
//               <span className="text-mainGold text-[10px] font-mono block mb-1 tracking-tighter">
//                 DATA_INTEGRITY
//               </span>
//               <div className="h-1 w-full bg-mainGold/20 rounded-full overflow-hidden">
//                 <div className="h-full bg-mainGold w-3/4"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .perspective-1000 {
//           perspective: 1000px;
//         }
//         .shadow-glow {
//           box-shadow: 0 0 15px rgba(197, 163, 99, 0.3);
//         }
//         .-translate-z-10 {
//           transform: translateZ(-50px) rotateY(-10deg);
//         }
//         .-translate-z-20 {
//           transform: translateZ(-100px) rotateY(-10deg);
//         }
//       `}</style>
//     </section>
//   );
// };

// export default EngineeringDifference;

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
import technicalPillars from "../../../data/services/technicalPillars";

gsap.registerPlugin(ScrollTrigger);

const MosaicApproach = () => {
  const containerRef = useRef(null);
  const layersRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });

      tl.from(".eng-layer", {
        y: 80,
        opacity: 0,
        rotateX: -20,
        stagger: 0.2,
        duration: 1,
        ease: "expo.out",
      })
        .from(
          ".draw-line",
          {
            scaleY: 0,
            transformOrigin: "top",
            duration: 1.2,
            ease: "power4.inOut",
          },
          "-=0.6",
        )
        .from(
          ".content-fade",
          {
            x: -40,
            opacity: 0,
            stagger: 0.1,
            duration: 0.6,
          },
          "-=0.9",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-mainColor py-20 px-4 sm:px-8 lg:px-16 text-lightColor overflow-hidden"
    >
      {/* Blueprint Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #C5A363 1px, transparent 1px), linear-gradient(to bottom, #C5A363 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10">
        {/* ================= LEFT ================= */}
        <div className="space-y-8">
          <div className="content-fade">
            <SectionHeader
              firstWord="Why Our"
              secondWord="Approach is Different"
            />
          </div>

          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-mainGold uppercase leading-tight content-fade">
            Most property managers coordinate. <br />
            <span className="text-lightColor font-light">
              We manage with depth.
            </span>
          </h3>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed border-l-4 border-mainGold/40 pl-5 content-fade">
            As part of the Mosaic platform, Mosaic Property Management provides
            owners with access to enhanced engineering and technical expertise —
            architectural, mechanical, electrical, and structural insight when
            required.
          </p>

          {/* Pillars grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-fade">
            {technicalPillars.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-white/5 p-4 border border-white/10 hover:border-mainGold transition"
              >
                <div className="text-mainGold">{item.icon}</div>
                <span className="text-sm font-bold uppercase tracking-wider">
                  {item.name} Insight
                </span>
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-sm sm:text-base content-fade">
            This approach enables accurate diagnosis, informed decision-making,
            reduced operational risk, and disciplined long-term performance.
          </p>
        </div>

        {/* ================= RIGHT ================= */}
        <div
          ref={layersRef}
          className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-[620px]"
        >
          {/* Base Layer */}
          <div className="eng-layer absolute inset-0 bg-white/[0.02] md:mt-2 md:ml-4 border border-white/10 p-6 sm:p-8 backdrop-blur-sm">
            <span className="text-[10px] font-mono opacity-30">
              Property Management
            </span>
          </div>

          {/* Core Layer */}
          <div className="eng-layer absolute inset-4 sm:inset-6 lg:inset-10 bg-white/[0.03] border border-white/10 shadow-2xl p-6 sm:p-10 flex flex-col justify-center gap-6">
            <div className="draw-line absolute left-6 top-8 bottom-8 w-px bg-mainGold/40" />

            {technicalPillars.map((p, i) => (
              <div key={i} className="flex items-center gap-5">
                <div className="w-9 h-9 ms-4 rounded-full bg-mainColor border border-mainGold flex items-center justify-center text-mainGold">
                  {p.icon}
                </div>
                <span className="text-base sm:text-lg font-black uppercase tracking-[0.18em]">
                  {p.name}
                </span>
              </div>
            ))}
          </div>

          {/* Frame Layer – Desktop only */}
          <div className="eng-layer absolute inset-10 lg:inset-20 border-4 lg:border-8 border-mainGold/50 hidden md:block" />

          {/* Floating Data Card – XL only */}
          <div className="absolute right-0 top-1/3 eng-layer hidden xl:block">
            <div className="bg-white/5 border border-white/10 p-4 backdrop-blur-md w-40">
              <span className="text-mainGold text-[10px] font-mono block mb-1">
                DATA_INTEGRITY
              </span>
              <div className="h-1 bg-mainGold/20 rounded-full overflow-hidden">
                <div className="h-full bg-mainGold w-3/4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MosaicApproach;


// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
// import technicalPillars from "../../../data/services/technicalPillars";

// gsap.registerPlugin(ScrollTrigger);

// const MosaicApproach = () => {
//   const containerRef = useRef(null);
//   const layersRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 80%", 
//           toggleActions: "play none none none",
//           once: true, 
//         }
//       });

//       // 1. أنميشن الطبقات
//       tl.from(".eng-layer", {
//         y: 120,
//         opacity: 0,
//         rotateX: -25,
//         stagger: 0.2,
//         duration: 1.2,
//         ease: "expo.out",
//       })
//       // 2. أنميشن الخطوط (يبدأ أثناء أنميشن الطبقات بفرق بسيط)
//       .from(".draw-line", {
//         scaleY: 0,
//         transformOrigin: "top",
//         duration: 1.5,
//         ease: "power4.inOut",
//       }, "-=0.8") 
//       // 3. أنميشن المحتوى النصي جهة اليسار (اختياري لزيادة الجمالية)
//       .from(".content-fade", {
//         x: -50,
//         opacity: 0,
//         stagger: 0.1,
//         duration: 0.8
//       }, "-=1");

//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

 

//   return (
//     <section
//       ref={containerRef}
//       className="relative min-h-screen bg-mainColor py-4 md:py-24 px-6 overflow-hidden text-lightColor font-sans"
//     >
//       {/* Background Blueprint Grid */}
//       <div
//         className="absolute inset-0 opacity-[0.03] pointer-events-none"
//         style={{
//           backgroundImage:
//             "linear-gradient(to right, #C5A363 1px, transparent 1px), linear-gradient(to bottom, #C5A363 1px, transparent 1px)",
//           backgroundSize: "50px 50px",
//         }}
//       />

//       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
//         {/* Left Side: Content */}
//         <div className="z-10">
//           <div className="mb-8 content-fade">
//             <SectionHeader
//               firstWord="Why Our"
//               secondWord="Approach is Different"
//             />
//           </div>

//           <h3 className="text-xl md:text-2xl font-bold mb-6 text-mainGold leading-tight uppercase tracking-tight content-fade">
//             Most property managers coordinate. <br />
//             <span className="text-lightColor">We manage with depth.</span>
//           </h3>

//           <p className="text-gray-400 text-lg leading-relaxed mb-8 border-l-4 border-mainGold/40 pl-6 content-fade">
//             As part of the Mosaic platform, Mosaic Property Management provides
//             owners with access to enhanced engineering and technical expertise,
//             including architectural, mechanical, electrical, and structural
//             insight when required.
//           </p>

//           {/* التخصصات الأربعة في الشبكة اليسرى */}
//           <div className="grid grid-cols-2 gap-4 content-fade">
//             {technicalPillars.map((item, i) => (
//               <div
//                 key={i}
//                 className="flex items-center gap-3 bg-white/5 p-4 border border-white/10 group hover:border-mainGold transition-all"
//               >
//                 <div className="text-mainGold group-hover:scale-110 transition-transform">
//                   {item.icon}
//                 </div>
//                 <span className="text-sm font-bold uppercase tracking-wider">
//                   {item.name} Insight
//                 </span>
//               </div>
//             ))}
//           </div>

//           <p className="mt-8 text-gray-500 text-base content-fade">
//             This approach allows for accurate diagnosis, informed
//             decision-making, reduced operational risk, and property management
//             that is disciplined, accountable, and built for long-term
//             performance.
//           </p>
//         </div>

//         {/* Right Side: Engineering Layers */}
//         <div ref={layersRef} className="relative h-[600px] perspective-1000">
//           <div className="eng-layer absolute inset-0 bg-white/[0.02] border border-white/10 backdrop-blur-sm -translate-z-20 p-8">
//             <div className="flex justify-between items-start opacity-30">
//               <span className="font-mono text-[10px]">Property Management</span>
//             </div>
//           </div>

//           <div className="eng-layer absolute inset-0 top-10 left-10 bg-white/[0.03] border border-white/10 shadow-2xl -translate-z-10 p-12 flex flex-col justify-center gap-6">
//             <div className="draw-line absolute left-8 top-12 bottom-12 w-[1px] bg-mainGold/40" />
//             {technicalPillars.map((p, i) => (
//               <div key={i} className="flex items-center gap-6 relative z-10">
//                 <div className="w-10 h-10 rounded-full bg-mainColor border border-mainGold flex items-center justify-center text-mainGold shadow-glow transition-transform hover:scale-110 cursor-pointer">
//                   {p.icon}
//                 </div>
//                 <span className="text-xl font-black uppercase tracking-[0.2em]">
//                   {p.name}
//                 </span>
//               </div>
//             ))}
//           </div>

//           <div className="eng-layer absolute inset-0 top-20 left-20 border-8 border-mainGold/50 p-1 text-mainColor flex items-center justify-center">
//             {/* <div className="w-full h-full bg-mainColor/20 backdrop-blur-md flex flex-col justify-center items-center text-center p-6">
//               <ShieldCheck
//                 size={40}
//                 className="text-mainGold mb-4 opacity-80"
//               />
//             </div> */}
//           </div>

//           <div className="absolute -right-4 top-1/4 eng-layer hidden xl:block">
//             <div className="bg-white/5 border border-white/10 p-4 backdrop-blur-md w-40">
//               <span className="text-mainGold text-[10px] font-mono block mb-1 tracking-tighter">
//                 DATA_INTEGRITY
//               </span>
//               <div className="h-1 w-full bg-mainGold/20 rounded-full overflow-hidden">
//                 <div className="h-full bg-mainGold w-3/4"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

      
//     </section>
//   );
// };

// export default MosaicApproach;