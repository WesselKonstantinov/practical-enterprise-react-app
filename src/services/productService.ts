import api, { Endpoints } from '../api/axios';
import { ProductType } from 'models/product-type';

export async function getProductAxios() {
	return await api.get<ProductType[]>(Endpoints.products);
}

export async function postProductAxios(product: ProductType) {
	return await api.post<ProductType[]>(Endpoints.products, product);
}
