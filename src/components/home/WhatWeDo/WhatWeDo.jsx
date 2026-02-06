import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ClipboardList,
  Wrench,
  Users,
  ShieldAlert,
  LineChart,
  Siren,
  Activity,
  ArrowUp,
} from "lucide-react";
import PlexusBackground from "../../shared/PlexusCanvas/PlexusCanvas";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const MosaicWhatWeDo = () => {
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const timelineRef = useRef(null);

  const services = [
    {
      icon: <ClipboardList size={22} />,
      desc: "Full property management and operations",
    },
    {
      icon: <Wrench size={22} />,
      desc: "Preventive and corrective maintenance coordination",
    },
    { icon: <Users size={22} />, desc: "Vendor and contractor management" },
    {
      icon: <LineChart size={22} />,
      desc: "Budget preparation, financial tracking, and reporting",
    },
    {
      icon: <ShieldAlert size={22} />,
      desc: "Tenant coordination and lease administration",
    },
    {
      icon: <Siren size={22} />,
      desc: "Compliance, safety, and risk oversight",
    },
    {
      icon: <Activity size={22} />,
      desc: "Emergency response and issue resolution",
    },
  ];

  // تكرار العناصر لضمان سلاسة الدوران اللانهائي
  const displayServices = [...services, ...services];
  const itemHeight = 112; // الارتفاع المتوقع للعنصر مع الفواصل

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. أنيميشن الظهور الأولي عند التمرير
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        })
        .from(".reveal-text", {
          y: 100,
          opacity: 0,
          stagger: 0.15,
          duration: 1,
          ease: "expo.out",
        })
        .from(".static-content", { x: -50, opacity: 0, duration: 1 }, "-=0.5");

      // 2. إنشاء التايم لاين الرئيسي للسلايدر
      const pauseDuration = 3;
      const moveDuration = 1;
      const loop = gsap.timeline({
        repeat: -1,
        defaults: { ease: "none" },
      });
      timelineRef.current = loop;

      services.forEach((_, i) => {
        // أنيميشن بار التقدم
        loop.fromTo(
          `.progress-bar-${i}`,
          { width: "0%" },
          { width: "100%", duration: pauseDuration },
        );

        // حركة الانتقال للعنصر التالي
        loop.to(sliderRef.current, {
          y: -((i + 1) * itemHeight),
          duration: moveDuration,
          ease: "expo.inOut",
          onStart: () => {
            // تصفير البار عند الانتقال
            gsap.set(`.progress-bar-${i}`, { width: "0%" });
          },
        });
      });

      // تصفير الموقع في نهاية الدورة لضمان الاستمرارية
      loop.set(sliderRef.current, { y: 0 });
    }, sectionRef);

    return () => ctx.revert();
  }, [services.length]);

  // دالة الرجوع الناعم (Smooth Rewind)
  const handlePreviousService = () => {
    if (timelineRef.current) {
      const tl = timelineRef.current;
      const currentTime = tl.time();
      const stepDuration = 4; // مدة الوقوف (3) + مدة الحركة (1)

      let targetTime = currentTime - stepDuration;

      // إذا كان الوقت المستهدف أقل من الصفر، نعود للخلف من نهاية التايم لاين
      if (targetTime < 0) {
        targetTime = tl.duration() - stepDuration;
      }

      // تحويل قيمة الوقت بنعومة (Tweening the timeline time)
      gsap.to(tl, {
        time: targetTime,
        duration: 0.8,
        ease: "power3.inOut",
        onStart: () => tl.pause(),
        onComplete: () => tl.play(),
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 bg-mainColor text-lightColor overflow-hidden"
    >
      {/* CAD Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#e9d9c5 1px, transparent 1px), linear-gradient(90deg, #e9d9c5 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-10 mb-20 items-end">
          <div className="lg:col-span-7">
            {/* <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-mainGold" />
              <h2 className="text-head font-bold tracking-[0.4em] uppercase text-mainGold">
                What We Do
              </h2>
            </div> */}
            <h2 className="heading leading-none text-mainGold mb-10">
              <SectionHeader firstWord="What We" secondWord="Do" />
            </h2>

            <h3 className="reveal-text text-5xl md:text-7xl font-black leading-none uppercase tracking-tight text-lightColor">
              Disciplined <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mainGold to-lightColor/40 italic">
                Operations
              </span>
            </h3>
          </div>

          <div className="lg:col-span-5 border-l border-lightColor/20 pl-8">
            <p className="text-lightColor/60 paragraph leading-relaxed">
              Mosaic Property Management delivers end-to-end property management
              services designed to ensure the efficient operation and proper
              stewardship of real estate assets.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-px border border-lightColor/20 bg-lightColor/10">
          {/* Left Side: Static Info */}
          <div className="static-content bg-mainColor p-12 lg:p-20 relative overflow-hidden flex flex-col justify-center">
            <PlexusBackground
              particleCount={25}
              lineColor="rgba(197, 163, 99, 0.2)"
              className="opacity-100"
            />
            <div className="absolute top-0 right-0 w-64 h-64 bg-mainGold/5 rounded-full blur-[100px] -mr-32 -mt-32" />
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-8 flex items-center gap-4 text-lightColor">
              <ClipboardList className="text-mainGold" size={24} />
              Strategic Core
            </h3>
            <p className="text-lightColor/70 leading-loose paragraph">
              All services are delivered within approved budgets, documented
              procedures, and clear owner directives.
            </p>
          </div>

          {/* Right Side: Interactive Slider */}
          <div className="bg-mainColor p-12 lg:p-20 flex flex-col justify-center relative min-h-[500px]">
            {/* Mask to fade edges */}
            {/* <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-mainColor via-transparent to-mainColor" /> */}

            <div className="relative h-[330px] overflow-hidden z-10">
              <div ref={sliderRef} className="flex flex-col gap-8">
                {displayServices.map((item, i) => {
                  const isOriginal = i < services.length;
                  return (
                    <div
                      key={i}
                      className="service-node flex gap-6 h-20 items-start group"
                    >
                      <div className="text-mainGold shrink-0 p-3 bg-lightColor/5 border border-lightColor/10 rounded-sm group-hover:bg-mainGold/10 transition-colors">
                        {item.icon}
                      </div>

                      <div className="flex-1">
                        <p className="font-bold uppercase text-sm tracking-[0.15em] mb-4 text-lightColor group-hover:text-mainGold transition-colors">
                          {item.desc}
                        </p>

                        {isOriginal && (
                          <div className="w-full h-px bg-lightColor/20 relative overflow-hidden">
                            <div
                              className={`progress-bar-${i} absolute top-0 left-0 h-full bg-mainGold w-0 shadow-[0_0_10px_rgba(197,163,99,0.4)]`}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Manual Navigation Button */}
            <button
              onClick={handlePreviousService}
              className="absolute bottom-6 right-10 z-30 group flex flex-col items-center gap-2 active:scale-95 transition-transform"
              title="Return to Previous Module"
            >
              <div className="p-4 bg-lightColor/5 rounded-full border border-lightColor/20 group-hover:border-mainGold group-hover:bg-mainGold/10 transition-all">
                <ArrowUp
                  size={24}
                  className="text-lightColor group-hover:text-mainGold transition-colors"
                />
              </div>
              <span className="text-[8px] font-mono uppercase tracking-[0.4em] text-lightColor/40 group-hover:text-mainGold transition-colors">
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
