import React from 'react';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import Header from './Header';
import ProductCreateForm from './ProductCreateForm';

const useStyles = makeStyles(theme => ({}));

const ProductCreateView = () => {
	const classes = useStyles();

	return (
		<Container>
			<Header />
			<ProductCreateForm />
		</Container>
	);
};

export default ProductCreateView;
