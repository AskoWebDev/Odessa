import React, { useState, useEffect, Navigate } from 'react';
import Align from './Register.module.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Cookies from 'js-cookie'

function Register() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');

	// import django feature for safety reasons
	const csrftoken = Cookies.get('csrftoken');

	// Saving the input value
	function name(e) {
		const value = e.target.value
		setUsername(value)
	}

	function pass(evt) {
		const value = evt.target.value
		setPassword(value)
	}

	function myemail(event) {
		const value = event.target.value
		setEmail(value)
	}

	

	// Makes POST request to server
	function handle(e) {
		e.preventDefault()

		const requestOption = {
			method: "POST",
			mode: 'same-origin',
			headers: {
				'Content-type': 'application/json',
				'X-CSRFToken': csrftoken
			},
			body: JSON.stringify({
				username,
				password,
				email
			})
		}; 
		fetch('auth/djoser/users/', requestOption).then(response => {
			if (response.ok) {
				
				console.log('ok')
			} else {
				flag = false
				console.log('not ok')
			}
		})
		
	}
	

	return(
		<div className={Align.container}>
			<form>
				<TextField variant="outlined" label="Имя" onChange={name} />
				<TextField variant="outlined" label="Пароль"  onChange={pass}/>
				<TextField variant="outlined" label="Электонная почта" onChange={myemail} />
				<Button variant="contained" onClick={handle}>Зарегистрироваться</Button>
			</form>

		</div>
	)
};

export default Register;