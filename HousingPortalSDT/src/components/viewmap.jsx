import React from "react";


const viewmap = () => {
  return (
    <div className=" flex flex-col w-full ">
      <div className="viewMapcard border flex flex-col justify-center items-center w-full border-green-600 h-[300px] mt-0 lg:mt-4 mb-4 lg:h-[585px]">
        <button className="bg-black1 text-white flex py-4 px-6 rounded-[5px] justify-center items-center hover:bg-lightGrey hover:text-white hover:border hover:border-white">
          view Map
        </button>
      </div>
      <div className=" flex flex-row items-end text-end justify-end ">
        <p className=" text-grey1">location</p>
      </div>
    </div>
  );
};

export default viewmap;
