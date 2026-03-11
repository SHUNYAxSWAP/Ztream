import React from 'react'

const MovieList = ({imageData}) => {
  return (
    <div className=''>
        {/* {data.map((mov) => mov.title)} */}
        <img src={"https://image.tmdb.org/t/p/original/" + imageData} alt="" srcset="" className='h-60 w-48'/>
    </div>
  )
}

export default MovieList