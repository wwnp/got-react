import { createSlice } from "@reduxjs/toolkit";

interface IGotSingle {
  [key: string]: any
}

interface IState {
  gotItems: IGotSingle[] | []
  drawer: boolean
}

const initialState: IState = {
  gotItems: [],
  drawer: false
}

const gotSlice = createSlice({
  name: 'got',
  initialState,
  reducers: {
    changeDrawer(state, action) {
      const { payload } = action
      state.drawer = payload
    }
  }
})
export const { changeDrawer } = gotSlice.actions // go to needed files
export default gotSlice.reducer // go to index.ts