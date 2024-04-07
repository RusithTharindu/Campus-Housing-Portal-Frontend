import { useEffect, useState } from 'react';
import Container from '../../components/container/container';
import EmptyRegistration from '../../components/EmptyRegistration'
import GloButton from '../../components/GloButton';
import PropertyCard from '../../components/PropertyCard'
import profileicon from '../../assets/profile.png'
import homes from '../../assets/homes.png'
import Header from '../../components/Header';
import LandlordLeftLink from '../../components/LandlordLeftLink';
import LeftIcon1 from '../../assets/homes.png'
import LeftIcon2 from '../../assets/profile.png'
import PropertyDisplay from '../../components/PropertyDisplay';
import RequestDisplay from '../../components/RequestDisplay';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';



const Landlord = () => {
    const [studentVal , setStudentVal] = useState("");
    const location = useLocation();
    const [properties, setProperties] = useState([]);
    const { role, email } = location.state || {};

    const navigator = useNavigate();

    const getMyProperties = async () => {
        try {
            const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MTBlNGFlY2U3OWY2NjQwYmM4YjQ0MiIsInJvbGUiOiJwcm9wZXJ0eU93bmVyIiwiaWF0IjoxNzEyMzk3MDg5fQ.zaStkP0MCKJxlVDdIPK9iXX1xJb8f7m8Su2XTcQyKP0';
    
            const response = await axios.get('http://localhost:3000/api/get-my-properties', {
                params: {
                    email: 'fernando123@gmail.com'
                },
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
    
            setProperties(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching properties:', error);
        }
    }
    
    useEffect(() => {
        getMyProperties();
    },[]);
    


    return(
        <div className='h-[90vh] w-[100vw] flex justify-center items-center'>
            <div className='h-[100%] w-[90%] flex flex-row rounded-[10px] px-[25px] items-center justify-center'>
                <div className='h-[90%] w-[22%] flex flex-col items-center border-2 border-[#dfdfdf] rounded-[20px] mr-[5px] bg-[#F4F4FA]' >
                    {/*For left links */}
                    <p className='mt-[20px] mb-[20px] font-semibold text-[25px]'>Property Management</p>
                    <LandlordLeftLink name= "Student Requests" onclick icon = {LeftIcon2}/>
                    <LandlordLeftLink name= "Registered Properties" onclick icon = {LeftIcon1}/>
                    <GloButton name = "Register a Property" onclick = {() => {navigator('/editdashboard')}} />
                    
                </div>
                <div className='h-[90%] w-[70%] p-[5px] border-2 border-[#dfdfdf] rounded-[20px] flex flex-col justify-center items-center ml-[5px] bg-[#F4F4FA]'>
                    {/* <PropertyDisplay properties = {properties}/> */}
                    {/* <RequestDisplay/> */}
                    <EmptyRegistration/>
                </div>
            </div>
        </div>
    )
}

export default Landlord;