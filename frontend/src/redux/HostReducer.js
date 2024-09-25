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
      state.host.uuid = uuid;
      state.host.lastPage = lastPage;
    },
    setStructure: (state, action) => {
      const { structure, uuid } = action.payload;
      if (uuid === state.host.uuid) {
        state.host.structure = structure;
        state.host.lastPage = "structure";
      }
    },
    setPrivacyType: (state, action) => {
      const { privacyType, uuid } = action.payload;
      if (uuid === state.host.uuid) {
        state.host.privacyType = privacyType;
        state.host.lastPage = "privacyType";
      }
    },
    setFloorPlan: (state, action) => {
      const { guests, beds, bedrooms, bathrooms } = action.payload;
      state.host.guests = guests;
      state.host.beds = beds;
      state.host.bedrooms = bedrooms;
      state.host.bathrooms = bathrooms;
      state.host.lastPage = "amenities";
    },
    setAmenitiesState: (state, action) => {
      const { amenities, uniqueAmenities, safetyAmenities } = action.payload;
      state.host.amenities = amenities;
      state.host.uniqueAmenities = uniqueAmenities;
      state.host.safetyAmenities = safetyAmenities;
      state.host.lastPage = "photos";
    },
    setPhotos: (state, action) => {
      const { photos } = action.payload;
      state.host.photos = photos;
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
  setPrivacyType,
  setLoading,
  setError,
  setFloorPlan,
  clearHost,
  setPhotos,
} = hostSlice.actions;
export default hostSlice.reducer;
