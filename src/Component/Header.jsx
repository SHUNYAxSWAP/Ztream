import { useLocation, useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth";
import { auth } from '../Utils/firebase';

const Header = ({ loggedIn, setLoggedIn }) => {

  const location = useLocation()
  const path = location.pathname;
  const navigate = useNavigate()

  const buttonHandler = () => {
    setLoggedIn((prev) => !prev)
  }
  const navButtonHandler = () => {
    setLoggedIn((prev) => !prev)
    navigate("/")
  }
  const signOutHandler = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/')
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div className="px-20 py-5 fixed z-30 w-full flex justify-between text-center ">
      <img className="w-60 px-8 " src="./ztream.png" alt="logo" />
      <button onClick={path === "/browse" ? signOutHandler : path === "/" ? buttonHandler : navButtonHandler} type="button" className="m-3 px-3 py-1.5 text-sm font-bold  bg-[#ff0f1f] text-white rounded-md hover:bg-red-700">{path === "/browse" ? "Sign Out" : (loggedIn ? "Sign up" : "Sign in")}</button>
    </div>
  )
}
export default Header