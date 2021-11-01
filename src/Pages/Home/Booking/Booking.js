import axios from 'axios';
import  { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router';
import useAuth from '../../../Components/hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Booking = () => {
    const {id}=useParams();
    const [single,setSingle]=useState([]);
    const notify = () => toast.success('Wow so easy! Added Successfully ',{
        position:'top-center'
    });

    useEffect(()=>{
        fetch(`https://frightful-vault-19585.herokuapp.com/tours/${id}`)
        .then(res=>res.json())
        .then(data=>setSingle(data))
    },[id])
    const {spotName,picture,price} =single;

    const {user}=useAuth();
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data);
            data.spotsName=spotName;
            data.picture=picture;
            data.price=price;
            
        axios.post('https://frightful-vault-19585.herokuapp.com/bookingList', data)
        .then(res => {
            if (res.data.insertedId) {
               reset();
            }
        })
    }
    return (
        <div >

            <h1 className="text-4xl font-bold my-3">Booking Here</h1>
             <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-1/2 my-12 mx-auto">
                    <input defaultValue={user.displayName } className="p-4 border-b " {...register("fullName", { required: true, maxLength: 20 })}  placeholder="Your Full Name"/>
                    <input defaultValue={user.email} className="p-4 border-b " type="email" {...register("email")} placeholder="Your Email" />
                    <input className="p-4 border-b " type="datetime-local" {...register("date")}  placeholder="Booking Date" />
                    <input className="p-4 border-b " type="text" {...register("address") }  placeholder="Your Address" />
                    <input className="p-4 border-b " type="number" {...register("phoneNo")}  placeholder="Your Phone Number" />
                    <input className="p-4 border-b " onClick={notify} type="submit" />
            </form>
            <ToastContainer/>

        </div>
    );
};

export default Booking;