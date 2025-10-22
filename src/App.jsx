function App() {
  return (
    <div className="bg-[#1E293B] w-2/5 mx-auto mt-25 min-h-[300px] p-5 flex flex-col gap-5">
      <header className="text-3xl font-bold text-center">My Tasks</header>
      {/* Start Nav Button */}
      <ul className="flex flex-row gap-4 mt-4">
        <li className="text-[#F8FAFC] bg-[#3B82F6] hover:bg-[#60A5FA] duration-300 ease-in-out cursor-pointer border-2 border-[#334155] w-fit px-8 py-1 rounded-2xl">
          All
        </li>
        <li className="text-[#3B82F6] hover:text-[#F8FAFC] hover:bg-[#3B82F6] duration-300 ease-in-out cursor-pointer border-2 border-[#334155] w-fit px-8 py-1 rounded-2xl  ">
          Done
        </li>
        <li className="text-[#3B82F6] hover:text-[#F8FAFC] hover:bg-[#3B82F6] duration-300 ease-in-out cursor-pointer border-2 border-[#334155]  w-fit px-8 py-1 rounded-2xl ">
          Not Done
        </li>
      </ul>
      {/* End Nav Button */}
      {/* Start Tasks Section */}
      <div className="flex flex-col gap-5">
        <div
          className="py-4 px-3 bg-[#334155] rounded-2xl flex flex-row justify-between
        "
        >
          <div className="flex flex-row gap-2 items-center">
            <input
              type="checkbox"
              className="w-5 h-5 accent-blue-500 border-2 border-slate-400 rounded dark:border-slate-600 transition-all duration-200"
            />
            <p>Finsh watchin the react course</p>
          </div>
          <ul className="flex flex-row gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 text-red-500 border border-red-500 rounded-full p-1 hover:bg-red-500 hover:text-white duration-300 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </ul>
        </div>
      </div>
      {/* End Tasks Section */}
      <button className="text-[#F8FAFC] bg-[#3B82F6] hover:bg-[#60A5FA] duration-300 ease-in-out cursor-pointer border-2 border-[#334155] w-[30px] h-[30px] flex justify-center items-center  p-6 rounded-full  ml-auto text-2xl font-bold">
        +
      </button>
      {/* <div className="absolute w-screen h-screen top-0 left-0 bg-black/30 z-10"></div> */}
      {/* <div className=" absolute min-w-[400px] min-h-[350px] bg-[#1E293B] top-1/2 left-1/2 z-20 -translate-1/2 flex flex-col gap-6 p-5">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-xl text-white font-bold">Add A New Task</h1>
          <button className="text-[#F8FAFC]">X</button>
        </div>
        <form className="flex flex-col gap-5 flex-1">
          <div className="flex flex-col gap-3">
            <label className="text-lg">Task Title</label>
            <input
              className="py-2 pl-3 outline-none border-2 border-[#334155] focus:border-2 focus:border-[#3B82F6] rounded-md focus:placeholder:opacity-0 "
              type="text"
              placeholder="e. Finsih a project"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg">Description (Optional)</label>
            <input
              className="py-2 pl-3 outline-none border-2 border-[#334155] focus:border-2 focus:border-[#3B82F6] duration-500 rounded-md focus:placeholder:opacity-0"
              type="text"
              placeholder="e. Finsih a project"
            />
          </div>
          <div className="flex gap-2 mt-auto justify-between">
            <button className="hover:bg-red-500 duration-300 text-white cursor-pointer border-2 border-[#334155] w-fit px-6 py-1 rounded-2xl">
              Cancel
            </button>
            <button className="text-[#F8FAFC] bg-[#3B82F6] hover:bg-[#60A5FA] duration-300 ease-in-out cursor-pointer border-2 border-[#334155] w-fit px-6 py-1 rounded-2xl">
              Add Task
            </button>
          </div>
        </form>
      </div> */}
      {/* <div className=" absolute min-w-[400px] min-h-[350px] bg-[#1E293B] top-1/2 left-1/2 z-20 -translate-1/2 flex flex-col gap-6 p-5">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-xl text-white font-bold">Edit Task</h1>
          <button className="text-[#F8FAFC]">X</button>
        </div>
        <form className="flex flex-col gap-5 flex-1">
          <div className="flex flex-col gap-3">
            <label className="text-lg">Task Title</label>
            <input
              className="py-2 pl-3 outline-none border-2 border-[#334155] focus:border-2 focus:border-[#3B82F6] rounded-md focus:placeholder:opacity-0 "
              type="text"
              placeholder="e. Finsih a project"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg">Description (Optional)</label>
            <input
              className="py-2 pl-3 outline-none border-2 border-[#334155] focus:border-2 focus:border-[#3B82F6] duration-500 rounded-md focus:placeholder:opacity-0"
              type="text"
              placeholder="e. Finsih a project"
            />
          </div>
          <div className="flex gap-2 mt-auto justify-between">
            <button className="hover:bg-red-500 duration-300 text-white cursor-pointer border-2 border-[#334155] w-fit px-6 py-1 rounded-2xl">
              Cancel
            </button>
            <button className="text-[#F8FAFC] bg-[#3B82F6] hover:bg-[#60A5FA] duration-300 ease-in-out cursor-pointer border-2 border-[#334155] w-fit px-6 py-1 rounded-2xl">
              Save Changes
            </button>
          </div>
        </form>
      </div> */}
    </div>
  );
}

export default App;
