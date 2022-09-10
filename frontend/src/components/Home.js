import React, { useState, useEffect } from 'react';

function Home() {
	let [data, setData] = useState([])

	useEffect(() => {
		fetch("list")
		.then(response => response.json())
		.then(data => setData(data))
	})

	return (
		<ul>
			{data.map(info => {
				return (
					<li key={info.id}>
						{info.name} - {info.age}
					</li>
				)
			})}
		</ul>
	)
}

export default Home;