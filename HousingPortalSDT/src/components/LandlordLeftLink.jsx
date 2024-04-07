import React from 'react'
import LeftIcon1 from '../assets/homes.png'

const LandlordLeftLink = (props) => {
    const {name, onclick, icon} = props;

  return (
        <button tabindex="0" className='w-[90%] h-[70px] mt-[15px] bg-[#fff] rounded-[15px] border border-[#dfdfdf] flex flex-row justify-between items-center ease-in-out duration-300 hover:bg-[#e8e8e8] focus:bg-[#C7C7EC] cursor-pointer' onclick={() => {console.log("Hello")}}>
            <div className='ml-[15px] flex items-center justify-center'>
                <img src = {icon} className='h-[30px]'/>
            </div>
            <div className='flex items-center justify-center'>
                <p>{name}</p>
            </div>
            <div className='w-[15%] h-[100%] flex items-center justify-center'>
                <p>{'>'}</p>
            </div>
        </button>
  )
}

export default LandlordLeftLink;
