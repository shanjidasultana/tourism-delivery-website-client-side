import React from 'react';
import {FcGlobe,FcBookmark} from 'react-icons/fc';
import {BsCameraFill} from 'react-icons/bs';
import {HiCurrencyDollar} from 'react-icons/hi';
import {RiTeamFill} from 'react-icons/ri';
import {GiRoyalLove} from 'react-icons/gi';
const ChoseUs = () => {
    return (
        <div className="items-center">
            <h1 className="text-3xl font-bold my-9 text-gray-500">Why Choose Us ?</h1>
       
            <div class="grid lg:grid-cols-3  sm:grid-cols-1 gap-4 my-10">
                
                <div>
                    <div>
                            <div  className="flex">
                                <FcGlobe className="text-5xl mx-4"/>
                                <h2 className="text-4xl font-bold text-pink-500">Diverse Destinations</h2>
                            </div>
                            <div className="flex">
                            
                               <HiCurrencyDollar className="text-5xl mx-4"/>
                                <h2 className="text-4xl font-bold text-pink-500">Value for Money</h2>
                            </div>
                    </div>
                </div>

                <div>
                    <div>
                            <div  className="flex">
                                <BsCameraFill className="text-5xl mx-4"/>
                                <h2 className="text-4xl font-bold text-pink-500">Beautiful Places</h2>
                            </div>
                            <div className="flex">
                            
                                <FcBookmark className="text-5xl mx-4"/>
                                <h2 className="text-4xl font-bold text-pink-500">Support Team</h2>
                            </div>
                           
                    </div>
                </div>
                    <div>
                           
                       <div>
                       <div className="flex">
                            
                            <GiRoyalLove className="text-5xl mx-4"/>
                            <h2 className="text-4xl font-bold text-pink-500">Passionate Travel</h2>
                        </div>
                        <div className="flex">
                        
                            <RiTeamFill className="text-5xl mx-4"/>
                            <h2 className="text-4xl font-bold text-pink-500">Best Team Members</h2>
                        </div>
                       </div>
                    </div>
                </div>
        </div>
       
    );
};

export default ChoseUs;