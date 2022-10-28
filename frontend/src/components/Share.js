import React, { useContext, useState, useEffect } from 'react';
import ShareHis from './Share.module.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AuthContext from './AuthContext';
import Cookies from 'js-cookie'

function Share() {
	let [text, setText] = useState('');

	// sets the value of textfield
	function handleChange(e) {
		let value = e.target.value
		setText(value)
	}

	const csrftoken = Cookies.get('csrftoken');

	// function that makes POST request to server
	function handleSubmit(e) {
		e.preventDefault()
		console.log('submited')

		const requestOpt = {
			method: "POST",
			headers: {
				'Content-type': 'application/json',
				'X-CSRFToken': csrftoken
			},
			body: JSON.stringify({
				text
			})
		}; 
		fetch('http://127.0.0.1:8000/share/add/', requestOpt).then(response => {
			if (response.ok) {
				alert('Ваша история успешно отправлена')
				
			} else {
				alert('Произойшла ошибка, попробуйте снова')
			}
		})

	}	
	
	return(
		
		<div className={ShareHis.container}>
			<form >
				<TextField 
				multiline
				rows={4}
				variant="outlined" 
				label="Поделись историей" 
				onChange={handleChange}
				/><br />
				<Button variant="contained" onClick={handleSubmit}>Отправить</Button>
				
			</form> 
			
		</div>	
	)
}

export default Share;