import React from "react";
import {
  AiOutlineClose,
  AiOutlineMail,
  AiOutlineHome,
  AiOutlinePhone,
} from "react-icons/ai";

const ContactModal = ({ modalVisible, closeModal }) => {
  if (!modalVisible) return null;
  return (
    <div className=" m-auto z-50 fixed inset-0 bg-black  bg-opacity-20 backdrop-blur-sm flex justify-center items-center ">
      <div className="relative w-fit h-fit bg-white flex flex-col justify-center items-center pt-10 px-20 shadow-lg rounded-lg">
        <div className="mb-5 flex items-center justify-center gap-2 ">
          <div className="flex items-center justify-center flex-col">
            <img src="/images/logo1.png" alt="" className="w-40" />
          </div>
          <AiOutlineClose
            onClick={closeModal}
            className="w-8 h-8 p-1 border  border-red-500 rounded-full absolute top-5 right-5"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-dzoma-blue-black flex items-center justify-center w-8 h-8 rounded-full">
              <AiOutlineMail className="text-dzoma-yellow" />
            </div>
            <h1>Email</h1>
            <span>dzomasolutions@gmail.com</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-dzoma-blue-black flex items-center justify-center w-8 h-8 rounded-full">
              <AiOutlinePhone className="text-dzoma-yellow" />
            </div>
            <h1>Phone</h1>
            <p>Mon-Fri 8am-5pm </p>
            <span>0209412706</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="bg-dzoma-blue-black flex items-center justify-center w-8 h-8 rounded-full">
              <AiOutlineHome className="text-dzoma-yellow" />
            </div>
            <h1>Office</h1>
            <span>No. 20 Aluguntugui Street East Legon, Accra, Ghana</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
