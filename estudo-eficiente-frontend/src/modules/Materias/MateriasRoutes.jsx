import React from "react";
import { Route } from "react-router-dom";
import Materia from "./Materias";

const MateriasRoutes = [
  <Route path="materia" element={<Materia />} key="materia" />,
];

export default MateriasRoutes;
