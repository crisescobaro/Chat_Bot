import React from "react";
import { Routes, Route } from "react-router-dom";
import ChatIA from "@Pages/ChatIA/ChatIA.jsx";

function RoutesComponent() {
  return (
    <Routes>
      <Route path='/' element={<ChatIA />} />
    </Routes>
  );
}

export default RoutesComponent;
