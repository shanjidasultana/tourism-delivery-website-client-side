import React from 'react';
import {FcGlobe,FcBookmark} from 'react-icons/fc';
import {BsCameraFill} from 'react-icons/bs';
import {HiCurrencyDollar} from 'react-icons/hi';
import {RiTeamFill} from 'react-icons/ri';
import {GiRoyalLove} from 'react-icons/gi';
import sample from '../../Video/sample.mp4';

const ChoseUs = () => {
    return (
        <div className="items-center dark:bg-slate-800">
            <h1 className="text-3xl font-bold my-9 text-gray-500">Why Choose Us ?</h1>
            <div className="grid lg:grid-cols-2 md:grid-cols-2  sm:grid-cols-1 gap-4 my-10 ">
                    <div>
                    <video className='videoTag w-screen h-90' autoPlay loop muted>
                        <source src={sample} type='video/mp4' />
                    </video>
                    </div>
                    <div className=" mx-auto">
                            <div  className="flex items-center justify-start px-2 py-1 bg-white my-3 hover:bg-gray-100 hover:shadow-lg rounded-xl  border border-neutral-200  ">
                                <FcGlobe className="text-2xl mx-4"/>
                                <h2 className="text-2xl  text-pink-500 hover:text-blue-700">Diverse Destinations</h2>
                            </div>
                            <div className="flex items-center justify-start px-2 py-1 bg-white my-3 hover:bg-gray-100 hover:shadow-lg rounded-xl  border border-neutral-200 ">
                            
                               <HiCurrencyDollar className="text-2xl mx-4 text-yellow-400"/>
                                <h2 className="text-2xl  text-pink-500  hover:text-blue-700">Value for Money</h2>
                            </div>
                            <div  className="flex items-center justify-start px-2 py-1 bg-white my-3 hover:bg-gray-100 hover:shadow-lg rounded-xl  border border-neutral-200 ">
                                <BsCameraFill className="text-2xl mx-4"/>
                                <h2 className="text-2xl  text-pink-500 hover:text-blue-700">Beautiful Places</h2>
                            </div>
                            <div className="flex items-center justify-start px-2 py-1 bg-white my-3 hover:bg-gray-100 hover:shadow-lg rounded-xl  border border-neutral-200 ">
                            
                            <FcBookmark className="text-2xl mx-4"/>
                            <h2 className="text-2xl  text-pink-500 hover:text-blue-700">Support Team</h2>
                        </div>
                        <div className="flex items-center justify-start px-2 py-1 bg-white my-3 hover:bg-gray-100 hover:shadow-lg rounded-xl  border border-neutral-200 ">
                            
                            <GiRoyalLove className="text-2xl mx-4 text-blue-400"/>
                            <h2 className="text-2xl  text-pink-500 hover:text-blue-700">Passionate Travel</h2>
                        </div>
                        <div className="flex items-center justify-start px-2 py-1 bg-white my-3 hover:bg-gray-100 hover:shadow-lg rounded-xl  border border-neutral-200 ">
                        
                            <RiTeamFill className="text-2xl mx-4 hover:text-blue-700 text-green-300"/>
                            <h2 className="text-2xl  text-pink-500 hover:text-blue-700">Best Team Members</h2>
                        </div>
                    </div>
               </div>
               <div className="py-16">
                    <div className="text-center w-full max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-semibold"> How it work </h2>
                     <span className="mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400">Keep calm & traval on </span>
                    </div>

                    <div className="mt-20 relative grid md:grid-cols-3 gap-20">
                    <img  className="hidden md:block absolute inset-x-0 top-10"src="	https://chisnghiax.com/chisfis/static/media/VectorHIW.2a56b4d0aa5690494df25bc0b2bb3bf6.svg" alt="" />
                    </div>
                    <div className="grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 mx-auto">
                    <div className="relative flex flex-col items-center max-w-xs mx-auto">
                        <div className=" mb-8  mx-auto">
                            <img  className="lg:w-72 md:w-52 w-48"  src="https://chisnghiax.com/chisfis/static/media/HIW1.bbef046fd6951afd08a7.png" alt="" />
                        </div>
                        <div className="text-center mt-auto">
                             <h3 className="text-xl font-semibold">Book & relax</h3>
                             <span className="block mt-5 text-neutral-500 dark:text-neutral-400">Let each trip be an inspirational journey, each room a peaceful space</span>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center max-w-xs mx-auto">
                        <div className="mb-8 mx-auto">
                            <img className="lg:w-56 md:w-40 w-48" src="https://chisnghiax.com/chisfis/static/media/HIW2.f68577684c76e764a351.png" alt=""  />
                        </div>
                        <div className="text-center mt-auto md:-mt-6 md:mb-12">
                             <h3 className="text-xl font-semibold">Smart checklist</h3>
                             <span className="block mt-5 text-neutral-500 dark:text-neutral-400">Let each trip be an inspirational journey, each room a peaceful space</span>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center max-w-xs mx-auto">
                        <div className=" mb-8  mx-auto">
                            <img  className="lg:w-72 md:w-60 w-48" src="	https://chisnghiax.com/chisfis/static/media/HIW3.b650d652a9db697619b9.png"  alt="" />
                        </div>
                        <div className="text-center mt-auto">
                             <h3 className="text-xl font-semibold">Save more</h3>
                             <span className="block mt-5 text-neutral-500 dark:text-neutral-400">Let each trip be an inspirational journey, each room a peaceful space</span>
                        </div>
                    </div>
                    </div>
               </div>

        </div>
       
    );
};

export default ChoseUs;