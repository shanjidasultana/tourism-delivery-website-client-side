import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { BiEnvelope } from 'react-icons/bi';
import { FcAlarmClock, FcCallback } from 'react-icons/fc';
import { FiMapPin } from 'react-icons/fi';
import { ImEarth } from 'react-icons/im';
const Contact = () => {
    return (
        <Row>
        <div className="bg-danger h-50 p-5 mb-5" ><h1 className="text-white">Contact-Page</h1></div>

         <Col xs={12} md={6}>
         
         </Col>
        <Col xs={12} md={6}>
        <div className=" d-flex">
                 <h4 className="my-4">Contact Information</h4>
                 <ul className="ms-5 my-5">
                     <div className="d-flex ms-5">
                         <FiMapPin style={{ fontSize:"24px" ,marginRight:"8px",color:"red"}}/>
                     <li >
                         <h5 className="text-gray">Main Branch</h5>
                         <p>HeartCare Building, BD</p>
                     </li>
                     </div>
                     <div className="d-flex ms-5 ">
                         <FcCallback style={{ fontSize:"24px" ,marginRight:"8px"}}/>
                     <li>
                         <h5 className="text-gray">Call us Anytime at:</h5>
                         <p>+110986453</p>
                     </li>
                     </div>
                     <div className="d-flex  ms-5">
                         <BiEnvelope style={{ fontSize:"24px" ,marginRight:"8px",color:"lightblue"}}/>
                     <li>
                         <h5 className="text-gray">For Inquiry</h5>
                         <p>turgotrip.com</p>
                     </li>
                     </div>
                     <div className="d-flex ms-5">
                         <FcAlarmClock style={{ fontSize:"24px" ,marginRight:"8px"}}/>
                     <li>
                         <h5 className="text-gray">Our Timings</h5>
                         <p>Mon-Sat : 9.00 am-7.00 pm</p>
                     </li>
                     </div>
                     <div className="d-flex ms-5">
                         < ImEarth style={{ fontSize:"24px" ,marginRight:"8px"}}/>
                     <li>
                         <h5 className="text-gray">For Details</h5>
                         <p>www.Heartcare.com</p>
                     </li>
                     </div>
                 </ul>
             </div>

        </Col>
     </Row>
    );
};

export default Contact;