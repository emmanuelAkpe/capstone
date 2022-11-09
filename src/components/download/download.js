import React from "react";

const Download = () => {
  return (
    <section className="mx-auto max-w-7xl flex items-center flex-wrap py-8 md:pb-16 md:pt-10">
      <div className="w-full md:w-1/2 py-8 sm:py-12 md:py-16 lg:py-20 xl:pb-28 px-4 sm:px-6 lg:px-8">
        <div className="sm:text-center md:text-left sm:pl-4 md:pl-4 lg:pl-10">
          <h1
            className="text-4xl lg:leading-normal tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
            // data-aos="flip-up"
            // data-aos-duration="1000"
          >
            Download From AppStore & PlayStore
          </h1>
          <div className="flex items-center justify-start mt-5 sm:mt-8 font-medium space-x-4 md:space-x-2">
            <a
              href="https://apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 hover:text-green-500"
            >
              <img
                src="/images/download/appstore.png"
                className="h-10"
                alt="oya-apple"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://android.com"
              className="text-green-600 hover:text-green-500"
            >
              <img
                src="/images/download/googleplay.png"
                className="h-10"
                alt="oya-android"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-start flew-wrap pt-12 sm:pt-0">
        <div className="w-1/2 pt-10 md:pt-20 lg:pt-24 px-4">
          <img
            className="h-full w-full object-cover"
            src="/images/download/img2.png"
            alt=""
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          />
        </div>
        <div className="w-1/2 px-4">
          <img
            className="h-full w-full object-cover"
            src="/images/download/img3.png"
            alt=""
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
            data-aos-delay="1200"
          />
        </div>
      </div>
    </section>
  );
};

export default Download;
