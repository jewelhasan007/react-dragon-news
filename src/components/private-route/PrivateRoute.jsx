import React, { useContext } from 'react';
import { authContext } from '../contextAPI/ContextAPI';
import { Navigate, useLocation } from 'react-router-dom';


const PrivateRoute = ({children}) => {
const {user, loading} = useContext(authContext)
const location = useLocation();
console.log(location)

if(loading){
    return <span className="loading loading-spinner loading-lg"></span>
}

if(user){
    return children;
}
    return <Navigate state={location.pathname} to="/login" ></Navigate>;
};

export default PrivateRoute;