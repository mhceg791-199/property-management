import MosaicApproachContainer from "../../components/Services/MosaicApproach/MosaicApproach.container";
import MosaicPillarSlider from "../../components/Services/PropertyDelivery/MosaicPillarSlider.container";
import WhatWeManageCards from "../../components/Services/WhatWeManage/WhatWeManageCards.container";
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
      <WhatWeManageCards />
      <MosaicPillarSlider />
      <MosaicApproachContainer />
    </>
  );
}
