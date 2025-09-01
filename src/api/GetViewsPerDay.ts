import { api } from '../lib/axios'

interface GetViewsPerDayResponse {
  date: string;
  amount: number
}[]

export async function getViewsPerDay() {
  const response = await api.get<GetViewsPerDayResponse>('/sellers/metrics/views/days')
  return response.data
}