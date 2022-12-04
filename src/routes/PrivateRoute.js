import React, { useContext } from 'react';
import { AuthContext } from '../contexts/auth.context';

const PrivateRoute = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;