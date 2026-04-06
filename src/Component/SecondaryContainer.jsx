import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

const SecondaryContainer = () => {
  const nowPLaying = useSelector((store) => store.movie.NowPlaying)
  const popular = useSelector((store) => store.movie.Popular)
  const topRated = useSelector((store) => store.movie.TopRated)
  const upcoming = useSelector((store) => store.movie.Upcoming)

  if (!nowPLaying || !popular || !topRated || !upcoming) return null;

  return (
    <div className='w-full sm:bg-gradient-to-b from-transparent via-black to-black text-white pl-6 sm:pl-12 md:pl-24 pb-20 relative z-20 sm:-mt-12 md:-mt-24 lg:-mt-48'>
      <MovieCard title={"Popular"} data={popular.results}/>
      <MovieCard title={"Top Rated"} data={topRated.results}/>
      <MovieCard title={"Upcoming"} data={upcoming.results}/>
    </div>
  )
}

export default SecondaryContainer