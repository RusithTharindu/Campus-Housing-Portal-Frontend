import React, { useState } from 'react';

function Form() {
    const [hostelName, setHostelName] = useState('');
    const [price, setPrice] = useState('');
    const [availableRooms, setAvailableRooms] = useState('');
    const [description, setDescription] = useState('');
    const [contactName, setContactName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit} className='gap-4'>
            <label className="text-#252525 font-medium text-[36px] mt-4 border border-red-600 ">
                Add a hostel name
                <input type="text" value={hostelName} onChange={(e) => setHostelName(e.target.value)} style={{ border: 'none' }} />
            </label>
            <br />
            <label className='flex items-center gap-2 text-center'>
                <p className='text-grey2 font-medium text-[24px]'>Add a price</p>
                <p className='text-grey2  font-medium text-[16px]'>per person</p>

                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
            </label>
            <br />
            <label>
                Available Rooms:
                <input type="text" value={availableRooms} onChange={(e) => setAvailableRooms(e.target.value)} />
            </label>
            <br />
            <label>
                Description:
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
            </label>
            <br />
            <label>
                Contact Name:
                <input type="text" value={contactName} onChange={(e) => setContactName(e.target.value)} />
            </label>
            <br />
            <label>
                Contact Number:
                <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
            </label>
            <br />
            <label>
                Email:
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;