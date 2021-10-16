import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './views/pages/AboutPage';
import Home from './views/pages/Home';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={AboutPage} />
		</Switch>
	);
};

export default Routes;
