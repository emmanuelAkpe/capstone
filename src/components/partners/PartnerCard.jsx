import React from "react";

const PartnerCard = ({ partners }) => {
  return (
    <div className="max-w-md">
      <div className="flex items-center justify-center  cursor-pointer hover:scale-y-110  transition-all ">
        <img src={partners.img} alt="" className="w-32 h-12 object-contain" />
      </div>
    </div>
  );
};

export default PartnerCard;
