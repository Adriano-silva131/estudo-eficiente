import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute() {
  const { user, isLoading } = useAuth();
  const location = useLocation();
  if (isLoading) return <div>Carregando…</div>;
  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
}

export function PublicRoute() {
  const { user, isLoading } = useAuth();
  if (isLoading) return <div>Carregando…</div>;
  return !user ? <Outlet /> : <Navigate to="/dashboard" replace />;
}
