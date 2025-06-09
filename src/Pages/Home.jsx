import Navbar from "../Navigators/Navbar";
import { useState, useEffect } from "react";
import CarouselSlider from "../CustomeComponents/Slider";
function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]); // Only re-run if scrolled state changes
  return (
    //margin or padding from top {90px}
    <div className="min-h-screen mt-[90px] bg-gray-50">
      <Navbar dynamicBG={scrolled} />

      <section>
        <CarouselSlider />
      </section>
      <main className="pt-24 px-4 sm:px-6 lg:px-8 pb-12 max-w-7xl mx-auto">
        {/* Hero Section */}

        {/* Features Section */}
        <section className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Feature One",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            },
            {
              title: "Feature Two",
              description:
                "Sed do eiusmod tempor incididunt ut labore et dolore.",
            },
            {
              title: "Feature Three",
              description:
                "Ut enim ad minim veniam, quis nostrud exercitation.",
            },
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </section>

        {/* Content Section */}
        <section className="py-12">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <div className="text-gray-700 space-y-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia qui
              amet suscipit explicabo deserunt, quis unde soluta tempore aliquid
              quam ullam maiores tenetur. Totam praesentium quidem quae unde
              distinctio quos harum, ex tempore, odit voluptatum voluptate
              inventore deleniti sunt ratione, quasi provident blanditiis.
            </p>
            <p>
              Similique, molestiae. Quia vero commodi consequuntur odit
              blanditiis saepe laboriosam tempora quae illo perferendis
              reprehenderit tempore delectus iure consequatur, magnam sequi
              facere voluptatibus corporis voluptates iusto distinctio esse
              aliquid eos deserunt?
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
