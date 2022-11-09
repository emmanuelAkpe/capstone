import React, { useEffect, useState } from "react";
import AOS from "aos";
import GetStartedModal from "../getStartedModal/GetStartedModal";

const Header = () => {
  const [show, setshow] = useState(false);
  const closeModal = () => {
    setshow(!show);
  };

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="relative bg-white">
      <GetStartedModal modalVisible={show} closeModal={closeModal} />
      <div className="max-w-7xl mx-auto">
        <main className="mx-auto max-w-7xl mb-8 sm:mb-12 md:mb-16">
          <div className="flex items-center justify-center flex-wrap">
            <div className="w-full sm:w-1/2 text-left py-8 sm:py-12 md:py-16 lg:py-20 xl:pb-28 px-4 md:px-6 lg:px-8">
              <h1
                className="text-3xl md:text-5xl lg:text-6xl tracking-tight font-extrabold  text-dzoma-blue-black"
                data-aos="zoom-in"
                data-aos-duration="1500"
                data-aos-delay="500"
              >
                <span className="block xl:inline text-dzoma-yellow">
                  Fast and Secured
                </span>{" "}
                <span className="block text-dzoma-blue-black xl:inline">
                  Wholesale Delivery From Supplier to Shop
                </span>
              </h1>

              <p className="py-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Dzoma helps you to transport your bulk items to your shop or
                home with ease at affordable rate at your own convenience.
              </p>

              <div className="py-6 sm:py-8">
                <a
                  href="#"
                  onClick={() => setshow(true)}
                  className="px-6 py-3 text-base font-medium  border border-dzoma-yellow bg-dzoma-blue-black text-dzoma-yellow  md:py-4 md:text-lg md:px-10 rounded-md shadow"
                >
                  Get Started
                </a>
              </div>
            </div>
            <div className="w-full sm:w-1/2 px-4 sm:px-6 md:px-8 lg:px-16">
              <img src="/images/hero/hero.svg" alt="" />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Header;
