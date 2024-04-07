import React, { useState, useRef } from "react";

function DragDropImageloader() {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  function selectFiles() {
    fileInputRef.current.click();
  }

  function onFileSelect(event) {
    const files = event.target.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }

  function deleteImage(index) {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
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

  function onDrop(event) {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files;
    if (files.length === 0) return;
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!images.some((e) => e.name === files[i].name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: files[i].name,
            url: URL.createObjectURL(files[i]),
          },
        ]);
      }
    }
  }

  return (
    <div className="justify-between w-full h-full border">
      <div
        className="flex items-center justify-center text-center mt-4 text-gray-700 rounded-[30px] bg-lightgray h-[320px] w-full"
        onClick={selectFiles}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        {isDragging ? (
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
          multiple
          ref={fileInputRef}
          onChange={onFileSelect}
        />
      </div>

      <div className="flex flex-row justify-between gap-4 mb-8">
        {/* 2nd image imageSelector  */}
        <div
          className="flex items-center justify-center text-center mt-4 text-gray-700 rounded-[20px] bg-lightgray h-[250px] w-3/5 lg:-pb-4 "
          onClick={selectFiles}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          {isDragging ? (
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
            multiple
            ref={fileInputRef}
            onChange={onFileSelect}
          />
        </div>

        {/* 3rd image slector */}
        <div
          className="flex items-center justify-center text-center mt-4 text-gray-700 rounded-[20px] bg-lightgray h-[250px] w-3/5 lg:-pb-4 "
          onClick={selectFiles}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          {isDragging ? (
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
            multiple
            ref={fileInputRef}
            onChange={onFileSelect}
          />
        </div>
      </div>

      {/* image display of the 1st image box */}
      <div className="container flex flex-wrap items-start justify-start w-full h-auto mt-4 overflow-y-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-20 h-20 mb-2 mr-1 border-2 image"
          >
            <span
              className="delete absolute top-[-0.5] right-2 text-lg cursor-pointer z-50"
              onClick={() => deleteImage(index)}
            >
              &times;
            </span>
            <img
              className="w-full h-full rounded"
              src={image.url}
              alt={image.name}
            />
          </div>
        ))}
      </div>

      {/* <button
        type="button"
        className="bg-blue-600 text-white flex py-4 px-12 rounded-[5px] items-center mt-10"
      >
        Upload
      </button> */}
    </div>
  );
}

export default DragDropImageloader;

// import React, { useState, useRef} from "react";

// function imageSelector (){
//   const [images, setImages] = useState([]);
//   const [isDragging, setIsDragging] = useState(false);
//   const fileInputRef = useRef(null);

//   function selectFiles(){
//     fileInputRef.current.click();
//   }

//   function onFileSelect(event){
//     const files = event.target.files;

//   }
//   return (
//     <div className="flex flex-col w-full border border-red-600 photouploadcard ">
{
  /* <div className="card1 bg-lightGrey flex  items-center justify-center h-[200px] md:h-[350px] rounded-[32px] mt-4">
      <input name="file" type="file" className="file"></input>

<div className="container">
  <div classname='image'>
  <span className=" delete" >&times;</span>
  </div>
  <img src="" alt=""/>
</div>
<button type="button">Upload</button>

        {/* <img
            src="path-to-your-image"
            alt="Add Photo+"
            className="object-cover w-full h-full"
          /> */
}
{
  /* <p className="text-xl text-white ">Add photo+</p>
      </div> */
}
{
  /* 
<div 
  className="drag-area card1 bg-lightGrey flex items-center justify-center h-[200px] md:h-[350px] rounded-[32px] mt-4 cursor-pointer" 
  // onClick={() => document.getElementById('fileInput').click()}
>
  {
    isDragging ? (
      <span className=" select"> Drop images here</span>
    ) : (
      <>
      Drag & Drop Images here {""}
      <span className=" select" role="button" onClick={selectFiles}></span>
      </>
    )
  }
  <input 
    id="fileInput" 
    name="file" 
    type="file"
    className="hidden "
    multiple ref={fileInputRef}
    onChange={onFileSelect}
  >
    </input>

  <div className="container">
    <div className='image'>
      <span className="delete">&times;</span>
    </div>
    <img src="" alt=""/>
  </div>

  <button type="button" className="hidden">Upload</button>

  <p className="text-xl text-white " onClick={selectFiles}>Add photo+</p>
</div> */
}
{
  /* <div className="flex flex-col md:flex-row justify-between text-center items-center md:max-w-full h-[400px] md:h-[220px] gap-4 mt-4 mb-0 lg:mb-4">
        <div className="card2 bg-lightGrey w-full h-full flex items-center justify-center  rounded-[20px]"> */
}
{
  /* <img
              src="path-to-your-image"
              alt=""
              className="object-cover w-full h-full"
            /> */
}
{
  /* <p className="text-lg text-white ">Add photo+</p>
        </div>
        <div className="card3 bg-lightGrey w-full h-full flex items-center justify-center  rounded-[20px]"> */
}
{
  /* <img
              src="path-to-your-image"
              alt="Add Photo+"
              className="object-cover w-full h-full"
            /> */
}
{
  /* <p className="text-lg text-white ">Add photo+</p>
        </div>
      </div> */
}
{
  /* </div>
  );
};

export default imageSelector; */
}

// import "../../src/App.css";
// import React, {useState, useRef} from "react";

// function DragDropImageloader() {
//   const [images, setImages] = useState([]);
//   const [isDragging, setIsDragging] = useState(false);
//   const fileInputRef = useRef(null);

//   function selectFiles(){
//     fileInputRef.current.click();

//   }
//   return (
//     <div className="card" onClick={selectFiles}>
//       <div className="drag-area">
//         {isDragging ? (
//           <span className="seelct">Drop Images here</span>
//         ) : (
//            <>
//            Drag & Drop image here or {" "}
//         <span className=" select" role="button" >Browse</span>
//            </>
// )}

//         <input name="file" type="file" className="file" multiple ref={fileInputRef} ></input>
//       </div>
//       <div className="container">
//         <div className="image">
//           <span className=" delete">&times;</span>
//         </div>
//         <img src="" alt="" />
//       </div>
//       <button type="button">Upload</button>
//     </div>
//   );
// }

// export default DragDropImageloader;
