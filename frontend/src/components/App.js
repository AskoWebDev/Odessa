import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Navigate, Link } from 'react-router-dom';
import Apps from './App.module.scss';
import Main from './App.module.scss';
import Buy from './App.module.scss';
import Button from '@mui/material/Button';

function App() {
	const [info, setInfo] = useState([])
	const [book, setBook] = useState([])
	const [navToBook, setNavToBook] = useState(false)

	const fetchData = async () => {
		await fetch('/main')
		.then(response => response.json())
		.then(data => setInfo(() => {
			return data
		}))
	}

	useEffect(() => {
		fetchData()
	}, [])
	
	
	
	return(
		<div className={Apps.container}>
			
			<div className={Main.main_info}>
				{info.map(e => {
					return(
						<div key={e.id}>
							<p>{e.text}</p>
							<img src={e.image}/>
						</div>
					)
				})}	
			</div>
			<div className={Buy.book}>
				<img src="./static/images/1914293.jpeg"/>
				<p>Эксклюзивная книга "Старая Одесса"</p>
				<Button variant="contained" color="success" type="submit" onClick={() => {setNavToBook(true)}}>Купить</Button>
				{navToBook && <Navigate to="/book" />}
			</div>
		</div>
	)
}

export default App;