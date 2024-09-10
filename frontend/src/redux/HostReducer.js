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
    setFloorPlan: (state, action) => {
      const { guests, beds, bedrooms, bathrooms } = action.payload;
      state.host.guests = guests;
      state.host.beds = beds;
      state.host.bedrooms = bedrooms;
      state.host.bathrooms = bathrooms;
    },
    setAmenitiesState: (state, action) => {
      const { amenities, uniqueAmenities, safetyAmenities } = action.payload;
      state.host.amenities = amenities;
      state.host.uniqueAmenities = uniqueAmenities;
      state.host.safetyAmenities = safetyAmenities;
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
  setAmenitiesState,
  setHost,
  addHost,
  setStructure,
  UpdateLastPage,
  setPrivacyType,
  setLoading,
  setError,
  setFloorPlan,
  clearHost,
} = hostSlice.actions;
export default hostSlice.reducer;
