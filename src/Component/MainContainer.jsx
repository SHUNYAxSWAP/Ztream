import React from 'react'
import { useSelector } from 'react-redux'
import MovieTitle from './MovieTitle'
import MovieBg from './MovieBg'

const MainContainer = () => {
    const movie = useSelector((store) => store.movie.NowPlaying)
    if (!movie) return <h1>Loading....</h1>
    return (
        <div className="relative w-screen bg-black overflow-hidden aspect-[4/3] sm:aspect-video pt-24 sm:pt-0">
            <MovieBg id={movie.results[0].id}/>
            <MovieTitle title={movie.results[0].original_title} overview={movie.results[0].overview}/>
        </div>
    )
}

export default MainContainer