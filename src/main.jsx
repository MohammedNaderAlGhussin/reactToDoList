import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { TasksContextProvider } from "./context/TasksContextProvider.jsx";
import { ModalContextProvider } from "./context/ModalContextProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalContextProvider>
      <TasksContextProvider>
        <App />
      </TasksContextProvider>
    </ModalContextProvider>
  </StrictMode>
);
