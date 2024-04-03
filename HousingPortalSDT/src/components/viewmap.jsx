import React from 'react';
import mapImage from '../assets/map.png'; 

const ViewMap = ({onClick}) => {

  return (
    <div className='flex flex-col w-full rounded-lg'>
      <div className='flex flex-col items-center justify-center w-full h-full mt-0 mb- viewMapcard lg:mt-4 rounded-[20px]' style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${mapImage})`, backgroundSize: 'cover'}}>
        <button 
            onClick = {onClick}
            className='bg-black1 text-white flex py-4 px-6 rounded-[5px] justify-center items-center  hover:text-white hover:border hover:border-white hover:shadow-lg'>
          View Map
        </button>
      </div>
      <div className='flex flex-row items-end justify-end text-end'>
        <p className="mt-4 text-grey1">location</p>
      </div>
    </div>
  );
};

export default ViewMap;