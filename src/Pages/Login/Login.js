import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Components/hooks/useAuth';
import {FcGoogle} from 'react-icons/fc';
const Login = () => {
    const {SignInUsingGoogle,user} =useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    const handleGoogleLogin = () => {
        SignInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div>
            <div className="">
                {
                    user.email? <h3 className="mt-7 text-purple-600 text-4xl mb-5 ">Welcome {user.displayName}</h3>:
                    <h3 className="text-pink-600 text-4xl font-bold mt-7 mb-5 ">Please Login </h3>
                }
                <button className=" mt-5 text-red-500 hover:bg-red-200 font-bold py-5 px-4 rounded-full"  onClick={handleGoogleLogin}><FcGoogle className =" text-9xl"/> google</button>
            </div>
        </div>
        
    );
};

export default Login;