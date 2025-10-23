import React from "react";

const AddTaskBtn = ({ showModalHandler }) => {
  return (
    <button
      className="btn active w-[30px] h-[30px] flex justify-center items-center  p-6 rounded-full  mt-auto ml-auto text-2xl font-bold"
      onClick={() => showModalHandler(true)}
    >
      +
    </button>
  );
};

export default AddTaskBtn;
