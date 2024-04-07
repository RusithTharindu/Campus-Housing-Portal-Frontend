import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import BedIcon from "../assets/bed.svg";
import NavigateIcon from "../assets/navigate-sharp.svg";
import Container from "../components/container/container";
import imagemap from "../assets/map.png";
import ViewMap from '@/components/viewmap';




function ViewProperty() {
        

    const location = useLocation();
    const { userRole, email } = location.state || {};

    const { propertyId } = useParams();

    const [propertyView, setPropertyView] = useState(null);
    const role = userRole;

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
    const updateMapStatus = async () => {
        try {
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTBlNGFlY2U3OWY2NjQwYmM4YjQ0MiIsInJvbGUiOiJwcm9wZXJ0eU93bmVyIiwiaWF0IjoxNzEyMzk3MDg5fQ.zaStkP0MCKJxlVDdIPK9iXX1xJb8f7m8Su2XTcQyKP0';
            
            // Fetch existing property data
            const existingPropertyResponse = await axios.get(`http://localhost:3000/api/get-property/${propertyId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            const existingPropertyData = existingPropertyResponse.data;
    
            // Merge existing data with new data
            const updatedData = {
                ...existingPropertyData,
                isInMap: true
            };
    
            // Send PUT request with updated data
            const response = await axios.put(`http://localhost:3000/api/update-property/${propertyId}`, 
                updatedData,
                { headers: { 'Authorization': `Bearer ${token}` } } 
            );
            alert('Property published');
            console.log(response.data);
            fetchProperty();
        } catch (error) {
            console.error('Error updating map status:', error);
        }
    }

    const rejectProperty = async () => {
        try {
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTBlNGFlY2U3OWY2NjQwYmM4YjQ0MiIsInJvbGUiOiJwcm9wZXJ0eU93bmVyIiwiaWF0IjoxNzEyMzk2MDk1fQ.06X6faI_mlOowCWlcg8_o1sUEDGYEyiVr5f1c3nirek'; 
            const response = await axios.delete(`http://localhost:3000/api/delete-property/${propertyId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            alert('Property rejected');
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching property:', error);
        }
    }

    
    const makeRequest = async () => {
        try {
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTBmYTgwZWNlMzYzOGIzODI4MzNhNCIsInJvbGUiOiJzdHVkZW50IiwiaWF0IjoxNzEyNDE3NDQxfQ.eVPheLaJYkpP0vwr_vmTia-UABHfzOK3LNm21zxMvzE'; 
        
            const response = await axios.put(
                'http://localhost:3000/api/make-request',
                {   
                    propertyId: propertyId,
                    studentEmail: email 
                }, 
                {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            alert('Rental request submitted successfully');
            console.log(response.data);
        } catch (error) {
            console.error('Error making request:', error);
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

                                    <div className='flex flex-col w-[50%] rounded-lg'>
                                        <div className='flex flex-col items-center justify-center w-full h-full mt-0 mb- viewMapcard lg:mt-4 rounded-[20px]' style={{backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${imagemap})`, backgroundSize: 'cover'}}>
                                        <button 
                                            onClick 
                                            className='bg-black1 text-white flex py-4 px-6 rounded-[5px] justify-center items-center  hover:text-white hover:border hover:border-white hover:shadow-lg'>
                                        View Map
                                        </button>
                                    </div>
    
                                </div>

                                {/* <div className='border border-black w-[50%] mt-3'>
                                <img src={imagemap} className="w-[100%] h-[100%] "/>
                                <button className=''>View Map</button>
                                </div> */}
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
                                                propertyView.isInMap === false ? (
                                                    <div className=' bg-[#ffffff] w-[100%] h-[100px] shadow-xl rounded-[15px] mt-10 flex flex-row justify-around items-center'>
                                                        <h1 className='text-[12px]'>Published status</h1>
                                                        <div className='w-[55%]  flex justify-around'>
                                                            <button onClick={() => {updateMapStatus()}} className=' bg-[#24CC2B]  text-[#fff] text-[12px] h-[35px] rounded-[10px] w-[45%]'>Publish</button>
                                                            <button onClick={() => {rejectProperty()}} className=' bg-[#EA2929]  text-[#fff] text-[12px] h-[35px] rounded-[10px] w-[45%]'>Reject</button>
                                                        </div>
                                                    </div>
                                                                                                            
                                                ) : null
                                            ) : (
                                            
                                                    propertyView.isRented === true ? (
                                                        <button onClick = {makeRequest} className='border w-[100%] bg-[#4F4F4F] mt-10 text-[#fff] text-[14px] h-[45px] rounded-[10px] flex justify-center items-center cursor-pointer '>
                                                            Request a Reserve
                                                            
                                                        </button>
                                                    ) : (
                                                        <div className='border bg-[#AEAEAE] mt-10 text-[#fff] text-[14px] h-[45px] rounded-[10px] flex justify-center items-center cursor-not-allowed'>
                                                            <h1>Closed</h1>
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