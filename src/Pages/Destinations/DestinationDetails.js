import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import MoreDestination from './MoreDestination';

const DestinationDetails = () => {
    const {id} =useParams()
    const [destinationDetails,setDestinationsDetails]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:8000/destinations/${id}`)
        .then(res=>res.json())
        .then(data=>setDestinationsDetails(data.places))
    },[id])
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap">  
          {
            destinationDetails.map(destination=> <MoreDestination destination={destination} key={destination.id}></MoreDestination>)
                
        }
        </div>
    );
};

export default DestinationDetails;