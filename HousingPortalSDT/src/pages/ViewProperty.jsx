import React, { useEffect, useState } from 'react'
import NavigateIcon from "../assets/navigate-sharp.svg";
import BedIcon from "../assets/bed.svg";
import Container from "../components/container/container";
import HostelImg from "../assets/hostel.jpg";
import HostelImg1 from "../assets/hostel (1).jpg";
import HostelImg2 from "../assets/hostel (2).jpg";
import { useParams } from 'react-router-dom';
import axios from 'axios';


function ViewProperty() {

    const { propertyId } = useParams();

    const [propertyView, setPropertyView] = useState(null);
    const role = 'warden';

    const fetchProperty = async () => {
        try {
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZWFkM2MzODM3Yzk0MjUwMzRlMWMxZiIsInJvbGUiOiJ3YXJkZW4iLCJpYXQiOjE3MTA0MzMzNzF9.NpFl2l5C61DP2TZ_4RQMVPK2xOplOkC1fuwfZC2Nf_M'; // Replace with your actual token
            const response = await axios.get(`http://localhost:3000/api/get-property/${propertyId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            setPropertyView(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching property:', error);
        }
    }

    useEffect(() => {
        fetchProperty();
    
    },[]);

  return (
    <Container>
        <div className='flex flex-row'>
           
            <div className='flex-grow'>

            {
                propertyView && (
                
                        <div className='flex flex-col justify-between'>
                            <div className='flex flex-row gap-4'>
                                <div className='w-[50%] h-[50%] mt-3'>
                                    <img src={`../../public/uploads/${propertyView.image1}`} className="flex items-center justify-center text-center rounded-[30px] h-[320px] w-full mb-3"/>
                                    <div className='flex flex-row justify-between gap-[3%] mb-4'>
                                        <img src={`../../public/uploads/${propertyView.image2}`} className="flex items-center justify-center text-center rounded-[20px] h-[250px] w-[48%] "/>
                                        <img src={`../../public/uploads/${propertyView.image3}`} className="flex items-center justify-center text-center rounded-[20px] h-[250px] w-[48%]"/>
                                    </div>
                                </div>
                                <div className='border border-black w-[50%] mt-3'>
                                </div>
                            </div>
                            <div className='flex flex-row'>
                                <div className='w-[800px] mt-10  pr-10 flex flex-col flex-wrap'>
                                    <h1 className='text-xl font-bold'>{propertyView.title}</h1>
                                    <p className="pt-4 text-base">{propertyView.description}</p>
                                </div>
                                <div className="w-[360px] h-auto rounded-[20px] ml-auto mt-4 mb-10 shadow-2xl">
                                    <div className='text-left px-[20px] py-[20px]'>
                                        <h1 className='font-semibold text-gray-500 text-[22px]'>LKR {propertyView.price}</h1>
                                        <br/>
                                        <div className='flex items-center'>
                                            <img src={NavigateIcon} className='h-[25px] mb-4 mr-4'  />
                                            <h1 className='h-[25px] mb-4'>20KM</h1>
                                        </div>
                                        <div className='flex items-center'>
                                            <img src={BedIcon} className='h-[25px] mr-4'  />
                                            <h1 className='h-[25px] '>Available rooms : {propertyView.availableRooms} </h1>
                                        </div>
                                            <h1 className='text-[25px] text-underline mt-12'>Contact Info</h1>
                                        <div className=' border-t-2 border-[#6b6969] mt-2 '><br />
                                            <h1 className='mb-2'>{propertyView.propertyOwnerDetails.mobile}</h1>
                                            <h1 className='mb-2'>{propertyView.propertyOwnerDetails.email}</h1>
                                        </div>

                                        {
                                            role === 'warden' ? (
                                                <div className=' bg-[#ffffff] w-[100%] h-[100px] shadow-xl rounded-[15px] mt-10 flex flex-row justify-around items-center'>
                                                    <h1 className='text-[12px]'>Published status</h1>
                                                    <div className='w-[55%]  flex justify-around'>
                                                        <button className=' bg-[#24CC2B]  text-[#fff] text-[12px] h-[35px] rounded-[10px] w-[45%]'>Publish</button>
                                                        <button className=' bg-[#EA2929]  text-[#fff] text-[12px] h-[35px] rounded-[10px] w-[45%]'>Reject</button>
                                                    </div>
                                                </div>
                                            ) : (
                                            
                                                    propertyView.isRented === true ? (
                                                        <div className='border bg-[#4F4F4F] mt-10 text-[#fff] text-[14px] h-[45px] rounded-[10px] flex justify-center items-center '>
                                                            <h1>Request a Reserve</h1>
                                                        </div>
                                                    ) : (
                                                        <div className='border bg-[#AEAEAE] mt-10 text-[#fff] text-[14px] h-[45px] rounded-[10px] flex justify-center items-center '>
                                                            <h1>Reserved</h1>
                                                        </div>
                                                    )
                                                
                                            )
                                        }

                                
        
                                        
                                    
                                        
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                )
            }
                
                
                
            </div>
        </div>
    </Container>
  )
}

export default ViewProperty