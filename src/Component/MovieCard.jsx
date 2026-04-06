import React from 'react'
import MovieList from './MovieList'

const MovieCard = ({title, data}) => {
  return (
    <div className="mb-8">
        <h1 className='text-lg md:text-2xl font-semibold py-2 tracking-wide'>{title}</h1>
        <div className="overflow-hidden relative w-full h-auto">
            {/* The scrollbar is pushed out of the visible area using pb-8 and -mb-8 */}
            <div className='flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto py-4 md:py-8 pl-2 pr-6 md:pr-12 pb-10 -mb-10'>
                {(data.map((mov) => 
                <div className='flex-shrink-0' key={mov.id}>
                    <MovieList imageData={mov.poster_path}/>
                </div>
               ))}
            </div>
        </div>
    </div>
  )
}

export default MovieCard