import { api } from '../lib/axios'

export interface GetProductsResponse {
  products: []
  title?: string | null
  status?: string | null
}

export async function getProducts({
  title,
  status,
}: {
  title?: string | null
  status?: string | null
}) {
  const response = await api.get<GetProductsResponse>('/products/me', {
    params: {
      title,
      status,
    },
  })
  return response.data
}
