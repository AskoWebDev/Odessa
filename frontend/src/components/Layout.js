import React, {useContext} from 'react';
import { Outlet, Link } from 'react-router-dom';
import Nav from './Layout.module.scss';
import Toggle from './Layout.module.scss';
import Main from './Layout.module.scss';
import Bar from './Layout.module.scss';
import Header from './Header';
import Photo from './Photos';
import ToggleContext from './utils/NavPrivateRoute';

const Layout = () => {
	let {isToggled} = useContext(ToggleContext)

	// checks whether the 'isToggled' is true, 
	// then set display to flex and vice versa
	const checkToggel = {
		display: isToggled ? 'flex' : 'none'
	}

	// all the website links 
	return(
		
		<div className={Main.container}>
			
			<nav className={Nav.nav} id="navigation" style={checkToggel}>
				<ul>
					<li>
						<Link to="/">Главная</Link>
					</li>
					<li>
						<Link to="/home">История домов</Link>
					</li>
					<li>
						<Link to="/street">История улиц</Link>
					</li>
					<li>
						<Link to="/history">Интересные истории</Link>
					</li>
					<li>
						<Link to="/photo">Фото старой Одессы</Link>
					</li>
					<li>
						<Link to="/share">Поделись историей</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		
			
		</div>	
	)
};

export default Layout;