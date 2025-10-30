import React, { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

const AddTaskBtn = () => {
  const { toggleModal } = useContext(ModalContext);
  return (
    <button
      className="btn active w-[30px] h-[30px] flex justify-center items-center  p-6 rounded-full  mt-auto ml-auto text-2xl font-bold"
      onClick={() => toggleModal(true)}
    >
      +
    </button>
  );
};

export default AddTaskBtn;
