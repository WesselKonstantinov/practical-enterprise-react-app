import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import { getSalesAxios } from 'services/saleService';
import { SaleType } from 'models/sale-type';
import Chart from 'react-apexcharts';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Page from 'app/components/page';

const useStyles = makeStyles(() => ({
	root: {
		minHeight: '100%',
	},
}));

const getChartStyling = theme => ({
	chart: {
		background: theme.palette.background.paper,
		toolbar: {
			show: false,
		},
	},
	colors: ['#13affe', '#fbab49'],
	dataLabels: {
		enabled: false,
	},
	grid: {
		borderColor: theme.palette.divider,
		yaxis: {
			lines: {
				show: false,
			},
		},
	},
	legend: {
		show: true,
		labels: {
			colors: theme.palette.text.secondary,
		},
	},
	plotOptions: {
		bar: {
			columnWidth: '40%',
		},
	},
	stroke: {
		show: true,
		width: 2,
		colors: ['transparent'],
	},
	theme: {
		mode: theme.palette.type,
	},
	tooltip: {
		theme: theme.palette.type,
	},
	xaxis: {
		axisBorder: {
			show: true,
			color: theme.palette.divider,
		},
		axisTicks: {
			show: true,
			color: theme.palette.divider,
		},
		categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
		labels: {
			style: {
				colors: theme.palette.text.secondary,
			},
		},
	},
	yaxis: {
		axisBorder: {
			show: true,
			color: theme.palette.divider,
		},
		axisTicks: {
			show: true,
			color: theme.palette.divider,
		},
		labels: {
			style: {
				colors: theme.palette.text.secondary,
			},
		},
	},
});

const DashboardDefaultContent = () => {
	const classes = useStyles();
	const theme = useTheme();

	const [sales, setSales] = useState<SaleType[]>([]);

	useEffect(() => {
		fetchSales();
	}, []);

	const fetchSales = async () => {
		const { data } = await getSalesAxios();
		console.log(data);
		setSales(data);
	};

	return (
		<Page className={classes.root} title="Dashboard">
			<Container maxWidth={'sm'}>
				<Typography variant="h4" color="textPrimary">
					Dashboard
				</Typography>
				<Box my={5}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Card>
								<CardContent>
									<Typography
										variant="h5"
										color="textPrimary"
									>
										Sales
									</Typography>
									<Chart
										options={getChartStyling(theme)}
										series={sales}
										type="bar"
										height={'100%'}
									/>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</Page>
	);
};

export default DashboardDefaultContent;
