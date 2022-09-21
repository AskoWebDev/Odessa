import React from 'react';
import { Link, Outlet, BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import App from './App';
import History from './History';
import Home from './Home';
import Street from './Street';
import Share from './Share';
import Register from './Register';
import Enter from './Enter';
// import './Nav.module.scss'

function Nav() {
	return(
		<div className='container'>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<App />} />
						<Route path="home" element={<Home />} />
						<Route path="history" element={<History />} />
						<Route path="street" element={<Street />} />
						<Route path="share" element={<Share />} />
						<Route path="register" element={<Register />} />
						<Route path="enter" element={<Enter />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
};

export default Nav;