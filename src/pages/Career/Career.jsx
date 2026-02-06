import DomeGallery from "../../components/Career/DomeGallery/DomeGallery";
import ReadyToJoin from "../../components/Career/ReadyToJoin/ReadyToJoin";
import DescriptionAbout from "../../components/shared/DescriptionAbout/DescriptionAbout";

function Career() {
  const paragraphs = [
    "Join Mosaic Property Management and be part of a team that values innovation, excellence, and a commitment to shaping the future of engineering",
  ];
  return (
    <>
      <div style={{ width: "99vw", height: "80vh" }}>
        <DomeGallery />
      </div>

      <DescriptionAbout
        id="Careers"
        firstWord="Join Our Team of "
        secondWord="Visionary Engineers"
        paragraphs={paragraphs}
        particleColors={["#1C2536", "#1C2536"]}
        height="h-[30vh] md:h-[40vh]"
      />
      <ReadyToJoin />
    </>
  );
}

export default Career;
