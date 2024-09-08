import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hosts: {},
  loading: false,
  error: null,
  host: {},
};

const hostSlice = createSlice({
  name: "host",
  initialState,
  reducers: {
    setHost: (state, action) => {
      state.host = action.payload;
    },
    addHost: (state, action) => {
      const { uuid, lastPage } = action.payload;
      state.host.uuid = action.payload.uuid;
      state.host.lastPage = action.payload.lastPage;
    },
    UpdateLastPage: (state, action) => {
      const { uuid, lastPage } = action.payload;
      state.host.lastPage = lastPage;
    },
    setStructure: (state, action) => {
      const { uuid, structure } = action.payload;

      state.host.structure = structure;
    },
    setPrivacyType: (state, action) => {
      const { uuid, privacyType } = action.payload;

      state.host.privacyType = privacyType;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearHost: (state) => {
      state.host = {};
    },
  },
});

export const {
  setHost,
  addHost,
  setStructure,
  UpdateLastPage,
  setPrivacyType,
  setLoading,
  setError,
  clearHost,
} = hostSlice.actions;
export default hostSlice.reducer;
