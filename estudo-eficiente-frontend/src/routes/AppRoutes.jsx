import React from 'react';
import { Routes } from 'react-router-dom';
import AuthRoutes from '../modules/Auth/AuthRoutes';
import MateriaRoutes from '../modules/Materias/MateriasRoutes'
import HomeRoutes from '../components/Home/HomeRoutes'

const AppRoutes = () => {
  return (
    <Routes>
        {AuthRoutes}
        {MateriaRoutes}
        {HomeRoutes}
    </Routes>
  )
}

export default AppRoutes