import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
	root: {},
	action: {
		marginBottom: theme.spacing(1),
		'& + &': {
			marginLeft: theme.spacing(1),
		},
	},
}));

const Results = () => {
	const classes = useStyles();

	return (
		<div>
			<h1>Results- ListView - Works!</h1>
		</div>
	);
};

export default Results;
