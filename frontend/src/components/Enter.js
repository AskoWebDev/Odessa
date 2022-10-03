import React, { createContext, useContext, useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Style from './Enter.module.scss';
import AuthContext from './AuthContext';
import jwt_decode from "jwt-decode";



function Enter() {
	// const [username, setUsername] = useState('');
	// const [password, setPassword] = useState('');

	// const [authToken, setAuthToken] = useState(localStorage.getItem('authToken') ? JSON.parse(localStorage.getItem('authToken')) : null);
	// const [user, setUser] = useState(localStorage.getItem('authToken') ? jwt_decode(localStorage.getItem('authToken')) : null);
	

	// let handle = async (e) => {
	// 	e.preventDefault()
	// 	let response = await fetch('http://127.0.0.1:8000/token/', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-type': 'application/json'
	// 		},
	// 		body: JSON.stringify({
	// 			'username': username,
	// 			'password': password
	// 		})
	// 	})
	// 	let data = await response.json()
	// 	if (response.status === 200) {
	// 		console.log('ok')
	// 		setAuthToken(data)
	// 		setUser(jwt_decode(data.access))
	// 		localStorage.setItem('authToken', JSON.stringify(data))
	// 	}
	// }

	

	// const contextData =  {
	// 	user:user,
	// 	handle:handle
	// }
	
	let {user, handle} = useContext(AuthContext)

	// const load = () => {
	// 	if (user) {
	// 		document.location.reload()
	// 	}

	// }
		

	return(
		<div className={Style.container}>
			<form onSubmit={handle}>
				
				<TextField variant="outlined" id="username" label="Имя" />
				<TextField variant="outlined" id="password" label="Пароль"/>
				<Button variant="contained" type="submit" onClick={handle} >Войти</Button>

			</form>
		</div>
	)
}

export default Enter;


