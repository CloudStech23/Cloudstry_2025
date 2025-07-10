import React from "react";
import Header from "./Sections/Header";
import Introduction from "./Sections/Introduction";
import Counter from "./Sections/Counter";
import Features from "./Sections/Features";
import Industries from "./Sections/Industries";
import HowItWorks from "./Sections/HowItWorks";
import ClientSlider from "../HomePage/Sections/ClientSlider";
import WhyChooseUs from "./Sections/WhyChooseUs";

function DigCert() {
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
        <ClientSlider />
      </section>
      <section>
        <WhyChooseUs />
      </section>
    </div>
  );
}

export default DigCert;
