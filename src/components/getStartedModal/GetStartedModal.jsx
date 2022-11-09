import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const GetStartedModal = ({ modalVisible, closeModal }) => {
  if (!modalVisible) return null;
  return (
    <div className=" m-auto z-50 fixed inset-0 bg-black  bg-opacity-20 backdrop-blur-sm flex justify-center items-center ">
      <form className=" relative w-fit h-fit bg-white flex flex-col justify-center items-center pt-10 px-20 shadow-lg rounded-lg">
        <div className="mb-5 flex items-center justify-center gap-2 ">
          <div className="flex items-center justify-center flex-col">
            <img src="/images/logo1.png" alt="" className="w-40" />
            <h5 className="text-gray-500   font-bold">
              Dzoma makes it easy for you to transport your bulk purchases.
            </h5>
          </div>
          <AiOutlineClose
            onClick={closeModal}
            className="w-8 h-8 p-1 border  border-red-500 rounded-full absolute top-5 right-5"
          />
        </div>
        <div className="mb-5">
          <h5 className="text-gray-500">enter your name</h5>
          <input
            required
            type="text"
            autoFocus
            className="px-2 w-60 mb-2 rounded-md border border-dzoma-blue-black outline-dzoma-yellow h-10"
          />
        </div>
        <div className="mb-5">
          <h5 className="text-gray-500">enter Company Name</h5>
          <input
            type="text"
            className="px-2 w-60 mb-2 rounded-md  border border-dzoma-blue-black outline-dzoma-yellow h-10"
          />
        </div>
        <div className="mb-5">
          <h5 className="text-gray-500">enter your phone number</h5>
          <input
            type="phone"
            required
            className="px-2 w-60 mb-2 rounded-md  border border-dzoma-blue-black outline-dzoma-yellow h-10"
          />
        </div>

        <button
          type="submit"
          className="my-5 bg-dzoma-blue-black rounded-md py-3 w-11/12 text-dzoma-yellow"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default GetStartedModal;
