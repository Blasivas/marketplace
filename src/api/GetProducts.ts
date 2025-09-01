import { api } from '../lib/axios'

interface GetProductsResponse {
  products: []
  
}

export async function getProducts() {
  const response = await api.get<GetProductsResponse>('/products/me')
  return response.data
}