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
        <div className="px-20 py-5 fixed z-30 w-full flex justify-between text-center ">
            <img className="w-60 px-8 " src="./ztream.png" alt="logo" />
            <button onClick={signOutHandler}>Sign Out</button>
        </div>
    )
}

export default NavHeader