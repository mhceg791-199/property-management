import {
  ShieldCheck,
  FileText,
  BarChart3,
  Settings,
  PenTool,
  Users,
} from "lucide-react";

const sectors = [
    {
      id: "01",
      icon: <FileText size={22} />,
      title: "Agreements",
      desc: "Clearly defined management agreements",
    },
    {
      id: "02",
      icon: <BarChart3 size={22} />,
      title: "Budgets",
      desc: "Approved budgets and financial controls",
    },
    {
      id: "03",
      icon: <Settings size={22} />,
      title: "Maintenance",
      desc: "Preventive maintenance planning",
    },
    {
      id: "04",
      icon: <PenTool size={22} />,
      title: "Operation",
      desc: "Documented operational procedures",
    },
    {
      id: "05",
      icon: <ShieldCheck size={22} />,
      title: "Reporting",
      desc: "Regular reporting and performance oversight",
    },
    {
      id: "06",
      icon: <Users size={22} />,
      title: "Communication",
      desc: "Professional communication with owners and tenants",
    },
  ];

  export default sectors;