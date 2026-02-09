import {
  ShieldCheck,
  Scale,
  BadgeCheck,
  Settings,
  ClipboardCheck,
  Database,
} from "lucide-react";

const slides = [
    {
      id: 1,
      title: "Verified Entity",
      icon: <BadgeCheck size={64} className="text-mainColor" />,
      bgIcon: <ClipboardCheck size={400} />,
    },
    {
      id: 2,
      title: "Regulatory Sync",
      icon: <Scale size={64} className="text-mainColor" />,
      bgIcon: <ShieldCheck size={400} />,
    },
    {
      id: 3,
      title: "Operational Framework",
      icon: <Settings size={64} className="text-mainColor" />,
      bgIcon: <Database size={400} />,
    },
  ];

export default slides