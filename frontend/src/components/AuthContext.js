import React, { useContext, createContext, useState, Navigate } from 'react';
import Cookies from 'js-cookie';
import Enter from './Enter';
import jwt_decode from "jwt-decode";


const AuthContext = createContext()

export default AuthContext;



export const AuthProvider = ({children}) => {

	const [authToken, setAuthToken] = useState(() => localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null);
	const [user, setUser] = useState(() => localStorage.getItem('authToken') ? jwt_decode(localStorage.getItem('authToken')) : null);

	
	let handle = async (e) => {
		e.preventDefault()
		const username = document.getElementById('username')
		const password = document.getElementById('password')
		let response = await fetch('http://127.0.0.1:8000/token/', {
			method: 'POST',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({
				'username': username.value,
				'password': password.value
			})
		})
		let data = await response.json()
		if (response.status === 200) {
			console.log('ok')
			setAuthToken(data)
			setUser(jwt_decode(data.access))
			localStorage.setItem('authToken', JSON.stringify(data))
		}
	}

	let logoutUser = () => {
		setAuthToken(null)
		setUser(null)
		localStorage.removeItem('authToken')

	}

	const contextData =  {
		user:user,
		handle:handle,
		logoutUser:logoutUser,
	}

	return(
		
		<AuthContext.Provider value={contextData}>
			{children}
		</AuthContext.Provider>
		
	)
	
}
