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
//           once: true,
//         },
//       });

//       tl.from(".eng-layer", {
//         y: 80,
//         opacity: 0,
//         rotateX: -20,
//         stagger: 0.2,
//         duration: 1,
//         ease: "expo.out",
//       })
//         .from(
//           ".draw-line",
//           {
//             scaleY: 0,
//             transformOrigin: "top",
//             duration: 1.2,
//             ease: "power4.inOut",
//           },
//           "-=0.6",
//         )
//         .from(
//           ".content-fade",
//           {
//             x: -40,
//             opacity: 0,
//             stagger: 0.1,
//             duration: 0.6,
//           },
//           "-=0.9",
//         );
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="relative bg-mainColor py-20 px-4 sm:px-8 lg:px-16 text-lightColor overflow-hidden"
//     >
//       {/* Blueprint Grid */}
//       <div
//         className="absolute inset-0 opacity-[0.03] pointer-events-none"
//         style={{
//           backgroundImage:
//             "linear-gradient(to right, #C5A363 1px, transparent 1px), linear-gradient(to bottom, #C5A363 1px, transparent 1px)",
//           backgroundSize: "48px 48px",
//         }}
//       />

//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10">
//         {/* ================= LEFT ================= */}
//         <div className="space-y-8">
//           <div className="content-fade">
//             <SectionHeader
//               firstWord="Why Our"
//               secondWord="Approach is Different"
//             />
//           </div>

//           <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-mainGold uppercase leading-tight content-fade">
//             Most property managers coordinate. <br />
//             <span className="text-lightColor font-light">
//               We manage with depth.
//             </span>
//           </h3>

//           <p className="text-gray-400 text-base sm:text-lg leading-relaxed border-l-4 border-mainGold/40 pl-5 content-fade">
//             As part of the Mosaic platform, Mosaic Property Management provides
//             owners with access to enhanced engineering and technical expertise —
//             architectural, mechanical, electrical, and structural insight when
//             required.
//           </p>

//           {/* Pillars grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-fade">
//             {technicalPillars.map((item, i) => (
//               <div
//                 key={i}
//                 className="flex items-center gap-3 bg-white/5 p-4 border border-white/10 hover:border-mainGold transition"
//               >
//                 <div className="text-mainGold">{item.icon}</div>
//                 <span className="text-sm font-bold uppercase tracking-wider">
//                   {item.name} Insight
//                 </span>
//               </div>
//             ))}
//           </div>

//           <p className="text-gray-500 text-sm sm:text-base content-fade">
//             This approach enables accurate diagnosis, informed decision-making,
//             reduced operational risk, and disciplined long-term performance.
//           </p>
//         </div>

//         {/* ================= RIGHT ================= */}
//         <div
//           ref={layersRef}
//           className="relative min-h-[420px] sm:min-h-[520px] lg:min-h-[620px]"
//         >
//           {/* Base Layer */}
//           <div className="eng-layer absolute inset-0 bg-white/[0.02] md:mt-2 md:ml-4 border border-white/10 p-6 sm:p-8 backdrop-blur-sm">
//             <span className="text-[10px] font-mono opacity-30">
//               Property Management
//             </span>
//           </div>

//           {/* Core Layer */}
//           <div className="eng-layer absolute inset-4 sm:inset-6 lg:inset-10 bg-white/[0.03] border border-white/10 shadow-2xl p-6 sm:p-10 flex flex-col justify-center gap-6">
//             <div className="draw-line absolute left-6 top-8 bottom-8 w-px bg-mainGold/40" />

//             {technicalPillars.map((p, i) => (
//               <div key={i} className="flex items-center gap-5">
//                 <div className="w-9 h-9 ms-4 rounded-full bg-mainColor border border-mainGold flex items-center justify-center text-mainGold">
//                   {p.icon}
//                 </div>
//                 <span className="text-base sm:text-lg font-black uppercase tracking-[0.18em]">
//                   {p.name}
//                 </span>
//               </div>
//             ))}
//           </div>

//           {/* Frame Layer – Desktop only */}
//           <div className="eng-layer absolute inset-10 lg:inset-20 border-4 lg:border-8 border-mainGold/50 hidden md:block" />

//           {/* Floating Data Card – XL only */}
//           <div className="absolute right-0 top-1/3 eng-layer hidden xl:block">
//             <div className="bg-white/5 border border-white/10 p-4 backdrop-blur-md w-40">
//               <span className="text-mainGold text-[10px] font-mono block mb-1">
//                 DATA_INTEGRITY
//               </span>
//               <div className="h-1 bg-mainGold/20 rounded-full overflow-hidden">
//                 <div className="h-full bg-mainGold w-3/4" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MosaicApproach;