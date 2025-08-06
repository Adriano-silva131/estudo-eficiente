import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../context/AuthContext"

export default function PrivateRoute() {
    const {user} = useAuth();
    if (user == null) return null;
    return user ? <Outlet/> : <Navigate to="/login" replace/>;
}

export function PublicRoute() {
    const {user} = useAuth();
    if (user == null) return null;
    return !user ? <Outlet /> : <Navigate to="/dashboard" replace />;
}