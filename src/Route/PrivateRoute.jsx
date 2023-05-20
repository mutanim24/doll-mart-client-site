import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex items-center justify-center h-screen">
            <progress className="progress w-56"></progress>
        </div>
    }

    if (user) {
        return children;
    }
    else {
        return <Navigate state={{ from: location }} to='/login'></Navigate>
    }
};

export default PrivateRoute;