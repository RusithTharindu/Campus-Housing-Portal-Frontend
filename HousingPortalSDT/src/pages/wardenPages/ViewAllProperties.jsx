import React from 'react'
import { GoogleMap, Marker, useJsApiLoader, Autocomplete } from '@react-google-maps/api';
import DragLocation from '../../../public/markerImages/Location.png';
import GreenLocation from '../../../public/markerImages/greenLocation.png';
import MapPropertyCard from '@/components/MapPropertyCard';

function ViewAllProperties() {

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
    
});

  return (
    <div className='absolute z-0 w-screen h-screen '>
                  {
                isLoaded ? (
                    <div className='absolute z-0 w-screen h-screen'>
                            <GoogleMap
                                mapContainerStyle={{ width: '100%', height: '100%' }}
                                center={{ lat: 6.824265618550028, lng: 80.04001213226317 }}
                                zoom={15}
                            >
                    
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
                      <div className="absolute z-1 w-1/4 h-[98vh] m-2 bg-[#fafafa] p-[10px] bottom-0 overflow-scroll flex items-center flex-col" >
                        <MapPropertyCard />
                        <MapPropertyCard />
                        <MapPropertyCard />
                        <MapPropertyCard />
                        <MapPropertyCard />
                        <MapPropertyCard />
                        <MapPropertyCard />
                      
                      
                      </div>
                      
                        
                    </div>    
                        
                    
                ) : <></>
            }
    </div>
  )
}

export default ViewAllProperties
