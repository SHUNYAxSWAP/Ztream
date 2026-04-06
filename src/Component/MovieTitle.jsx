import React from 'react'

const MovieTitle = ({ title, overview }) => {
    return (
        <div className='absolute inset-0 flex flex-col justify-center px-6 sm:px-12 md:px-24 w-full h-full text-white bg-gradient-to-r from-black/90 via-black/60 to-transparent pointer-events-none' >
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-xl max-w-lg md:max-w-3xl'>{title}</h1>
            <p className='text-sm md:text-base lg:text-lg w-full sm:w-2/3 md:w-1/2 lg:w-5/12 text-gray-200 drop-shadow-md mt-4 line-clamp-3 sm:line-clamp-none'>{overview}</p>
            <div className='flex gap-3 sm:gap-4 mt-6 pointer-events-auto'>
                <button className='font-bold text-sm sm:text-base px-6 sm:px-8 py-2 md:py-3 bg-white text-black rounded shadow hover:bg-gray-200 transition-all duration-300 flex items-center justify-center'>
                    <span className="mr-2">▶</span> Play Now
                </button>
                <button className='font-semibold text-sm sm:text-base px-6 sm:px-8 py-2 md:py-3 bg-gray-500/50 backdrop-blur-sm text-white rounded shadow hover:bg-gray-500/70 transition-all duration-300 flex items-center justify-center border border-white/10'>
                    <span className="mr-2">ℹ</span> More Info
                </button>
            </div>
        </div>
    )
}

export default MovieTitle