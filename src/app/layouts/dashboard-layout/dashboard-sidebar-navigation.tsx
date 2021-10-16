import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';
import { useRouteMatch } from 'react-router';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerContainer: {
		overflow: 'auto',
	},
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	link: {
		textDecoration: 'none',
		color: 'inherit',
	},
	logoWithLink: {
		display: 'flex',
		alignItems: 'center',
		textDecoration: 'none',
		color: 'inherit',
	},
}));

const DashboardSidebarNavigation = () => {
	const classes = useStyles();
	const { url } = useRouteMatch();

	useEffect(() => {}, []);

	return (
		<div className={classes.root}>
			<Drawer
				className={classes.drawer}
				variant="permanent"
				classes={{
					paper: classes.drawerPaper,
				}}
				anchor="left"
			>
				<Toolbar
					style={{ width: '6rem', height: 'auto' }}
					className={classes.toolbar}
				>
					<Link to={`${url}`} className={classes.logoWithLink}>
						Logo
					</Link>
				</Toolbar>
				<div className={classes.drawerContainer}>
					<List>
						<Link
							className={classes.link}
							to={`${url}/settings-and-privacy`}
						>
							<ListItemButton>
								<ListItemIcon>
									<SettingsIcon />
								</ListItemIcon>
								<ListItemText
									primary={'settings and privacy'}
								/>
							</ListItemButton>
						</Link>
						<a className={classes.link} href={'/'}>
							<ListItemButton>
								<ListItemIcon>
									<ExitToAppIcon />
								</ListItemIcon>
								<ListItemText primary={'logout'} />
							</ListItemButton>
						</a>
					</List>
				</div>
			</Drawer>
		</div>
	);
};

export default DashboardSidebarNavigation;
