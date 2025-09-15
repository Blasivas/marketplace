import { api } from '../lib/axios'

interface GetViewsReceivedResponse {
  amount: number
}

export async function getViewsReceived() {
  const response = await api.get<GetViewsReceivedResponse>(
    '/sellers/metrics/views',
  )
  return response.data
}
