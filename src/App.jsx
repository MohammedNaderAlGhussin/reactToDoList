// import { useContext } from "react";
import AddTaskBtn from "./components/AddTaskBtn";
import Header from "./components/Header";
import NavButton from "./components/NavButton";
import OverLay from "./components/OverLay";
import Tasks from "./components/Tasks";
import { useModal } from "./context/ModalContext";

function App() {
  const { showModal } = useModal();
  return (
    <div className="bg-main-bg w-2/5 mx-auto mt-25 min-h-[300px] p-5 flex flex-col gap-5">
      <Header />
      <NavButton />
      <Tasks />
      <AddTaskBtn />

      {showModal && <OverLay />}

      {/* <div className=" absolute min-w-[400px] min-h-[350px] bg-main-bg top-1/2 left-1/2 z-20 -translate-1/2 flex flex-col gap-6 p-5">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-xl text-white font-bold">Edit Task</h1>
          <button className="text-[#F8FAFC]">X</button>
        </div>
        <form className="flex flex-col gap-5 flex-1">
          <div className="flex flex-col gap-3">
            <label className="text-lg">Task Title</label>
            <input
              className="task-input"
              type="text"
              placeholder="e. Finsih a project"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-lg">Description (Optional)</label>
            <input
              className="task-input"
              type="text"
              placeholder="e. Finsih a project"
            />
          </div>
          <div className="flex gap-2 mt-auto justify-between">
            <button className="btn hover:bg-red-500  text-white  border-2  px-6 py-1 ">
              Cancel
            </button>
            <button className="btn active px-6 py-1 ">Save Changes</button>
          </div>
        </form>
      </div> */}
    </div>
  );
}

export default App;
