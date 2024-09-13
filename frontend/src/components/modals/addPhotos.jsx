import { LockClosedIcon } from "@heroicons/react/16/solid";
import React, { useRef, useEffect, useState } from "react";
import CloseIcon from "../icons/closeIcon";
import PlusIcon from "../icons/plusIcon";
import ImageIcon from "../icons/imageIcon";
import { h } from "vue";

const AddPhotos = (props) => {
  const { isOpen, setIsOpen } = props;
  const [files, setFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  console.log(files, previews);
  console.log(isOpen);
  const photoAdd = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (photoAdd.current && !photoAdd.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    const selectedPreviews = selectedFiles.map((file) =>
      URL.createObjectURL(file)
    );
    setPreviews((prevPreviews) => [...prevPreviews, ...selectedPreviews]);
    e.target.value = "";
  };
  const triggerFileInput = () => {
    document.getElementById("file-input").click();
  };
  const removeImage = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
    const newPreviews = [...previews];
    newPreviews.splice(index, 1);
    setPreviews(newPreviews);
  };
  return (
    <div
      className={`fixed top-0 right-0 left-0 bottom-0 bg-black bg-opacity-60 z-10`}
    >
      <div
        ref={photoAdd}
        className="sm:relative fixed rounded-lg w-full sm:max-w-md h-4/6 bg-white flex flex-col  sm:left-1/2 right-0 bottom-0 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2"
      >
        <div className="flex justify-between items-center p-4 ">
          <button onClick={() => setIsOpen(false)}>
            <CloseIcon />
          </button>

          <div className="flex flex-col">
            <p className="text-lg font-bold ">Upload Photos</p>
            <small className="text-gray-700">
              {" "}
              {files.length > 0
                ? `${files.length} items selected`
                : "No items selected"}
            </small>
          </div>
          <button onClick={triggerFileInput}>
            <input
              multiple
              type="file"
              id="file-input"
              className="hidden"
              onChange={handleFileChange}
            />
            <PlusIcon />
          </button>
        </div>
        {files.length > 0 ? (
          <div
            className="flex-grow p-4 overflow-y-auto
          "
          >
            <div className="grid grid-cols-2 gap-4">
              {previews.map((preview, index) => (
                <div
                  key={index}
                  className="relative rounded-lg overflow-hidden"
                >
                  <img
                    src={preview}
                    alt=" shemsu"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => removeImage(index)}
                    className="absolute top-2 right-2 bg-white p-1 rounded-lg"
                  >
                    <CloseIcon />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex-grow flex flex-col m-4 p-4 border-gray-400 rounded-xl  items-center justify-center border border-dashed">
            <ImageIcon />
            <p className="font-semibold mb-2 mt-3">Drag and Drop</p>{" "}
            <small>or browse for photos</small>
            <input
              multiple
              type="file"
              id="file-input"
              className="hidden"
              onChange={handleFileChange}
            />
            <button
              className="px-4 py-2 rounded-md hover:opacity-100 mt-3 bg-black opacity-90 text-white"
              onClick={triggerFileInput}
            >
              Browse
            </button>
          </div>
        )}
        <div className="flex border-t-2 p-4 justify-between items-center">
          <button onClick={() => setIsOpen(false)}>Done</button>
          <button
            onClick={triggerFileInput}
            className="bg-black opacity-90 hover:opacity-100 text-white px-4 py-2 rounded-lg"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddPhotos;
