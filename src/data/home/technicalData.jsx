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
    companies: [
      {
        name: "Datta & Tayefi",
        url: "https://www.dattatayefi.com/",
      },
    ],
  },
  {
    title: "Interior Design",
    code: "INT-02",
    icon: <Box />,
    image: interior,
    companies: [
      {
        name: "Datta & Tayefi",
        url: "https://www.dattatayefi.com/",
      },
    ],
  },
  {
    title: "Mechanical",
    code: "MECH-03",
    icon: <Settings />,
    image: mechanical,
    companies: [
      {
        name: "Mosaic Engineering",
        url: "https://mosaic-eng.com/",
      },
    ],
  },
  {
    title: "Electrical",
    code: "ELEC-04",
    icon: <Zap />,
    image: electrical,
    companies: [
      {
        name: "Mosaic Engineering",
        url: "https://mosaic-eng.com/",
      },
    ],
  },
  {
    title: "Structural",
    code: "STR-05",
    icon: <Maximize />,
    image: structural,
    companies: [
      {
        name: "Mosaic Engineering",
        url: "https://mosaic-eng.com/",
      },
      {
        name: "Wolsey",
        url: "https://www.wolsey.ca/",
      },
    ],
  },
];

export default technicalData;