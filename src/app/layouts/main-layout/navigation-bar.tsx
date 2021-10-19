import * as React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { colors } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

const useStyles = makeStyles({
	link: {
		color: colors.lightBlue[50],
		textDecoration: 'none',
	},
	title: {
		flexGrow: 1,
	},
});

const NavigationBar = () => {
	const classes = useStyles();

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Link
						className={`${classes.link} ${classes.title}`}
						to={'/'}
					>
						LOGO
					</Link>
					<Button color="inherit">
						<Link className={classes.link} to={'/'}>
							Home
						</Link>
					</Button>
					<Button color="inherit">
						<Link className={classes.link} to={'/about'}>
							About
						</Link>
					</Button>
					<Button color="inherit">
						<Link className={classes.link} to={'/dashboard'}>
							Dashboard
						</Link>
					</Button>
					<Button color="inherit">
						<Link className={classes.link} to={'/login'}>
							Login
						</Link>
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default NavigationBar;
