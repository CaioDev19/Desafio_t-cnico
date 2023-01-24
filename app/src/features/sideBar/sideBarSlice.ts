import { createSlice } from "@reduxjs/toolkit"

const SideBarSlice = createSlice({
  name: "sideBar",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toogle: (state) => {
      state.isOpen = !state.isOpen
    },
  },
})

export const { toogle } = SideBarSlice.actions

export default SideBarSlice.reducer
