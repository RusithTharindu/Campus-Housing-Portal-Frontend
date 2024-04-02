import { useState } from 'react';
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

const Landlord = () => {
    const [studentVal , setStudentVal] = useState("");

    return(
        <div className='h-[90vh] w-[100vw] flex justify-center items-center'>
            <div className='h-[800px] w-[1400px] border-2 border-[#dfdfdf] flex flex-row rounded-[10px] '>
                <div className='h-[100%] w-[30%] flex flex-col items-center border-r-2 border-r-[#dfdfdf] rounded-[20px]' >
                    {/*For left links */}
                    <p className='mt-[20px] mb-[20px] font-semibold text-[25px]'>Property Management</p>
                    <LandlordLeftLink name= "Student Requests" onclick icon = {LeftIcon2}/>
                    <LandlordLeftLink name= "Registered Properties" onclick icon = {LeftIcon1}/>
                    <GloButton name = "Register a Property"  />
                </div>
                <div className='h-[100%] w-[70%] p-[5px] flex flex-col justify-center items-center'>
                    {/* <PropertyDisplay/> */}
                    <RequestDisplay/>
                </div>
            </div>
        </div>
    )
}

export default Landlord;