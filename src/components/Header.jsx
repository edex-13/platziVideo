import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/images/platziVideoLogo.png';
import userIcon from '../assets/images/user-icon.png';
const Header = () => (
	<header className="header">
		<Link to="/">
			<img className="header__img" src={logo} alt="logo de platzi video" />
		</Link>
		<div className="header__menu">
			<div className="header__menu--profile">
				<img src={userIcon} alt="logo de usuario" />
				<p>Perfil</p>
			</div>
			<ul>
				<li>
					<p>Cuenta</p>
				</li>
				<li>
					<Link to="/login">
						Cerrar Sesion
					</Link>
				</li>
			</ul>
		</div>
	</header>
);

export default Header;
