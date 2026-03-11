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
        console.log("Now Playing:", nowPlaying.data.results.slice(0, 5).map(m => m.title));
        console.log(popular.data);
        dispatch(addNowPlaying(nowPlaying.data))
        dispatch(addPopular(popular.data))
        dispatch(addTopRated(topRated.data))
        dispatch(addUpcoming(upcoming.data))
        console.log("Now Playing:", nowPlaying.data.results.slice(0, 5).map(m => m.title));
        console.log("Popular:", popular.data.results.slice(0, 5).map(m => m.title));
        console.log("Top rated:", topRated.data.results.slice(0, 5).map(m => m.title));
        console.log("Upcoming:", upcoming.data.results.slice(0, 5).map(m => m.title));
        console.log("Now Playing URL:", movieApi);
        console.log("Popular URL:", popularApi);
    }
    useEffect(() => {
        movieApiCall()
    }
        , [])
}
export default useApi
