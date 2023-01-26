import sideBarSlice from "../../store/features/sideBar/sideBarSlice"
import { toogle } from "../../store/features/sideBar/sideBarSlice"

describe("sideBarSlice", () => {
  it("should toogle", () => {
    const initialState = {
      isOpen: false,
    }
    const state = sideBarSlice(initialState, toogle())
    expect(state.isOpen).toBe(true)
  })
})
