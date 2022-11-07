import React from "react";

const GainCard = ({ img, text }) => {
  return (
    <article className=" lg:w-80 w-64 h-36 bg-white flex flex-col gap-3 lg:flex-row items-center justify-center border rounded-2xl   shadow-lg p-10 cursor-pointer hover:scale-x-110  transition-all">
      <img src={img} alt="" className="w-20 lg:w-32" />
      <div className="font-bold text-dzoma-red">{text}</div>
    </article>
  );
};

export default GainCard;
