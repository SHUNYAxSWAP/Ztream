import { useLocation, useNavigate} from 'react-router-dom';
import Background from './Background'
import { useRef } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../Utils/firebase';


const SignIn = () => {
  const navigate = useNavigate()
  const password = useRef(null)
  const location = useLocation();
  const email = location.state?.email;
  const buttonHandler = () => {
    signInWithEmailAndPassword(auth, email, password.current.value)
      .then((userCredential) => {
        // Signed in 
        
        const user = userCredential.user;
                navigate("/browse")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + errorMessage)
      });
  }
  return (
    <div className='w-screen h-screen flex justify-center items-center text-white'>
      <Background />
      <div className='flex flex-col w-[550px] justify-center gap-4 bg-black/70 px-20 backdrop-blur-sm h-[400px] text-white'>
        <h1 className=' font-bold text-4xl'>Sign In</h1>
        <input type="email" name="" id="" placeholder='Email' className='border border-solid px-12 py-3 bg-[#14100f] rounded-md border-gray-500' value={email} />
        <input type="password" name="" id="" placeholder='Password' className='border border-solid px-12 py-3 bg-[#14100f] rounded-md border-gray-500' ref={password} />
        <p className=' text-gray-400 text-sm'>Forgot Password</p>
        <button type="button" className='px-3 py-3 text-base font-bold  bg-[#ff0f1f] text-white rounded-md hover:bg-red-700' onClick={buttonHandler}>Sign In</button>
      </div>
    </div>
  )
}

export default SignIn