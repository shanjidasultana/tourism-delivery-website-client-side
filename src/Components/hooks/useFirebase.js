import  { useEffect } from 'react';
import {useState}  from 'react';
import { getAuth,  onAuthStateChanged,signInWithPopup, GoogleAuthProvider,signOut } from "firebase/auth";
import initializeAuthenciation from '../Firebase/firebase.init';

initializeAuthenciation()

const useFirebase = () => {
    const auth = getAuth();
    const googleprovider = new GoogleAuthProvider();

    const [user,setUser] = useState({})
    const [loading, setLoading] = useState(true)


    const SignInUsingGoogle=()=>{
        return signInWithPopup(auth, googleprovider)
        .finally(() => { setLoading(false) });
    } 
    const logOut=()=>{
        setLoading(true);
        signOut(auth)
        .then(() => {
            setUser({});
        })
        .finally(() => setLoading(false))
    }
    useEffect(()=>{
        const unsubscribed= onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user);
           
            }
            else {
                setUser({});
            }
            setLoading(false);
         });

         return () => unsubscribed;
    },[]);
     
        return {
            user,
            SignInUsingGoogle,
            logOut,
            loading,
        }
            
    
};

export default useFirebase;