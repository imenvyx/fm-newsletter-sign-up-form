import React from "react";
import IconSucces from "../assets/images/icon-success.svg";

const Notification = ({ email, setShowModal }) => {
  return (
    <div className="w-[440px] h-[50%] rounded-[30px] bg-white flex flex-col p-12">
      <img alt="" src={IconSucces} className="w-[50px] mb-8" />
      <h2 className="color-dark-slate-grey text-[3rem] font-[700] m-0 mb-6 leading-none">
        Thanks for subscribing!
      </h2>
      <p className="text-[14px] mb-8">
        A confirmation email has been sent to <strong>{email}</strong>. Please
        open it and click the button inside to confirm your subscription.
      </p>
      <button
        id="close"
        onClick={() => setShowModal(false)}
        className="text-white text-[14px] rounded-md h-[50px]   bg-dark-slate-grey hover:bg-gradient-to-r hover:from-pink-500 hover:to-tomato hover:shadow-xl hover:shadow-tomato/40 transition"
      >
        Dismiss message
      </button>
    </div>
  );
};

export default Notification;
