import React from 'react';
import Homes from './Home.module.scss';

function Home() {
	return(
		<div className={Homes.container}>
			<h1>Страница для истории домов</h1>
		</div>
	)
}

export default Home;