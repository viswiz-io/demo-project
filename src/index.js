import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';

import 'semantic-ui-css/semantic.min.css';

const MOUNT_NODE = document.getElementById('root');

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact={true} path="/" component={HomePage} />
				<Route exact={true} path="/login" component={LoginPage} />
				<Route exact={true} path="/dashboard" component={DashboardPage} />
			</Switch>
		</BrowserRouter>
	);
}

render(<App />, MOUNT_NODE);
