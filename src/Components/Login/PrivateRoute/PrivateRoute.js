import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user, isLoading} = useAuth();
    const location = useLocation();

    if(isLoading){
       return <Spinner animation="border" variant="dark" />
    }

    if(user?.email || user?.displayName ){
       return children;
    } 
    return <Navigate to='/login' state={ {from: location} } />
 
};

export default PrivateRoute;