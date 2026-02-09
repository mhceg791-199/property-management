import {
  ClipboardList,
  Wrench,
  Users,
  ShieldAlert,
  LineChart,
  Siren,
  Activity,
} from "lucide-react";

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

export default services;
