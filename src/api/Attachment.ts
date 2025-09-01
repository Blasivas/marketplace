import { api } from '../lib/axios'

export interface AttachmentBody {
  files: string[]
}

export async function attachment({ files }: AttachmentBody) {
  await api.post('/attachments', { files })
}