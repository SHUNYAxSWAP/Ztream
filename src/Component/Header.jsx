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
    <div className="px-20 py-5 fixed z-30 w-full flex justify-between text-center ">
      <img className="w-60 px-8 " src={LOGO} alt="logo" /> 
       <button type="button" className='px-3 py-3 text-base font-bold  bg-[#ff0f1f] text-white rounded-md hover:bg-red-700' onClick={btnHandle}>{loggedIn?"Sign up":"Sign in"}</button>

      </div>
      
  )
}
export default Header