import { useEffect, useState } from "react";
import { TasksContext } from "./TasksContext";

// let tasksArr = [
//   { id: 1, title: " finish the project", completed: true },
//   { id: 2, title: "Anekak ya kosmkm", completed: false },
// ];

export const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const savedTaks = JSON.parse(window.localStorage.getItem("tasks"));
    return savedTaks ? savedTaks : [];
  });
  const [filter, setFilter] = useState("all"); // all | done | not done

  // Add tasks to local storage
  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    /*
      - assigning the new taks into an external object.
      - assiging the updated state into a new variable (updateTasks)
      - updating the state with the new object created with passing the new variable. 
      - adding the updatedTasks into the localstorage
      Notes: the commented lines are explained above. 
     */
    const newTask = {
      id: tasks.length >= 1 ? tasks[tasks.length - 1].id + 1 : 1,
      title: task.title,
      desc: task.desc,
      completed: false,
    };

    /*
     To update the tasks while using the local storage to save and retrieve data. you can do this
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
     */

    // or do this (This one is more used)
    setTasks((prev) => [...prev, newTask]);
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
