import React from 'react'
import { background } from '../Utils/constant'

const Background = () => {
  return (
    <div className="h-screen w-screen absolute -z-10 bg-cover bg-center">
            <div className="-z-10 absolute flex bg-cover bg-center h-full w-full" style={{ backgroundImage: `url(${background})` }}>
                <div className="-z-10 absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" ></div>
            </div>
        </div>
  )
}

export default Background