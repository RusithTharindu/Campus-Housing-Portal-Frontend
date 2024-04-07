import React, { useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader, Autocomplete } from '@react-google-maps/api';
import DragLocation from '../../../public/markerImages/Location.png';
import GreenLocation from '../../../public/markerImages/greenLocation.png';
import { useNavigate } from 'react-router-dom';


function ViewGoogleMap() {
    const navigation = useNavigate();

    const [lat, setLat] = useState(6.824265618550028);
    const [lon, setLon] = useState(80.04001213226317);


    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
        
    });

    const handleDragEnd = (e) => {
        setLat(e.latLng.lat());
        setLon(e.latLng.lng());
    }

    const handleSetLocation = () => {
        alert(`Latitude: ${lat} Longitude: ${lon}`);
        navigation('/editdashboard', { state: { lat, lon } });
        
    };

    return (
        <div className="h-screen bg-[#d6d6d6]  w-[100%] relative ">
        
            
            {
                isLoaded ? (
                    <div className='absolute z-0 w-screen h-[90%] '>
                            <GoogleMap
                                mapContainerStyle={{ width: '100%', height: '100%' }}
                                center={{ lat: lat, lng: lon }}
                                zoom={15}
                            >
                                    <Marker 
                                    position={{ lat: lat, lng: lon }} 
                                    draggable={true}
                                    onDragEnd={(e) => {
                                        handleDragEnd(e);
                                    }}
                                    options={
                                        {
                                            icon: DragLocation,
                                            scaledSize: new window.google.maps.Size(40, 40),
                                            
                                            animation: window.google.maps.Animation.DROP,
                                            

                                        }
                                    }
                                    
                                />
                                    <Marker 
                                        position={{ lat: 6.8213, lng: 80.0416 }} 
                                        icon={{
                                            url: GreenLocation, 
                                            scaledSize: new window.google.maps.Size(30, 40) 
                                        }}
                                        options={{
                                            animation: window.google.maps.Animation.BOUNCE
                                        }}
                                    />

                            </GoogleMap>
                            <div className=' absolute z-1 w-1/5 h-1/3 m-2 bg-[#4E4E4E] rounded-[10px] p-[20px] bottom-0 flex flex-col justify-between'>
                                <div className=" w-[100%]">
                                    <h1 className='text-[#fff] font-[10px] text-xl'>Set Your Hostel Location</h1>
                                    <p className='text-[#fff] text-[11px] font-light'>Please Drag and drop the Red Marker to your hostel Location.</p>
                                    
                                </div>
            
                                <div className='w-[100%] h-20 mt-10 flex justify-center items-end shadow-xl'>
                                    <button
                                        onClick={handleSetLocation}
                                        className=' w-[100%] h-9 rounded-[9px] bg-[#4541FD] text-[#fff] hover:bg-[#6866fb] transition-colors duration-200  '>
                                        Set Location
                                    </button>
                                </div>
            
                            </div>
                    </div>        
                    
                ) : <></>
            }

          
        </div>
    )
}

export default ViewGoogleMap
