import React from 'react';
import Input from '../components/Input';
import BtnPrimary from '../components/BtnPrimary';

import '../assets/styles/components/Register.scss';

const Register = () => (
	<section className="register">
		<section className="register__container">
			<h2>Regístrate</h2>
			<form className="register__container--form">
				<Input typeInput="text" textPlaceholder="Nombre" />
				<Input typeInput="text" textPlaceholder="Correo" />
				<Input typeInput="password" textPlaceholder="Contraseña" />
				<BtnPrimary btnText="Iniciar sesión" />
			</form>
			<a href="">Iniciar sesión</a>
		</section>
	</section>
);
export default Register;
