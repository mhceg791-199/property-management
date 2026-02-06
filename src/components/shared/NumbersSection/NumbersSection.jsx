import { useInView } from "react-intersection-observer";
import useCountUp from "../../../hooks/useCountUp";

export default function NumbersSection({
  items = [],
  duration = 3000,
  bgColor = "bg-transparent",
  textColor = "text-white",
}) {
  const { ref, inView } = useInView({ triggerOnce: true });

  const numbers = items.map((item) => useCountUp(item.max, inView, duration));

  return (
    <div className={`${bgColor} ${textColor} pt-12 border-t border-white/10`}>
      <div ref={ref} className="space-y-8">
        {items.map(({ title, description, max, icon, color , dot }, index) => {
          const number = numbers[index];
          const progress = Math.min((number / max) * 100, 100);

          return (
            <div key={index} className="flex items-start gap-6">
              {/* NUMBER */}
              <span
                className={`text-4xl font-black ${color || "text-mainColor"}`}
              >
                {number}
                <span className="ml-1">{icon}<span className="opacity-0">{dot}</span></span>
              </span>
              {/* TEXT + PROGRESS */}
              <div className="flex-1 space-y-3">
                <p className="text-gray-400 leading-relaxed">
                  <span className="text-white font-semibold block">
                    {title}
                  </span>
                  {description}
                </p>

                {/* PROGRESS BAR */}
                <div className="w-1/2 h-[10px] bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-mainGold to-yellow-400 transition-all duration-700 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
