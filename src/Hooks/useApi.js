import axios from "axios"
import { useDispatch } from "react-redux"
import { options } from "../Utils/constant"
import { useEffect } from "react"
import { addMovie } from "../Utils/movieSlice"
import { movieApi } from "../Utils/constant"


const useApi = () => {
    const dispatch = useDispatch()
    async function movieApiCall() {
        const data = await axios(movieApi, options)
        dispatch(addMovie(data.data)) 
    }
    useEffect(() => {
        movieApiCall()
    }
        , [])
}
export default useApi