import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../context/AuthContext"

export default function PrivateRoute() {
    const { user, status } = useAuth();
    if (status === "loading") return <div>Carregando…</div>;
    return user ? <Outlet/> : <Navigate to="/login" replace/>;
}

export function PublicRoute() {
    const { user, status } = useAuth();
    if (status === "loading") return <div>Carregando…</div>;
    return !user ? <Outlet/> : <Navigate to="/dashboard" replace/>;
}