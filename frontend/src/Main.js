import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes} from 'react-router-dom';
import App from './components/App';
import Nav from './components/Nav';
import Header from './components/Header';
import PrivateRoute from './components/utils/PrivateRoute';
import {AuthProvider} from './components/AuthContext';
import {NavPrivateRoute} from './components/utils/NavPrivateRoute';
import Layout from './components/Layout';

function Main() {
	return(
		<>	
			
			<AuthProvider>
				<NavPrivateRoute>
	      			<Header />
	      			<Nav />
	      			
	      		</NavPrivateRoute>
	    	</AuthProvider>
	   
		   	
	   
	    	
	    	

	    	
	    	
    	</>
	)
}

export default Main;