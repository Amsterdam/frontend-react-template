import React from "react";
import { Route, Routes as RouterRoutes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Map from "./pages/Map";

const Routes = () => (
  <RouterRoutes>
    <Route path="/home" element={<Home />} />
    <Route path="/" element={<Navigate replace to="/home" />} />
    <Route path="/kaart" element={<Map />} />
  </RouterRoutes>
);

export default Routes;
