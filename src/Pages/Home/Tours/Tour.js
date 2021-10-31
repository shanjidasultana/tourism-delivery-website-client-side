import { Link } from "react-router-dom";
const Tour = ({tour}) => {
 
    const {spotName,price,location,picture,_id} =tour;
    
    return (
        
        <div className="p-10"> 
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full h-56" src={picture} alt="Mountain"/>
          <div className="px-6 py-4">
            <div className="font-bold text-3xl mb-2">{spotName}</div>
            <div className="font-bold text-xl mb-2">{location}</div>
            <div className="font-bold text-xl mb-2">${price}</div>
            {/* <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p> */}
          </div>
          <div className="px-6 pt-4 pb-2">
            <Link to={`/booking/${_id}`}><button className="bg-blue-500 hover:bg-blue-700  inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2" >Booking</button></Link>
            <button className="bg-red-400 hover:bg-blue-700    inline-block  rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">travel</button>
            <button className="bg-red-400 hover:bg-blue-700    inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">winter</button>
          </div>
        </div>
      </div>
    
    );
};

export default Tour;