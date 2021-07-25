import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../containers/App';
import Login from '../containers/Login';
import Register from '../containers/Register';
const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={App} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/register" component={Register} />
		</Switch>
	</BrowserRouter>
);

export default Routes;
