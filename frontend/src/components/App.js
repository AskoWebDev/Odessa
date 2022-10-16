import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Apps from './App.module.scss';


function App() {
	const [info, setInfo] = useState([])

	fetch('/main')
	.then(response => response.json())
	.then(data => setInfo(() => {
		return data
	}))
	return(
		<div className={Apps.container}>
			{info.map(e => {
				return(
					<div key={e.id}>
						<p>{e.text}</p>
						<img src={e.image}/>
					</div>
				)
			})}	
			
		</div>
	)
}

export default App;