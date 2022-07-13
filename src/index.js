import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { BaseContextProvider } from "./BaseContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <BaseContextProvider>
      <App />
    </BaseContextProvider>
  </BrowserRouter>
);
