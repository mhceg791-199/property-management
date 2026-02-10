const FloatingHexagons = ({ hexagonsRef }) => {
  const positions = [
    { left: "5%", top: "0%" },
    { left: "90%", top: "10%" },
    { left: "15%", top: "60%" },
    { left: "80%", top: "70%" },
    { left: "50%", top: "-20%" },
  ];

  return (
    <div className="hidden md:block">
      {positions.map((pos, i) => (
        <div
          key={i}
          ref={(el) => (hexagonsRef.current[i] = el)}
          className="absolute border border-mainGold/10 w-24 h-24 opacity-20"
          style={{
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            ...pos,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHexagons;
