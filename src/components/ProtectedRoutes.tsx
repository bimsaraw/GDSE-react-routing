import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    
    if(!isAuthenticated) {
        navigate("/login");
    }

    return <Outlet />
}

export default ProtectedRoute;