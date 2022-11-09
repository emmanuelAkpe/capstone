import React, { useEffect } from "react";
import { data } from "./data";
import PartnerCard from "./PartnerCard";
import AOS from "aos";

export const Partner = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col lg:flex-row items-start justify-center">
        <div className="flex-[0.3]">
          <h5 className=" text-3xl md:text-5xl lg:text-6xl tracking-tight font-extrabold text-dzoma-blue-black">
            100+
          </h5>
          <p className=" py-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Businesses use Dzoma to move their purchases across Ghana.
          </p>
        </div>
        <div className="grid gap-5 row-gap-5 grid-cols-3 sm:grid-cols-4 flex-[0.6]">
          {data.map((partners, index) => {
            return (
              <div
                className=""
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${index > 0 ? 200 * index : 0}`}
                data-aos-duration="1000"
              >
                <PartnerCard partners={partners} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
