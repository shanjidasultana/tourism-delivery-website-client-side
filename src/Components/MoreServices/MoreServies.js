import React from 'react';
import {GiCycling}  from 'react-icons/gi'
import {FaFly,FaSwimmer,FaHotel}  from 'react-icons/fa'
import {GiMountainClimbing,GiWaveSurfer,GiCampingTent,GiCampfire}  from 'react-icons/gi'
import {MdSkateboarding,MdSecurity}  from 'react-icons/md';


const MoreServies = () => {
    return (
        <div>
            <h3 className="text-center text-green-600  mb-5 text-4xl mt-10 font-bold">Our Travel Services and Adventures </h3>
                <p className="text-yellow-400 mb-10  text-2xl ">Enjoy your trip with free mind </p>
        <div className='grid lg:grid-cols-4 md:grid-cols-3'>
            <div className="ml-4">
                <GiCycling className="text-9xl mx-auto mt-9 text-yellow-600"/>
                <div>
                    <h2 className="text-4xl font-bold text-yellow-900">Cycling</h2>
                    <p className="text-blue-700 text-1xl font-bold mx-10 my-5">We arange  many events like cycling ,sports facilities  for make  travel more enjoyable.</p>
                </div>
            </div>
            <div className="ml-4">
                <FaFly className="text-9xl mx-auto mt-9 text-pink-500"/>
                <div>
                    <h2 className="text-4xl font-bold text-yellow-900">Parashoot Flying </h2>
                    <p className="text-blue-700 text-1xl font-bold mx-10 my-5">We have Parashoot Flying facilities  for make  travel more memorable....</p>
                </div>
            </div>
            <div className="ml-4">
                <GiMountainClimbing className="text-9xl mx-auto mt-9 text-green-400"/>
                <div>
                    <h2 className="text-4xl font-bold text-yellow-900">Mountain Climbing</h2>
                    <p className="text-blue-700 text-1xl font-bold mx-10 my-5">We arange MountainClimbing for make  travel more enjoyable....</p>
                </div>
            </div>
            <div className="ml-4">
                <FaSwimmer className="text-9xl mx-auto mt-9 text-gray-500"/>
                <div>
                    <h2 className="text-4xl font-bold text-yellow-900">Swimming</h2>
                    <p className="text-blue-700 text-1xl font-bold mx-10 my-5">We have diving and Swimming facilities  and safety guide  for make  travel more easer...</p>
                </div>
            </div>
            <div className="ml-4">
                <MdSkateboarding className="text-9xl mx-auto mt-9  text-pink-900"/>
                <div>
                    <h2 className="text-4xl font-bold text-yellow-900">Skate Boarding</h2>
                    <p className="text-blue-700 text-1xl font-bold mx-10 my-5">We have Skate Boarding  facilities   for make  travel more enjoyable...</p>
                </div>
            </div>
            <div className="ml-4">
                <GiWaveSurfer className="text-9xl mx-auto mt-9 text-blue-300"/>
                <div>
                    <h2 className="text-4xl font-bold text-yellow-900">Wave Surfering</h2>
                    <p className="text-blue-700 text-1xl font-bold mx-10 my-5">We have WaveSurfer facilities for make  travel more beautiful...</p>
                </div>
            </div>
            <div className="ml-4">
                <GiCampfire className="text-9xl mx-auto mt-9 text-red-400"/>
                <div>
                    <h2 className="text-4xl font-bold text-yellow-900">Camp Fireing</h2>
                    <p className="text-blue-700 text-1xl font-bold mx-10 my-5">We arrage Camp Fireing on night  make  travel more memorable...</p>
                </div>
            </div>
            <div className="ml-4">
                <GiCampingTent className="text-9xl mx-auto mt-9 text-blue-300"/>
                <div>
                    <h2 className="text-4xl font-bold text-yellow-900">Tent Camping</h2>
                    <p className="text-blue-700 text-1xl font-bold mx-10 my-5">We have Tent Camping facilities  for make  travel more natural...</p>
                </div>
            </div>
            <div className="ml-4">
                <FaHotel className="text-9xl mx-auto mt-9 text-red-300"/>
                <div>
                    <h2 className="text-4xl font-bold text-yellow-900">Best Hotels</h2>
                    <p className="text-blue-700 text-1xl font-bold mx-10 my-5">We have Best  five star hotels ,good foods facilities, bycle facilities  for make  travel more easer</p>
                </div>
            </div>
            <div className="ml-4">
                <MdSecurity className="text-9xl mx-auto mt-9 text-green-500"/>
                <div>
                    <h2 className="text-4xl font-bold text-yellow-900">Best Security</h2>
                    <p className="text-blue-700 text-1xl font-bold mx-10 my-5">We have Best security protection for make  travel more enjoyable...</p>
                </div>
            </div>
        </div>
    </div> 
    );
};

export default MoreServies;