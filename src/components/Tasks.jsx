import React, { useContext } from "react";
import Task from "./Task";
import { TasksContext } from "../context/TasksContext";

const Tasks = () => {
  const { tasks } = useContext(TasksContext);

  const tasksList = tasks.map((task) => {
    return <Task key={task.id} task={task} />;
  });
  return (
    <div className="flex flex-col gap-5">
      {tasks.length === 0 ? (
        <p className="text-slate-500">No tasks yet ✨</p>
      ) : (
        tasksList
      )}
    </div>
  );
};

export default Tasks;
