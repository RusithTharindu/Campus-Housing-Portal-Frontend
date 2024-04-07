import React from 'react';
import GloButton from '../../components/GloButton';
import profileicon from '../../assets/profile.png'
import LandlordLeftLink from '../../components/LandlordLeftLink';
import articlepng from '../../assets/article.png'
import userspng from '../../assets/users.png'
import RequestDisplay from '../../components/RequestDisplay';
import ArticleCardDisplay from '../../components/adminComponents/ArticleCardDisplay'
import UserDisplay from '../../components/adminComponents/UserDisplay'

const Admin = () => {
    return(
        <div className='h-[90vh] w-[100vw] flex justify-center items-center'>
            <div className='h-[100%] w-[90%] flex flex-row items-center justify-center rounded-[10px] px-[25px] '>
                <div className='h-[90%] w-[22%] flex flex-col items-center border-2 border-[#dfdfdf] rounded-[20px] mr-[5px] bg-[#F4F4FA]' >
                    {/*For left links */}
                    <p className='mt-[20px] mb-[20px] font-semibold text-[25px]'> Hostel Administration</p>
                    <LandlordLeftLink name= "User Management" onclick icon = {userspng}/>
                    <LandlordLeftLink name= "Articles" onclick icon = {articlepng}/>
                </div>
                <div className='h-[90%] w-[70%] p-[5px] flex flex-col justify-center items-center border-2 border-[#dfdfdf] rounded-[20px] ml-[5px] bg-[#F4F4FA]'>
                    <UserDisplay/>
                    {/* <ArticleCardDisplay/> */}
                </div>
            </div>
        </div>
    )
}

export default Admin;

