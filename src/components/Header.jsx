import React from 'react';
import "../assets/styles/components/Header.scss";
import logo from '../assets/images/platziVideoLogo.png'
import userIcon from '../assets/images/user-icon.png'
const Header = () => (
	<header className="header">
		<img className="header__img" src={logo} alt="logo de platzi video" />
		<div className="header__menu">
			<div className="header__menu--profile">
				<img src={userIcon} alt="logo de usuario" />
				<p>Perfil</p>
			</div>
			<ul>
				<li>
					<a href="/">Cuenta</a>
				</li>
				<li>
					<a href="/">Cerrar Sesion</a>
				</li>
			</ul>
		</div>
	</header>
);

export default Header;