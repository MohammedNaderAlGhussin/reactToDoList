import { useEffect, useState } from "react";
import { TasksContext } from "./TasksContext";

export const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    //check if there were tasks in the local storage and display on load
    const savedTaks = JSON.parse(window.localStorage.getItem("tasks"));
    return savedTaks ? savedTaks : [];
  });

  // state to filter tasks
  const [filter, setFilter] = useState("all"); // all | done | not done

  // Add tasks to local storage
  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    /*
      - assigning the new task into an external object.
      - assiging the updated state into a new variable (updateTasks)
      - updating the state with the new object created with passing the new variable. 
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

  const editTask = (taskToEdit) => {
    // sending the current task to be edit and update the value then update the tasks state
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskToEdit.id
          ? { ...task, title: taskToEdit.title, desc: taskToEdit.desc }
          : task
      )
    );

    /*

    - same function different way to wirte. 

    setTasks((prev) => {
      return prev.map((task) => {
        return task.id === taskToEdit.id
          ? { ...task, title: taskToEdit.title, desc: taskToEdit.desc }
          : task;
      });
    });

    */
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
        editTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
