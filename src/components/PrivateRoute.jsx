import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {loading, setLoading, user} = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    if(loading){
        return <div className="flex justify-center items-center"><span className="loading loading-bars loading-xl"></span></div>
    }

    if(user){
        return children
    }

    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivateRoute;