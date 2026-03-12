import { options } from '../Utils/constant'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailer } from '../Utils/movieSlice'
import { trailerApi } from '../Utils/constant'

const useTrailer = (id) => {
    
    const dispatch = useDispatch()
    async function getTrailerApi() {
        const data = await axios(trailerApi+id+'/videos?language=en-US', options)
        let trailerFilterVideo = data.data.results.filter((video)=> video.type === "Trailer")
        dispatch(addTrailer(trailerFilterVideo[0]))
    }
    useEffect(()=>{
        getTrailerApi()
    },[])
}
export default useTrailer