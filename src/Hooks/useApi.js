import axios from "axios"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { addNowPlaying, addPopular, addTopRated, addUpcoming } from "../Utils/movieSlice"
import { movieApi, popularApi, topRatedApi, upcomingApi } from "../Utils/constant"
import { options, searchMovie, searchMovieOption } from '../Utils/constant'
import { addSearchMovie } from "../Utils/movieSlice"


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
export const searchTMDB = async (mov,dispatch) => {
    const searchData = await axios.get(searchMovie + mov.title + searchMovieOption, options)
    const filteredData = searchData.data.results.filter((data) => (data.title === mov.title) && (data.release_date.slice(0, 4) === mov.release_date))
    dispatch(addSearchMovie(filteredData[0]))
}
export default useApi
