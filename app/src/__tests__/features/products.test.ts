import { fetchProducts } from "../../store/features/product/productSlice"
import { getStoreWithState } from "../../store/config/store"

describe("productSlice", () => {
  it("should return the initial state", () => {
    const state = getStoreWithState({}).getState()
    expect(state.products.products).toHaveLength(0)
    expect(state.products.isLoading).toBe(false)
    expect(state.products.isError).toBe(false)
    expect(state.products.error).toBe("")
  })
  it("should handle fetchProducts.pending", async () => {
    const store = getStoreWithState({})
    const action = store.dispatch(fetchProducts())
    const state = store.getState()

    expect(state.products.isLoading).toBe(true)
    await action
  })
  it("should handle fetchProducts.fulfilled", async () => {
    const store = getStoreWithState({})
    await store.dispatch(fetchProducts())
    const state = store.getState()
    expect(state.products.products).toHaveLength(8)
    expect(state.products.isLoading).toBe(false)
    expect(state.products.isError).toBe(false)
    expect(state.products.error).toBe("")
  })
})
