import { createContext, useState } from "react";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [visas, setVisas] = useState(null)
    const authInfo = {
        visas,
        setVisas
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;