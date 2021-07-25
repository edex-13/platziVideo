import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../containers/App';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFoud';
import Layout from '../components/Layout';
const Routes = () => (
	<BrowserRouter>
		<Layout>
			<Switch>
				<Route exact path="/" component={App} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
				<Route component={NotFound} />
			</Switch>
		</Layout>
	</BrowserRouter>
);

export default Routes;
