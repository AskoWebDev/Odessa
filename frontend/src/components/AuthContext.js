import React, { useContext, createContext, useState } from 'react';
import Cookies from 'js-cookie';
import Enter from './Enter';
import jwt_decode from "jwt-decode";
import { Navigate } from 'react-router-dom';

// creating context
const AuthContext = createContext()

export default AuthContext;



export const AuthProvider = ({children}) => {

	const [authToken, setAuthToken] = useState(() => localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null);
	const [user, setUser] = useState(() => localStorage.getItem('authToken') ? jwt_decode(localStorage.getItem('authToken')) : null);
	
	// function that makes POST request to server 
	// when a user wants to log in
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
		} else {
			alert('Попробуйте еще раз')
		}
	}

	// a function that logs out user
	let logoutUser = () => {
		setAuthToken(null)
		setUser(null)
		localStorage.removeItem('authToken')

	}

	// a set functions to provide to Contex value
	const contextData =  {
		user:user,
		handle:handle,
		logoutUser:logoutUser,
	}

	return(
		<>
			<AuthContext.Provider value={contextData}>
				{children}
			</AuthContext.Provider>
		</>
	)
	
}
