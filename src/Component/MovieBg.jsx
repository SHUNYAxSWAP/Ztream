import useTrailer from "../Hooks/useTrailer"
import { useSelector } from 'react-redux'
import { youtubeApi, youtubeOptions } from "../Utils/constant"
const MovieBg = ({id}) => {
    useTrailer(id)
    const trailerVideo = useSelector((store)=> store.movie?.TrailerVideo)
    return (
        <div className="">
            <iframe className="w-screen aspect-video absolute top-0 -z-10 "
            src={youtubeApi + trailerVideo?.key + youtubeOptions}title="YouTube video player"  >
            </iframe>
        </div> 
    )
}

export default MovieBg