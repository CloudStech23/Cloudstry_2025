import { useEffect, useState } from "react";
import { FaBusinessTime, FaBoxes, FaUsers } from "react-icons/fa";

const Counter = () => {
  const [counters, setCounters] = useState({
    clients: 0,
    experiences: 0,
    products: 0,
  });

  const targetValues = {
    clients: 150,
    experiences: 20,
    products: 10,
  };

  useEffect(() => {
    const duration = 3000;
    const interval = 50;
    const steps = duration / interval;
    const increments = {
      clients: targetValues.clients / steps,
      experiences: targetValues.experiences / steps,
      products: targetValues.products / steps,
    };

    const timer = setInterval(() => {
      setCounters((prev) => ({
        clients: Math.min(
          prev.clients + increments.clients,
          targetValues.clients
        ),
        experiences: Math.min(
          prev.experiences + increments.experiences,
          targetValues.experiences
        ),
        products: Math.min(
          prev.products + increments.products,
          targetValues.products
        ),
      }));
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full py-16 mb-[2rem] flex justify-center items-center relative overflow-hidden">
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
              <span className="text-6xl font-bold mb-2">
                {Math.floor(counters.clients)}+
              </span>
              <span className="text-[18px] font-semibold text-center">
                DELIGHTED <br /> CLIENTS
              </span>
            </div>
            <div className="flex flex-col text-white items-center p-6 rounded-lg   ">
              {/* <FaBusinessTime className="text-4xl mb-4" /> */}
              <span className="text-6xl font-bold mb-2">
                {Math.floor(counters.experiences)}+
              </span>
              <span className="text-[18px] font-semibold text-center">
                YEARS OF <br /> EXPERIENCE
              </span>
            </div>
            <div className="flex flex-col text-white items-center p-6 rounded-lg   ">
              {/* <FaBusinessTime className="text-4xl mb-4" /> */}
              <span className="text-6xl font-bold mb-2">
                {Math.floor(counters.products)}+
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
