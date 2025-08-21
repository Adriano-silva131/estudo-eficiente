import React from 'react'
import { Route } from 'react-router-dom'
import Dashboards from './Dashboards'

const DashboardRoutes = [
    <Route path="dashboard" element={<Dashboards />} key="dashboard" />
]

export default DashboardRoutes
