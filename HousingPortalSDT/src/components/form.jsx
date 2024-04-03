import React, { useState } from 'react';

function Form({Submit, formData, setFormData}) {
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
        setFormData({ ...formData, price: e.target.value });
        setInputFilled(e.target.value !== '');
    };



    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={Submit} className='gap-4 mt-[60px]'>
            <label className="mt-4 ">
                <input type="text" value={hostelName} onChange={(e) => {
                    setHostelName(e.target.value)
                    setFormData({ ...formData, title: e.target.value })
                    }} placeholder="Add a hostel name" style={{ border: 'none', width: '100%', colorAdjust: 'black', height: '50px' }} className='font-medium  text-[24px] lg:text-[36px] bg-white1 text-black1' />
            </label>
            <br />
            <label className='flex items-center gap-2 mt-5 text-center'>
                <input type="number" value={price} onChange={handleInputChange} placeholder="Add a price" style={{ width: '10%', border: 'none', height: '50px', color: isInputFilled ? 'gray' : 'lightgray' }} className='font-medium text-[24px] bg-white1 font-red-300' />                <p className=' text-grey3  font-medium text-[16px]'>: per person</p>

            </label>
            <br />
            <label className='flex items-center justify-between gap-5 mt-0'>
                <p className='flex flex-row text-black1 font-medium text-[16px] whitespace-nowrap'>Available rooms :</p>
                <input type="number" value={availableRooms} onChange={(e) => {
                    setAvailableRooms(e.target.value)
                    setFormData({ ...formData, availableRooms: e.target.value })
                    }} style={{ color: 'black', height: '40px' }} className='bg-lightgray1 text-[16px] rounded-[5px] flex sm:w-full' />
            </label>
            <br />
            <label className='flex mt-3 '>
                <textarea value={description} onChange={(e) => {
                    setDescription(e.target.value)
                    setFormData({ ...formData, description: e.target.value })
                    }} placeholder='Add a description' style={{ color: 'black', height: '160px', paddingTop: '15px', fontSize: '16px' }} className='bg-lightgray1 rounded-[10px] sm:pl-[10px] w-full' />            </label>
            <br />
            <h2 className=' mt-[60px] text-[30px]'>Contact info</h2>
            <hr className='mt-2' style={{ borderColor: 'lightgray' }} />            <br />
            <div className='flex flex-col '>
                <label className=''>
                    <input type="number" value={contactNumber} onChange={(e) => {
                        setContactNumber(e.target.value)
                        setFormData(prevState => ({
                            ...prevState,
                            propertyOwnerDetails: {
                                ...prevState.propertyOwnerDetails,
                                mobile: e.target.value
                            }
                        }));
                        }} placeholder="Enter your Contact Number" style={{ paddingLeft: "15px", width: '100%', color: 'black', height: '40px' }} className='bg-lightgray1 rounded-[5px]' />
                </label>
                <br />
                <label className='mb-6 '>
                    <input type="text" value={email} onChange={(e) => {
                    setEmail(e.target.value)
                    setFormData(prevState => ({
                        ...prevState,
                        propertyOwnerDetails: {
                            ...prevState.propertyOwnerDetails,
                            email: e.target.value
                        }
                    }));
                    }} placeholder="Enter your email" style={{  paddingLeft: "15px" , width: '100%', color: 'black', height: '40px' }} className='bg-lightgray1 rounded-[5px]' />
                </label>

        
                <br />
            </div >
            <div className='flex justify-end mt-[100px] mb-[180px]'>     <button type="submit" className="border bg-blue1 text-white px-4 py-2 rounded-[5px] ">Publish</button>    </div>
        </form>
    );
}

export default Form;