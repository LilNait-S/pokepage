import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Pokedex from '../pages/Pokedex'

const Routers = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/pokedex" element={<Pokedex />} />
    </Routes>
  );
};

export default Routers;
