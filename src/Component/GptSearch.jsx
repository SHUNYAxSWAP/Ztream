import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieRecommed from './GptMovieRecommed'
import Background from './Background'

const GptSearch = () => {
  return (
    <div>
        <Background />
        <GptSearchBar/>
        <GptMovieRecommed/>
    </div>
  )
}

export default GptSearch