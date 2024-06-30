import { createContext, useState, ReactNode, useContext, useEffect } from "react";

interface AuthContextType {
    isAuthenticated: boolean,
    token: string,
    login: (jwtToken: string) => void;
    logout: () => void;
}

const defaultContext: AuthContextType = {
    isAuthenticated: false,
    token: "",
    login: () => {},
    logout: () => {}
};

const AuthContext = createContext(defaultContext);

interface AuthProviderProps {
    children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState("");

    const login = (jwtToken: string): void => {
        setToken(jwtToken);
        localStorage.setItem("token",jwtToken);
        setIsAuthenticated(true);
    }

    const logout = () => {
        setToken("");
        localStorage.removeItem("token");
        setIsAuthenticated(false);
    }

    useEffect(() => {
        const token = localStorage.getItem("token");

        if(token) {
            setIsAuthenticated(true);
            setToken(token);
        }
    },[])

    return (
        <AuthContext.Provider value={{isAuthenticated, token, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
    
}

export const useAuth = (): AuthContextType => {
    return useContext(AuthContext);
}