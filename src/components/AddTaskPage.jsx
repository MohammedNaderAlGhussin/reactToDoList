import React, { useContext, useState } from "react";
import { TasksContext } from "../context/TasksContext";

const AddTaskPage = ({ showModalHandler }) => {
  const { addTask } = useContext(TasksContext);

  const [newTask, setNewTask] = useState({
    title: "",
    desc: "",
    completed: false,
  });
  const handelChange = (e) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (newTask.title == "") return;
    addTask(newTask);

    setTimeout(showModalHandler(false), 0);
  };

  return (
    <div className=" absolute min-w-[400px] min-h-[350px] bg-main-bg top-1/2 left-1/2 z-20 -translate-1/2 flex flex-col gap-6 p-5">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl text-white font-bold">Add A New Task</h1>
        <button
          className="text-primary-text cursor-pointer"
          onClick={() => showModalHandler(false)}
        >
          X
        </button>
      </div>
      <form className="flex flex-col gap-5 flex-1" onSubmit={submitHandler}>
        <div className="flex flex-col gap-3">
          <label className="text-lg" htmlFor="taks-title">
            Task Title
          </label>
          <input
            className="task-input"
            type="text"
            placeholder="e. Finsih a project"
            id="task-title"
            value={newTask.title}
            name="title"
            onChange={handelChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-lg">Description (Optional)</label>
          <input
            className="task-input"
            type="text"
            placeholder="Finish the Project Ya kosmk"
            value={newTask.desc}
            name="desc"
            onChange={handelChange}
          />
        </div>
        <div className="flex gap-2 mt-auto justify-between">
          <button
            className="btn hover:bg-red-500  text-white  border-2  px-6 py-1 "
            onClick={() => showModalHandler(false)}
          >
            Cancel
          </button>
          <button
            className="btn active px-6 py-1 "
            // onClick={() => showModalHandler(false)}
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTaskPage;
