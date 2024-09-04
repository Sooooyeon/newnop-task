import React from "react";
import { Route, Routes } from "react-router-dom";
import User from "../pages/User";
import Error from "../pages/Error";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="newnop-task/" element={<User />} />
      <Route path="newnop-task/error" element={<Error />} />
    </Routes>
  );
}
