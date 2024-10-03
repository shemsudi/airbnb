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
const NavigateToPrivacyTypePage = async () => {
  const response = await axios.post("http://localhost:3000/host/structure", {
    uuid: host.uuid,
    structure: typeOfPlace,
    lastPage: "PrivacyType",
  });
  dispatch(setStructure({ uuid: host.uuid, structure: typeOfPlace }));
  const currentHost = JSON.parse(localStorage.getItem("currentHost"));
  const updatedHost = {
    ...currentHost,
    lastPage: "PrivacyType",
    structure: typeOfPlace,
  };
  localStorage.setItem("currentHost", JSON.stringify(updatedHost));
  navigate(`/became-a-host/${host.uuid}/privacyType`);
};
