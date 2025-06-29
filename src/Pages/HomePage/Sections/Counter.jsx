import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // only animate once
    threshold: 0.3, // percentage of section visible before triggering
  });

  return (
    <div
      ref={ref}
      className="w-full md:h-[300px] py-16  flex justify-center items-center relative overflow-hidden"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1920&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#085d9e] bg-opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* clients Counter */}
            <div className="flex flex-col text-white items-center p-6 rounded-lg   ">
              {/* <FaBusinessTime className="text-4xl mb-4" /> */}
              <span className="text-6xl md:text-7xl font-bold mb-2">
                {inView && <CountUp end={150} duration={4} />}+
              </span>
              <span className="text-[18px] font-semibold text-center">
                DELIGHTED <br /> CLIENTS
              </span>
            </div>
            <div className="flex flex-col text-white items-center p-6 rounded-lg   ">
              {/* <FaBusinessTime className="text-4xl mb-4" /> */}
              <span className="text-6xl md:text-7xl font-bold mb-2">
                {inView && <CountUp end={20} duration={4} />}+
              </span>
              <span className="text-[18px] font-semibold text-center">
                YEARS OF <br /> EXPERIENCE
              </span>
            </div>
            <div className="flex flex-col text-white items-center p-6 rounded-lg   ">
              {/* <FaBusinessTime className="text-4xl mb-4" /> */}
              <span className="text-6xl md:text-7xl font-bold mb-2">
                {inView && <CountUp end={10} duration={4} />}+
              </span>
              <span className="text-[18px] font-semibold text-center">
                PRODUCT AND <br /> SERVICES
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
