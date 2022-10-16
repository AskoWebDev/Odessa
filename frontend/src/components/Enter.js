import React, { createContext, useContext, useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Style from './Enter.module.scss';
import AuthContext from './AuthContext';
import jwt_decode from "jwt-decode";



function Enter() {
	
	let {user, handle} = useContext(AuthContext)

	
		

	return(
		<div className={Style.container}>
			<form onSubmit={handle}>
				<TextField variant="outlined" id="username" label="Имя" />
				<TextField variant="outlined" id="password" type="password" label="Пароль"/>
				<Button variant="contained" type="submit" onClick={handle} >Войти</Button>
			</form>
			{user && <Navigate to="/" />}
		</div>
	)
}

export default Enter;


