import { useLocation, useNavigate} from 'react-router-dom';
import Background from './Background'
import { useRef } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Utils/firebase';


const SignIn = () => {
  const password = useRef(null)
  const location = useLocation();
  const email = location.state?.email;
  const navigate = useNavigate()
  const buttonHandler = () => {
    signInWithEmailAndPassword(auth, email, password.current.value)
      .then((userCredential) => {
        navigate('/browse')
      })
      .catch((error) => {
        console.log(error.code + error.message)
      });
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      buttonHandler();
    }
  }

  return (
    <div className='relative w-screen h-screen overflow-hidden flex justify-center items-center text-white px-4'>
      <Background />
      <div className="absolute inset-0 bg-black/40 sm:bg-black/20"></div>
      
      <div className='relative z-10 flex flex-col w-full max-w-[450px] gap-6 bg-black/75 px-8 sm:px-14 py-12 backdrop-blur-md rounded-2xl shadow-2xl border border-white/5'>
        <h1 className='font-bold text-3xl sm:text-4xl mb-2'>Sign In</h1>
        
        <div className="flex flex-col gap-4">
          <input type="email" placeholder='Email address' className='border border-gray-600 px-6 py-4 bg-black/50 text-white rounded-lg focus:ring-2 focus:ring-ztream outline-none transition-all placeholder-gray-400 shadow-inner' value={email || ''} onKeyDown={handleKeyDown} readOnly={!!email} />
          <input type="password" placeholder='Password' className='border border-gray-600 px-6 py-4 bg-black/50 text-white rounded-lg focus:ring-2 focus:ring-ztream outline-none transition-all placeholder-gray-400 shadow-inner' ref={password} onKeyDown={handleKeyDown} />
        </div>
        
        <p className='text-gray-400 text-sm hover:underline cursor-pointer text-right'>Forgot Password?</p>
        
        <button type="button" className='mt-2 px-4 py-4 text-lg font-bold bg-ztream text-white rounded-lg shadow-lg hover:bg-red-600 hover:shadow-ztream/50 hover:-translate-y-0.5 transition-all duration-300' onClick={buttonHandler}>
          Sign In
        </button>
        
        <p className='text-gray-400 mt-4 text-sm text-center'>
          New to Ztream? <span className="text-white hover:underline cursor-pointer" onClick={() => navigate('/signup')}>Sign up now</span>.
        </p>
      </div>
    </div>
  )
}

export default SignIn