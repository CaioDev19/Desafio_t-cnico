import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getProductsApi } from "../../../services/requests"
import { Product } from "../../../global/types/product"

export interface IinitalState {
  products: Product[] | []
  isLoading: boolean
  isError: boolean
  error: string
}

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_data, thunkAPI) => {
    try {
      const response = await getProductsApi()
      return response.data
    } catch {
      return thunkAPI.rejectWithValue("Algo deu errado!")
    }
  }
)

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: false,
    isError: false,
    error: "",
  } as IinitalState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false
      state.products = action.payload.products
    })
    builder.addCase(fetchProducts.rejected, (state, { payload }) => {
      state.isLoading = false
      state.isError = true
      state.error = payload as string
    })
  },
})

export default productSlice.reducer
