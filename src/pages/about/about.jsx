import FirstSectionByVideo from "../../components/shared/FirstSectionByVideo/FirstSectionByVideo";
import DescriptionAbout from "../../components/shared/DescriptionAbout/DescriptionAbout";
import MosaicMissionVision from "../../components/about/MosaicMissionVision/MosaicMissionVision";
import EngineeringScope from "../../components/about/EngineeringScope/EngineeringScope";
import GovernanceEngineering from "../../components/about/GovernanceEngineering/GovernanceEngineering";

function About() {
  const paragraphs = [
    "Mosaic Property Management was established as part of the broader vision of Mosaic Holding Corporation — a platform built on the belief that strong, resilient organizations are formed when the right pieces come together with clarity and purpose.",

    "Within this ecosystem, Mosaic Property Management represents the operational core of real estate ownership. It is where assets are cared for, systems are coordinated, and long-term value is preserved through disciplined execution.",

    "We were created to bring structure, professionalism, and accountability to property operations. By working within the Mosaic platform, we approach property management as an integrated function — one that requires coordination, foresight, and respect for both the asset and the people who rely on it every day.",
  ];

  return (
    <>
      <FirstSectionByVideo title="About US" />
      <DescriptionAbout
        id="about-property-management"
        firstWord="Our"
        secondWord="Story"
        paragraphs={paragraphs}
        particleColors={["#1C2536", "#1C2536"]}
        height="h-[70vh] md:h-[55vh]"
      />
      <MosaicMissionVision />
      <EngineeringScope />
      <GovernanceEngineering />
    </>
  );
}

export default About;
