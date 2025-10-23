import React, { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

const OverLay = () => {
  const { toggleModal } = useContext(ModalContext);
  return (
    <div
      className="absolute w-screen h-screen top-0 left-0 bg-black/30 z-10"
      onClick={() => toggleModal()}
    ></div>
  );
};

export default OverLay;
