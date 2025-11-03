import { useState } from "react";
import { ModalContext } from "./ModalContext";

export const ModalContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("add"); //add | edit
  const [currentTask, setCurrentTask] = useState(null);

  const openAddModal = () => {
    setModalMode("add");
    setCurrentTask(null);
    setShowModal(true);
  };

  const openEditModal = (task) => {
    setModalMode("edit");
    setCurrentTask(task);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setCurrentTask(null);
  };

  return (
    <ModalContext.Provider
      value={{
        showModal,
        currentTask,
        modalMode,
        openAddModal,
        openEditModal,
        closeModal,
        setCurrentTask,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
