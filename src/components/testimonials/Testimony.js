import React, { useRef } from "react";
import TestimonyCard from "./TestimonyCard";
import { FcCollapse, FcExpand } from "react-icons/fc";
import Slider from "react-slick";
import { testimonyData } from "./testimonyData";

const Testimony = () => {
  const sliderRef = useRef(null);
  return (
    <section className="mx-auto max-w-7xl py-8 md:pb-16 md:pt-10 px-4">
      <div className="pb-8 sm:pb-12">
        <h1 className="font-bold text-3xl md:text-5xl text-center">
          Our customers love <br className="hidden sm:block" /> Dzoma
        </h1>
      </div>

      <div className="w-full flex items-center flex-wrap py-8 md:pt-10 sm:px-6 lg:px-8">
        <div className="w-full sm:w-2/5 md:w-1/2 pb-4 sm:py-12 md:py-16 lg:py-20 xl:pb-28 md:pl-10">
          <h1
            className="text-center sm:text-left text-2xl md:text-3xl font-bold leading-snug"
            // data-aos="fade-right" data-aos-duration="1000"
          >
            Don't just take our word for it.
            <br /> Read reviews from our customers
          </h1>
        </div>

        <div className="w-full sm:w-3/5 md:w-1/2 relative pr-6 sm:pr-8 lg:pr-20">
          <Slider
            dots={false}
            ref={sliderRef}
            slidesToShow={1}
            slidesToScroll={1}
            infinite={true}
            autoplay={true}
            autoplaySpeed={5000}
            vertical={true}
            verticalSwiping={true}
          >
            {testimonyData.map((testimony, index) => {
              return (
                <div className="w-full" key={index}>
                  <TestimonyCard testimony={testimony} />
                </div>
              );
            })}
          </Slider>

          <div className="absolute inset-y-0 right-0 px-0 lg:px-4 flex flex-col items-center justify-center space-y-4 sm:space-x-0">
            <div
              className="p-3 md:p-4 rounded-full hover:bg-gray-100 cursor-pointer"
              onClick={() => sliderRef.current.slickNext()}
            >
              <FcCollapse className="text-oya-ghana-black" />
            </div>
            <div
              className="p-3 md:p-4 rounded-full hover:bg-gray-100 cursor-pointer"
              onClick={() => sliderRef.current.slickPrev()}
            >
              <FcExpand className="text-dzoma-blue-black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;
