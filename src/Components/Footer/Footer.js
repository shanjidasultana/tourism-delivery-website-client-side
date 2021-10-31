import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Video/logo.png'

const Footer = () => {
    return (
        <div className="bg-gray-500  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div>
                    <div className="h-16 w-16 mx-auto mt-9 mb-24">
                        <img src={logo} alt="" />
                        <cite className="text-yellow-500 font-bold  text-3xl">Turgo Trip</cite>
                    </div>

                <div className="flex text-2xl font-bold m-9 space-x-9 ">
                    
                    <h3>
                        Address: 
                    </h3>
                    <h3>
                        420 Rankin Street Avenue
                        Chittagong City Center,
                        BANGLADESH
                    </h3>
                </div>
                <div className="flex text-2xl font-bold m-9 space-x-9 ">
                    <h3>Phone:</h3>
                    <h3>+0182012345678</h3>
                </div>
                <div className="flex text-2xl  font-bold m-9 space-x-9">
                    <h3> Website: </h3>
                    <h3>www.turgotrip.com </h3>
                </div>

            </div>         
            <div className="m-9 text-blue-500" >
               <h2 className="font-bold text-4xl text-red-400">Help & Support</h2>
               <div></div>
               <Link className="font-bold hover:text-green-400 text-2xl " to="/">FAQs</Link><br />
               <Link className="font-bold hover:text-green-400 text-2xl " to="/">Contact Us</Link><br />
               <Link className="font-bold hover:text-green-400 text-2xl " to="/">Privacy policy</Link><br />
               <Link className="font-bold hover:text-green-400 text-2xl " to="/">Cookie policy</Link><br />
               <Link className="font-bold hover:text-green-400 text-2xl " to="/">Terms of use</Link>
            </div>
            <div className="m-9 text-blue-500">
                <h2 className="font-bold text-4xl text-red-400">Important Search</h2>
                <div></div>
                <Link className="font-bold hover:text-green-400 text-2xl " to="/">Countries</Link><br />
                <Link className="font-bold hover:text-green-400 text-2xl " to="/">Cities</Link><br />
                <Link className="font-bold hover:text-green-400 text-2xl " to="/">Districts</Link><br />
                <Link className="font-bold hover:text-green-400 text-2xl " to="/">Airports</Link><br />
                <Link className="font-bold hover:text-green-400 text-2xl " to="/">Hotels</Link>
            </div>
            <div className="m-9 text-blue-500 ">
                <h2 className="font-bold text-4xl text-red-400">Follow Us On</h2>
                <Link className="font-bold hover:text-green-400 text-2xl " to="/">Facebook</Link><br />
                <Link className="font-bold hover:text-green-400 text-2xl " to="/">Twitter</Link><br />
                <Link className="font-bold hover:text-green-400 text-2xl " to="/">tripadvisor</Link><br />
                <Link className="font-bold hover:text-green-400 text-2xl " to="/">Linkedin</Link><br />
                <Link className="font-bold hover:text-green-400 text-2xl " to="/">Behance</Link>
            </div>
            <hr />
        </div>
    );
};

export default Footer;