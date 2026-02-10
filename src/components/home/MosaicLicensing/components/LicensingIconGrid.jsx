import { ShieldCheck, Scale, Activity } from "lucide-react";

const items = [
  { icon: <Scale size={22} />, label: "Legal Framework" },
  { icon: <ShieldCheck size={22} />, label: "Governance" },
  { icon: <Activity size={22} />, label: "Accountability" },
];

const LicensingIconGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mt-14 pt-10 border-t border-slate-100">
      {items.map((item, idx) => (
        <div key={idx} className="flex flex-col items-center text-center">
          <div className="text-mainGold mb-3">{item.icon}</div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-mainColor">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default LicensingIconGrid;
