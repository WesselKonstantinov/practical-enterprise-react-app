import api, { Endpoints } from 'api/axios';
import { SaleType } from 'models/sale-type';

export async function getSalesAxios() {
	return await api.get<SaleType[]>(Endpoints.sales);
}
