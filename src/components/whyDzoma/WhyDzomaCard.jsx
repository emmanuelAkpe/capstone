import React from "react";

const WhyDzomaCard = ({ WhyDzoma }) => {
  return (
    <div className="p-8 border-b sm:border-r  hover:scale-95 transition-all lg:h-64">
      <div className="max-w-md text-center">
        <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
          <img src={WhyDzoma.img} alt="" />
        </div>
        <h6 className="text-[24px] font-bold">{WhyDzoma.title}</h6>
        <p className="text-[16px] pb-4">{WhyDzoma.desc}</p>
      </div>
    </div>
  );
};

export default WhyDzomaCard;
