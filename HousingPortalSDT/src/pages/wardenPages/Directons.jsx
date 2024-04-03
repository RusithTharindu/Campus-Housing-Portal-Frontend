import React, { useState, useEffect } from 'react';
import { GoogleMap, Marker, DirectionsService, DirectionsRenderer, useJsApiLoader } from '@react-google-maps/api';

function Directions() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
  });

  // Define initial coordinates for the map and markers
  const [directions, setDirections] = useState(null);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState({
    lat:  6.844036853460386, // Example latitude
    lng:   80.00482154998778 // Example longitude
  });

  const mapContainerStyle = {
    width: '100%',
    height: '70vh'
  };

  const center = {
    lat: 6.824265618550028, // Example latitude
    lng: 80.04001213226317 // Example longitude
  };

  const marker1Position = {
    lat: 6.824265618550028, // Example latitude
    lng: 80.04001213226317 // Example longitude
  };

  const marker3Position = {
    lat:  6.8133143890791965, // Example latitude
    lng:   80.03636432800292 // Example longitude
  };

  const locations = [
    {
      lat: 6.824265618550028,
      lng: 80.04001213226317
    },
    {
      lat: 6.844036853460386,
      lng: 80.00482154998778
    },
    {
      lat: 6.8133143890791965,
      lng: 80.03636432800292
    }
  ];

  useEffect(() => {
    if (isLoaded) {
      fetchDirections();
    }
  }, [isLoaded, response]); // Include response in dependencies array to trigger useEffect when response changes

  const fetchDirections = () => {
    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: marker1Position,
        destination: response,
        travelMode: 'DRIVING'
      },
      (result, status) => {
        if (status === 'OK') {
          setDirections(result);
        } else {
          setError(`Directions failed due to ${status}`);
        }
      }
    );
  };

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
      >
        {/* Display markers */}
        { directions &&
        locations.map((location, index) => (
          <Marker 
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
            onClick={() => {
              console.log('You clicked marker ' + index); 
              // Update response state with new coordinates
              setResponse({ lat: location.lat, lng: location.lng });
            }}
          />
        ))}

        {/* Directions */}
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </div>
  ) : (
    <div>Loading Google Maps...</div>
  );
}

export default Directions;
