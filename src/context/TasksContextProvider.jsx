import { useState } from "react";
import { TasksContext } from "./TasksContext";

let tasksArr = [{ id: 1, title: " finish the project", completed: false }];

export const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(tasksArr);
  // console.log(tasks)

  return (
    <TasksContext.Provider value={{ tasks: tasks, setTasks: setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};
