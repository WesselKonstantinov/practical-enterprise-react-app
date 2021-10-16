import React from 'react';
import Grid from '@mui/material/Grid';
import DashboardSidebarNavigation from './dashboard-sidebar-navigation';

type Props = {
	children: React.ReactNode;
};

const Dashboard = ({ children }: Props) => {
	return (
		<Grid
			container
			direction="row"
			justifyContent="flex-start"
			alignItems="flex-start"
		>
			<DashboardSidebarNavigation /> {children}
		</Grid>
	);
};

export default Dashboard;
