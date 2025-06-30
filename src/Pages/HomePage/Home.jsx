import CarouselSlider from "./Sections/Slider";
import "../../CSS/Home.css";
import ClientSlider from "./Sections/ClientSlider";
import SolutionsWeOffer from "./Sections/SolutionsWeOffer";
import Introduction from "./Sections/Introduction";
import IndustriesWeCater from "./Sections/IndustriesWeCater";
import OurCustomers from "./Sections/OurCustomers";
import WhyChooseUs from "./Sections/WhyChooseUs";
import CallToAction from "./Sections/CallToAction";
import GlobalPresene from "./Sections/GlobalPresene";
import ContactSection from "./Sections/ContactSection";

function Home() {
  return (
    //margin or padding from top {90px}
    <div className="min-h-screen ">
      {/* Lable: Main Slider,Hero Slider*/}
      <section>
        <CarouselSlider />
      </section>

      {/* Lable: introduction */}
      <section>
        <Introduction />
      </section>

      {/* Lable: solutions we offer 2 */}
      <section>
        <SolutionsWeOffer />
      </section>

      {/* Lable: counter */}
      {/* <section>
        <Counter />
      </section> */}

      {/* Lable: why choose us */}
      <section>
        <WhyChooseUs />
      </section>

      {/* Lable: our clients */}
      <div>
        <ClientSlider />
      </div>

      {/* Lable: industries we cater to */}
      <section>
        <IndustriesWeCater />
      </section>

      {/* Lable: our happy customers */}
      <section>
        <OurCustomers />
      </section>

      {/* Lable: call to action  */}
      <section>
        <CallToAction />
      </section>

      {/* Lable: our global presense */}
      <section>
        <GlobalPresene />
      </section>

      {/* Lable: contact form */}
      <section>
        <ContactSection />
      </section>
    </div>
  );
}

export default Home;
