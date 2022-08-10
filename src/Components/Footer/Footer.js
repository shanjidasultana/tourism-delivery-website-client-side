import React, { useEffect ,useState} from 'react';
import { FaFacebook,FaPinterest,FaMapMarkedAlt,FaEnvelope } from 'react-icons/fa';
import { AiFillTwitterCircle ,AiTwotonePhone} from 'react-icons/ai';

import {GiNestedHearts} from 'react-icons/gi';
// import { Link } from 'react-router-dom';
import logo from '../../Video/logo.png'

const Footer = () => {
    const [theme,setTheme]=useState("light-theme")
   
    
    const toggleTheme=()=>{
        if(theme==="dark-theme"){
            setTheme("light-theme")
            console.log(theme)
        }
        else{
           
            setTheme("dark-theme")  
            console.log(theme)
        }
       
    }
    useEffect(()=>{
        document.body.className=theme;
    },[theme])
    return (


        <footer className="footer-area bg-gray-500" >
        <div className="mx-5 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4">
                <div className="flex items-center justify-center mb-5">
                    <div className="footer-widget widget">
                        <div className="about_us_widget">
                            <a href="index.html" className="flex items-center mb-5 justify-center"> 
                                <img src={logo} alt="footer logo" width="100"/>
                                <cite className="text-yellow-500 font-bold  text-3xl">Turgo Trip</cite>
                                   
                            </a>
                            <p>We believe brand interaction is key in commu- nication. Real innovations and a positive customer experience are the heart of successful communication.</p>
                            <ul className="social-icon flex items-center justify-center">
                                <li>
                                    <a className="facebook" href="#" target="_blank"><FaFacebook/></a>
                                </li>
                                <li>
                                    <a className="twitter" href="#" target="_blank"><AiFillTwitterCircle/></a>
                                </li>
                                <li>
                                    <a className="pinterest" href="#" target="_blank"><FaPinterest/></a>
                                </li>
                            </ul>
                       </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="footer-widget widget ml-5">
 
                            <h4 className="text-blue-500 text-2xl">Contact us</h4>
                            <p className='my-3 flex items-center justify-center'>
                                <FaMapMarkedAlt className='mx-4 '/> 
                                <span>Manama Tower, chittagong, Bangladesh</span>
                            </p>
                            <p className="my-3  flex items-center justify-center"> 
                                <FaEnvelope className='mx-4 white'/>
                                <span>trago-trip@gmail.com</span>
                            </p>
                            <p className="my-3  flex items-center justify-center">
                                 <AiTwotonePhone className='mx-4 white'/>
                                <span>
                                    +088 012121240
                                </span>
                            </p>
                       
                    </div>
                </div>
                <div className=" ">
                    <div className="footer-widget widget mt-5">
                        <h4 className="text-blue-500  text-2xl">Quick Link</h4>
                        <ul className="widget_nav_menu  text-red-400">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Destination</a></li>
                            <li><a href="#">Tours</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="footer-widget widget">
                        <h4 className="text-blue-500  text-2xl mb-4">Instagram Gallery</h4>
                        <ul className="widget-instagram-feed font-bold text-4xl text-red-400">
                            <li><a href="#"><img src="	http://zwin.io/html/viaje/assets/img/instagram/1.png" alt="img"/></a></li>
                            <li><a href="#"><img src="	http://zwin.io/html/viaje/assets/img/instagram/2.png" alt="img"/></a></li>
                            <li><a href="#"><img src="	http://zwin.io/html/viaje/assets/img/instagram/3.png" alt="img"/></a></li>
                            <li><a href="#"><img src="http://zwin.io/html/viaje/assets/img/instagram/4.png" alt="img"/></a></li>
                            <li><a href="#"><img src="http://zwin.io/html/viaje/assets/img/instagram/5.png" alt="img"/></a></li>
                            <li><a href="#"><img src="	http://zwin.io/html/viaje/assets/img/instagram/6.png" alt="img"/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-inner ">
            <div className="copyright-text ">
                © Targo-trip 2021 All rights reserved. Powered with <GiNestedHearts className="inline text-red-600"/> by <a href="#" target="_blank">Shanjida</a>
            </div>
        </div>
        <div className="fixed top-1/4 -right-1 z-3 rotate-180">
            <span className="relative inline-block rotate-180">
             <input type="checkbox" className="checkbox opacity-0 absolute" id="chk" />
                <label className="label bg-slate-900 dark:bg-white shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8" for="chk">
                    <span className="ball bg-white dark:bg-slate-900 rounded-full absolute top-[2px] left-[2px] w-7 h-7">
                        {theme==="dark-theme" ?
                        <i className="fa-solid text-center fa-sun text-[10px] text-yellow-500 z-6" onClick={()=>toggleTheme()}/> :<i className="fa-solid fa-moon text-[10px] text-blue-500 z-6" onClick={()=>toggleTheme()}/>

                        }
                        
                    </span>
                </label>
            </span>
        </div>
    </footer>


    );
};

export default Footer;