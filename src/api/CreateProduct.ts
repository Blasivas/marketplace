import { api } from '../lib/axios'

export interface CreateProductBody {
  title: string
  categoryId: string
  description: string
  priceInCents: number
  attachmentsIds: string[]
}

export async function createProduct({ title, categoryId, description, priceInCents, attachmentsIds }: CreateProductBody) {
  await api.post('/products', { title, categoryId, description, priceInCents, attachmentsIds })
}