
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

export default function ProtectedRoute(){
    const isAuth = useAuth()
    return isAuth.isAuthenticated? <Outlet/>: <Navigate to="/"/>
    
}