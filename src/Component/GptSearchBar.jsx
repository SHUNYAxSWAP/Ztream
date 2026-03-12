import React from 'react'
import lang from '../Utils/langConstant'
import { useSelector } from 'react-redux'


const GptSearchBar = () => {
    const langStore =  useSelector((store)=> store.config.lang)
    console.log(langStore)

    return (
            
            <div className='grid grid-cols-12 pt-[20%] px-96 gap-3 '>
                <input type="text" name="" id="" className="px-4 py-4 rounded-md bg-gray-900 text-white outline-none focus:ring-2 focus:ring-purple-500 col-span-9 w-full" placeholder={lang[langStore].searchPlaceholder} />
                <button className="px-4 py-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-200 col-span-3 font-semibold">{lang[langStore].search} </button>
            </div>

    )
}

export default GptSearchBar