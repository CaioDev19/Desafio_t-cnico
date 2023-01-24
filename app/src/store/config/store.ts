import { configureStore } from "@reduxjs/toolkit"
import productReducer from "../../store/features/product/productSlice"
import sideBarReducer from "../../store/features/sideBar/sideBarSlice"
import cartReducer from "../../store/features/cart/cartSlice"

export const store = configureStore({
  reducer: {
    products: productReducer,
    sideBar: sideBarReducer,
    cart: cartReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
