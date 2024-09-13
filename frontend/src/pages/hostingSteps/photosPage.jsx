import React from "react";
import HostHeader from "./hostHeader";
import FooterNavigation from "./footerNavigation";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import AddPhotos from "../../components/modals/addPhotos";
import CloseIcon from "../../components/icons/closeIcon";
import PlusIcon from "../../components/icons/plusIcon";
import EmptyState from "./emptyState";
import PhotoGrid from "./photoGrid";
const PhotosPage = () => {
  const [files, setFiles] = useState([]);
  const host = useSelector((state) => state.host.host);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  const onNext = () => {
    navigate(`/became-a-host/${host.uuid}/title`);
  };
  const onBack = () => {
    navigate(`/became-a-host/${host.uuid}/amenities`);
  };
  const removeImage = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
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
