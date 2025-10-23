import React, { useContext } from "react";
import Task from "./Task";
import { TasksContext } from "../context/TasksContext";

const Tasks = () => {
  const { tasks, filter } = useContext(TasksContext);

  // filter and get the tasked wheter done / not done / all.
  const filteredTasks = tasks.filter((task) => {
    if (filter === "done") return task.completed;
    if (filter === "not done") return !task.completed;
    return true; //all
  });
  return (
    <div className="flex flex-col gap-5">
      {filteredTasks.length === 0 ? (
        <p className="text-slate-500">No tasks yet ✨</p>
      ) : (
        //map on the filtered taks and display the task components
        filteredTasks.map((fTask) => {
          return <Task key={fTask.id} task={fTask} />;
        })
      )}
    </div>
  );
};

export default Tasks;
