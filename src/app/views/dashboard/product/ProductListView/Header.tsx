import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import { NavigateNext } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import {
	Box,
	Breadcrumbs,
	Button,
	Grid,
	Link,
	SvgIcon,
	Typography,
} from '@mui/material';
import {
	PlusCircle as PlusCircleIcon,
	Download as DownloadIcon,
	Upload as UploadIcon,
} from 'react-feather';

/*types definition */
type Props = {
	className?: string;
};

const useStyles = makeStyles(theme => ({
	root: {},
	action: {
		marginBottom: theme.spacing(1),
		'& + &': {
			marginLeft: theme.spacing(1),
		},
	},
}));

const Header = ({ className, ...rest }: Props) => {
	const classes = useStyles();

	return (
		<Grid
			container
			justifyContent="space-between"
			spacing={3}
			className={clsx(classes.root, className)}
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
					<Link
						variant="body1"
						color="inherit"
						underline="hover"
						to="/dashboard/list-products"
						component={RouterLink}
					>
						List Products
					</Link>
				</Breadcrumbs>
				<Typography variant="h4" color="textPrimary">
					All Products
				</Typography>
				<Box mt={2}>
					<Button
						className={classes.action}
						startIcon={
							<SvgIcon fontSize="small">
								<UploadIcon />
							</SvgIcon>
						}
					>
						Import
					</Button>
					<Button
						className={classes.action}
						startIcon={
							<SvgIcon fontSize="small">
								<DownloadIcon />
							</SvgIcon>
						}
					>
						Export
					</Button>
				</Box>
			</Grid>
			<Grid item>
				<Button
					color="primary"
					variant="contained"
					className={classes.action}
					component={RouterLink}
					to="/dashboard/create-product"
					startIcon={
						<SvgIcon fontSize="small">
							<PlusCircleIcon />
						</SvgIcon>
					}
				>
					New Product
				</Button>
			</Grid>
		</Grid>
	);
};

export default Header;
