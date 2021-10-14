import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/pages/Home';

const Routes = () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
		</Switch>
	);
};

export default Routes;