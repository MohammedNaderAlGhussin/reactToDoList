import React, { useContext } from "react";
import { TasksContext } from "../context/TasksContext";

const NavButton = () => {
  const { filter, setFilter } = useContext(TasksContext);
  return (
    <ul className="flex flex-row gap-4 mt-4">
      <li
        className={`btn ${filter == "all" ? "active" : ""}`}
        onClick={() => setFilter("all")}
      >
        All
      </li>
      <li
        className={`btn ${filter == "done" ? "active" : ""}`}
        onClick={() => setFilter("done")}
      >
        Done
      </li>
      <li
        className={`btn ${filter == "not done" ? "active" : ""}`}
        onClick={() => setFilter("not done")}
      >
        Not Done
      </li>
    </ul>
  );
};

export default NavButton;
