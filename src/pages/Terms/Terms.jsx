import React, { useEffect } from "react";
import DescriptionAbout from "../../components/shared/DescriptionAbout/DescriptionAbout";
import TitleWithText from "../../components/shared/TitleWithText/TitleWithText";

function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const terms = [
    {
      title: "INTELLECTUAL PROPERTY RIGHTS",
      paragraph:
        "All content provided on this site, including but not limited to text, graphics, logos, and software, is owned or licensed by Mosaic Property Management and is protected under applicable copyright, trademark, and other intellectual property laws. Unauthorized use of any materials from this site is strictly prohibited unless prior written permission has been obtained from Mosaic Property Management.",
    },
    {
      title: "USE OF THE SITE",
      paragraph:
        "Mosaic Property Management grants you a limited, non-transferable license to access and make personal use of this site. Modification, distribution, or reproduction of the content for commercial purposes is expressly prohibited. Any misuse or unauthorized exploitation of the content or services offered on this site may result in legal action.",
    },
    {
      title: "LIMITATION OF LIABILITY",
      paragraph:
        "Mosaic Property Management strives to ensure the accuracy and reliability of the content provided on this website. However, Mosaic Property Management does not warrant that the information, software, or services will meet your expectations or requirements. To the fullest extent permitted by law, Mosaic Property Management disclaims any liability for any damages arising from the use or inability to use this site or its contents.",
    },
    {
      title: "PRIVACY POLICY",
      paragraph:
        "Mosaic Property Management respects your privacy. For detailed information on how we collect, use, and safeguard your personal information, please refer to our Privacy Policy.",
    },
    {
      title: "MODIFICATIONS TO TERMS AND CONDITIONS",
      paragraph:
        "Mosaic Property Management reserves the right to modify these terms at its discretion, without prior notice. By continuing to use this site following any changes, you accept and agree to abide by the updated terms.",
    },
    {
      title: "GOVERNING LAW",
      paragraph:
        "These terms and conditions shall be governed by and interpreted in accordance with the laws of the jurisdiction in which Mosaic Property Management operates. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in this region.",
    },
  ];
  const paragraphs = [
    "Welcome to Mosaic Holding Corporation’s (“Mosaic Property Management”) website. By accessing and using this site, you agree to comply with the terms and conditions outlined herein. If you do not agree with any part of these terms, please refrain from using our website.",
  ];
  return (
    <div className="mt-[3.5rem] md:mt-[4rem]">
      <DescriptionAbout
        id="TERMS-property-management"
        firstWord="Terms and"
        secondWord="Conditions"
        paragraphs={paragraphs}
        particleColors={["#1C2536", "#1C2536"]}
        height="h-[25vh] md:h-[50vh]"
      />
      <div className="md:px-20 px-3 mb-28">
        {terms.map(({ title, paragraph }, index) => (
          <React.Fragment key={index}>
            <TitleWithText title={title} paragraph={paragraph} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Terms;
