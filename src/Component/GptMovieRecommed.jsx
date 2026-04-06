import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieRecommed = () => {
  const mov = useSelector((store) => store.movie.SearchResults)
  return (
    <div className='flex gap-4 sm:gap-6 flex-wrap justify-center px-4 sm:px-12 md:px-24 lg:px-48 pt-10 pb-24 relative z-20'>
      {mov.map((mov) => {
        if (mov) {
          return (
            <div key={mov.id} >
              <MovieList imageData={mov?.poster_path} />
            </div>
          );
        }
      })}
    </div>

  )
}

export default GptMovieRecommed