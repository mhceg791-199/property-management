import MosaicApproach from "../../components/Services/MosaicApproach/MosaicApproach";
import PropertyDelivery from "../../components/Services/PropertyDelivery/PropertyDelivery";
import WhatWeManage from "../../components/Services/WhatWeManage/WhatWeManage";
import DescriptionAbout from "../../components/shared/DescriptionAbout/DescriptionAbout";
import FirstSectionByVideo from "../../components/shared/FirstSectionByVideo/FirstSectionByVideo";

export default function Services() {
  const paragraphs = [
    "Mosaic Property Management provides licensed, professional property management services for real estate assets. Our role is to manage, operate, and safeguard properties on behalf of owners — ensuring operational integrity, regulatory compliance, and long-term asset value.",
  ];

  return (
    <>
      <FirstSectionByVideo title="Services" />
      <DescriptionAbout
        id="services-mosaic-proprety"
        firstWord="Our "
        secondWord="Services"
        paragraphs={paragraphs}
        particleColors={["#1C2536", "#1C2536"]}
        height="h-[50vh] md:h-[55vh]"
      />
      <WhatWeManage />
      <PropertyDelivery />
      <MosaicApproach />
    </>
  );
}
