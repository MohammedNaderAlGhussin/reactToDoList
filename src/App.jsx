// import { useContext } from "react";
import AddTaskBtn from "./components/AddTaskBtn";
import Header from "./components/Header";
import NavButton from "./components/NavButton";
import OverLay from "./components/OverLay";
import Tasks from "./components/Tasks";
import Toast from "./components/Toast";
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
      <Toast />
    </div>
  );
}

export default App;
