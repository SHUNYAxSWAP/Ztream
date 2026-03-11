import React from 'react'

const MovieTitle = ({ title, overview }) => {
    return (
        <div className='pt-80 px-32 flex flex-col gap-8 w-s  text-white bg-gradient-to-r from-black via-black/60 to-transparent w-screen aspect-video'     >
            <h1 className='text-6xl font-bold'>{title}</h1>
            <p className='text-lg w-1/3'>{overview}</p>
            <div className='flex gap-3'>
                <button className='font-bold px-12 py-3 bg-white text-black rounded-md hover:bg-gray-400 transition'>▶️ Play Now</button>
                <button className='font-bold px-12 py-3 bg-[#e3d7d828] text-slate-100 rounded-md hover:bg-gray-700 hover:text-white transition'>ℹ️ More Info</button>
            </div>

        </div>
    )
}

export default MovieTitle