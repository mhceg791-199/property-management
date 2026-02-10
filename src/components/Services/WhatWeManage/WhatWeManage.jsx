// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
// import manageItems from "../../../data/about/manageItems";


// gsap.registerPlugin(ScrollTrigger);

// const WhatWeManageCards = () => {
//   const sectionRef = useRef(null);
//   const rotateSquareRef = useRef(null);
//   const shakeSquareRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.utils.toArray(".manage-card").forEach((card) => {
//         gsap.fromTo(
//           card,
//           { y: 80, opacity: 0, scale: 0.95 },
//           {
//             y: 0,
//             opacity: 1,
//             scale: 1,
//             duration: 1,
//             ease: "power3.out",
//             scrollTrigger: {
//               trigger: card,
//               start: "top 85%",
//             },
//           },
//         );
//       });

//       gsap.to(rotateSquareRef.current, {
//         rotation: 360 + 45,
//         duration: 12,
//         repeat: -1,
//         ease: "none",
//       });

//       gsap.to(shakeSquareRef.current, {
//         x: "+=10",
//         y: "-=10",
//         rotation: "+=5",
//         duration: 2.5,
//         repeat: -1,
//         yoyo: true,
//         ease: "sine.inOut",
//       });

//       gsap.fromTo(
//         ".exclusion-panel",
//         { y: 40, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           duration: 1,
//           ease: "power2.out",
//           scrollTrigger: {
//             trigger: ".exclusion-panel",
//             start: "top 90%",
//           },
//         },
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);  
//   return (
//     <section
//       ref={sectionRef}
//       className="relative bg-[#f7f7f5] py-12 px-6 overflow-hidden text-mainColor font-sans"
//     >
//       {/* Background Grid */}
//       <div
//         className="absolute inset-0 opacity-[0.04] pointer-events-none"
//         style={{
//           backgroundImage:
//             "linear-gradient(#C5A363 1px, transparent 1px), linear-gradient(90deg, #C5A363 1px, transparent 1px)",
//           backgroundSize: "80px 80px",
//         }}
//       />

//       <div className="max-w-7xl mx-auto relative z-10">
//         {/* Header */}
//         <div className="mb-4 md:mb-8">
//           <div className="text-center md:text-left mb-6">
//             <SectionHeader firstWord="What We" secondWord="Manage" />
//           </div>
//           <p className="text-mainColor text-sm md:text-base border-l-4 border-mainGold/40 pl-4 md:pl-6 italic max-w-2xl mx-auto md:mx-0">
//             Our focus is clear and intentional.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 mb-8">
//           <div
//             ref={rotateSquareRef}
//             className="absolute top-20 -right-10 w-28 h-28 bg-mainColor opacity-10 rotate-45 z-10"
//           />
//           <div
//             ref={shakeSquareRef}
//             className="absolute bottom-12 -left-10 w-24 h-24 border-4 border-mainGold/40 rotate-12 z-10"
//           />
//           {manageItems.map((item, index) => (
//             <div
//               key={index}
//               className="manage-card relative h-96 bg-white border border-gray-200 overflow-hidden
//                          transition-all duration-500 hover:shadow-xl group"
//             >
//               {/* Image */}
//               <div
//                 className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-20
//                            group-hover:opacity-30 transition-opacity duration-500"
//                 style={{ backgroundImage: `url(${item.image})` }}
//               />

//               {/* Image */}
//               <div
//                 className="absolute inset-0 bg-contain bg-center bg-no-repeat 
//              opacity-20 grayscale group-hover:opacity-100 group-hover:grayscale-0 
//              transition-all duration-700 ease-in-out transform group-hover:scale-110"
//                 style={{ backgroundImage: `url(${item.image})` }}
//               />

//               {/* Gold hover frame */}
//               <div className="absolute inset-0 border border-transparent group-hover:border-mainGold/40 transition-colors duration-500" />

//               {/* Content */}
//               <div className="relative z-10 p-8 flex flex-col justify-end h-full">
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="p-2 border border-mainGold/40 text-mainGold bg-mainGold/5">
//                     {item.icon}
//                   </div>
//                   <h3 className="text-xl font-bold uppercase tracking-tight text-mainColor group-hover:text-mainGold transition-colors">
//                     {item.title}
//                   </h3>
//                 </div>

//                 <p className="text-gray-600 text-base leading-relaxed border-l-2 border-mainGold pl-4">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Exclusion Panel */}
//         <p className="text-[10px] md:text-xs tracking-[0.3em] text-mainGold/50 max-w-2xl uppercase mb-6 font-bold">
//           We do not engage in residential sales, condominium sales, or
//           condominium management.
//         </p>

//         <p className="paragraph font-bold text-mainColor/70 leading-relaxed max-w-3xl">
//           Our services are dedicated exclusively to property management and
//           operations.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default WhatWeManageCards;