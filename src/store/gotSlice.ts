import { createSlice } from "@reduxjs/toolkit";

interface IGotSingle {
  [key: string]: any
}

interface IState {
  gotItems: IGotSingle[] | []
  drawer: boolean,
  singleItem: any,
  loading: boolean,
  singleMore: any,
  search: string,
  posts: any[] 
  filteredPosts: any[] 
}

const initialState: IState = {
  gotItems: [],
  drawer: false,
  singleItem: {},
  singleMore: {},
  loading: true,
  search: '',
  posts: [],
  filteredPosts: []
}

const gotSlice = createSlice({
  name: 'got',
  initialState,
  reducers: {
    changeDrawer(state, { payload }) {
      state.drawer = payload
    },
    setSingle(state, { payload }) {
      state.singleItem = payload
    },
    setLoading(state, { payload }) {
      state.loading = payload
    },
    setSingleMore(state, { payload }) {
      state.singleMore = payload
    },
    setSearch(state, { payload }) {
      state.search = payload
    },
    setPosts(state, { payload }) {
      state.posts = payload
    },
    setFilteredPosts(state, { payload }) {
      state.filteredPosts = payload
    }
  }
})
export const { changeDrawer, setSingle, setLoading, setSingleMore, setSearch,setPosts,setFilteredPosts } = gotSlice.actions // go to needed files
export default gotSlice.reducer // go to index.ts