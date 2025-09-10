import { api } from '../lib/axios'

interface EditProductStatusBody {
  id: string
  status: 'available' | 'sold' | 'cancelled'
}

export async function editProductStatus(id: string, status: EditProductStatusBody['status']) {
  const response = await api.patch<EditProductStatusBody>(`/products/${id}/${status}`)
  return response.data
}