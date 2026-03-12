import axios from "axios"
import { useDispatch } from "react-redux"
import { options } from "../Utils/constant"
import { useEffect } from "react"
import { addNowPlaying, addPopular, addTopRated, addUpcoming } from "../Utils/movieSlice"
import { movieApi, popularApi, topRatedApi, upcomingApi } from "../Utils/constant"



const useApi = () => {
    const dispatch = useDispatch()
    async function movieApiCall() {
        const nowPlaying = await axios.get(movieApi, options)
        const popular = await axios.get(popularApi, options)
        const topRated = await axios.get(topRatedApi, options)
        const upcoming = await axios.get(upcomingApi, options)
        dispatch(addNowPlaying(nowPlaying.data))
        dispatch(addPopular(popular.data))
        dispatch(addTopRated(topRated.data))
        dispatch(addUpcoming(upcoming.data))

    }
    useEffect(() => {
        movieApiCall()
    }
        , [])
}
export default useApi
