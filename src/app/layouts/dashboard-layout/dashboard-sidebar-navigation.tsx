import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Collapse from '@mui/material/Collapse';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ListSubheader from '@mui/material/ListSubheader';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import SettingsIcon from '@mui/icons-material/Settings';
import { useRouteMatch } from 'react-router';
import {
	PieChart as PieChartIcon,
	ShoppingCart as ShoppingCartIcon,
	ChevronUp as ChevronUpIcon,
	ChevronDown as ChevronDownIcon,
	List as ListIcon,
	FilePlus as FilePlusIcon,
	LogOut as LogOutIcon,
} from 'react-feather';

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
	nested: {
		paddingLeft: theme.spacing(4),
	},
}));

const DashboardSidebarNavigation = () => {
	const classes = useStyles();
	const { url } = useRouteMatch();

	const [open, setOpen] = useState(false);

	useEffect(() => {}, []);

	const handleClick = () => {
		setOpen(!open);
	};

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
				<Divider />
				<div className={classes.drawerContainer}>
					<List>
						<ListSubheader>Reports</ListSubheader>
						<Link className={classes.link} to={`${url}`}>
							<ListItemButton>
								<ListItemIcon>
									<PieChartIcon />
								</ListItemIcon>
								<ListItemText primary={'Dashboard'} />
							</ListItemButton>
						</Link>
						<ListSubheader>Management</ListSubheader>
						<ListItemButton onClick={handleClick}>
							<ListItemIcon>
								<ShoppingCartIcon />
							</ListItemIcon>
							<ListItemText primary="Products" />
							{open ? <ChevronUpIcon /> : <ChevronDownIcon />}
						</ListItemButton>
						<Collapse in={open} timeout="auto" unmountOnExit>
							<List component="div" disablePadding>
								<Link
									className={classes.link}
									to={`${url}/list-products`}
								>
									<ListItemButton>
										<ListItemIcon>
											<ListIcon />
										</ListItemIcon>
										<ListItemText primary="List Products" />
									</ListItemButton>
								</Link>
								<Link
									className={classes.link}
									to={`${url}/create-product`}
								>
									<ListItemButton className={classes.nested}>
										<ListItemIcon>
											<FilePlusIcon />
										</ListItemIcon>
										<ListItemText primary="Create Product" />
									</ListItemButton>
								</Link>
							</List>
						</Collapse>
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
