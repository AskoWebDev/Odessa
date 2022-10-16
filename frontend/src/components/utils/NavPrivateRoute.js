import React, {useEffect, useState, useContext, createContext} from 'react';
import Header from'../Header';
import Layout from'../Layout';

// creating context
const ToggleContext = createContext()

export default ToggleContext;


export const NavPrivateRoute = ({children}) => {
	// state of navbar if true show if false hide
	let [isToggled, setToggled] = useState(null);

	// sets state to true when website is first loaded
	useEffect(() => {
		setToggled(true)
	}, [])

	// an eventlistener that checks the seize of window
	// and dependig on size of sets state 
	window.addEventListener('resize', () => {
		let x = window.innerWidth
		if (x > 1100) {
			setToggled(true)
		} else {
			setToggled(false)
		}
	})
	
	// a function that changes the state 
	// when cliked on humburger button
	const tog = () => {
		setToggled(prev => !prev)
	}

	
	// a set functions to provide to Contex value
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

