import { useEffect, useState } from 'react';
import refImage from '../assets/refimage.jpg';
import LocationIcon from '../assets/LocationIcon.svg';
import TextArrow from '../assets/textArrow.svg';
import axios from 'axios';


const PropertyCard = (props) => {
    const [isChecked, setIsChecked] = useState(props.isRented);


    // const updateMapStatus = async () => {
    //     try {
    //         const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTBlNGFlY2U3OWY2NjQwYmM4YjQ0MiIsInJvbGUiOiJwcm9wZXJ0eU93bmVyIiwiaWF0IjoxNzEyMzk3MDg5fQ.zaStkP0MCKJxlVDdIPK9iXX1xJb8f7m8Su2XTcQyKP0';
            
    //         // Fetch existing property data
    //         const existingPropertyResponse = await axios.get(`http://localhost:3000/api/get-property/${propertyId}`, {
    //             headers: {
    //                 'Authorization': `Bearer ${token}`
    //             }
    //         });
    //         const existingPropertyData = existingPropertyResponse.data;
    
    //         // Merge existing data with new data
    //         const updatedData = {
    //             ...existingPropertyData,
    //             isInMap: false
    //         };
    
    //         // Send PUT request with updated data
    //         const response = await axios.put(`http://localhost:3000/api/update-property/${propertyId}`, 
    //             updatedData,
    //             { headers: { 'Authorization': `Bearer ${token}` } } 
    //         );
    //         console.log(response.data);
    //         fetchProperty();
    //     } catch (error) {
    //         console.error('Error updating map status:', error);
    //     }
    // }

    // useEffect(() => {
    //     updateMapStatus();
    // }, []);




    
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        console.log(event.target.checked);
    };

    return (
        <div className="bg-[#e8e8e8] w-[90%] h-[150px] p-[20px] m-[10px] rounded-[15px] flex flex-row">
            <div className="w-[30%] h-[100%] flex items-center justify-center">
                {/* Image Container */}
                <img src={refImage} alt="" className='h-[100%] w-[100%] rounded-[10px]' />
            </div>
            <div className="w-[50%] h-[100%] pl-[20px] pt-[5px]">
                {/* Content */}
                <p className='text-[20px] font-semibold'>{props.name}</p>
                <p className='text-[15px] font-light flex items-center mb-[10px]'>
                    <img src={LocationIcon} alt="" className='h-[20px] mr-[5px]' />
                    {props.location}
                </p>
                {/* Checkbox */}
                <div className='flex flex-row items-center'>
                    <input
                        type="checkbox"
                        name="propertycheck"
                        className='h-[25px]'
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <p className='ml-[5px] text-[15px]'>Display This Property</p>
                </div>
            </div>
            <div className="w-[20%] h-[100%] text-[13px] pl-[15px] pt-[10px] text-[#0057FF] ">
                {/* View Details Button */}
                <a href='#' className='flex items-center hover:underline '>View Details <img src={TextArrow} alt="" className='h-[8px] w-[10px] ml-[2px]' /></a>
            </div>
        </div>
    );
};

export default PropertyCard;
