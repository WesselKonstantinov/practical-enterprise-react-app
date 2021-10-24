import React from 'react';
import Container from '@mui/material/Container';
import { makeStyles } from '@mui/styles';
import Header from './Header';
import ProductCreateForm from './ProductCreateForm';
import Page from 'app/components/page';

const useStyles = makeStyles(theme => ({
	root: {
		minHeight: '100%',
		paddingTop: theme.spacing(3),
		paddingBottom: 100,
	},
}));

const ProductCreateView = () => {
	const classes = useStyles();

	return (
		<Page className={classes.root} title="Product Create">
			<Container>
				<Header />
				<ProductCreateForm />
			</Container>
		</Page>
	);
};

export default ProductCreateView;
