import React, { useEffect } from "react";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto">
        <main className="mx-auto max-w-7xl mb-8 sm:mb-12 md:mb-16">
          <div className="flex items-center justify-center flex-wrap">
            <div className="w-full sm:w-1/2 text-left py-8 sm:py-12 md:py-16 lg:py-20 xl:pb-28 px-4 md:px-6 lg:px-8">
              <h1
                className="text-3xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-dzoma-blue-black"
                data-aos="zoom-in"
                data-aos-duration="1500"
                data-aos-delay="500"
              >
                <span className="block xl:inline text-dzoma-yellow">
                  DZOMA!
                </span>{" "}
                <span className="block text-dzoma-blue-black xl:inline">
                  Your bulk delivery plug
                </span>
              </h1>

              <p className="py-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Dzoma is here to serve you. our drivers/riders are professionals
                and we have thoroughly checked their backgrounds. Our network of
                more than 100 box trucks, cargo vans, pickup trucks are
                available to help you the same day or you can schedule in
                advance.
              </p>

              <div className="py-6 sm:py-8"></div>
            </div>
            <div className="w-full sm:w-1/2 px-4 sm:px-6 md:px-8 lg:px-16">
              <img src="/images/about/hero.png" alt="" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default About;
