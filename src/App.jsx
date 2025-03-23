import React from "react";
import {
  HeaderComponent, 
  FooterComponent, 
  Section1, 
  Section2, 
  Testimonials,
  SuboxoneTreatment,
  Companies,
  StateMap,
  MedicationBanner
} from './components'
const HomePage = () => {
  return (
    <>
      <HeaderComponent />
      <div className="min-h-screen">
        <Section1 />
        <Section2 />
        <Testimonials />
        <SuboxoneTreatment />
        <Companies />
        <StateMap />
        <MedicationBanner />
      </div>
      <FooterComponent />
    </>
  );
};

export default HomePage;
