import React, {useContext} from 'react';
import { Link, Outlet, BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import App from './App';
import History from './History';
import Home from './Home';
import Street from './Street';
import Share from './Share';
import Register from './Register';
import Enter from './Enter';
import {AuthProvider} from './AuthContext';
import PrivateRoute from './utils/PrivateRoute';
import Style from './Nav.module.scss';

function Nav() {
	return(
		<div className={Style.container}>
			<BrowserRouter>
				<AuthProvider>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<App />} />
							<Route element={<PrivateRoute />}>
								<Route path="share" element={<Share />} />
								<Route path="street" element={<Street />} />
							</Route>
							<Route path="home" element={<Home />} />
							<Route path="history" element={<History />} />
							<Route path="register" element={<Register />} />
							<Route path="enter" element={<Enter />} />
							{/*<Route path="redirect" element={<Redirect />} />*/}
						</Route>
					</Routes>
				</AuthProvider>
			</BrowserRouter>
		</div>
	)
};

export default Nav;