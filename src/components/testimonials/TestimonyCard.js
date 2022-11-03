import React from "react";
import PropTypes from "prop-types";

const TestimonyCard = ({ testimony }) => {
  return (
    <div className="min-w-100 p-8 flex flex-col items-center rounded-lg border border-gray-200 shadow-lg my-5 mx-5 relative">
      <img
        src={testimony.avatar}
        alt=""
        className="w-12 h-12 rounded-full absolute -top-5 -left-5 z-10 object-cover"
      />
      <p className="min-h-30 overflow-hidden">{testimony.testimony}</p>
      <small className="w-full pt-3 text-gray-400 font-bold">
        {testimony.name}
      </small>
    </div>
  );
};
TestimonyCard.propTypes = {
  testimony: PropTypes.shape({
    avatar: PropTypes.string,
    testimony: PropTypes.string,
    name: PropTypes.string,
  }),
};
export default TestimonyCard;
