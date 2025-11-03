import React, { useState } from "react";
import { ToastContext } from "./ToastContext";

const ToastContextProvider = ({ children }) => {
  const [openToast, setOpenToast] = useState(false);
  const showHiddenToast = () => {
    setOpenToast(true);
    setTimeout(() => {
      setOpenToast(false);
    }, 2000);
  };
  return (
    <ToastContext.Provider value={{ showHiddenToast, openToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export default ToastContextProvider;
