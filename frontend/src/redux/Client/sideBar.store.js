import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  setHam:false
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.setHam = !state.setHam
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleSideBar } = sidebarSlice.actions

export default sidebarSlice.reducer