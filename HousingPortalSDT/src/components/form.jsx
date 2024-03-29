import React, { useState } from 'react';

function Form() {
    const [hostelName, setHostelName] = useState('');
    const [price, setPrice] = useState('');
    const [availableRooms, setAvailableRooms] = useState('');
    const [description, setDescription] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');
    const [isInputFilled, setInputFilled] = useState(false);

    const handleInputChange = (e) => {
        setPrice(e.target.value);
        setInputFilled(e.target.value !== '');
    };

  

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className='gap-4'>
            <label className=" mt-4 ">
                <input type="text" value={hostelName} onChange={(e) => setHostelName(e.target.value)} placeholder="Add a hostel name" style={{ border: 'none', width: '100%', colorAdjust: 'black', height: '50px', paddingLeft: '10px' }} className='font-medium text-[36px] bg-white1 text-black1' />
            </label>
            <br />
            <label className='flex items-center gap-2 text-center mt-5'>
                <input type="text" value={price} onChange={handleInputChange} placeholder="Add a price" style={{ width: '10%', border: 'none', height: '50px', color: isInputFilled ? 'gray' : 'lightgray', paddingLeft: '10px' }} className='font-medium text-[24px] bg-white1 font-red-300' />                <p className=' text-grey3  font-medium text-[16px]'>: per person</p>

            </label>
            <br />
            <label className='flex gap-5 mt-0 items-center'>
                <p className=' text-black1  font-medium text-[16px]'>Available rooms : </p>
                <input type="text" value={availableRooms} onChange={(e) => setAvailableRooms(e.target.value)} style={{ width: '6%', color: 'black', height: '40px', paddingLeft: '10px' }} className=' bg-lightgray1 text-[16px] rounded-[5px]' />
            </label>
            <br />
            <label className=' flex mt-3'>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Add a description' style={{ width: '100%', color: 'black', height: '160px', paddingTop: '15px', paddingLeft: '20px', fontSize: '16px' }} className='bg-lightgray1 rounded-[10px]' />            </label>
            <br />
            <h2 className=' mt-[60px] text-[24px]'>Contact info</h2>
            <hr className='mt-2' style={{ borderColor: 'lightgray' }} />            <br />
            <div className=' flex flex-col'>
            <label className=' mb-2'>
                <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} placeholder="Enter your name" style={{ paddingLeft: "15px", width: '100%', color: 'black', height: '40px' }} className='bg-lightgray1 rounded-[5px]' />
            </label>
            <br />
            <label  className=' mb-2'>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your contact number" style={{ width: '80%', color: 'black', height: '40px' }} className='bg-lightgray1 rounded-[5px]' />
            </label>

            <label  className=' mb-2'>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" style={{ width: '80%', color: 'black', height: '40px' }} className='bg-lightgray1 rounded-[5px] ' />
            </label>
            <br />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;