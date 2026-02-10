const TechnicalPillarsGrid = ({ pillars }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-fade">
      {pillars.map((item, i) => (
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
  );
};

export default TechnicalPillarsGrid;
