import React from "react";
import { useToast } from "../context/ToastContext";

const Toast = () => {
  const { openToast, toastMsg } = useToast();
  return (
    <>
      <div
        className={`fixed bottom-5 left-5 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-500
        ${openToast ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        bg-green-500 shadow-lg`}
      >
        {toastMsg}
      </div>
    </>
  );
};

export default Toast;
