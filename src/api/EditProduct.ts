import { api } from '../lib/axios'

export interface EditProductBody {
  title: string
  categoryId: string
  description: string
  priceInCents: number
  attachmentsIds: string[]
}

export async function editProduct(id: string, { title, categoryId, description, priceInCents, attachmentsIds }: EditProductBody) {
  await api.put(`/products/${id}`, { title, categoryId, description, priceInCents, attachmentsIds })
}