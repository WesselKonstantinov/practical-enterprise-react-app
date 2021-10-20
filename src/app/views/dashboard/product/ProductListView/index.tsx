import React from 'react';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import Header from './Header';
import Results from './Results';

const useStyles = makeStyles(theme => ({
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff',
	},
	root: {
		minHeight: '100%',
		paddingTop: theme.spacing(3),
		paddingBottom: 100,
	},
}));

const ProductListView = () => {
	const classes = useStyles();

	return (
		<Container>
			<Header />
			<Results />
		</Container>
	);
};

export default ProductListView;
