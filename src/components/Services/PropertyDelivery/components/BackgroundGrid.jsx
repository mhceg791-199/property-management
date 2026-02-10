const BackgroundGrid = () => (
  <div
    className="absolute inset-0 opacity-[0.06] pointer-events-none"
    style={{
      backgroundImage:
        "linear-gradient(rgba(197,163,99,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(197,163,99,.6) 1px, transparent 1px)",
      backgroundSize: "90px 90px",
    }}
  />
);

export default BackgroundGrid;
