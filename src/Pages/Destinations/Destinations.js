import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Destinations = () => {
    const [destinations,setDestinations] =useState([])
    useEffect(()=>{
        fetch('https://frightful-vault-19585.herokuapp.com/destinations')
            .then(res=>res.json())
            .then(data=>setDestinations(data))
    },[])
   
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap">

            {
               destinations.map(destination=>
               
                <div className="p-10"  key={destination._id}> 
                    <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full h-56" src={destination.picture} alt="Mountain" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-3xl mb-2">{destination.name}</div>
                        <div className="font-bold text-xl mb-2">{destination.time}</div>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <Link to={`/destination/${destination._id}`}>View All Places<button className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" >Booking</button></Link>
                    </div>
                    </div>
              </div>
               
            )}
        </div>
    );
};

export default Destinations;