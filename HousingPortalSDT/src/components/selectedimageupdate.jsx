import React, { useState, useRef } from "react";

function SelectedImageUpload({ selectedImage }) {
  const [images, setImages] = useState([null, null, null]); 
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRefs = [useRef(null), useRef(null), useRef(null)]; 

  function selectFiles(index) {
    fileInputRefs[index].current.click();
  }

  function onFileSelect(event, index) {
    const file = event.target.files[0];
    if (!file || file.type.split("/")[0] !== "image") return;
    setImages((prevImages) => {
      const newImages = [...prevImages];
      newImages[index] = {
        name: file.name,
        url: URL.createObjectURL(file),
      };
      return newImages;
    });
  }

  function deleteImage(index) {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      newImages[index] = null; 
      return newImages;
    });
  }

  function onDragOver(event) {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy";
  }

  function onDragLeave(event) {
    event.preventDefault();
    setIsDragging(false);
  }

  function onDrop(event, index) {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    if (!file || file.type.split("/")[0] !== "image") return;
    setImages((prevImages) => {
      const newImages = [...prevImages];
      newImages[index] = {
        name: file.name,
        url: URL.createObjectURL(file),
      };
      return newImages;
    });
  }

  return (
    <div className="justify-between w-full h-full border">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className="flex items-center justify-center text-center mt-4 text-gray-700 rounded-[30px] bg-lightgray h-[320px] w-full"
          onClick={() => selectFiles(index)}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={(event) => onDrop(event, index)}
        >
          {images[index] ? (
            <>
              <span
                className="delete absolute top-[-0.5] right-2 text-lg cursor-pointer z-50"
                onClick={() => deleteImage(index)}
              >
                &times;
              </span>
              <img
                className="w-full h-full rounded"
                src={images[index].url}
                alt={images[index].name}
              />
            </>
          ) : isDragging ? (
            <span className="text-lg">Drop Images here</span>
          ) : (
            <span
              className="ml-1 text-#252525 transition-opacity cursor-pointer duration-400 hover:text-white text-lg text-lightgray2 "
              role="button"
            >
              Add Photo+
            </span>
          )}
          <input
            name="file"
            type="file"
            className="hidden file"
            ref={fileInputRefs[index]}
            onChange={(event) => onFileSelect(event, index)}
          />
        </div>
      ))}
    </div>
  );
}

export default SelectedImageUpload;
