import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const updateHostStructure = createAsyncThunk(
  "host/setStructure",
  async ({ uuid, structure }) => {
    console.log(uuid);
    const response = await axios.post("http://localhost:3000/host/structure", {
      uuid: uuid,
      structure: structure,
    });

    const currentHost = JSON.parse(localStorage.getItem("currentHost"));

    const updatedHost = {
      ...currentHost,
      lastPage: "structure",
      structure: structure,
    };
    localStorage.setItem("currentHost", JSON.stringify(updatedHost));
    return response.data;
  }
);

export const updatePrivacyType = createAsyncThunk(
  "host/setPrivacyType",
  async ({ uuid, privacyType }) => {
    const response = await axios.post(
      "http://localhost:3000/host/privacyType",
      {
        uuid: uuid,
        privacyType: privacyType,
      }
    );

    const currentHost = JSON.parse(localStorage.getItem("currentHost"));
    const updatedHost = {
      ...currentHost,
      lastPage: "location",
      privacyType: privacyType,
    };
    localStorage.setItem("currentHost", JSON.stringify(updatedHost));
    return response.data;
  }
);

export const updateFloorPlan = createAsyncThunk(
  "host/setFloorPlan",
  async ({ uuid, guests, bedrooms, beds, bathrooms }) => {
    const response = await axios.post("http://localhost:3000/host/floor-plan", {
      uuid: uuid,
      guests: guests,
      bedrooms: bedrooms,
      beds: beds,
      bathrooms: bathrooms,
    });
    const currentHost = JSON.parse(localStorage.getItem("currentHost"));
    const updatedHost = {
      ...currentHost,
      lastPage: "floorPlan",
      guests: guests,
      bedrooms: bedrooms,
      beds: beds,
      bathrooms: bathrooms,
    };
    localStorage.setItem("currentHost", JSON.stringify(updatedHost));
    return response.data;
  }
);

export const updateAmenities = createAsyncThunk(
  "host/setAmenities",
  async ({ uuid, amenities, safetyAmenities, uniqueAmenities }) => {
    const response = await axios.post("http://localhost:3000/host/amenities", {
      uuid,
      amenities,
      uniqueAmenities,
      safetyAmenities,
    });
    const currentHost = JSON.parse(localStorage.getItem("currentHost"));
    const updatedHost = {
      ...currentHost,
      lastPage: "photos",
      amenities: amenities,
      uniqueAmenities: uniqueAmenities,
      safetyAmenities: safetyAmenities,
    };
    localStorage.setItem("currentHost", JSON.stringify(updatedHost));
    return response.data;
  }
);

export const removeImageRedux = createAsyncThunk(
  "host/removeImage",
  async ({ uuid, index }) => {
    await axios.delete(`http://localhost:3000/host/deletePhoto/${index}`, {
      params: { uuid: uuid },
    });
    return { uuid, index };
  }
);
