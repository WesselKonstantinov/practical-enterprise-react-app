import React, { lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AboutPage from './views/pages/AboutPage';
import Home from './views/pages/Home';
import NotFoundPage from './views/pages/NotFoundPage';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/about" component={AboutPage} />
			<Route exact path="/not-found" component={NotFoundPage} />
			<Redirect from={'*'} to={'/not-found'} />
		</Switch>
	);
};

export default Routes;
