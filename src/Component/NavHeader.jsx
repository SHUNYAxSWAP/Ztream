import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';

const NavHeader = () => {
    const navigate = useNavigate()
     const signOutHandler = () => {
      signOut(auth).then(() => {
        navigate('/')
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      });
    }
    return (
        <div className=" fixed top-0 w-full flex items-center justify-between px-8 py-4 bg-gradient-to-b from-black/80 to-transparent text-white z-50">
            <img className="w-60 px-8 " src="./ztream.png" alt="logo" />
            <button onClick={signOutHandler} className='px-5 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition'>Sign Out</button>
        </div>
    )
}

export default NavHeader
