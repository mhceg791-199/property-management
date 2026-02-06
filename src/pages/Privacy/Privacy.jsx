import { useEffect } from "react";
import DescriptionAbout from "../../components/shared/DescriptionAbout/DescriptionAbout";
import TitleWithList from "../../components/shared/TitleWithList/TitleWithList";

function Privacy() {
  const paragraphs = [
    "Mosaic Property Management is committed to safeguarding the privacy and security of all personal data collected in the course of our operations. This Privacy Policy outlines our protocols for collecting, using, storing, and disclosing personal information, in alignment with applicable data protection regulations. By engaging with our services, you acknowledge and consent to the terms outlined.",
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="mt-[3.5rem] md:mt-[4rem]">
        <DescriptionAbout
          id="PRIVACY-property-management"
          firstWord="Privacy"
          secondWord="Policy"
          paragraphs={paragraphs}
          particleColors={["#1C2536", "#1C2536"]}
          height="h-[35vh] md:h-[50vh]"
        />
      </div>

      <div className="md:px-20 px-5">
        <TitleWithList
          title="INFORMATION COLLECTION"
          text="In providing our services, we may collect both personal and non-personal information to facilitate effective engagement. 
Information we may gather includes, but is not limited to:"
          list={[
            "Personal Identifiers: Full name, contact details, employment information, and other identifiers necessary for our business processes.",
            "Usage Data: Data on interaction patterns with Mosaic Property Management platforms to enhance service quality and user experience.",
          ]}
        />
        <TitleWithList
          title="PURPOSE OF DATA COLLECTION"
          text="Mosaic Property Management collects personal data solely to improve the quality of our services, enhance operational efficiency, and foster a secure and personalized user experience. Primary purposes include:"
          list={[
            "Enhancement of User Experience: Analyzing usage patterns to refine our offerings.",
            "Compliance and Legal Requirements: Adhering to regulatory obligations and facilitating any required audits or disclosures.",
          ]}
        />
        <TitleWithList
          title="DATA SECURITY"
          text="We employ industry-standard security measures to protect your information from unauthorized access, alteration, 
or destruction. This includes encryption protocols, secure data storage, and stringent access controls."
        />
        <TitleWithList
          title="DATA SHARING AND DISCLOSURE"
          text="Mosaic Property Management respects your privacy and does not share personal information with unaffiliated third parties except as outlined in this policy. Data may be shared under the following conditions:"
          list={[
            "Service Providers: Trusted partners that assist us in delivering our services, under strict confidentiality agreements.",
            "Legal Compliance: When required by law or in response to legal proceedings.",
            "Corporate Transactions: In the event of mergers, acquisitions, or other corporate restructuring, in line with data protection regulations.",
          ]}
        />
        <TitleWithList
          title="DATA RETENTION"
          text="Personal data is retained only for as long as is necessary to fulfill the purposes outlined in this policy or as required by law. Once the data is no longer needed, it is securely disposed of to prevent unauthorized access."
        />
        <TitleWithList
          title="CHANGES TO THIS PRIVACY POLICY"
          text="Mosaic Property Management reserves the right to amend this Privacy Policy to reflect changes in our practices, regulatory requirements, or other operational considerations. All updates will be published on our website, with the 'Last Updated' date indicating the most recent revisions."
        />
        <TitleWithList
          title="CONTACT US"
          text="For any questions or concerns regarding our Privacy Policy or your personal data, please reach out to our Data Protection 
Officer via the contact information provided on our official website."
        />
      </div>
    </>
  );
}

export default Privacy;
