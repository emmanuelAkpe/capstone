import React from "react";

const DriverCard = ({ value }) => {
  return (
    <div className="lg:w-80 w-64 h-5/6 bg-white flex flex-col gap-3  items-center justify-center border rounded-2xl   shadow-lg p-10 cursor-pointer hover:scale-y-110  transition-all">
      <img src={value.img} alt="" className="w-36" />
      <h6 className="text-center  text-xl md:text-2xl font-semibold">
        {value.title}
      </h6>
      <p className=" text-base text-gray-500 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
        {value.desc}
      </p>
    </div>
  );
};

export default DriverCard;
