import React, { useState } from "react";
import Container from "../../components/container/container";
import ImageSelector from "../../components/imageSelector";
import Viewmap from "../../components/viewmap";
import Form from "../../components/form";
import SelectedImageUpload from "@/components/selectedimageupdate";
import axios from 'axios';
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "@/components/footer";

const Editdashboard = () => {
const navigation =  useNavigate();
const location = useLocation();
const [lat, lon] = location.state ? [location.state.lat, location.state.lon] : [null, null];


  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    distance: '',
    propertyOwnerDetails: { email: '', mobile: '' },
    availableRooms: ''
});
const [images, setImages] = useState([]);


const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const formDataWithImages = new FormData();
        formDataWithImages.append('title', formData.title);
        formDataWithImages.append('description', formData.description);
        formDataWithImages.append('price', formData.price);
        formDataWithImages.append('coordinates[latitude]', lat);
        formDataWithImages.append('coordinates[longitude]', lon);
        formDataWithImages.append('distance', formData.distance);
        formDataWithImages.append('propertyOwnerDetails[email]', formData.propertyOwnerDetails.email);
        formDataWithImages.append('propertyOwnerDetails[mobile]', formData.propertyOwnerDetails.mobile);
        formDataWithImages.append('availableRooms', formData.availableRooms);
        images.forEach((image) => {
            formDataWithImages.append('files', image, image.name);
            
        });


        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZWFkNmRhODE4ZTUyYzllNzM4MmY2YSIsInJvbGUiOiJwcm9wZXJ0eU93bmVyIiwiaWF0IjoxNzA5OTMyMzU0fQ.K_oOFYTMwkad90eB_aQxAd6uZZRfnENV-b9QOI_8Jco';

        await axios.post('http://localhost:3000/api/add-property', formDataWithImages, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        });

        alert('Property added successfully');
        // Reset form data and images after successful submission
        setFormData({
            title: '',
            description: '',
            price: '',
            coordinates: { latitude: '', longitude: '' },
            distance: '',
            propertyOwnerDetails: { email: '', mobile: '' },
            availableRooms: ''
        });
        setImages([]);
    } catch (error) {
        console.error(error);
        alert('An error occurred while adding the property');
    }
};
  return (
    <>
    <Container>
      <h1 className="text-[25px] font-semibold text-black1 mb-10">Property Registration Form</h1>  
      <div className="flex flex-row ">
      
        <div className="flex-grow">
          <div className="flex flex-col justify-between gap-6">
            <div className="flex flex-row gap-6">
              <SelectedImageUpload 
                // handleImageChange={handleImageChange}
                setImagess={setImages}
              />
              <Viewmap 
                onClick={() => navigation('/viewMap')}
              />
            </div>
          
          <h1>{lat}</h1>
          <h1>{lon}</h1>
            <Form 
              Submit={handleSubmit}
              formData={formData}
              setFormData={setFormData}

            />
          </div>
        </div>
      </div>
    </Container>
    </>
  );
};

export default Editdashboard;
