import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hosts: [],
  loading: false,
  error: null,
  host: null,
};

const hostSlice = createSlice({
  name: "host",
  initialState,
  reducers: {
    setHosts: (state, action) => {
      state.hosts = action.payload;
    },
    setHost: (state, action) => {
      state.host = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearHost: (state) => {
      state.host = null;
    },
  },
});

export const { setHosts, setHost, setLoading, setError, clearHost } =
  hostSlice.actions;
export default hostSlice.reducer;
