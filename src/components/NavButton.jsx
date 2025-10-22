import React from "react";

const NavButton = () => {
  return (
    <ul className="flex flex-row gap-4 mt-4">
      <li className="btn active">All</li>
      <li className="btn">Done</li>
      <li className="btn">Not Done</li>
    </ul>
  );
};

export default NavButton;
