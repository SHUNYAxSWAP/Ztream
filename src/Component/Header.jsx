import { useNavigate,useLocation } from "react-router-dom"
import { LOGO } from "../Utils/constant"

const Header = ({setLoggedIn,loggedIn}) => {
  const navigate = useNavigate()
  const location = useLocation()


  const btnHandle = () => {
    setLoggedIn(prev => !prev)
    if(location.pathname === '/signin'){
      navigate('/signup')
    }
    else if (location.pathname === '/signup'){
      navigate('/signin')
    }
  }



  return (
    <div className="px-4 sm:px-8 md:px-20 py-4 fixed top-0 z-50 w-full flex items-center justify-between text-center bg-black/30 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none transition-all">
      <img className="w-32 sm:w-40 md:w-56 drop-shadow-lg" src={LOGO} alt="logo" /> 
       <button type="button" className='px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold bg-[#ff0f1f] text-white rounded-md hover:bg-red-700 shadow-lg hover:shadow-[#ff0f1f]/50 hover:-translate-y-0.5 transition-all duration-300' onClick={btnHandle}>{loggedIn?"Sign up":"Sign in"}</button>
    </div>
      
  )
}
export default Header