import React, { useEffect } from "react";
import WhyDzomaCard from "./WhyDzomaCard";
import { whydzomaData } from "./data";
import AOS from "aos";

export const WhyDzoma = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div className="flex items-center justify-center flex-col drive">
      <div className="flex flex-col items-center justify-center mt-5">
        <h1 className="lg:text-5xl text-3xl font-bold text-dzoma-blue-black  p-3">
          Why Dzoma?
        </h1>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {whydzomaData.map((data, index) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={`${index > 0 ? 200 * index : 0}`}
                data-aos-duration="1000"
              >
                <WhyDzomaCard key={index} WhyDzoma={data} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
