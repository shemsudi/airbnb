import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hosts: {},
  loading: false,
  error: null,
  host: {
    uuid: "",
    lastPage: "",
    structure: "",
  },
};

const hostSlice = createSlice({
  name: "host",
  initialState,
  reducers: {
    addHost: (state, action) => {
      const { uuid, lastPage } = action.payload;
      state.host.uuid = action.payload.uuid;
      state.host.lastPage = action.payload.lastPage;
      state.hosts[uuid] = action.payload; // Add or update host data using uuid as key
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
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    clearHost: (state) => {
      state.host.uuid = "";
      state.host.lastPage = "";
      state.host.structure = "";
    },
  },
});

export const {
  setHosts,
  addHost,
  setStructure,
  UpdateLastPage,
  updateHost,
  setLoading,
  setError,
  clearHost,
} = hostSlice.actions;
export default hostSlice.reducer;
