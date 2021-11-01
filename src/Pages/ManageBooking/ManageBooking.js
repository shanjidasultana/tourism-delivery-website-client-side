import{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {RiDeleteBin2Fill} from 'react-icons/ri'
import {GrDocumentUpdate} from 'react-icons/gr'
import {FaAlignRight} from 'react-icons/fa'
// import DisplayMange from './DisplayMange';

const ManageBooking = () => {
    const [displays,setDisplays]=useState([]);
    useEffect(()=>{
        fetch(`https://frightful-vault-19585.herokuapp.com/bookingList`)
        .then(res=>res.json())
        .then(data=>setDisplays(data))
    },[])

    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://frightful-vault-19585.herokuapp.com/bookingList/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remainingUsers = displays.filter(user => user._id !== id);
                        setDisplays(remainingUsers);
                    }
                });
        }
    }
    return (
        <div className="container flex-wrap  m-auto flex flex-col md:flex-row items-center justify-start">

            {
                // displays.map(item=> <DisplayMange  item={item}
                // key={item._id}
                // ></DisplayMange>)


                displays.map(item=><div className="w-full lg:w-1/2 p-3 lg:flex-col"
                 key={item._id}>
                <div className="flex flex-col  lg:flex-row rounded lg:h-50 border">
                <img className="block w-full sm:w-24 lg:w-64 lg:h-50 flex-none bg-cover " src={item.picture} alt=""/>
                <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <h2 className="text-black font-bold text-xl mb-2 leading-tight">{item.name}</h2>
                    <h4 className="text-black font-bold text-xl mb-2 leading-tight">{item.date}</h4>
                    <h4 className="text-black font-bold text-xl mb-2 leading-tight">{item.price}</h4>
                    <p className="text-black font-bold  mb-2 leading-tight">{item.email}</p>
               
                    <div className="flex mx-auto pb-2">
                     <button className=" text-grey-darker ml-9 flex mt-2 ">Read more<FaAlignRight className="mx-4 text-blue-700 "/> </button>
                     <Link to={`/bookings/update/${item._id}`}><button className=" mt-2 flex">Update <GrDocumentUpdate className="mx-4"/></button></Link>
                    <button className="mb-12" onClick={() => handleDeleteUser(item._id)}><RiDeleteBin2Fill className="text-red-500 text-3xl "/></button>                    
                </div>
                </div>
                
                </div>
            </div>
)
            }
        </div>
    );
};

export default ManageBooking;