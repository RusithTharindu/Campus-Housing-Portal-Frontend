import React from "react";

const imageSelector = () => {
  return (
    <div className="photouploadcard flex flex-col w-full border border-red-600   ">
      <div className="card1 bg-lightGrey flex  items-center justify-center h-[200px] md:h-[350px] rounded-[32px] mt-4">
        {/* <img
            src="path-to-your-image"
            alt="Add Photo+"
            className="w-full h-full object-cover"
          /> */}
        <p className=" text-white text-xl">Add photo+</p>
      </div>
      <div className="flex flex-col md:flex-row justify-between text-center items-center md:max-w-full h-[400px] md:h-[220px] gap-4 mt-4 mb-0 lg:mb-4">
        <div className="card2 bg-lightGrey w-full h-full flex items-center justify-center  rounded-[20px]">
          {/* <img
              src="path-to-your-image"
              alt=""
              className="w-full h-full object-cover"
            /> */}
          <p className=" text-white text-lg">Add photo+</p>
        </div>
        <div className="card3 bg-lightGrey w-full h-full flex items-center justify-center  rounded-[20px]">
          {/* <img
              src="path-to-your-image"
              alt="Add Photo+"
              className="w-full h-full object-cover"
            /> */}
          <p className=" text-white text-lg">Add photo+</p>
        </div>
      </div>
    </div>
  );
};

export default imageSelector;
