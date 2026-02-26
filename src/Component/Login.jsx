import { useRef, useState } from "react"
import { emailAndNumberValid, emailValid } from "../Utils/Validate"
const Login = ({ loggedIn }) => {
  const [errMsg, setErrMsg] = useState(null)
  const email = useRef(null)
  const handleLoginBtnClick = () => {
    setErrMsg(emailValid(email.current.value))
  }
  const handleSignUpBtnClick = () => {
    setErrMsg(emailAndNumberValid(email.current.value))
  }

  return (
    <div className="h-screen w-screen">
      <div className="-z-10 absolute flex bg-cover bg-center h-full w-full" style={{ backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/e49aba81-ee7c-4f19-baef-7c54bbab003e/web/IN-en-20260202-TRIFECTA-perspective_04f5de39-b518-493c-9a8d-6aef11af0457_large.jpg')" }}>
        <div className="-z-10 absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" ></div>
      </div>
      {loggedIn ?
        (<div className="h-screen w-screen my-auto text-white flex justify-center items-center flex-col">
          <div>
            <h1 className="font-bold text-4xl">Enter your info to sign in</h1>
            <p className="text-gray-300 mt-5 mb-5">Or get started with a new account.</p>
            <form action="" method="post" className="flex gap-3 flex-col ">
              <input type="email" name="" id="" className="border border-solid px-12 py-3 bg-[#020202] rounded-md" placeholder="Email or mobile number" ref={email} />
              <button type="button" className="font-bold px-12 py-3 bg-[#ff0f1f] text-white rounded-md hover:bg-red-700 transition" onClick={handleSignUpBtnClick}>Continue</button>
            </form>
            <p className="text-red-500 font-bold m-5">{errMsg}</p>
          </div>

        </div>)
        : <div className="h-full text-white flex justify-center items-center flex-col">
          <h1 className="font-bold text-4xl">Unlimited movies, shows, and more</h1>
          <p className="text-gray-300 mt-5 mb-5">Ready to watch? Enter your email to create or restart your membership.</p>
          <form action="" method="post" className="flex gap-3">
            <input type="email" name="" id="" className="border border-solid px-12 py-3 bg-[#020202] rounded-md" placeholder="Email" ref={email} />
            <button type="button" className="font-bold px-12 py-3 bg-[#ff0f1f] text-white rounded-md hover:bg-red-700 transition" onClick={handleLoginBtnClick}>Get Started </button>
          </form>
          <p className="text-red-500 font-bold m-5">{errMsg}</p>
        </div>}

    </div >
  )
}

export default Login