import React, {useEffect, useState, useContext, createContext} from 'react';
import Header from'../Header';
import Layout from'../Layout';
import { Link, Outlet, BrowserRouter, Route, Routes } from 'react-router-dom';

const ToggleContext = createContext()

export default ToggleContext;

export const NavPrivateRoute = ({children}) => {
	let [isToggled, setToggled] = useState(true)

	const tog = () => {
		setToggled(prev => !prev)
	}

	const dataSet = {
		isToggled:isToggled,
		tog: tog,
	}


	return(
		<ToggleContext.Provider value={dataSet}>
			{children}
		</ToggleContext.Provider>
	)
}

