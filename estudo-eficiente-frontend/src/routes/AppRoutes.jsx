import React from 'react';
import { Routes } from 'react-router-dom';
import AuthRoutes from '../modules/Auth/AuthRoutes';
import MateriaRoutes from '../modules/Materias/MateriasRoutes'

const AppRoutes = () => {
  return (
    <Routes>
        {AuthRoutes}
        {MateriaRoutes}
    </Routes>
  )
}

export default AppRoutes