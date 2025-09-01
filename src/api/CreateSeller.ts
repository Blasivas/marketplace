import { api } from '../lib/axios'

export interface CreateSellerBody {
  name: string
  phone: string
  email: string
  avatarId: string
  password: string
  passwordConfirmation: string
}

export async function createSeller({ email, password, name, phone, avatarId, passwordConfirmation }: CreateSellerBody) {
  await api.post('/sellers', { email, password, name, phone, avatarId, passwordConfirmation })
}