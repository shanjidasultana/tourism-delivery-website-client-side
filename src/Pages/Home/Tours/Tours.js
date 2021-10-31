import React, { useEffect, useState } from 'react';
import Tour from './Tour';

const Tours = () => {
    const [tours,setTours] =useState([]);
    useEffect(()=>{
        fetch('https://frightful-vault-19585.herokuapp.com/tours')
            .then(res=>res.json())
            .then(data=>setTours(data))
    },[])
    return (
        <div>
            <h1 className="my-9 text-pink-700 text-4xl font-bold ">Our Tour Spots</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap">
            
            {
                tours.map(tour=> <Tour
                 key={tour._id}
                 tour={tour}
                ></Tour>

                )
            }
        </div>
        </div>
    );
};

export default Tours;