/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';
import { useTranslation } from 'react-i18next';
import MainLayout from './layouts/main-layout';
import Routes from './routes';
import {
	ThemeProvider,
	createTheme,
	Theme,
	StyledEngineProvider,
} from '@mui/material/styles';

declare module '@mui/styles/defaultTheme' {
	interface DefaultTheme extends Theme {}
}
const theme = createTheme();

export function App() {
	const { i18n } = useTranslation();
	return (
		<BrowserRouter>
			<StyledEngineProvider injectFirst>
				<ThemeProvider theme={theme}>
					<Helmet
						titleTemplate="%s - React Boilerplate"
						defaultTitle="React Boilerplate"
						htmlAttributes={{ lang: i18n.language }}
					>
						<meta
							name="description"
							content="A React Boilerplate application"
						/>
					</Helmet>
					<MainLayout>
						<Routes />
					</MainLayout>
					<GlobalStyle />
				</ThemeProvider>
			</StyledEngineProvider>
		</BrowserRouter>
	);
}
