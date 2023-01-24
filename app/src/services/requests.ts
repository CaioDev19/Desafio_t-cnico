import { AxiosResponse } from "axios"
import { api } from "./api"

export interface Product {
  id: number
  name: string
  brand: string
  description: string
  photo: string
  price: string
  createdAt: string
  updatedAt: string
}

interface ProductsResponse {
  products: Product[]
  count: number
}

export function getProductsApi(): Promise<
  AxiosResponse<ProductsResponse>
> {
  return api.get("/products?page=1&rows=8&sortBy=id&orderBy=ASC")
}
