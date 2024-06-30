import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

const Home = () => {

    const { isAuthenticated, logout } = useAuth();

    return (
        <div>
            <h1>Homepage</h1>
            {isAuthenticated ? (
                <div>
                    <p>User is Authenticated</p>
                    <button onClick={logout} className="btn btn-danger">Logout</button>
                </div>
            ) : (
                <div>
                    <p>Please login</p>
                    <Link to="/login">Login</Link>
                </div>
            )}
        </div>
    )
}

export default Home;