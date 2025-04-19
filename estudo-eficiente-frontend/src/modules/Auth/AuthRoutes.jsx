import React from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const AuthRoutes = [

  <Route path="/login" element={<Login />} key="login" />,
  <Route path="/register" element={<Register />} key="register" />,
];

export default AuthRoutes;
