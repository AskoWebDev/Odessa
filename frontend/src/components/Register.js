import React, { useState, useEffect } from 'react';
import Align from './Register.module.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom';


function Register() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');

	// import django feature for safety reasons
	const csrftoken = Cookies.get('csrftoken');

	// Saving the input value from textfield
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

	const [nav, setNav] = useState(false)
	
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
		fetch('auth/djoser/users/', requestOption)
		.then(response => {
			if (response.ok) {
				setNav(true)
				alert('Вы успешно зарегистрировались!')
			} else {
				alert('Произойшла ошибка, попробуйте ввести другие данные!')
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
			{nav && <Navigate to="/enter" />}
		</div>
	)
};

export default Register;