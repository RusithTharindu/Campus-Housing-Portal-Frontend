import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  Autocomplete,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import DragLocation from "../../../public/markerImages/Location.png";
import GreenLocation from "../../../public/markerImages/greenLocation.png";
import MapPropertyCard from "@/components/MapPropertyCard";
import axios from "axios";
import { cn } from "@/lib/utils";
import { useNavigate, useLocation } from "react-router-dom";

function ViewAllProperties() {
  const navigation = useNavigate();
  const location = useLocation();
  const { role, email } = location.state || {};

  const [properties, setProperties] = useState([]);
  const [directions, setDirections] = useState(null);
  const [response, setResponse] = useState(null);
  const [getId, setGetId] = useState(null);
  const [propertyView, setPropertyView] = useState(null);

  const userRole = role;

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_MAP_API_KEY,
  });

  const fetchProperties = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZWFkM2MzODM3Yzk0MjUwMzRlMWMxZiIsInJvbGUiOiJ3YXJkZW4iLCJpYXQiOjE3MTA0MzMzNzF9.NpFl2l5C61DP2TZ_4RQMVPK2xOplOkC1fuwfZC2Nf_M";

      const response = await axios.get(
        "http://localhost:3000/api/get-all-properties",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProperties(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };
  const fetchApprovedProperties = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZWMxMjMzODk5OWMxZTRhNWZjYjc5ZiIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNzEyMzQwOTM5fQ.yRfBg5xKoVLa99Lr5P2A-bFKdBuX1oYWxQnt0fOeZ8M";

      const response = await axios.get(
        "http://localhost:3000/api/get-all-approved-properties",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setProperties(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  const fetchProperty = async () => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZWFkM2MzODM3Yzk0MjUwMzRlMWMxZiIsInJvbGUiOiJ3YXJkZW4iLCJpYXQiOjE3MTA0MzMzNzF9.NpFl2l5C61DP2TZ_4RQMVPK2xOplOkC1fuwfZC2Nf_M"; // Replace with your actual token
      const response = await axios.get(
        `http://localhost:3000/api/get-property/${getId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPropertyView(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching property:", error);
    }
  };

  const fetchDirections = () => {
    const directionsService = new window.google.maps.DirectionsService();

    directionsService.route(
      {
        origin: { lat: 6.8213, lng: 80.0416 },
        destination: response,
        travelMode: "DRIVING",
      },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);
        } else {
          console.log(`Directions failed due to ${status}`);
        }
      }
    );
  };

  useEffect(() => {
    if (isLoaded) {
      fetchDirections();
    }

    fetchProperty();
  }, [isLoaded, response]);

  useEffect(() => {
    if (userRole === "student") {
      fetchApprovedProperties();
    } else {
      fetchProperties();
    }
  }, []);

  return (
    <div className="absolute z-0 w-screen h-[90%] ">
      {isLoaded ? (
        <div className="absolute z-0 w-screen h-[100%]">
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={{ lat: 6.824265618550028, lng: 80.04001213226317 }}
            zoom={15}
          >
            {properties.map((property) => (
              <Marker
                position={{
                  lat: property.coordinates.latitude,
                  lng: property.coordinates.longitude,
                }}
                icon={{
                  url: DragLocation,
                  scaledSize: new window.google.maps.Size(40, 40),
                }}
                options={{
                  animation: window.google.maps.Animation.BOUNCE,
                }}
                onClick={() => {
                  setResponse({
                    lat: property.coordinates.latitude,
                    lng: property.coordinates.longitude,
                  });
                  fetchDirections();
                  setGetId(property._id);
                  console.log(property._id);
                }}
              />
            ))}

            <Marker
              position={{ lat: 6.8213, lng: 80.0416 }}
              icon={{
                url: GreenLocation,
                scaledSize: new window.google.maps.Size(30, 40),
              }}
              options={{
                animation: window.google.maps.Animation.DROP,
              }}
            />

            {directions && <DirectionsRenderer directions={directions} />}
          </GoogleMap>
          <div className="absolute z-1 w-1/4 h-[90%] m-2 bg-[#fafafa] p-[10px] bottom-0 overflow-scroll flex items-center flex-col">
            {properties.map((property) => (
              <MapPropertyCard
                pTitle={property.title}
                pLon={property.coordinates.longitude}
                pLat={property.coordinates.latitude}
                isInMap={property.isInMap}
                mainImage={property.image1}
                onClick={() => {
                  setPropertyView(property);
                  navigation(`/property/${property._id}`, {
                    state: { userRole, email },
                  });
                }}
              />
            ))}
          </div>
          {propertyView !== null && (
            <>
              <div className="absolute z-1 w-1/4 h-[70vh] m-2 bg-[#fff] p-[10px] bottom-3 right-3 rounded-[12px] flex flex-col justify-center items-center shadow-xl ">
                <img
                  src={`../../public/uploads/${propertyView.image1}`}
                  alt=""
                  className="w-full h-[50%] rounded-[12px]"
                />
                <div className=" bg-[#fff] w-[95%] h-[46%] ">
                  <h1 className="text-[#000] text-[20px] font-bold p-[10px]">
                    {propertyView.title}
                  </h1>
                  <div className="flex items-center justify-start ">
                    <p className="text-[#000] text-[15px] font-poppins p-[10px]">
                      Rs.30000
                    </p>
                    <span className="text-[#bbb] text-[15px]">
                      {"( Per Person )"}
                    </span>
                  </div>
                  <div className="flex items-center justify-start ">
                    <p className="text-[#000] text-[15px] font-poppins p-[10px]">
                      {propertyView.availableRooms} Rooms Available
                    </p>
                  </div>
                  <div className="flex flex-col items-end justify-center ">
                    <p className="text-[#4879C2] text-[15px] font-poppins p-[10px]">
                      Published On
                    </p>
                    <span className="text-[#bbb] text-[15px]">
                      {propertyView.date}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    navigation(`/property/${propertyView._id}`, {
                      state: { userRole, email },
                    });
                  }}
                  className="w-[100%] bg-[#4541FD] text-[#fff]  h-[40px] rounded-[10px] hover:bg-[#4441fdd4] ease-in-out duration-200"
                >
                  See More
                </button>
              </div>
            </>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ViewAllProperties;
