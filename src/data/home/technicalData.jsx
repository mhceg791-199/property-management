import { Box, Layers, Zap, Settings, Maximize } from "lucide-react";
import architecture from "../../assets/engineering/architecture.webp";
import electrical from "../../assets/engineering/electrical.webp";
import interior from "../../assets/engineering/interior.webp";
import mechanical from "../../assets/engineering/mechaical.webp";
import structural from "../../assets/engineering/structural.webp";

const technicalData = [
  {
    title: "Architecture",
    code: "ARC-01",
    icon: <Layers />,
    image: architecture,
  },
  {
    title: "Interior Design",
    code: "INT-02",
    icon: <Box />,
    image: interior,
  },
  {
    title: "Mechanical",
    code: "MECH-03",
    icon: <Settings />,
    image: mechanical,
  },
  { title: "Electrical", code: "ELEC-04", icon: <Zap />, image: electrical },
  {
    title: "Structural",
    code: "STR-05",
    icon: <Maximize />,
    image: structural,
  },
];

export default technicalData;
