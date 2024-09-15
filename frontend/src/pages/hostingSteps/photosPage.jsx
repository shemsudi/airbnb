import React from "react";
import HostHeader from "./hostHeader";
import FooterNavigation from "./footerNavigation";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import AddPhotos from "../../components/modals/addPhotos";
import PlusIcon from "../../components/icons/plusIcon";
import EmptyState from "./emptyState";
import PhotoGrid from "./photoGrid";
import { setPhotos } from "../../redux/HostReducer";
import { useDispatch } from "react-redux";
import axios from "axios";
const PhotosPage = () => {
  const host = useSelector((state) => state.host.host);
  const [files, setFiles] = useState(host.photos || []);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const onNext = async () => {
    const formData = new FormData();
    formData.append("uuid", host.uuid);
    files.forEach((file) => formData.append("photos", file));
    console.log(files);
    console.log(formData.getAll("photos", "uuid"));
    dispatch(setPhotos({ photos: files }));

    const response = await axios.post(
      "http://localhost:3000/host/addPhotos",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    const currentHost = JSON.parse(localStorage.getItem("currentHost"));
    const updatedHost = {
      ...currentHost,
      lastPage: "title",
      photos: files,
    };
    localStorage.setItem("currentHost", JSON.stringify(updatedHost));
    navigate(`/became-a-host/${host.uuid}/title`);
  };
  const onBack = () => {
    navigate(`/became-a-host/${host.uuid}/amenities`);
  };
  const removeImage = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };
  return (
    <div className="h-screen flex flex-col">
      <HostHeader />
      <div className="flex-1 mx-5 md:mx-14 flex justify-center ">
        <div className="flex  flex-col  md:max-w-[500px] md:min-h-[500px] gap-5 mb-5">
          {files.length > 0 ? (
            <>
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <h1 className="font-bold text-xl">
                    {files.length >= 5
                      ? "Ta-da How does this look?"
                      : "Choose at least 5 photos"}
                  </h1>

                  <small className="mb-5">Drag to order</small>
                </div>
                <button onClick={() => setIsOpen(true)}>
                  {" "}
                  <PlusIcon />
                </button>
              </div>
              <PhotoGrid
                setIsOpen={setIsOpen}
                files={files}
                removeImage={removeImage}
              />
            </>
          ) : (
            <>
              <div className="flex flex-col gap-1 max-md:mt-6">
                <h1 className="text-2xl font-semibold">
                  Add some photos of your house
                </h1>
                <small className="text-gray-500">
                  You'll need 5 photos to get started. You can add more or make
                  changes later{" "}
                </small>
              </div>
              <EmptyState onClick={() => setIsOpen(true)} />
            </>
          )}
        </div>
      </div>
      <FooterNavigation step={2} pos={2} onBack={onBack} onNext={onNext} />
      {isOpen && (
        <AddPhotos
          files={files}
          setFiles={setFiles}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};

export default PhotosPage;
