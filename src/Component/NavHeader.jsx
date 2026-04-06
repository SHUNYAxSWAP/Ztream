import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleGptSearch } from '../Utils/GptSlice';
import { Supported_Lang } from '../Utils/constant';
import { setLang } from '../Utils/configSlice';

const NavHeader = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const GptState = useSelector((store) => store.gptSearchState.GptSearch)
  const signOutHandler = () => {
    signOut(auth).then(() => {
      navigate('/')
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
  const toggleGpt = () => {
    dispatch(toggleGptSearch())
  }
  const handleChange = (e)=> {
    dispatch(setLang(e.target.value))
    }
  return (
    
    <div className="fixed top-0 w-full flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 py-3 sm:py-4 bg-black/50 backdrop-blur-md border-b border-white/10 text-white z-50 transition-all">
      <img className="w-32 sm:w-48 mb-2 sm:mb-0 drop-shadow-lg" src="./ztream.png" alt="logo" />
      
      <div className="flex items-center gap-3">
        {GptState && (
          <select className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 py-2 rounded-lg cursor-pointer hover:bg-white/20 transition appearance-none" onChange={handleChange}> 
            {Supported_Lang.map((lang) => <option className="bg-black" key={lang.value} value={lang.identifier}>{lang.value}</option>)}
          </select>
        )}
        <button onClick={toggleGpt} className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-sm sm:text-base rounded-lg shadow-lg hover:shadow-purple-500/50 hover:-translate-y-0.5 transition-all duration-300 font-semibold">
          {GptState ? "Home" : "GPT Search"}
        </button>
        <button onClick={signOutHandler} className="px-4 py-2 bg-ztream hover:bg-red-500 text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg hover:shadow-ztream/50 hover:-translate-y-0.5 transition-all duration-300">
          Sign Out
        </button>
      </div>
    </div>
  )
}

export default NavHeader
