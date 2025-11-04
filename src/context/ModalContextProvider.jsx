import { useReducer } from "react";
import { ModalContext } from "./ModalContext";
import { modalReducer } from "../reducers/modalReducer";

export const ModalContextProvider = ({ children }) => {
  const intialState = {
    isOpen: false,
    mode: "add",
    currentTask: null,
  };
  const [state, dispatch] = useReducer(modalReducer, intialState);
  const openAddModal = (mode, task = null) =>
    dispatch({ type: "OPEN_MODAL", payload: { mode, task } });

  const closeModal = () => dispatch({ type: "CLOSE_MODAL" });

  return (
    <ModalContext.Provider
      value={{
        ...state,
        openAddModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
