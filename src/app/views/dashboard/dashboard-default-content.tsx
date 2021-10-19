import React, { useEffect, useState } from 'react';
import { getSalesAxios } from 'services/saleService';
import { SaleType } from 'models/sale-type';

const DashboardDefaultContent = () => {
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
		<div>
			<h1>Dashboard Default Content</h1>
			<h2>{sales.length}</h2>
		</div>
	);
};

export default DashboardDefaultContent;
