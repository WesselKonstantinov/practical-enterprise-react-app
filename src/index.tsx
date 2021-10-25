/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'react-quill/dist/quill.snow.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// Use consistent styling
import 'sanitize.css/sanitize.css';

// Import root app
import { App } from 'app';

import { HelmetProvider } from 'react-helmet-async';

import { configureAppStore } from 'store/configureStore';

import reportWebVitals from 'reportWebVitals';

// Initialize languages
import './locales/i18n';

const store = configureAppStore();
const MOUNT_NODE = document.getElementById('root') as HTMLElement;

interface Props {
	Component: typeof App;
}

const ConnectedApp = ({ Component }: Props) => (
	<Provider store={store}>
		<HelmetProvider>
			<Component />
		</HelmetProvider>
	</Provider>
);

const render = (Component: typeof App) => {
	ReactDOM.render(<ConnectedApp Component={Component} />, MOUNT_NODE);
};

// Hot reloadable translation json files
if (module.hot) {
	module.hot.accept(['./app', './locales/i18n'], () => {
		ReactDOM.unmountComponentAtNode(MOUNT_NODE);
		const App = require('./app').App;
		render(App);
	});
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
