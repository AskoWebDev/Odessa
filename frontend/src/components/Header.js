import React from 'react';
import Head from './Header.module.scss';
import Button from '@mui/material/Button';
import But from './Header.module.scss';

function Header() {

	return(
		<div className={Head.container}>
			<h1>Старая Одесса</h1>
			<div className={But.btn}>
				<Button variant="contained" color="success" href="/register">Зарегистрироваться</Button>
				<Button variant="contained" href="/enter">Войти</Button>
			</div>
		</div>
	)
}

export default Header;