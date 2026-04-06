import { useRef, useState } from 'react'
import lang from '../Utils/langConstant'
import { useDispatch, useSelector } from 'react-redux'
import { main } from '../Utils/groqAi'
import { removeSearchMovie } from '../Utils/movieSlice'
import { searchTMDB } from '../Hooks/useApi'



const GptSearchBar = () => {
    const dispatch = useDispatch()
    const gptData = useRef(null)
    const langStore = useSelector((store) => store.config.lang)
    const [isLoading, setIsLoading] = useState(false);
    
    const handleGptSearch = async () => {
        if(!gptData.current.value) return;
        setIsLoading(true);
        try {
            dispatch(removeSearchMovie())
            const groqData = await main(gptData.current.value)
            await Promise.all(groqData.map((mov) => searchTMDB(mov,dispatch)))
        } catch (error) {
            console.error("Failed to fetch GPT results", error)
        } finally {
            setIsLoading(false);
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleGptSearch();
        }
    }

    return (

        <div className='flex flex-col sm:flex-row pt-48 sm:pt-40 md:pt-48 lg:pt-56 px-4 sm:px-12 md:px-24 lg:px-64 gap-3 relative z-20 container mx-auto'>
            <input type="text" ref={gptData} onKeyDown={handleKeyDown} className="px-6 py-4 rounded-lg bg-black/60 shadow-xl backdrop-blur-sm text-white outline-none focus:ring-2 focus:ring-purple-500 w-full flex-grow border border-white/10" placeholder={lang[langStore].searchPlaceholder} disabled={isLoading} />
            <button className={`px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 shadow-lg ${isLoading ? 'bg-purple-800 cursor-wait' : 'bg-purple-600 hover:bg-purple-500 hover:-translate-y-0.5'}`} onClick={handleGptSearch} disabled={isLoading}>
                {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Searching...
                    </span>
                ) : lang[langStore].search} 
            </button>
        </div>

    )
}

export default GptSearchBar