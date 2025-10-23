import React from "react";

const OverLay = ({ showModalHandler }) => {
  return (
    <div
      className="absolute w-screen h-screen top-0 left-0 bg-black/30 z-10"
      onClick={() => showModalHandler(false)}
    ></div>
  );
};

export default OverLay;
