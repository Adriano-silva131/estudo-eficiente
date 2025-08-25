import React from "react";
import { Route } from "react-router-dom";
import Materia from "./Materias";
import TipoMaterias from "./TipoMaterias";

const MateriasRoutes = [
  <Route path="materia" element={<Materia />} key="materia" />,
  <Route path="tipomateria" element={<TipoMaterias />} key="tipomateria" />,
];

export default MateriasRoutes;
