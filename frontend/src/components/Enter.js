import React, { createContext, useContext, useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Style from './Enter.module.scss';
import AuthContext from './AuthContext';
import jwt_decode from "jwt-decode";



function Enter() {
	
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


