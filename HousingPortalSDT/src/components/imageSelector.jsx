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

import React, {useState, useRef} from "react";

function DragDropImageloader() {
  const [images, setImages] = useState([]);
  const [isDragging, setIsDragging] = useState(false);  
  const fileInputRef = useRef(null);

  function selectFiles(){
    fileInputRef.current.click();
  }

  return (
    <div className="p-4 shadow-md rounded overflow-hidden cursor-pointer" onClick={selectFiles}>
      <div className="h-36 rounded border-2 border-dashed text-gray-700 bg-gray-700 flex items-center justify-center mt-4">
        {isDragging ? (
          <span className="text-lg">Drop Images here</span>
        ) : (
          <>
            Drag & Drop image here or {" "}
            <span className="text-black ml-1 cursor-pointer transition-opacity duration-400 hover:opacity-60" role="button">Browse</span>
          </>
        )}
        <input name="file" type="file" className="hidden" multiple ref={fileInputRef} />
      </div>
      <div className="w-full h-auto flex items-start justify-start flex-wrap overflow-y-auto mt-4">
        <div className="w-18 mr-1 h-18 relative mb-2">
          <span className="absolute top-[-0.5] right-2 text-lg cursor-pointer z-50">&times;</span>
          <img className="w-full h-full rounded" src="" alt="" />
        </div>
      </div>
      <button type="button" className="w-full bg-gray-700 text-white rounded py-2 mt-4 cursor-pointer">Upload</button>
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
//     <div className="photouploadcard flex flex-col w-full border border-red-600   ">
      {/* <div className="card1 bg-lightGrey flex  items-center justify-center h-[200px] md:h-[350px] rounded-[32px] mt-4">
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
            className="w-full h-full object-cover"
          /> */}
        {/* <p className=" text-white text-xl">Add photo+</p>
      </div> */} 
{/* 
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
    className=" hidden"
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

  <p className="text-white text-xl " onClick={selectFiles}>Add photo+</p>
</div> */}
      {/* <div className="flex flex-col md:flex-row justify-between text-center items-center md:max-w-full h-[400px] md:h-[220px] gap-4 mt-4 mb-0 lg:mb-4">
        <div className="card2 bg-lightGrey w-full h-full flex items-center justify-center  rounded-[20px]"> */}
          {/* <img
              src="path-to-your-image"
              alt=""
              className="w-full h-full object-cover"
            /> */}
          {/* <p className=" text-white text-lg">Add photo+</p>
        </div>
        <div className="card3 bg-lightGrey w-full h-full flex items-center justify-center  rounded-[20px]"> */}
          {/* <img
              src="path-to-your-image"
              alt="Add Photo+"
              className="w-full h-full object-cover"
            /> */}
          {/* <p className=" text-white text-lg">Add photo+</p>
        </div>
      </div> */}
    {/* </div>
  );
};

export default imageSelector; */}
