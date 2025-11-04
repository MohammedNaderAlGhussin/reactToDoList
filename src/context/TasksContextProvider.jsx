import { useEffect, useReducer, useState } from "react";
import { TasksContext } from "./TasksContext";
import { tasksReducer } from "../reducers/tasksReducer";

export const TasksContextProvider = ({ children }) => {
  const savedTasks = JSON.parse(window.localStorage.getItem("tasks")) || [];

  const [tasks, dispatch] = useReducer(tasksReducer, savedTasks);

  // state to filter tasks
  const [filter, setFilter] = useState("all"); // all | done | not done

  // Add tasks to local storage
  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => dispatch({ type: "ADD_TASK", payload: task });

  const editTask = (task) => dispatch({ type: "EDIT_TASK", payload: task });

  const deleteTask = (id) => dispatch({ type: "DELETE_TASK", payload: id });

  const toggleComplete = (id) => dispatch({ type: "TOGGLE_TASK", payload: id });

  return (
    <TasksContext.Provider
      value={{
        tasks,
        addTask,
        editTask,
        deleteTask,
        toggleComplete,
        filter,
        setFilter,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
