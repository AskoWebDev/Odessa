import React, { useContext } from 'react';
import Head from './Header.module.scss';
import Button from '@mui/material/Button';
import But from './Header.module.scss';
import Butsec from './Header.module.scss';
import AuthContext from './AuthContext';

function Header() {

	let {user, logoutUser} = useContext(AuthContext)
	return(
		<div className={Head.container}>
			<h1>Старая Одесса</h1>
			
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