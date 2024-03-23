import React from 'react'
import NavigateIcon from "../assets/navigate-sharp.svg";
import BedIcon from "../assets/bed.svg";
import Container from "../components/container/container";
import ImageSelector from "../components/imageSelector";
import Viewmap from "../components/viewmap";

function ViewProperty() {
  return (
    <Container>
        <div className='flex flex-row'>
            <div className='hidden lg:flex lg:w-[300px] lg:-ml-40 mr-20 border'>
                
            </div>
            <div className='flex-grow'>
                <div className='flex flex-col justify-between gap-4'>
                    <div className='flex flex-row'>
                        <ImageSelector />
                        <Viewmap />
                    </div>
                    <div className='flex flex-row'>
                        <div className='w-[50%]'>
                            <h1 className='text-xl font-bold'>Hostel 1</h1>
                            <p className="pt-4 text-base">A hostel is a lower-priced inn of sorts that offers basic, shared accommodations. Typically, a hostel features a large room with separate beds, a shared bathroom, and a communal kitchen. Some hostels have private rooms, but the lower-cost ones generally offer bunk beds.</p>
                        </div>
                        <div className="border-black border w-[300px] h-[420px] rounded-[20px] ml-auto">
                            <div className='p-7 text-left'>
                                <h1 className='font-semibold text-gray-500 text-lg'>LKR 12,000 per person</h1>
                                <br/>
                                <img src={NavigateIcon} className='h-[25px] mb-4'  />
                                <img src={BedIcon} className='h-[25px]'  />

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