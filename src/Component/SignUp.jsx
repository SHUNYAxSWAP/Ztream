import { useLocation, useNavigate } from 'react-router-dom';
import Background from './Background'
import { useRef, useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';

const SignUp = () => {
    const location = useLocation();
    const initialEmail = location.state?.email;
    const [email, setEmail] = useState(initialEmail)
    const name = useRef();
    const password = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const buttonHandler = () => {
        createUserWithEmailAndPassword(auth, email, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(auth.currentUser, {
                    displayName: name.current.value

                }).then(() => {
                    const updatedUser = auth.currentUser;

                    dispatch(addUser({
                        uid: updatedUser.uid,
                        email: updatedUser.email,
                        displayName: updatedUser.displayName,
                    }));
                    navigate("/signin", {
                        state: { email: email }
                    })
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode + " " + errorMessage)
                // ..
            });

    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            buttonHandler();
        }
    }


    return (
        <div className='relative w-screen h-screen overflow-hidden flex justify-center items-center text-white px-4'>
            <Background />
            <div className="absolute inset-0 bg-black/40 sm:bg-black/20"></div>
            
            <div className='relative z-10 flex flex-col w-full max-w-[500px] gap-6 bg-black/75 px-8 sm:px-12 py-10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/5'>
                <h1 className='font-bold text-3xl sm:text-4xl leading-tight sm:leading-normal mb-1'>Set your password to unlock unlimited entertainment</h1>
                
                <div className='flex flex-col text-sm sm:text-base text-gray-300'>
                    <p>Just one final step. Then the entertainment begins.</p>
                </div>

                <form action="" method="post" className='flex flex-col gap-4 mt-2' >
                    <input type="text" placeholder='Name' className='border border-gray-600 px-6 py-4 bg-black/50 text-white rounded-lg focus:ring-2 focus:ring-ztream outline-none transition-all placeholder-gray-400 shadow-inner' ref={name} onKeyDown={handleKeyDown} />
                    <input type="email" placeholder='Email address' className='border border-gray-600 px-6 py-4 bg-black/50 text-white rounded-lg focus:ring-2 focus:ring-ztream outline-none transition-all placeholder-gray-400 shadow-inner' value={email || ''} onChange={(e) => setEmail(e.target.value)} onKeyDown={handleKeyDown} />
                    <input type="password" placeholder='Password' className='border border-gray-600 px-6 py-4 bg-black/50 text-white rounded-lg focus:ring-2 focus:ring-ztream outline-none transition-all placeholder-gray-400 shadow-inner' ref={password} onKeyDown={handleKeyDown} />
                    <button type="button" className='mt-4 px-4 py-4 text-lg font-bold bg-ztream text-white rounded-lg shadow-lg hover:bg-red-600 hover:shadow-ztream/50 hover:-translate-y-0.5 transition-all duration-300' onClick={buttonHandler}>Next &gt;</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp