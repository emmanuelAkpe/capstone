import React from "react";
import GainCard from "./GainCard";

const Gain = () => {
  return (
    <div className="flex flex-col py-5 lg:flex-row mx-5 mt-5 items-center justify-center bg-dzoma-blue-black   rounded-3xl lg:p-5  ">
      <div className="flex-1 px-10 lg:ml-20">
        <h1 className="lg:text-5xl text-3xl font-bold text-dzoma-yellow p-3">
          How Dzoma works
        </h1>
        <p className="text-base text-white leading-loose pb-8  md:text-xl sm:text-lg">
          {" "}
          Dzoma technology solution allows you to access{" "}
          <br className="hidden lg:block" />{" "}
          <span className="text-2xl  font-bold">fast and reliable</span>{" "}
          delivery vans, when and where you need it.
        </p>
        <button className="bg-dzoma-yellow hidden lg:block md:block text-dzoma-red font-bold rounded-lg px-6 py-2 my-3">
          Start Now
        </button>
      </div>
      <div className="  lg:mr-32 flex flex-col gap-10 justify-center items-center">
        <div className="lg:ml-24">
          <GainCard img={"/images/gain/connect.png"} text="Schedule on app " />
        </div>
        <div className=" flex-1">
          <GainCard img={"/images/gain/sell.svg"} text="Items are loaded" />
        </div>
        <div className="lg:ml-24">
          <GainCard img={"/images/gain/pay.svg"} text="Track and pay" />
        </div>
        <button className="lg:hidden md:hidden sm:hidden bg-dzoma-yellow text-dzoma-red font-bold rounded-lg px-6 py-2 my-3">
          Start Now
        </button>
      </div>
    </div>
  );
};

export default Gain;
