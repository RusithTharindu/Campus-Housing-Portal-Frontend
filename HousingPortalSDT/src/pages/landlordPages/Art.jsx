import React from "react";


const Art = () => {
  return (
    <div className="p-4 " >
      <div className="flex space-x-2 ml-[7%] pl-12 pt-8">
        <div className="hover:text-blue-500 text-sm">
          <button>dashboard</button>
        </div>
        <div className=" text-grey1"><h1>{">"}</h1></div>
        <div className="text-blue-500 text-sm hover:text-black">
          <button>All users</button>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-4 flex space-x-2 ml-[7%] pl-12 pt-8">Articles</h1>

      <div className="flex  flex-row justify-end mr-[15%]">
      <div className=" items-end">
      <img className="hover:bg-[#eeeeee] ease-in-out duration-300 rounded-r-sm" src="src\assets\assets\pen.png"  />
      </div>
      <div>
        <button >
      <img className="hover:bg-[#eeeeee] ease-in-out duration-300 rounded-r-sm" src="src\assets\assets\trash.png"  />
      </button>
      </div>
      </div>

      <div className="space-y-4 mx-auto border-solid shadow-2xl rounded-[15px] m-5 p-5 pt w-[70%] border-1 mb-[5%] hover:bg-[#eeeeee] ease-in-out duration-300">
        <p className="mb-4 text-sm">Nov 10, 2024</p>
        
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">The Article Title</h2>
        </div>
        <div className="flex justify-between mr-[10%] font-normal text-[15px]">
          <p className="">
            fbsoduf nfdoishnfo fdsjfnsdljfns nfdljskknfsdlfsd
            fdsmnfklsdnfp fmsd;klfgmdrfpig dgdf fbsoduf fbsoduf fbsoduf fdsmnfklsdnfp fmsd;klfgmdrfpig dgdf fbsoduf fbsoduf fbsoduf
          </p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-sm font-semi-bold">Published By:</p>
          <p className="text-sm">Mr. Dean</p>
        </div>
       
      </div>

      <div className="flex  flex-row justify-end mr-[15%]">
      <div className=" items-end">
      <img className="hover:bg-[#eeeeee] ease-in-out duration-300 rounded-r-sm" src="src\assets\assets\pen.png"  />
      </div>
      <div>
        <button >
      <img className="hover:bg-[#eeeeee] ease-in-out duration-300 rounded-r-sm" src="src\assets\assets\trash.png"  />
      </button>
      </div>
      </div>

      <div className="space-y-4 mx-auto border-solid shadow-2xl rounded-[15px] m-5 p-5 pt w-[70%] border-1 mb-[5%] hover:bg-[#eeeeee] ease-in-out duration-300">
        <p className="mb-4 text-sm">Nov 10, 2024</p>
        
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">The Article Title</h2>
        </div>
        <div className="flex justify-between mr-[10%] font-normal text-[15px]">
          <p className="">
            fbsoduf nfdoishnfo fdsjfnsdljfns nfdljskknfsdlfsd
            fdsmnfklsdnfp fmsd;klfgmdrfpig dgdf fbsoduf fbsoduf fbsoduf fdsmnfklsdnfp fmsd;klfgmdrfpig dgdf fbsoduf fbsoduf fbsoduf
          </p>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-sm font-semi-bold">Published By:</p>
          <p className="text-sm">Mr. Dean</p>
        </div>
       
      </div>


    </div>
  );
};

export default Art;
