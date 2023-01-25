import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ReducedProduct } from "../../../global/types/product"

type ProductCount = ReducedProduct & {
  amount: number
  totalPrice: number
}

interface IinitialState {
  totalAmount: number
  totalPrice: number
  products: ProductCount[] | []
}

const initialState: IinitialState = {
  totalAmount: 0,
  totalPrice: 0,
  products: [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
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
                totalPrice: item.totalPrice + Number(item.price),
              }
            : item
        )
      } else {
        state.products = [
          ...state.products,
          {
            ...product,
            amount: 1,
            totalPrice: Number(product.price),
          },
        ]
      }

      state.totalAmount = state.totalAmount + 1
      state.totalPrice = state.totalPrice + Number(product.price)
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const productExists = state.products.find(
        (item: ReducedProduct) => item.id === id
      )

      if (!productExists) {
        return state
      }

      if (productExists.amount === 1) {
        state.products = state.products.filter(
          (item: ReducedProduct) => item.id !== id
        )
      } else {
        state.products = state.products.map((item: ProductCount) =>
          item.id === id
            ? {
                ...item,
                amount: item.amount - 1,
                totalPrice: item.totalPrice - Number(item.price),
              }
            : item
        )
      }

      state.totalPrice =
        state.totalPrice - Number(productExists.price)
      state.totalAmount = state.totalAmount - 1
    },
    removeAllProductsById: (state, action: PayloadAction<number>) => {
      const id = action.payload
      const productExists = state.products.find(
        (item: ReducedProduct) => item.id === id
      )

      if (!productExists) {
        return state
      }

      state.products = state.products.filter(
        (item: ReducedProduct) => item.id !== id
      )

      state.totalPrice =
        state.totalPrice -
        Number(productExists.price) * productExists.amount
      state.totalAmount = state.totalAmount - productExists.amount
    },
    clearCart: (state) => {
      state.totalPrice = 0
      state.totalAmount = 0
      state.products = []
    },
  },
})

export const {
  addProduct,
  removeProduct,
  removeAllProductsById,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer
