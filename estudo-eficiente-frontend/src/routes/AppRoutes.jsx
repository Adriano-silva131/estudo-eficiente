import React from 'react';
import {Route, Routes} from "react-router-dom";
import  PrivateRoute, {PublicRoute} from "../routes/PrivateRoute.jsx";
import PublicLayout from "../components/Layouts/PublicLayout";
import HomeRoutes from "../components/Home/HomeRoutes";
import AuthRoutes from "../modules/Auth/AuthRoutes";
import DashboardRoutes from "../modules/Dashboard/DashboardRoutes";
import MateriaRoutes from "../modules/Materias/MateriasRoutes"
import PrivateLayout from "../components/Layouts/PrivateLayout";

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<PublicRoute/>}>
                <Route element={<PublicLayout/>}>
                    {HomeRoutes}
                    {AuthRoutes}
                </Route>
            </Route>

            <Route element={<PrivateRoute/>}>
                <Route element={<PrivateLayout/>}>
                    {DashboardRoutes}
                    {MateriaRoutes}
                </Route>
            </Route>

            {/*<Route path="*" element={<NotFoundPage />}*/}
        </Routes>

    )
}

export default AppRoutes