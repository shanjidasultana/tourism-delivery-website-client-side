import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();
    console.log(user);

    useEffect(() => {
        const url = `http://localhost:8000/bookingList/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [id]);

    // Update User
    const handleNameChange = e => {
        const updatedName = e.target.value;
        const updatedUser = { fullName: updatedName,date: user.date, address: user.address,price: user.price, phoneNo: user.phoneNo, email: user.email };
        setUser(updatedUser);
    }

    const handleEmailChange = e => {
        const updatedEmail = e.target.value;
        const updatedUser = { fullName: user.fullName,date: user.date, address: user.address,price: user.price, phoneNo: user.phoneNo, email: updatedEmail }
        setUser(updatedUser);
    }
    const handleDateChange = e => {
        const updatedDate = e.target.value;
        const updatedUser = { fullName: user.fullName, email: user.email , address: user.address,price: user.price, phoneNo: user.phoneNo, date: updatedDate }
        setUser(updatedUser);
    }
    const handleAddressChange = e => {
        const updatedAddress = e.target.value;
        const updatedUser = { fullName: user.fullName, email: user.email ,date: user.date,phoneNo: user.phoneNo,price: user.price, address: updatedAddress }
        setUser(updatedUser);
    }
    const handlePriceChange = e => {
        const updatedPrice = e.target.value;
        const updatedUser = { fullName: user.fullName, email: user.email ,date: user.date, address: user.address,phoneNo: user.phoneNo,price: updatedPrice }
        setUser(updatedUser);
    }
    const handlephoneNoChange = e => {
        const updatedphoneNo = e.target.value;
        const updatedUser = { fullName: user.fullName, email: user.email ,date: user.date, address: user.address,price: user.price, phoneNo: updatedphoneNo }
        setUser(updatedUser);
    }
    const handleUpdateUser = e => {
        
        const url = `http://localhost:8000/bookingList/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Update Successful');
                    setUser({});
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <div>
            <h2>Update: {user.fullName}</h2>
            <p><small>{user.email}</small></p>
            <p><small>{user.date}</small></p>
            <p><small>{user.phoneNo}</small></p>
            <p><small>{user.price}</small></p>
            <p><small>{user.address}</small></p>
            <form onSubmit={handleUpdateUser}  className="flex flex-col w-1/2 my-12 mx-auto">
                <input className="p-4 border-b "type="text" onChange={handleNameChange} value={user.fullName || '' } required/>
                <input className="p-4 border-b "type="email" onChange={handleEmailChange} value={user.email || ''}required/>
                <input className="p-4 border-b "type="date" onChange={handleDateChange} value={user.date || '' }required/>
                <input className="p-4 border-b "type="number" onChange={handlePriceChange} value={user.price || ''} required/>
                <input className="p-4 border-b "type="text" onChange={handleAddressChange} value={user.address || '' } required/>
                <input className="p-4 border-b "type="number" onChange={handlephoneNoChange} value={user.phoneNo|| ''} required/>
                <input className="p-4 border-b "type="submit" value="Update" />
            </form>
            {/* <form={handleUpdateUser} className="w-full max-w-sm">
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        email
                    </label>
                    </div>
                    <div className="md:w-2/3">
                    <input onChange={handleEmailChange} value={user.email || ''}  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="email" />
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                        name
                    </label>
                    </div>
                    <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************"/>
                    </div>
                </div>
                <div className="md:flex md:items-center mb-6">
                    <div className="md:w-1/3"></div>
                    <label className="md:w-2/3 block text-gray-500 font-bold">
                    <input className="mr-2 leading-tight" type="checkbox"/>
                    <span className="text-sm">
                        Send me your newsletter!
                    </span>
                    </label>
                </div>
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                    <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Sign Up
                    </button>
                    </div>
                </div>
            </form=> */}
        </div>
    );
};

export default UpdateUser;