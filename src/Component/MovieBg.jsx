import useTrailer from "../Hooks/useTrailer"
import { useSelector } from 'react-redux'
import { youtubeApi, youtubeOptions } from "../Utils/constant"
const MovieBg = ({id}) => {
    useTrailer(id)
    const trailerVideo = useSelector((store)=> store.movie?.TrailerVideo)
    return (
        <div className="absolute inset-0 w-full h-full">
            <iframe className="w-full h-full pointer-events-none"
                src={youtubeApi + trailerVideo?.key + youtubeOptions + "&playlist=" + trailerVideo?.key}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen>
            </iframe>
        </div> 
    )
}

export default MovieBg