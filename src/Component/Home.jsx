import { useRef, useState } from "react"
import { useNavigate, useOutletContext } from "react-router-dom";
import { emailAndNumberValid, emailValid } from "../Utils/Validate"
import Background from "./Background";
const Home = () => {
  const { loggedIn } = useOutletContext()
  const [errMsg, setErrMsg] = useState(null)
  const email = useRef(null)
  const navigate = useNavigate();
  const handleBtnClick = async () => {
    if (loggedIn) {
      const error = await (emailAndNumberValid(email.current.value))
      setErrMsg(error);
      if (!error) {
        navigate("/signin", {
          state: { email: email.current.value }
        });
      }
    }
    else {
      const error = await (emailValid(email.current.value))
      setErrMsg(error);
      if (!error) {
        navigate("/signup", {
          state: { email: email.current.value }
        });
      }
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        handleBtnClick();
    }
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Background />
      <div className="absolute inset-0 bg-black/40 sm:bg-transparent sm:bg-gradient-to-t from-black via-black/60 to-transparent"></div>
      
      {loggedIn ? (
        <div className="absolute inset-0 flex justify-center items-center z-10 p-4">
          <div className="flex justify-center items-center flex-col bg-black/75 backdrop-blur-md p-8 sm:p-12 rounded-2xl shadow-2xl w-full max-w-md border border-white/5 transition-all text-center">
            <h1 className="font-bold text-3xl sm:text-4xl text-white mb-2">Welcome Back!</h1>
            <p className="text-gray-300 text-sm sm:text-base mt-2 mb-6">Enter your info to sign in or start a new account.</p>
            <form action="" method="post" className="flex gap-4 flex-col w-full">
              <input type="email" name="" id="" className="border border-gray-600 px-6 py-4 bg-black/50 text-white rounded-lg focus:ring-2 focus:ring-ztream outline-none transition-all placeholder-gray-400 w-full shadow-inner" placeholder="Email or mobile number" ref={email} onKeyDown={handleKeyDown} />
              <button type="button" className="font-bold text-lg px-8 py-4 bg-ztream text-white rounded-lg shadow-lg hover:bg-red-600 hover:shadow-ztream/50 hover:-translate-y-0.5 transition-all duration-300 w-full" onClick={handleBtnClick}>Continue</button>
            </form>
            <p className="text-red-500 font-semibold mt-4 text-sm">{errMsg}</p>
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 flex justify-center items-center z-10 p-4">
          <div className="flex justify-center items-center flex-col text-center mt-16 sm:mt-0">
            <h1 className="font-black text-4xl sm:text-5xl md:text-6xl text-white drop-shadow-2xl px-4 leading-tight">Unlimited movies, shows, and more</h1>
            <p className="text-gray-200 text-lg sm:text-xl md:text-2xl mt-4 mb-8 drop-shadow-md">Ready to watch? Enter your email to create or restart your membership.</p>
            <form action="" method="post" className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl px-4">
              <input type="email" name="" id="" className="flex-1 border border-gray-500/50 px-6 py-4 bg-black/60 backdrop-blur-sm text-white rounded-lg focus:ring-2 focus:ring-ztream outline-none transition-all placeholder-gray-300 shadow-xl" placeholder="Email address" ref={email} />
              <button type="button" className="font-bold text-xl px-10 py-4 bg-ztream text-white rounded-lg shadow-lg hover:shadow-ztream/50 hover:bg-red-600 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto flex-shrink-0" onClick={handleBtnClick}>Get Started &gt;</button>
            </form>
            <p className="text-red-500 font-semibold mt-4 bg-black/50 px-4 py-1 rounded-full text-sm">{errMsg}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home