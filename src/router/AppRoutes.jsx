import React from "react";
import { Route, Routes } from "react-router-dom";
import User from "../pages/User";
import Error from "../pages/Error";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<User />} />
      <Route path="/error" element={<Error />} />
    </Routes>
  );
}
