import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const DriverRegisterModal = ({ modalVisible, closeModal }) => {
  if (!modalVisible) return null;
  return (
    <div className=" m-auto z-50 fixed inset-0 bg-black  bg-opacity-20 backdrop-blur-sm flex justify-center items-center ">
      <form className=" w-fit h-fit bg-white flex flex-col justify-center items-center pt-10 px-20 shadow-lg rounded-lg">
        <div className="mb-5 flex items-center justify-center gap-2 ">
          <div className="flex items-center justify-center flex-col">
            <img src="/images/logo1.png" alt="" className="w-40" />
            <h5 className="text-gray-500 text-2xl w-2/3 font-bold">
              Let's change the world together 🚚
            </h5>
          </div>
          <AiOutlineClose
            onClick={closeModal}
            className="w-5 h-5 p-1 border  border-slate-500  rounded-full"
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
          <h5 className="text-gray-500">enter your phone number</h5>
          <input
            type="phone"
            required
            className="px-2 w-60 mb-2 rounded-md  border border-dzoma-blue-black outline-dzoma-yellow h-10"
          />
        </div>
        <div className="mb-5">
          <h5 className="text-gray-500">alternate phone number</h5>
          <input
            type="phone"
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

export default DriverRegisterModal;
