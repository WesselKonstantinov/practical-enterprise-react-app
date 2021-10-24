import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@mui/styles';
import { NavigateNext } from '@mui/icons-material';
import {
	Box,
	Breadcrumbs,
	Button,
	Grid,
	Link,
	Typography,
} from '@mui/material';

type Props = {
	className?: string;
};

const useStyles = makeStyles(() => ({
	root: {},
}));

const Header = ({ className, ...rest }: Props) => {
	const classes = useStyles();

	return (
		<Grid
			className={clsx(classes.root, className)}
			container
			justifyContent="space-between"
			spacing={3}
			{...rest}
		>
			<Grid item>
				<Breadcrumbs
					separator={<NavigateNext fontSize="small" />}
					aria-label="breadcrumb"
				>
					<Link
						variant="body1"
						color="inherit"
						to="/dashboard"
						component={RouterLink}
					>
						Dashboard
					</Link>
					<Box mb={3}>
						<Typography variant="body1" color="inherit">
							Create Product
						</Typography>
					</Box>
				</Breadcrumbs>
				<Typography variant="h4" color="textPrimary">
					Create a new product
				</Typography>
			</Grid>
			<Grid item>
				<Button component={RouterLink} to="/dashboard/list-products">
					Cancel
				</Button>
			</Grid>
		</Grid>
	);
};

export default Header;
