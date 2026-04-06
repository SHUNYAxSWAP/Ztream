import React from 'react'

const MovieList = ({imageData}) => {
  return (
    <div className='group relative'>
      <img 
        src={"https://image.tmdb.org/t/p/original/" + imageData} 
        alt="Movie Poster" 
        className='h-40 sm:h-56 md:h-64 lg:h-72 w-28 sm:w-40 md:w-44 lg:w-48 object-cover rounded-md sm:rounded-lg shadow-lg group-hover:scale-110 group-hover:z-50 transition-all duration-300 cursor-pointer drop-shadow-xl border border-white/5'
      />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md sm:rounded-lg"></div>
    </div>
  )
}

export default MovieList