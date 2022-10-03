import React, { useContext, useState, useEffect } from 'react';
import ShareHis from './Share.module.scss';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AuthContext from './AuthContext';

function Share() {
	let [text, setText] = useState('');

	function handleChange(e) {
		let value = e.target.value
		setText(value)
	}

	
	function handleSubmit(e) {
		e.preventDefault()
		console.log('submited')

		const requestOpt = {
			method: "POST",
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({
				text
			})
		}; 
		fetch('http://127.0.0.1:8000/share/add/', requestOpt).then(response => {
			if (response.ok) {
				console.log('ok')
				
			} else {
				console.log('not ok')
			}
		})
		// fetch(url, {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-type': 'application/json',
		// 	},
		// 	body: JSON.stringify({
		// 		'text': text
		// 	})
		// }).then(response => {
		// 	if (response.ok) {
		// 		console.log('ok')
		// 	} else {
		// 		console.log('not ok')
		// 	}
		// })
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