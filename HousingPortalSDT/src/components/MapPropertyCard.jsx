import React, { useState, useEffect } from 'react';

function MapPropertyCard({ pTitle, pLat, pLon, isInMap , mainImage, onClick}) {
    const [address, setAddress] = useState(null);

    useEffect(() => {
        const getAddress = async () => {
        try {
            const response = await fetch(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${pLat},${pLon}&key= ${import.meta.env.VITE_MAP_API_KEY}`
            );
            const data = await response.json();
            if (data.results && data.results.length > 0) {
            setAddress(data.results[0].formatted_address);
            }
        } catch (error) {
            console.error("Error fetching address:", error);
        }
        };

        getAddress();
    }, [pLat, pLon]);

    return (
        <div className='w-[100%] h-[100%]  flex flex-col items-center mb-[50px] cursor-pointer hover:bg-[#e6e6e6]'
            onClick={onClick}
        >
        <div className="border w-[100%] h-[200px] rounded-[10px] ">
            <img src={`../../../public/uploads/${mainImage}`} alt="" className="w-[100%] h-[100%] rounded-[10px] " />
        </div>
        <div className=" w-[100%] h-[30%] flex border-b-2">
            <div className="w-[70%] flex flex-col justify-center">
            <p className="text-black text-[15px] font-semibold">{pTitle}</p>
            {address && <p className="text-black text-[10px] font-poppins">{address}</p>}
            {!address && <p className="text-black text-[10px] font-poppins">Loading address...</p>}
            </div>
            <div className=" w-[30%] flex justify-end items-center px-[10px] ">
                {
                    isInMap === true ? (
                    
                            <h1 className="text-[#24CC2B] text-[12px]">Approved</h1>
                        
                    ) : (
                        <h1 className="text-[red] text-[12px]">Pending</h1>
                    )
                }
        
            {/* <button className="text-[white] bg-[#4E4E4E] hover:bg-[#757575]  text-[10px] px-[10px] py-[6px] rounded-[5px]">Request</button> */}
            </div>
        </div>
        </div>
    );
}

export default MapPropertyCard;
