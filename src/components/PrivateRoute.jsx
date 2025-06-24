import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {loading, setLoading, user} = useContext(AuthContext)
    if(loading){
        return <div className="flex justify-center items-center"><span className="loading loading-bars loading-xl"></span></div>
    }

    if(user){
        return children
    }

    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoute;