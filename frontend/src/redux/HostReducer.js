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
      state.hosts[uuid] = action.payload;
    },
    UpdateLastPage: (state, action) => {
      const { uuid, lastPage } = action.payload;
      if (state.hosts[uuid]) {
        state.hosts[uuid].lastPage = lastPage;
      }
      state.host.lastPage = lastPage;
    },
    setStructure: (state, action) => {
      const { uuid, structure } = action.payload;
      if (state.hosts[uuid]) {
        state.hosts[uuid].structure = structure;
      }
      state.host.structure = structure;
    },
    setPrivacyType: (state, action) => {
      const { uuid, privacyType } = action.payload;
      if (state.hosts[uuid]) {
        state.hosts[uuid].privacyType = privacyType;
      }
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
