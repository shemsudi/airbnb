import { createSlice } from "@reduxjs/toolkit";
import {
  removeImageRedux,
  updateAmenities,
  updateDescription,
  updateDiscounts,
  updateFloorPlan,
  updateHostStructure,
  updateInstantBook,
  updateLegalInfo,
  updatePrice,
  updateTitle,
  updateVisibility,
  uploadFiles,
} from "./hostActions";
import { updatePrivacyType } from "./hostActions";

const initialState = {
  hosts: {},
  loading: false,
  error: null,
  host: {
    uuid: "",
    lastPage: "",
    structure: "",
    privacyType: "",
    guests: 2,
    beds: 1,
    bedrooms: 1,
    bathrooms: 1,
    amenities: [],
    uniqueAmenities: [],
    safetyAmenities: [],
    photos: [],
    title: "",
    description: "",
    highlights: "",
    instantBook: false,
    visibility: "",
    price: 23,
    discount: {},
    legalInfo: {},
  },
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
    setLegalInfo: (state, action) => {
      const { legalInfo } = action.payload;
      state.host.legalInfo = legalInfo;
      state.host.lastPage = "finish";
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
  extraReducers: (builder) => {
    builder
      .addCase(updateHostStructure.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateHostStructure.fulfilled, (state, action) => {
        const { structure, uuid } = action.payload;
        if (uuid === state.host.uuid) {
          state.host.structure = structure;
          state.host.lastPage = "PrivacyType";
        }
        state.loading = false;
      })
      .addCase(updateHostStructure.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(updatePrivacyType.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePrivacyType.fulfilled, (state, action) => {
        const { privacyType, uuid } = action.payload;
        console.log(action.payload);
        if (uuid === state.host.uuid) {
          state.host.privacyType = privacyType;
          state.host.lastPage = "location";
        }
        state.loading = false;
      })
      .addCase(updatePrivacyType.rejected, (state, action) => {
        console.log(action.payload);
        state.loading = false;
      })
      .addCase(updateFloorPlan.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateFloorPlan.fulfilled, (state, action) => {
        const { uuid, guests, beds, bedrooms, bathrooms } = action.payload;
        if (uuid === state.host.uuid) {
          state.host.guests = guests;
          state.host.beds = beds;
          state.host.bedrooms = bedrooms;
          state.host.bathrooms = bathrooms;
          state.host.lastPage = "amenities";
        }
        state.loading = false;
      })
      .addCase(updateAmenities.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateAmenities.fulfilled, (state, action) => {
        const { uuid, amenities, uniqueAmenities, safetyAmenities } =
          action.payload;
        if (uuid === state.host.uuid) {
          state.host.amenities = amenities;
          state.host.uniqueAmenities = uniqueAmenities;
          state.host.safetyAmenities = safetyAmenities;
          state.host.lastPage = "photos";
        }
        state.loading = false;
      })
      .addCase(updateAmenities.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(removeImageRedux.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeImageRedux.fulfilled, (state, action) => {
        const { uuid, index } = action.payload;
        if (uuid === state.host.uuid) {
          state.host.photos = state.host.photos.filter((_, i) => i !== index);
        }
        state.loading = false;
      })
      .addCase(uploadFiles.pending, (state) => {
        state.loading = true;
      })
      .addCase(uploadFiles.fulfilled, (state, action) => {
        const { newFiles } = action.payload;
        if (state.host.photos === undefined) {
          state.host.photos = [...newFiles];
        } else {
          state.host.photos = [...state.host?.photos, ...newFiles];
        }
        state.loading = false;
        state.host.lastPage = "title";
      })
      .addCase(uploadFiles.rejected, (state, error) => {
        state.loading = false;
        state.error = error;
        console.log(error);
      })
      .addCase(updateTitle.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateTitle.fulfilled, (state, action) => {
        const { title, uuid } = action.payload;
        if (uuid === state.host.uuid) {
          state.host.title = title;
          state.host.lastPage = "description";
        }
        state.loading = false;
      })
      .addCase(updateTitle.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(updateDescription.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateDescription.fulfilled, (state, action) => {
        const { uuid, description, highlights } = action.payload;
        console.log(action.payload);
        if (uuid === state.host.uuid) {
          state.host.description = description;
          state.host.highlights = highlights;
          state.host.lastPage = "instantBook";
        }
        state.loading = false;
      })
      .addCase(updateDescription.rejected, (state, error) => {
        state.loading = false;
        console.log(error);
      })
      .addCase(updateInstantBook.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateInstantBook.fulfilled, (state, action) => {
        const { uuid, instantBook } = action.payload;
        if (uuid === state.host.uuid) {
          state.host.instantBook = instantBook;
          state.host.lastPage = "visibility";
        }
        state.loading = false;
      })
      .addCase(updateInstantBook.rejected, (state, error) => {
        state.loading = false;
        console.log(error);
      })
      .addCase(updateVisibility.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateVisibility.fulfilled, (state, action) => {
        const { uuid, visibility } = action.payload;
        if (uuid === state.host.uuid) {
          state.host.visibility = visibility;
          state.host.lastPage = "price";
        }
        state.loading = false;
      })
      .addCase(updateVisibility.rejected, (state, error) => {
        state.loading = false;
        console.log(error);
      })
      .addCase(updatePrice.pending, (state) => {
        state.loading = true;
      })
      .addCase(updatePrice.fulfilled, (state, action) => {
        const { uuid, price } = action.payload;
        if (uuid === state.host.uuid) {
          state.host.price = price;
          state.host.lastPage = "discount";
        }
        state.loading = false;
      })
      .addCase(updatePrice.rejected, (state, error) => {
        state.loading = false;
        state.error = error;
        console.log(error);
      })
      .addCase(updateDiscounts.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateDiscounts.fulfilled, (state, action) => {
        const { uuid, discount } = action.payload;
        if (uuid === state.host.uuid) {
          state.host.discount = discount;
          state.host.lastPage = "legal";
        }
        state.loading = false;
      })
      .addCase(updateDiscounts.rejected, (state, error) => {
        state.loading = false;
        state.error = error;
        console.log(error);
      })
      .addCase(updateLegalInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateLegalInfo.fulfilled, (state, action) => {
        const { uuid, legalInfo } = action.payload;
        if (uuid === state.host.uuid) {
          state.host.legalInfo = legalInfo;
          state.lastPage = "receipt";
        }
        state.loading = false;
      })
      .addCase(updateLegalInfo.rejected, (state, error) => {
        state.loading = false;
        state.error = error;
        console.log(error);
      });
  },
});

export const {
  setLegalInfo,
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
