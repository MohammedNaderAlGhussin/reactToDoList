import { useState } from "react";
import { TasksContext } from "./TasksContext";

export const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: " finish the project",
      completed: false,
    },
  ]);

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};
