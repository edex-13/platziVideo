import React from 'react';
import Input from '../components/Input'
import icon_google from '../assets/images/google-icon.png';
import icon_twitter from '../assets/images/twitter-icon.png';
import '../assets/styles/components/Login.scss';
const Login = () => (
	<section className="login">
		<section className="login__container">
			<h2>Inicia sesión</h2>
			<form className="login__container--form">
				<Input typeInput="text" textPlaceholder="Correo"/>
				<Input typeInput="password" textPlaceholder="Contraseña"/>
				<button className="button">Iniciar sesión</button>
				<div className="login__container--remember-me">
					<label>
						<input type="checkbox" id="cbox1" value="first_checkbox" />
						Recuérdame
					</label>
					<a href="/">Olvidé mi contraseña</a>
				</div>
			</form>
			<section className="login__container--social-media">
				<div>
					<img src={icon_google} /> Inicia sesión con Google
				</div>
				<div>
					<img src={icon_twitter} /> Inicia sesión con Twitter
				</div>
			</section>
			<p className="login__container--register">
				No tienes ninguna cuenta <a href="">Regístrate</a>
			</p>
		</section>
	</section>
);
export default Login;