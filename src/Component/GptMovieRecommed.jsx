import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieRecommed = () => {
  const mov = useSelector((store) => store.movie.SearchResults)
  return (
    <div className='flex gap-5 flex-wrap items-center m-10 mx-52'>
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