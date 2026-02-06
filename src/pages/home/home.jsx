import HomeHero from "../../components/home/HeroSection/HeroSection";
import MosaicKeyDifferentiator from "../../components/home/MosaicKeyDifferentiator/MosaicKeyDifferentiator";
import MosaicLicensingSection from "../../components/home/MosaicLicensing/MosaicLicensing";
import MosaicOverview from "../../components/home/Overview/Overview";
import PropertyManagement from "../../components/home/PropertyManagement/PropertyManagement";
import MosaicWhatWeDo from "../../components/home/WhatWeDo/WhatWeDo";

export default function home() {
  return (
    <>
      <HomeHero />
      <MosaicOverview />
      <MosaicWhatWeDo />
      <PropertyManagement />
      <MosaicKeyDifferentiator/>
      <MosaicLicensingSection/>
    </>
  );
}
