import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const Register = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");

    //state variables for error messages
    const [usernameError, setUsernameError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if(!usernameError && !confirmPasswordError && !emailError) {
            try {
                const response = await axios.post("http://localhost:8000/api/users/register", {
                    username: username,
                    email: email,
                    password: password,
                    telephone
                });
                
                if(response.status === 200) {
                    toast.success("User registered successfully!");
                }
                
            } catch (error) {
                console.log(error);
            }
        }

    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                    <label>Username</label>
                    <input type="text" id="username" className="form-control"
                        onChange={(e) => setUsername(e.target.value)}
                        onBlur={() => {
                            if (username.length < 6) {
                                setUsernameError("Username cannot be blank, and it must be longer than 6 characters");
                            } else {
                                setUsernameError("");
                            }
                        }} />
                    {usernameError &&
                        <div className="error-txt">
                            {usernameError}
                        </div>
                    }
                </div>

                <div className="form-group mb-3">
                    <label>Password</label>
                    <input type="password" id="password" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="form-group mb-3">
                    <label>Confirm Password</label>
                    <input type="password" id="confirmPassword" className="form-control"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        onBlur={() => {
                            if (password !== confirmPassword) {
                                setConfirmPasswordError("Password and confirm password are not matching")
                            } else {
                                setConfirmPasswordError("");
                            }
                        }}
                    />

                    {confirmPasswordError &&
                        <div className="error-txt">
                            {confirmPasswordError}
                        </div>
                    }
                </div>

                <div className="form-group mb-3">
                    <label>Email</label>
                    <input type="email" id="email" className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={() => {
                            //regex to validate email
                            const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

                            if (email.length === 0) {
                                setEmailError("Email address cannot be blank");
                            } else if (!regex.test(email)) {
                                setEmailError("Please enter a valid email address");
                            } else {
                                setEmailError("");
                            }
                        }}
                    />
                    {emailError &&
                        <div className="error-txt">
                            {emailError}
                        </div>
                    }
                </div>

                <div className="form-group mb-3">
                    <label>Telephone</label>
                    <input type="text" id="telephone" className="form-control" onChange={(e) => setTelephone(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
        </div>
    )
}

export default Register;