import React, { useContext, useState, useEffect } from 'react';
import Histories from './History.module.scss';



function History() {
	const [info, setInfo] = useState([]);

	useEffect(() => {
		fetch('http://127.0.0.1:8000/list')
		.then(response => response.json())
		.then(data => setInfo(() => {
			return data
		}))
		
	})

	return(
		<div className={Histories.container}>

			<h1>Страница для разных историй</h1>
			<ul>
				{info.map(e => {
					return(
						<li key={e.id}>
							{e.name} - {e.age}
						</li>
					);
				})}
			</ul>
			
		</div>
	);
}

export default History;