const viewmap = () => {
  return (
    <div className="flex flex-col w-full ">
      <div className="flex flex-col items-center justify-center w-full h-full mt-0 border border-green-600 mb- viewMapcard lg:mt-4">
        <button className="bg-black1 text-white flex py-4 px-6 rounded-[5px] justify-center items-center hover:bg-lightGrey hover:text-white hover:border hover:border-white">
          view Map
        </button>
      </div>
      <div className="flex flex-row items-end justify-end text-end">
        <p className="mt-4 text-grey1">location</p>
      </div>
    </div>
  );
};

export default viewmap;
