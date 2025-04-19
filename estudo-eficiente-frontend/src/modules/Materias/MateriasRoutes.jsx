import React from "react";
import { Route } from "react-router-dom";
import Container from "./Container";

const MateriasRoutes = [
    <Route path="app/materia" element={<Container />} key="materia" />,
];

export default MateriasRoutes;