// import { useState, useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import {
//   ArrowRight,
//   ArrowLeft,
// } from "lucide-react";
// import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
// import PlexusBackground from "../../shared/PlexusCanvas/PlexusCanvas";
// import pillars from "../../../data/services/pillars";

// const MosaicPillarSlider = () => {
//   const [activeSlide, setActiveSlide] = useState(0);
//   const containerRef = useRef(null);
//   const autoPlayRef = useRef(null); // مرجع للتايمر

 

//   // دالة التنقل للسلايد القادم
//   const nextSlide = () => setActiveSlide((p) => (p + 1) % pillars.length);
//   const prevSlide = () =>
//     setActiveSlide((p) => (p - 1 + pillars.length) % pillars.length);

//   /* ===============================
//      1. التبديل التلقائي (Auto Play Logic)
//   =============================== */
//   useEffect(() => {
//     const startAutoPlay = () => {
//       autoPlayRef.current = setInterval(() => {
//         nextSlide();
//       }, 4000);
//     };

//     startAutoPlay();

//     // تنظيف التايمر عند مسح المكون من الذاكرة
//     return () => {
//       if (autoPlayRef.current) clearInterval(autoPlayRef.current);
//     };
//   }, [activeSlide]);

//   /* ===============================
//      2. أنيميشن GSAP (كما هو بدون تغيير)
//   =============================== */
//   useEffect(() => {
//     const tl = gsap.timeline();

//     tl.to(".slide-content-box", {
//       opacity: 0,
//       x: -20,
//       duration: 0.3,
//       ease: "power2.in",
//     }).fromTo(
//       ".slide-content-box",
//       { opacity: 0, x: 50 },
//       { opacity: 1, x: 0, duration: 0.8, ease: "power4.out" },
//     );

//     gsap.fromTo(
//       ".bg-number",
//       { scale: 0.85, opacity: 0 },
//       { scale: 1, opacity: 0.04, duration: 1.5, ease: "expo.out" },
//     );
//   }, [activeSlide]);

//   return (
//     <section
//       ref={containerRef}
//       // أضفنا onMouseEnter و onMouseLeave لإيقاف السلايدر مؤقتاً عند القراءة
//       onMouseEnter={() => clearInterval(autoPlayRef.current)}
//       onMouseLeave={() => {
//         autoPlayRef.current = setInterval(nextSlide, 5000);
//       }}
//       className="relative min-h-screen bg-mainColor text-lightColor flex items-center overflow-hidden py-24 px-6"
//     >
//       {/* الرقم الخلفي */}
//       <div className="bg-number absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-black italic text-lightColor pointer-events-none select-none">
//         {pillars[activeSlide].id}
//       </div>

//       {/* Grid هندسي */}
//       <div
//         className="absolute inset-0 opacity-[0.06] pointer-events-none"
//         style={{
//           backgroundImage:
//             "linear-gradient(rgba(197,163,99,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(197,163,99,.6) 1px, transparent 1px)",
//           backgroundSize: "90px 90px",
//         }}
//       />

//       <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-12 gap-16">
//         {/* Left */}
//         <div className="lg:col-span-5 space-y-10">
//           <div className="flex items-center gap-4 text-mainGold mb-5">
//             <span className="w-10 h-[2px] bg-mainGold"></span>
//             <span className="text-xs uppercase tracking-[0.35em] font-medium">
//               Property Management
//             </span>
//           </div>

//           <SectionHeader firstWord="How We Deliver" />

//           <p className="text-lg opacity-80 max-w-xl border-l-4 border-mainGold/40 pl-6 mt-10">
//             Property management is not a single task. It is a system of
//             coordinated responsibilities structured around four integrated
//             pillars.
//           </p>

//           {/* Controls */}
//           <div className="flex items-center gap-8 md:translate-y-48">
//             <button
//               onClick={prevSlide}
//               className="p-4 border border-lightColor/20 hover:bg-mainGold hover:text-mainColor transition-all"
//             >
//               <ArrowLeft />
//             </button>

//             <div className="flex gap-2">
//               {pillars.map((_, i) => (
//                 <span
//                   key={i}
//                   onClick={() => setActiveSlide(i)} // جعل المؤشرات قابلة للضغط أيضاً
//                   className={`h-[2px] cursor-pointer transition-all ${
//                     activeSlide === i
//                       ? "w-12 bg-mainGold"
//                       : "w-4 bg-lightColor/30"
//                   }`}
//                 />
//               ))}
//             </div>

//             <button
//               onClick={nextSlide}
//               className="p-4 border border-lightColor/20 hover:bg-mainGold hover:text-mainColor transition-all"
//             >
//               <ArrowRight />
//             </button>
//           </div>
//         </div>

