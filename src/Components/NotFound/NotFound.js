import React from 'react';
import notfound from '../../Video/notfound.gif'
const NotFound = () => {
    return (
        <div className="grid lg:grid-cols-2 sm:grid-cols-1">
            <div>
                <img src={notfound} alt="" />
            </div>
            <div>
                <h2 className="text-red-900 text-5xl font-bold">404</h2>
                <p className="text-2xl font-bold text-yellow-400 ">PAGE NOT FOUND</p>
                <button className="bg-red-400 hover:bg-blue-700    inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Go Back </button>
            </div>
        </div>
    );
};

export default NotFound;