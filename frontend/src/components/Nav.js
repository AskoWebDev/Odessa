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
import Header from './Header';
import Photo from './Photos';
import Book from './Book';
import {NavPrivateRoute} from './utils/NavPrivateRoute';

function Nav() {
	return(
		<div className={Style.container}>
			<BrowserRouter>
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
						<Route path="photo" element={<Photo />} />
						<Route path="book" element={<Book />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
};

export default Nav;