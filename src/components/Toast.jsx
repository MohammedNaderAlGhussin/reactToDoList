import React from "react";
import { useToast } from "../context/ToastContext";

const Toast = () => {
  const { openToast } = useToast();
  return (
    <>
      {openToast ? (
        <div className="bg-teal-500 text-white absolute bottom-2 left-2 px-6 py-1">
          im a toast
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Toast;
