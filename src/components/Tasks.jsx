import React, { useContext } from "react";
import Task from "./Task";
import { TasksContext } from "../context/TasksContext";

const Tasks = () => {
  const { tasks } = useContext(TasksContext);

  const tasksList = tasks.map((task) => {
    return <Task key={task.id} />;
  });
  return <div className="flex flex-col gap-5">{tasksList}</div>;
};

export default Tasks;