//         {/* Right */}
//         <div className="lg:col-span-7">
//           <div className="slide-content-box bg-white/5 backdrop-blur-xl border border-lightColor/10 p-12 relative min-h-[520px] flex flex-col justify-between">
//             <PlexusBackground
//               particleCount={40}
//               lineColor="rgba(197, 163, 99, 0.5)"
//               className="opacity-100"
//             />
//             <div className="flex justify-between mb-12">
//               <div className="p-4 bg-mainGold/10 text-mainGold">
//                 {pillars[activeSlide].icon}
//               </div>
//               <span className="text-6xl font-black italic text-lightColor/10">
//                 {pillars[activeSlide].id}
//               </span>
//             </div>

//             <h3 className="text-2xl font-black uppercase mb-8 text-lightColor group-hover:text-mainGold transition-colors">
//               {pillars[activeSlide].title}
//             </h3>

//             <ul className="space-y-4">
//               {pillars[activeSlide].content.map((item, idx) => (
//                 <li
//                   key={idx}
//                   className="flex items-center gap-4 text-lightColor/70"
//                 >
//                       <span className="w-1.5 h-1.5 bg-mainGold rotate-45 mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
//                   <span className="uppercase tracking-wide text-sm md:text-base">
//                     {item}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <p className="mt-5 text-lightColor text-xl text-center lg:text-left leading-loose">
//             Each pillar operates within clearly defined management agreements,
//             approved budgets, and professional standards.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MosaicPillarSlider;


// // import { useState, useEffect, useRef, useCallback } from "react";
// // import { gsap } from "gsap";
// // import { ArrowRight, ArrowLeft } from "lucide-react";
// // import SectionHeader from "../../shared/SectionHeaders/SectionHeader";
// // import PlexusBackground from "../../shared/PlexusCanvas/PlexusCanvas";
// // import pillars from "../../../data/services/pillars";

// // const MosaicPillarSlider = () => {
// //   const [activeSlide, setActiveSlide] = useState(0);
// //   const containerRef = useRef(null);
// //   const autoPlayRef = useRef(null);

// //   // دالة التنقل (استخدام useCallback لتجنب مشاكل الـ dependency في useEffect)
// //   const nextSlide = useCallback(() => {
// //     setActiveSlide((p) => (p + 1) % pillars.length);
// //   }, []);

// //   const prevSlide = useCallback(() => {
// //     setActiveSlide((p) => (p - 1 + pillars.length) % pillars.length);
// //   }, []);

// //   /* --- منطق التبديل التلقائي المحسن --- */
// //   const startTimer = useCallback(() => {
// //     stopTimer();
// //     autoPlayRef.current = setInterval(nextSlide, 5000);
// //   }, [nextSlide]);

// //   const stopTimer = () => {
// //     if (autoPlayRef.current) clearInterval(autoPlayRef.current);
// //   };

// //   useEffect(() => {
// //     startTimer();
// //     return () => stopTimer();
// //   }, [startTimer, activeSlide]);

// //   /* --- أنيميشن GSAP --- */
// //   useEffect(() => {
// //     const ctx = gsap.context(() => {
// //       const tl = gsap.timeline();
// //       tl.to(".slide-content-box", {
// //         opacity: 0,
// //         x: -30,
// //         duration: 0.3,
// //         ease: "power2.in",
// //       }).fromTo(
// //         ".slide-content-box",
// //         { opacity: 0, x: 50 },
// //         { opacity: 1, x: 0, duration: 0.8, ease: "power4.out" }
// //       );

// //       gsap.fromTo(
// //         ".bg-number",
// //         { scale: 0.7, opacity: 0 },
// //         { scale: 1, opacity: 0.05, duration: 2, ease: "expo.out" }
// //       );
// //     }, containerRef);

// //     return () => ctx.revert();
// //   }, [activeSlide]);

// //   return (
// //     <section
// //       ref={containerRef}
// //       onMouseEnter={stopTimer}
// //       onMouseLeave={startTimer}
// //       className="relative min-h-screen bg-mainColor text-lightColor flex items-center overflow-hidden py-16 md:py-24 px-4 sm:px-6 lg:px-12"
// //     >
// //       {/* الرقم الخلفي العملاق - متجاوب */}
// //       <div className="bg-number absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[60vw] lg:text-[40vw] font-black italic text-lightColor pointer-events-none select-none z-0">
// //         {pillars[activeSlide].id}
// //       </div>

// //       {/* Grid هندسي خلفي */}
// //       <div
// //         className="absolute inset-0 opacity-[0.06] pointer-events-none z-0"
// //         style={{
// //           backgroundImage:
// //             "linear-gradient(rgba(197,163,99,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(197,163,99,.6) 1px, transparent 1px)",
// //           backgroundSize: window.innerWidth > 768 ? "90px 90px" : "45px 45px",
// //         }}
// //       />

