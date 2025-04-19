import React from 'react';
import {Route, Routes} from 'react-router-dom';
import AuthRoutes from '../modules/Auth/AuthRoutes';
import MateriaRoutes from '../modules/Materias/MateriasRoutes'
import HomeRoutes from '../components/Home/HomeRoutes'
import DashboardsRoutes from '../modules/Dashboard/DashboardRoutes'
import PublicLayout from "../components/Layouts/PublicLayout.jsx";
import PrivateLayout from "../components/Layouts/PrivateLayout.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PublicLayout />}>
            {AuthRoutes}
            {HomeRoutes}
            </Route>

            <Route path="/app" element={<PrivateRoute />}>
                <Route element={<PrivateLayout />}>
            {MateriaRoutes}
            {DashboardsRoutes}
                </Route>
            </Route>
        </Routes>
    )
}

export default AppRoutes