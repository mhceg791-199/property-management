import HomeHero from "../../components/home/HeroSection/HomeHero.container";
import MosaicKeyDifferentiatorContainer from "../../components/home/MosaicKeyDifferentiator/MosaicKeyDifferentiator.container";
import MosaicLicensingContainer from "../../components/home/MosaicLicensing/MosaicLicensing.container";
import MosaicOverview from "../../components/home/Overview/MosaicOverview.container";
import PropertyManagementContainer from "../../components/home/PropertyManagement/PropertyManagement.container";
import MosaicWhatWeDo from "../../components/home/WhatWeDo/WhatWeDo";

export default function home() {
  return (
    <>
      <HomeHero />
      <MosaicOverview />
      <MosaicWhatWeDo />
      <PropertyManagementContainer />
      <MosaicKeyDifferentiatorContainer/>
      <MosaicLicensingContainer/>
    </>
  );
}