// //       <div className="max-w-7xl mx-auto w-full relative z-10">
// //         <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
// //           {/* --- الجانب الأيسر (المحتوى التعريفي) --- */}
// //           <div className="lg:col-span-5 space-y-6 md:space-y-10 order-2 lg:order-1">
// //             <div className="flex items-center gap-4 text-mainGold">
// //               <span className="w-8 md:w-12 h-[2px] bg-mainGold"></span>
// //               <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold">
// //                 Property Management Pillars
// //               </span>
// //             </div>

// //             <SectionHeader firstWord="How We Deliver" />

// //             <p className="text-base md:text-lg opacity-80 max-w-xl border-l-4 border-mainGold/40 pl-6">
// //               Property management is a system of coordinated responsibilities 
// //               structured around four integrated pillars of excellence.
// //             </p>

// //             {/* أزرار التحكم - موضع ذكي */}
// //             <div className="flex items-center gap-6 pt-6 lg:pt-20">
// //               <button
// //                 onClick={prevSlide}
// //                 className="group p-3 md:p-4 border border-lightColor/20 hover:bg-mainGold hover:border-mainGold transition-all duration-500"
// //                 aria-label="Previous Slide"
// //               >
// //                 <ArrowLeft className="group-hover:text-mainColor transition-colors w-5 h-5 md:w-6 md:h-6" />
// //               </button>

// //               <div className="flex gap-2">
// //                 {pillars.map((_, i) => (
// //                   <button
// //                     key={i}
// //                     onClick={() => setActiveSlide(i)}
// //                     className={`h-[2px] transition-all duration-500 ${
// //                       activeSlide === i ? "w-8 md:w-12 bg-mainGold" : "w-3 md:w-4 bg-lightColor/20"
// //                     }`}
// //                   />
// //                 ))}
// //               </div>

// //               <button
// //                 onClick={nextSlide}
// //                 className="group p-3 md:p-4 border border-lightColor/20 hover:bg-mainGold hover:border-mainGold transition-all duration-500"
// //                 aria-label="Next Slide"
// //               >
// //                 <ArrowRight className="group-hover:text-mainColor transition-colors w-5 h-5 md:w-6 md:h-6" />
// //               </button>
// //             </div>
// //           </div>

// //           {/* --- الجانب الأيمن (بطاقة السلايدر المتحركة) --- */}
// //           <div className="lg:col-span-7 order-1 lg:order-2">
// //             <div className="slide-content-box bg-white/[0.03] backdrop-blur-2xl border border-lightColor/10 p-6 md:p-12 relative min-h-[450px] md:min-h-[520px] flex flex-col justify-between shadow-2xl">
              
// //               {/* خلفية Plexus داخل البطاقة */}
// //               <div className="absolute inset-0 z-0">
// //                 <PlexusBackground
// //                   particleCount={window.innerWidth > 768 ? 35 : 15}
// //                   lineColor="rgba(197, 163, 99, 0.3)"
// //                   className="opacity-100"
// //                 />
// //               </div>

// //               <div className="relative z-10">
// //                 <div className="flex justify-between items-start mb-10 md:mb-12">
// //                   <div className="p-3 md:p-4 bg-mainGold/10 text-mainGold border border-mainGold/20">
// //                     {pillars[activeSlide].icon}
// //                   </div>
// //                   <span className="text-4xl md:text-6xl font-black italic text-mainGold opacity-20">
// //                     0{pillars[activeSlide].id}
// //                   </span>
// //                 </div>

// //                 <h3 className="text-xl md:text-3xl font-black uppercase mb-6 md:mb-8 text-lightColor tracking-wider">
// //                   {pillars[activeSlide].title}
// //                 </h3>

// //                 <ul className="space-y-3 md:space-y-5">
// //                   {pillars[activeSlide].content.map((item, idx) => (
// //                     <li
// //                       key={idx}
// //                       className="flex items-start gap-4 text-lightColor/80 group"
// //                     >
// //                       <span className="w-1.5 h-1.5 bg-mainGold rotate-45 mt-1.5 flex-shrink-0 group-hover:scale-125 transition-transform"></span>
// //                       <span className="uppercase tracking-wide text-xs md:text-sm font-medium leading-relaxed">
// //                         {item}
// //                       </span>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>

// //               {/* نص التذييل داخل البطاقة */}
// //               <div className="relative z-10 pt-8 border-t border-lightColor/5 mt-8">
// //                 <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-mainGold opacity-70">
// //                   Governance Protocol // Professional Standard
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* النص النهائي أسفل البطاقة */}
// //         <div className="mt-10 lg:mt-16 text-center lg:text-right max-w-4xl ml-auto opacity-60">
// //             <p className="text-xs md:text-base italic leading-relaxed">
// //               * Each pillar operates within clearly defined management agreements, 
// //               approved budgets, and professional standards.
// //             </p>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default MosaicPillarSlider;