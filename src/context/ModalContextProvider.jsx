import { useState } from "react";
import { ModalContext } from "./ModalContext";

export const ModalContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <ModalContext.Provider value={{ showModal, setShowModal, toggleModal }}>
      {children}
    </ModalContext.Provider>
  );
};
