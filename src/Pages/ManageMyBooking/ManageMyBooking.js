import React, { useEffect, useState } from 'react';
import useAuth from '../../Components/hooks/useAuth';

const ManageMyBooking = () => {
    const [myBooking,setMyBooking]=useState([]);
    const {user}=useAuth();
    const {email}=user;
    useEffect(()=>{
        fetch(`https://frightful-vault-19585.herokuapp.com/bookingList?email=${email}`)
        .then(res => res.json())
        .then(data=>setMyBooking(data))
    },[email])
    const [displays,setDisplays]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/bookingList')
        .then(res=>res.json())
        .then(data=>setDisplays(data))
    },[])

    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://frightful-vault-19585.herokuapp.com/bookingList/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = displays.filter(user => user._id !== id);
                        setDisplays(remainingUsers);
                    }
                });
        }
    }
    return (
        <div className="container flex-wrap  m-auto flex flex-col md:flex-row mb-9 items-center justify-start">
            {
                myBooking.map(booking=><div className="w-full lg:w-1/2 p-3 lg:flex-col"
                key={booking._id}>
               <div className="flex flex-col  lg:flex-row rounded lg:h-50 border">
               <img className="block w-full sm:w-24 lg:w-64 lg:h-50 flex-none bg-cover " src={booking.picture} alt=""/>
               <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                   <h2 className="text-black font-bold text-xl mb-2 leading-tight">{booking.name}</h2>
                   <h4 className="text-black font-bold text-xl mb-2 leading-tight">{booking.date}</h4>
                   <h4 className="text-black font-bold text-xl mb-2 leading-tight">{booking.price}</h4>
                   <p className="text-black font-bold  mb-2 leading-tight">{booking.email}</p>
              
                   <div className="flex mx-auto pb-2">
                    {/* <button className="text-grey-darker ml-9 ">Read more</button>
                    <Link to={`/bookings/update/${booking._id}`}><button>Update</button></Link> */}
                    <button onClick={() => handleDeleteUser(booking._id)}>X</button>                    
               </div>
               </div>
               
               </div>
           </div>)
            }
        </div>
    );
};

export default ManageMyBooking;