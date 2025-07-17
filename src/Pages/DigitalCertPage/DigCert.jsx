import React, { useLayoutEffect } from "react";
import Header from "./Sections/Header";
import Introduction from "./Sections/Introduction";
import Counter from "./Sections/Counter";
import Features from "./Sections/Features";
import Industries from "./Sections/Industries";
import HowItWorks from "./Sections/HowItWorks";
import ClientSlider from "../HomePage/Sections/ClientSlider";
import WhyChooseUs from "./Sections/WhyChooseUs";
import ContactSection from "./Sections/ContactSection";
import FAQ from "./Sections/FAQ";
import PlatfromFeature from "./Sections/PlatfromFeature";

function DigCert() {
  useLayoutEffect(() => {
    // Scroll to top just before the component is painted
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <section>
        <Header />
      </section>
      <section>
        <Introduction />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <Counter />
      </section>
      <section>
        <Industries />
      </section>
      <section>
        <HowItWorks />
      </section>
      <section>
        <WhyChooseUs />
      </section>
      {/* <section>
        <ClientSlider />
      </section> */}
      <section>
        <PlatfromFeature />
      </section>
      <section>
        <FAQ />
      </section>
      <section>
        <ContactSection />
      </section>
    </div>
  );
}

export default DigCert;
