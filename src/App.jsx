import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router/AppRoutes";
import "./GlobalStyle.css";

function App() {
  return (
    <div className="bg-yellow-50 min-h-lvh">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
