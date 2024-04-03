import React from 'react'
import NavigateIcon from "../assets/navigate-sharp.svg";
import BedIcon from "../assets/bed.svg";
import Container from "../components/container/container";
import HostelImg from "../assets/hostel.jpg";
import HostelImg1 from "../assets/hostel (1).jpg";
import HostelImg2 from "../assets/hostel (2).jpg";

function ViewProperty() {
  return (
    <Container>
        <div className='flex flex-row'>
            <div className='hidden lg:flex lg:w-[300px] lg:-ml-40 mr-20 border'>
                
            </div>
            <div className='flex-grow'>
                <div className='flex flex-col justify-between'>
                    <div className='flex flex-row gap-4'>
                        <div className='w-[50%] h-[50%] mt-3'>
                            <img src={HostelImg} className="flex items-center justify-center text-center rounded-[30px] h-[320px] w-full mb-3"/>
                            <div className='flex flex-row justify-between gap-[3%] mb-4'>
                                <img src={HostelImg1} className="flex items-center justify-center text-center rounded-[20px] h-[250px] w-[48%] "/>
                                <img src={HostelImg2} className="flex items-center justify-center text-center rounded-[20px] h-[250px] w-[48%]"/>
                            </div>
                        </div>
                        <div className='border border-black w-[50%] mt-3'>
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='w-[50%] mt-10'>
                            <h1 className='text-xl font-bold'>Hostel 1</h1>
                            <p className="pt-4 text-base">A hostel is a lower-priced inn of sorts that offers basic, shared accommodations. Typically, a hostel features a large room with separate beds, a shared bathroom, and a communal kitchen. Some hostels have private rooms, but the lower-cost ones generally offer bunk beds.</p>
                        </div>
                        <div className="w-[300px] h-[387px] rounded-[20px] ml-auto mt-4 mb-10 shadow-2xl">
                            <div className='p-7 text-left'>
                                <h1 className='font-semibold text-gray-500 text-[22px]'>LKR 12,000 per person</h1>
                                <br/>
                                <div className='flex items-center'>
                                    <img src={NavigateIcon} className='h-[25px] mb-4 mr-4'  />
                                    <h1 className='h-[25px] mb-4'>20KM</h1>
                                </div>
                                <div className='flex items-center'>
                                    <img src={BedIcon} className='h-[25px] mr-4'  />
                                    <h1 className='h-[25px] '>Available rooms : 2 </h1>
                                </div>
                                    <h1 className='text-[25px] text-underline mt-12'>Contact Info</h1>
                                <div className=' border-t-2 border-[#6b6969] mt-2 '>
                                    <h1 className='mt-4 mb-2'>Owner: Mr. Jhones</h1>
                                    <h1 className='mb-2'>+942457300100</h1>
                                    <h1 className='mb-2'>luxuyhostels@gmail.com</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </Container>
  )
}

export default ViewProperty