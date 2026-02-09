import { Building2, Factory, ShoppingBag } from "lucide-react";
import commercial from "../../assets/services/commercial.webp";
import industrial from "../../assets/services/industrial.webp";
import retail from "../../assets/services/retail.webp";

const manageItems = [
  {
    title: "Commercial Properties",
    icon: <Building2 className="w-6 h-6" />,
    description:
      "Commercial properties, including office buildings, mixed-use assets, and administrative buildings",
    image: commercial,
  },
  {
    title: "Industrial Properties",
    icon: <Factory className="w-6 h-6" />,
    description:
      "Industrial properties, including warehouses, logistics facilities, and light industrial assets",
    image: industrial,
  },
  {
    title: "Retail Properties",
    icon: <ShoppingBag className="w-6 h-6" />,
    description:
      "Retail properties, including retail centers, standalone retail units, and commercial plazas",
    image: retail,
  },
];

export default manageItems;
