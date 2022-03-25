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
  filteredPosts: any[],
  page: number,
}

const initialState: IState = {
  gotItems: [],
  drawer: false,
  singleItem: {},
  singleMore: {},
  loading: true,
  search: '',
  posts: [],
  filteredPosts: [],
  page: 1
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
    },
    changePage(state, { payload }) {
      state.page = payload
    }
  }
})
export const { changeDrawer, setSingle, setLoading, setSingleMore, setSearch, setPosts, setFilteredPosts, changePage } = gotSlice.actions
export default gotSlice.reducer 