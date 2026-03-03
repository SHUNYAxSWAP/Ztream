import { useRef, useState } from "react"
import { useNavigate, useOutletContext } from "react-router-dom";
import { emailAndNumberValid, emailValid } from "../Utils/Validate"
import Background from "./Background";
const Home = () => {
  const {loggedIn} = useOutletContext()
  console.log(loggedIn)
  const [errMsg, setErrMsg] = useState(null)
  const email = useRef(null)
  const navigate = useNavigate();
  const handleLoginBtnClick = async() => {
    const error = await (emailAndNumberValid(email.current.value))
    setErrMsg(error);
    if (!error) {
      navigate("/signin", {
      state: { email: email.current.value }
    });
    }
  }
  const handleSignUpBtnClick = async () => {
    const error = await (emailValid(email.current.value))
    setErrMsg(error);
    if (!error) {
      navigate("/signup", {
      state: { email: email.current.value }
    });
    }
  };
return (
  <div className="h-screen w-screen">
    <Background/>
    {loggedIn ?
      (<div className="h-screen w-screen my-auto text-white flex justify-center items-center flex-col">
        <div>
          <h1 className="font-bold text-4xl">Enter your info to sign in</h1>
          <p className="text-gray-300 mt-5 mb-5">Or get started with a new account.</p>
          <form action="" method="post" className="flex gap-3 flex-col ">
            <input type="email" name="" id="" className="border border-solid px-12 py-3 bg-[#020202] rounded-md" placeholder="Email or mobile number" ref={email} />
            <button type="button" className="font-bold px-12 py-3 bg-[#ff0f1f] text-white rounded-md hover:bg-red-700 transition" onClick={handleLoginBtnClick}>Continue</button>
          </form>
          <p className="text-red-500 font-bold m-5">{errMsg}</p>
        </div>

      </div>)
      : <div className="h-full text-white flex justify-center items-center flex-col">
        <h1 className="font-bold text-4xl">Unlimited movies, shows, and more</h1>
        <p className="text-gray-300 mt-5 mb-5">Ready to watch? Enter your email to create or restart your membership.</p>
        <form action="" method="post" className="flex gap-3">
          <input type="email" name="" id="" className="border border-solid px-12 py-3 bg-[#020202] rounded-md" placeholder="Email" ref={email} />
          <button type="button" className="font-bold px-12 py-3 bg-[#ff0f1f] text-white rounded-md hover:bg-red-700 transition" onClick={handleSignUpBtnClick}>Get Started </button>
        </form>
        <p className="text-red-500 font-bold m-5">{errMsg}</p>
      </div>}

  </div >
)
}

export default Home