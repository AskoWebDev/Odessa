import React, { useContext, useState, createContext } from 'react';
import Head from './Header.module.scss';
import Button from '@mui/material/Button';
import But from './Header.module.scss';
import Butsec from './Header.module.scss';
import Auth from './Header.module.scss';
import AuthContext from './AuthContext';
import Toggle from './Header.module.scss';
import Bar from './Header.module.scss';
import Layout from './Layout';
import NavPrivateRoute from './utils/NavPrivateRoute'; 
import ToggleContext from './utils/NavPrivateRoute';

// context cheking if button was cliked or not


function Header() {

	let {tog} = useContext(ToggleContext)
	let {user, logoutUser} = useContext(AuthContext)
	return(
		<div className={Head.container}>
		
			<button className={Toggle.toggleBtn} type="submit" onClick={tog}>
				<span className={Bar.bar}></span>
				<span className={Bar.bar}></span>
				<span className={Bar.bar}></span>
			</button>
			
			
			<h1>Старая Одесса</h1>

			{/* authtorization block */}
			
			{user ? (
				<div className={Butsec.second}>
					<p>{user.username}</p>
					<Button variant="outlined" color="error" onClick={logoutUser} href="/">Выйти</Button>
				</div>
			) : (
				<div className={But.btn}>
					<Button variant="contained" color="success" href="/register">Зарегистрироваться</Button>
					<Button variant="contained" href="/enter">Войти</Button>
				</div>
			)}
		</div>
	)
}

export default Header;