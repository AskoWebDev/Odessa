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
		</div>
	)
}

export default App;