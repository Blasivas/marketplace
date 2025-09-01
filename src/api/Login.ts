import { api } from '../lib/axios'

export interface LoginBody {
  email: string
  password: string
}

export async function login({ email, password }: LoginBody) {
  const response = await api.post('/sellers/sessions', { email, password })
  return response.data.accessToken
}