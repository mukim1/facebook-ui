import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GContext from "./Contexts/GContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GContext>
      <App />
    </GContext>
  </React.StrictMode>
);
