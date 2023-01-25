import { AxiosResponse } from "axios"
import { Product } from "../global/types/product"
import { api } from "./api"

interface ProductsResponse {
  products: Product[]
  count: number
}

export function getProductsApi(): Promise<
  AxiosResponse<ProductsResponse>
> {
  return api.get("/products?page=1&rows=8&sortBy=id&orderBy=ASC")
}
