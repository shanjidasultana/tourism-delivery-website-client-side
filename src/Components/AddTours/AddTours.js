import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddTours = () => {
    const { register, handleSubmit, reset} = useForm();
    const onSubmit = data => {console.log(data);
    axios.post('https://frightful-vault-19585.herokuapp.com/tours', data)
    .then(res => {
        if (res.data.insertedId) {
            alert('added successfully');
            reset();
        }
    
    })
}
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-1/2 my-12 mx-auto">
            <input {...register("name", { required: true, maxLength: 20 })} className="p-4 border-b " placeholder="Name" />
            <input value=".... ?" {...register("price" ,{ required: true}) } className="p-4 border-b "/>
            <input type="url" {...register("picture",{ required: true})} className="p-4 border-b " placeholder="imageUrl"/>
            <input type="text" {...register("details",{ required: true})} className="p-4 border-b " placeholder="Details"/>
            <input type="text"  {...register("location",{ required: true})}className="p-4 border-b " placeholder="Location" />
            <input className="p-4 border-b " type="submit" />
        </form>
    );
};

export default AddTours;