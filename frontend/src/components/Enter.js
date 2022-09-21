import React, { useState } from 'react';
import Cookies from 'js-cookie'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Style from './Enter.module.scss';

function Enter() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	// import django feature for safety reasons
	const csrftoken = Cookies.get('csrftoken');

	console.log(username)
	console.log(password)

	function handle(e) {
		e.preventDefault()

		const credentials = {
			method: 'POST',
			mode: 'same-origin',
			headers: {
				'Content-type': 'application/json',
				'X-CSRFToken': csrftoken
			},
			body: JSON.stringify({
				username,
				password
			})
		};
		fetch('auth/token/login/', credentials).then(response => {
			if (response.ok) {
				console.log('ok')
			} else {
				console.log('not ok')
			}
		})
	}

	return(
		<div className={Style.container}>
			<form>
				<TextField variant="outlined" label="Имя"  onChange={e => setUsername(e)}/>
				<TextField variant="outlined" label="Пароль" onChange={e => setPassword(e)} />
				<Button variant="contained" onClick={handle}>Войти</Button>
			</form>
		</div>
	)
}

export default Enter;