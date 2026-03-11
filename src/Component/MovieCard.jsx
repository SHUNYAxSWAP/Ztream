import React from 'react'
import MovieList from './MovieList'

const MovieCard = ({title, data}) => {
  return (
    <div>
        <h1 className='text-2xl font-bold py-6 overflow-x-auto whitespace-nowrap scroll-smooth pb-4'>{title}</h1>
        <div className='flex gap-5 overflow-x-scroll'>
            {(data.map((mov) => 
            <div className='flex-shrink-0 ' key={mov.id}>   <MovieList imageData = {mov.poster_path}/></div>
           ))}
        </div>
        
        
    </div>
  )
}

export default MovieCard