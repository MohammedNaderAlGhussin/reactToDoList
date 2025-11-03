import { useModal } from "../context/ModalContext";
import TaskForm from "./TaskForm";

const OverLay = () => {
  const { closeModal } = useModal();
  return (
    <>
      <div
        className="absolute w-screen h-screen top-0 left-0 bg-black/30 z-10"
        onClick={() => closeModal()}
      ></div>
      <TaskForm />
    </>
  );
};

export default OverLay;
