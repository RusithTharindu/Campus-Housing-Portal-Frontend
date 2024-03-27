import React, { useState } from 'react'

function MapPropertyCard() {


    return (
    <div className='w-[100%] h-[40%] flex flex-col items-center mb-4 cursor-pointer'>
        <div className="border w-[100%] h-[200px] rounded-[10px] ">
            <img src="../../../public/markerImages/hostel.png" alt="" className="w-[100%] h-[100%]" />        

        </div>
            <div className=" w-[100%] h-[30%] flex border-b-2">
                <div className="w-[70%] flex flex-col justify-center">
                    <p className="text-black text-[15px] font-semibold">Property Name</p>
                    <p className="text-black text-[10px] font-poppins">Property location</p>
                </div>

                <div className=" w-[30%] flex justify-end items-center px-[10px] ">
                    <h1 className="text-[red] text-[12px]">Pending</h1>  
                    {/* <button className="text-[white] bg-[#4E4E4E] hover:bg-[#757575]  text-[10px] px-[10px] py-[6px] rounded-[5px]">Request</button> */}
                </div>
            </div>
    </div>  
    )
}

export default MapPropertyCard
