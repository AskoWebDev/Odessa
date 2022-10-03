import { Outlet, Navigate } from 'react-router-dom';
import React, {useContext} from 'react';
import AuthContext from '../AuthContext';



const PrivateRoute = () => {
	let {user} = useContext(AuthContext)
	
	return(
		
		user ? <Outlet /> : <Navigate to="/enter" />
			
			
		
	)
}

export default PrivateRoute;