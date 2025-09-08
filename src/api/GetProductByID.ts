import { api } from '../lib/axios'

export interface Avatar {
  id: string;
  url: string;
}

export interface Owner {
  id: string;
  name: string;
  phone: string;
  email: string;
  avatar: Avatar;
}

export interface Category {
  id: string;
  title: string;
  slug: string;
}

export interface Attachment {
  id: string;
  url: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  priceInCents: number;
  status: string;
  owner: Owner;
  category: Category;
  attachments: Attachment[];
}

export interface GetProductByIDResponse {
  product: Product;
}

export async function getProductByID(id: string): Promise<GetProductByIDResponse> {
  const response = await api.get<GetProductByIDResponse>(`/products/${id}`)
  return response.data;
}