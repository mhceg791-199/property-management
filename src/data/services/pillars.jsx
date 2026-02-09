import {
  Settings,
  Landmark,
  Users,
  ShieldCheck,
} from "lucide-react";

 const pillars = [
    {
      id: "01",
      title: "Operations & Maintenance",
      icon: <Settings className="w-12 h-12" />,
      content: [
        "Day-to-day property operations",
        "Preventive maintenance planning",
        "Coordination of repairs and service providers",
        "Emergency response and issue resolution",
        "Oversight of building systems",
      ],
    },
    {
      id: "02",
      title: "Financial & Administrative Management",
      icon: <Landmark className="w-12 h-12" />,
      content: [
        "Operating budget preparation and control",
        "Rent collection and expense management",
        "Financial tracking and owner reporting",
        "Utility, insurance, and service coordination",
        "Record keeping and documentation",
      ],
    },
    {
      id: "03",
      title: "Tenant & Stakeholder Management",
      icon: <Users className="w-12 h-12" />,
      content: [
        "Lease administration and coordination",
        "Tenant communication and issue handling",
        "Move-ins, move-outs, and inspections",
        "Enforcement of lease terms and property rules",
        "Liaison with contractors and authorities",
      ],
    },
    {
      id: "04",
      title: "Compliance & Risk Oversight",
      icon: <ShieldCheck className="w-12 h-12" />,
      content: [
        "Regulatory and safety compliance",
        "Insurance coordination and documentation",
        "Risk mitigation and operational governance",
        "Action in line with approved authority and agreements",
      ],
    },
  ];


  export default pillars;