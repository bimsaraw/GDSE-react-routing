import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../utils/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { login } = useAuth();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/api/users/login", {
                email: email,
                password: password 
            })

            console.log(response.data);            

            if(response.status === 200) {
                login(response.data.token);
                toast.success("Authenticated successfully");
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div className="form-group mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control" onChange={(event) => setEmail(event.target.value)} />
                </div>

                <div className="form-group mb-3">
                    <label>Password</label>
                    <input type="password" className="form-control" onChange={(event) => setPassword(event.target.value)}/>
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Login;