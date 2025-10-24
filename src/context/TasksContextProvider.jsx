import { useState } from "react";
import { TasksContext } from "./TasksContext";

let tasksArr = [
  { id: 1, title: " finish the project", completed: true },
  { id: 2, title: "Anekak ya kosmkm", completed: false },
];

export const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(tasksArr);
  const [filter, setFilter] = useState("all"); // all | done | not done

  console.log(tasks);
  const addTask = (task) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length >= 1 ? tasks[tasks.length - 1].id + 1 : 1,
        title: task.title,
        desc: task.desc,
        completed: false,
      },
    ]);
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id)); 
  };

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        deleteTask,
        toggleComplete,
        addTask,
        filter,
        setFilter,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
