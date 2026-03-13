import { useRef } from 'react'
import lang from '../Utils/langConstant'
import { useDispatch, useSelector } from 'react-redux'
import { main } from '../Utils/groqAi'
import { removeSearchMovie } from '../Utils/movieSlice'
import { searchTMDB } from '../Hooks/useApi'



const GptSearchBar = () => {
    const dispatch = useDispatch()
    const gptData = useRef(null)
    const langStore = useSelector((store) => store.config.lang)
    
    const handleGptSearch = async () => {
        dispatch(removeSearchMovie())
        const groqData = await main(gptData.current.value)
        groqData.map((mov) => searchTMDB(mov,dispatch))
    }
    return (

        <div className='grid grid-cols-12 pt-[10%] px-96 gap-3 '>
            <input type="text" ref={gptData} className="px-4 py-4 rounded-md bg-gray-900 text-white outline-none focus:ring-2 focus:ring-purple-500 col-span-9 w-full" placeholder={lang[langStore].searchPlaceholder} />
            <button className="px-4 py-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-200 col-span-3 font-semibold" onClick={handleGptSearch}>{lang[langStore].search} </button>
        </div>

    )
}

export default GptSearchBar