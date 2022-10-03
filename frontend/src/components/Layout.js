import React, {useContext} from 'react';
import { Outlet, Link } from 'react-router-dom';
import Nav from './Layout.module.scss';

const Layout = () => {
	return(
		
		<div className="container">
			<nav className={Nav.nav}>
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
						<Link to="/share">Поделись историей</Link>
					</li>
				</ul>
			</nav>
			<Outlet />
		</div>

		
		
	)
};

export default Layout;