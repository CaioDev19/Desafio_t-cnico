import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ReducedProduct } from "../../global/types/product"

type ProductCount = ReducedProduct & {
  amount: number
  totalPrice: number
}

interface IinitialState {
  totalAmount: number
  totalPrice: number
  products: ProductCount[] | []
}
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalAmount: 0,
    totalPrice: 0,
    products: [],
  } as IinitialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ReducedProduct>) => {
      const product = action.payload
      const productExists = state.products.find(
        (item: ReducedProduct) => item.id === product.id
      )

      if (productExists) {
        state.products = state.products.map((item: ProductCount) =>
          item.id === productExists.id
            ? {
                ...item,
                amount: item.amount + 1,
                totalPrice:
                  item.totalPrice + Number(productExists.price),
              }
            : item
        )
        state.totalAmount = state.totalAmount + 1
        state.totalPrice =
          state.totalPrice + Number(productExists.price)
        return
      }

      state.products = [
        ...state.products,
        { ...product, amount: 1, totalPrice: Number(product.price) },
      ]
      state.totalAmount = state.totalAmount + 1
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const productExists = state.products.find(
        (item: ReducedProduct) => item.id === id
      )

      if (productExists && productExists.amount === 1) {
        state.products = state.products.filter(
          (item: ReducedProduct) => item.id !== id
        )
        state.totalAmount = state.totalAmount - 1
        state.totalPrice =
          state.totalPrice - Number(productExists.price)
        return
      }

      if (productExists) {
        state.products = state.products.map((item: ProductCount) =>
          item.id === id
            ? {
                ...item,
                amount: item.amount - 1,
                totalPrice:
                  item.totalPrice - Number(productExists.price),
              }
            : item
        )
        state.totalPrice =
          state.totalPrice - Number(productExists.price)
        state.totalAmount = state.totalAmount - 1
      }
    },
  },
})

export const { addProduct, removeProduct } = cartSlice.actions

export default cartSlice.reducer
