import { Suspense, useEffect, useState } from "react";
import { lazyWithPreload } from "react-lazy-with-preload";
import SectionHeader from "../SectionHeaders/SectionHeader";
import Paragraph from "../Paragraph/Paragraph";

const LazyParticles = lazyWithPreload(() =>
  import("./Orb")
);

function DescriptionAbout({
  id = "about-section",
  firstWord = "ABOUT",
  secondWord = "COMPANY",
  paragraphs = [],
  paragraphs2 = [],
  paragraphs3 = [],
  paragraphs4 = [],
  particleColors = ["#C5A363", "#C5A363"],
  particleCount = 80,
  particleSpread = 8,
  speed = 0.15,
  particleBaseSize = 120,
  bgColor = "bg-black",
  textColor = "text-white",
  maxWidth = "md:w-3/4",
  height = "h-[80vh]",
}) {
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShowParticles(true);
      },
      { threshold: 0.2 }
    );

    const section = document.querySelector(`#${id}`);
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, [id]);

  useEffect(() => {
    LazyParticles.preload();
  }, []);

  return (
    <section
      id={id}
      className={`relative w-full ${height} overflow-hidden ${bgColor}`}
    >
      {showParticles && (
        <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
          <div className="absolute inset-0 z-0">
            <LazyParticles
              particleColors={particleColors}
              particleCount={particleCount}
              particleSpread={particleSpread}
              speed={speed}
              particleBaseSize={particleBaseSize}
              moveParticlesOnHover={false}
              alphaParticles={false}
              disableRotation={false}
            />
          </div>
        </Suspense>
      )}

      <div
        className={`relative z-10 flex flex-col items-center justify-center h-full text-center ${textColor} px-4`}
      >
        <div className={`${maxWidth} m-auto my-6`}>
          <SectionHeader firstWord={firstWord} secondWord={secondWord} />
        </div>

        <div className={`${maxWidth} m-auto  `}>
          {paragraphs.map((text, i) => (
            <Paragraph key={i} p={text} />
          ))}
        </div>

        {paragraphs2 && (
          <div className={`${maxWidth} m-auto my-1 `}>
            {paragraphs2.map((text, i) => (
              <Paragraph key={i} p={text} />
            ))}
          </div>
        )}

        {paragraphs3 && (
          <div className={`${maxWidth} m-auto my-1 `}>
            {paragraphs3.map((text, i) => (
              <Paragraph key={i} p={text} />
            ))}
          </div>
        )}

        {paragraphs4 && (
          <div className={`${maxWidth} m-auto  `}>
            {paragraphs4.map((text, i) => (
              <Paragraph key={i} p={text} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default DescriptionAbout;
