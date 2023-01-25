import { configureStore } from "@reduxjs/toolkit"
import productReducer from "../../store/features/product/productSlice"
import sideBarReducer from "../../store/features/sideBar/sideBarSlice"
import cartReducer from "../../store/features/cart/cartSlice"

const reducer = {
  products: productReducer,
  sideBar: sideBarReducer,
  cart: cartReducer,
}

export const store = configureStore({
  reducer,
})

export function getStoreWithState(state: any) {
  return configureStore({
    reducer: reducer,
    preloadedState: state,
  })
}
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
