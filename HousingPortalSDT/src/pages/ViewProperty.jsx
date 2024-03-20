import React from 'react'

function ViewProperty() {
  return (
    <div className='h-screen w-[80%] ml-[10%] mt-[10%] mb-[20%]'>
        <div className=' h-[50%] w-[100%] grid grid-cols-2 divide-[50%]'>
            <div className='h-[100%]  '></div>
            <div className='h-[100%] '></div>
        </div>
        <div className=' h-[50%] w-[100%] grid grid-cols-2 divide-[50%]'>
            <div className='h-[100%] '>
                <h1 className='text-xl font-bold'>Hostel 1</h1>
                <p className="pt-4 text-base">A hostel is a lower-priced inn of sorts that offers basic, shared accommodations. Typically, a hostel features a large room with separate beds, a shared bathroom, and a communal kitchen. Some hostels have private rooms, but the lower-cost ones generally offer bunk beds.</p>
            </div>
            <div className='h-[100%] flex justify-end items-center '>
                <div className="border-black border w-[300px] h-[400px] flex flex-col rounded-[20px] mr-[5%] ml-[5%] "></div>
            </div>
        </div>
    </div>
  )
}

export default ViewProperty