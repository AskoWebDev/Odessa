import React, { useState, useEffect } from 'react';
import Homes from './Home.module.scss';

function Home() {
	const [info, setInfo] = useState([])

	useEffect(() => {
		fetch('http://127.0.0.1:8000/home/add')
		.then(response => response.json())
		.then(data => setInfo(() => {
			return data
		}))
	})

	return(
		<div className={Homes.container}>
			
			{info.map(e => {
				return(
					<div key={e.id}>
						<p>{e.home_text}</p>
						<img src={e.home_image} />
					</div>
				);
			})}
		
			
		</div>
			
	)
}

export default Home;