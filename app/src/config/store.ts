import { configureStore } from "@reduxjs/toolkit"
import productReducer from "../features/product/productSlice"
import sideBarReducer from "../features/sideBar/sideBarSlice"
import cartReducer from "../features/cart/cartSlice"

export const store = configureStore({
  reducer: {
    products: productReducer,
    sideBar: sideBarReducer,
    cart: cartReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
