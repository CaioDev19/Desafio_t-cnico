import { Product } from "../../services/requests"

export type ReducedProduct = Omit<
  Product,
  "createdAt" | "updatedAt" | "brand"
>
