import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {FcPrivacy} from 'react-icons/fc';
import {BsFillPhoneVibrateFill} from 'react-icons/bs';
import {FaHome,FaPlane} from 'react-icons/fa';
import {ImCalculator} from 'react-icons/im';
import {BiMessageDots} from 'react-icons/bi';
import {MdManageAccounts,MdOutlineTravelExplore} from 'react-icons/md';
import logo from '../../Video/logo.png';

function Navbar() {
  const {logOut,user}=useAuth();
  console.log(user);
  console.log(logOut);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-blue-200  p-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 ">
            <div className="flex items-center">
              <div className="flex mb-2">
                <img
                  className="h-16 w-16"
                  src={logo}
                  alt="Workflow"
                />
                <cite className="font-bold text-3xl text-yellow-500">Turgo Trip</cite>
              </div>
              <div className="hidden md:block items-center">
                <div className="ml- flex items-baseline space-x-4">
                  <Link
                    to="/home"
                    className=" hover:bg-green-200 text-black px-3 py-2 rounded-md text-xl  font-medium"
                  >
                    <FaHome className="text-2xl text-red-900"/>
                   Home
                  </Link>
                  
                  <Link
                    to="/addtours"
                    className="text-black hover:bg-green-200 hover:text-white px-3 py-2 rounded-md text-xl  font-medium"
                  >
                    <MdOutlineTravelExplore className="text-2xl text-red-900"/>
                    AddTours
                  </Link>
                  <Link
                    to="/manage"
                    className="text-black hover:bg-green-200 hover:text-white px-3 py-2 rounded-md text-xl  font-medium"
                  >
                    <ImCalculator className="text-2xl text-red-900"/>
                    Manage Booking
                  </Link>
                  <Link
                    to="/destinations"
                    className="text-black hover:bg-green-200 hover:text-white px-3 py-2 rounded-md text-xl  font-medium"
                  >
                    <FaPlane className="text-2xl text-red-900"/>
                    Destinations
                  </Link>
                  <Link
                    to="/managemybooking"
                    className="text-black hover:bg-green-200 hover:text-white px-3 py-2 rounded-md text-xl  font-medium"
                  >
                    <MdManageAccounts className="text-2xl text-red-900"/>
                    ManageMyBooking
                  </Link>

                  <Link
                    to="/"
                    className="text-black hover:bg-green-200 hover:text-white px-3 py-2 rounded-md text-xl  font-medium"
                  >
                    <BsFillPhoneVibrateFill className="text-2xl text-red-900"/>
                    Contact
                  </Link>

                  <Link
                    to="/"
                    className="text-black hover:bg-green-200 hover:text-white px-3 py-2 rounded-md text-xl  font-medium"
                  >
                    <BiMessageDots className="text-2xl text-red-900"/>
                    Reports
                  </Link>
                  {
                  user.email? <div className="flex flex-col items-center">
                    <img src={user.photoURL} alt="" className="w-10 h-10  rounded-full mr-4"/>
                    <h6 className="text-yellow-500  text-1xl font-bold">welcome {user.displayName}</h6>
                    </div>: <h6 className="text-yellow-500 text-1xl font-bold"> ? </h6>
                  }
                  {
                    user.email ?
                        <button className="bg-blue-500  ml-12 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded" onClick={logOut}>log out</button>
                        :
                        <Link
                    to="/login"
                    className="text-black hover:bg-green-200 ml-12  hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                   <FcPrivacy/>
                   Login
               </Link >}
               

                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                    to="/home"
                    className="text-black hover:bg-green-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Home
               </Link >
              
              
              <Link
                    to="/addtours"
                    className="text-black hover:bg-green-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    AddTours
               </Link >
              <Link
                    to="/manage"
                    className="text-black hover:bg-green-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Manage Booking
               </Link >
              <Link
                    to="/destinations"
                    className="text-black hover:bg-green-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Destinations
               </Link >
              <Link
                    to="/managemybooking"
                    className="text-black hover:bg-green-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    ManageMyBooking 
               </Link >
               
               {
                  user.email? <div className=" flex flex-col items-center mt-6 ml-10 justify-items-center">
                    <img src={user.photoURL} className="w-10 h-10 text-base items-center rounded-full mr-4 " alt="" />
                    <h6 className="text-yellow-500 text-base mt-3 mr-6 ">welcome {user.displayName}</h6>
                    </div>: <h6 className="text-yellow-500"> ?</h6>
                }
                {
                    user.email ?
                        <button className="bg-blue-500 mt-9 hover:bg-blue-700  text-base text-white font-bold py-2 px-4 rounded" onClick={logOut}>log out</button>
                        :
                        <Link
                    to="/login"
                    className="text-black  mt-9 hover:bg-green-200 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                   <FcPrivacy/>
                   Login
               </Link >}
                
              </div>
            </div>
          )}
        </Transition>
      </nav>

      
     
    </div>
  );
}

export default Navbar;

