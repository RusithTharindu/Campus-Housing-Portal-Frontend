import React, { useState, useRef } from "react";

function SelectedImageUpload({ selectedImage, setImagess }) {
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
    setImagess((prevImages) => {
      const newImages = [...prevImages];
      newImages[index] = file;
      console.log(newImages);
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
        <div className="justify-between w-full h-full">
                    {/* First Image Selector */}

          <div
            className="flex items-center justify-center text-center mt-4 text-gray-700 rounded-[30px] bg-lightgray h-[320px] w-full"
            onClick={() => selectFiles(0)}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={(event) => onDrop(event, 0)}
          >
            {images[0] ? (
              <>
                {/* <span
                  className="delete absolute top-[-0.5] right-2 text-lg cursor-pointer z-50"
                  onClick={() => deleteImage(0)}
                >
                  &times;
                </span> */}
                <img
                  className="w-full h-full rounded-[20px]"
                  src={images[0].url}
                  alt={images[0].name}
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
              ref={fileInputRefs[0]}
              onChange={(event) => onFileSelect(event, 0)}
            />
          </div>
          {/* <div className="container flex flex-wrap items-start justify-start w-full h-auto mt-4 overflow-y-auto">
            {images.map((image, idx) => (
              <div
                key={idx}
                className={`relative w-20 h-20 mb-2 mr-1 border-2 image ${
                  idx === 0 && "hidden"
                }`}
              >
                {image && (
                  <span
                    className="delete absolute top-[-0.5] right-2 text-lg cursor-pointer z-50"
                    onClick={() => deleteImage(idx)}
                  >
                    &times;
                  </span>
                )}
                {image && (
                  <img
                    className="w-full h-full rounded"
                    src={image.url}
                    alt={image.name}
                  />
                )}
              </div>
            ))}
          </div> */}

<div className="flex flex-row justify-between gap-6 mb-8">

        {/* Second Image Selector */}
          <div
          className="flex items-center justify-center text-center mt-6 text-gray-700 rounded-[20px] bg-lightgray h-[250px] w-3/5 lg:-pb-4 "
          onClick={() => selectFiles(1)}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={(event) => onDrop(event, 1)}
          >
            {images[1] ? (
              <>
                {/* <span
                  className="delete absolute top-[-0.5] right-2 text-lg cursor-pointer z-50"
                  onClick={() => deleteImage(1)}
                >
                  &times;
                </span> */}
                <img
                  className="w-full h-full rounded-[20px]"
                  src={images[1].url}
                  alt={images[1].name}
                />
              </>
            ) : isDragging ? (
              <span className="text-lg">Drop Images here</span>
            ) : (
              <span
                className="ml-1 text-#252525 transition-opacity cursor-pointer duration-400 hover:text-white text-lg text-lightgray2"
                role="button"
              >
                Add Photo+
              </span>
            )}
            <input
              name="file"
              type="file"
              className="hidden file"
              ref={fileInputRefs[1]}
              onChange={(event) => onFileSelect(event, 1)}
            />
          </div>
          {/* <div className="container flex flex-wrap items-start justify-start w-full h-auto mt-4 overflow-y-auto">
            {images.map((image, idx) => (
              <div
                key={idx}
                className={`relative w-20 h-20 mb-2 mr-1 border-2 image ${
                  idx === 1 && "hidden"
                }`}
              >
                {image && (
                  <span
                    className="delete absolute top-[-0.5] right-2 text-lg cursor-pointer z-50"
                    onClick={() => deleteImage(idx)}
                  >
                    &times;
                  </span>
                )}
                {image && (
                  <img
                    className="w-full h-full rounded"
                    src={image.url}
                    alt={image.name}
                  />
                )}
              </div>
            ))}
          </div> */}

        <div
            className="flex items-center justify-center text-center mt-6 text-gray-700 rounded-[20px] bg-lightgray h-[320px]bg-lightgray h-[250px] w-2/5  lg:-pb-4 "
            onClick={() => selectFiles(2)}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={(event) => onDrop(event, 2)}
        >
            {images[2] ? (
                <>
                    {/* <span
                        className="delete absolute top-[-0.5] right-2 text-lg cursor-pointer z-50"
                        onClick={() => deleteImage(2)}
                    >
                        &times;
                    </span> */}
                    <img
                        className="w-full h-full rounded-[20px]" // Add the same border radius here
                        src={images[2].url}
                        alt={images[2].name}
                    />
                </>
            ) : isDragging ? (
                <span className="text-lg">Drop Images here</span>
            ) : (
                <span
                    className="ml-1 text-#252525 transition-opacity cursor-pointer duration-400 hover:text-white text-lg text-lightgray2"
                    role="button"
                >
                    Add Photo+
                </span>
            )}
            <input
                name="file"
                type="file"
                className="hidden file"
                ref={fileInputRefs[2]}
                onChange={(event) => onFileSelect(event, 2)}
            />
        </div>

          {/* <div className="container flex flex-wrap items-start justify-start w-full h-auto mt-4 overflow-y-auto">
            {images.map((image, idx) => (
              <div
                key={idx}
                className={`relative w-20 h-20 mb-2 mr-1 border-2 image ${
                  idx === 2 && "hidden"
                }`}
              >
                {image && (
                  <span
                    className="delete absolute top-[-0.5] right-2 text-lg cursor-pointer z-50"
                    onClick={() => deleteImage(idx)}
                  >
                    &times;
                  </span>
                )}
                {image && (
                  <img
                    className="w-full h-full rounded"
                    src={image.url}
                    alt={image.name}
                  />
                )}
              </div>
            ))}
          </div> */}
        </div>
        </div>
  );
}

export default SelectedImageUpload;

