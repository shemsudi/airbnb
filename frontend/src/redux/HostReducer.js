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
      state.host.lastPage = "title";
    },
    addTitle: (state, action) => {
      const { title } = action.payload;
      console.log(title);
      state.host.title = title;
      state.host.lastPage = "description";
    },
    setDescriptions: (state, action) => {
      const { description, highlights } = action.payload;
      state.host.description = description;
      state.host.highlights = highlights;
      state.host.lastPage = "instantBook";
    },
    setInstantBook: (state, action) => {
      const { instantBook } = action.payload;
      state.host.instantBook = instantBook;
      state.host.lastPage = "visibility";
    },
    setVisiblity: (state, action) => {
      const { visibility } = action.payload;
      state.host.visibility = visibility;
      state.host.lastPage = "price";
    },
    setPriceRedux: (state, action) => {
      const { price } = action.payload;
      state.host.price = price;
      state.host.lastPage = "discount";
    },
    setDiscounts: (state, action) => {
      state.host.discount = action.payload;
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
  setPriceRedux,
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
  addTitle,
  setDescriptions,
  setInstantBook,
  setVisiblity,
  setDiscounts,
} = hostSlice.actions;
export default hostSlice.reducer;
