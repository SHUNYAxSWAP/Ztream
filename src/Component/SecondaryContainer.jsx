import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard'

const SecondaryContainer = () => {
  const nowPLaying = useSelector((store) => store.movie.NowPlaying)
  const popular = useSelector((store) => store.movie.Popular)
  const topRated = useSelector((store) => store.movie.TopRated)
  const upcoming = useSelector((store) => store.movie.Upcoming)

  if (!nowPLaying) return <h1>Loading.......</h1>
  return (
    <div className='w-screen bg-[#141414] text-white px-28 '>
      <MovieCard title={"Popular"} data={popular.results}/>
      <MovieCard title={"Top Rated"} data={topRated.results}/>
      <MovieCard title={"Upcoming"} data={upcoming.results}/>
    </div>
  )
}

export default SecondaryContainer