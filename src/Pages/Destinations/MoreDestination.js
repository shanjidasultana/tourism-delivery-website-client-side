import React from 'react';

const MoreDestination = ({destination}) => {
    const {name,picture,price,rating,time}=destination;
    return (
                <div className="p-10"> 
                            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <img className="w-full h-56" src={picture} alt="Mountain"/>
                            <div className="px-6 py-4">
                                <div className="font-bold text-3xl mb-2">{name}</div>
                                <div className="font-bold text-xl mb-2">{time}</div>
                                <div className="font-bold text-xl mb-2">${price}</div>
                                <h6>Rating:{rating}</h6>
                            </div>
                        
                            </div>
         
                    </div>
    );
};

export default MoreDestination;