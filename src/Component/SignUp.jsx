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

    }


    return (
        <div className='w-screen h-screen flex justify-center items-center text-white'>
            <Background />
            <div className='flex flex-col w-[600px] justify-evenly bg-black/70 p-10 rounded-lg backdrop-blur-sm h-[500px]'>
                <h1 className=' font-bold text-4xl leading-normal'>Set your password to unlock unlimited entertainment </h1>
                <div className='flex flex-col gap-2 text-base text-gray-300'>
                    <p>Just one final step.</p>
                    <p>Then the entertainment begins.</p>
                </div>

                <form action="" method="post" className='flex flex-col gap-2' >
                    <input type="text" name="" id="" placeholder='Name' className='border border-solid px-12 py-3 bg-[#14100f] rounded-md border-gray-500' ref={name} />
                    <input type="email" name="" id="" placeholder='Email' className='border border-solid px-12 py-3 bg-[#14100f] rounded-md border-gray-500' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" name="" id="" placeholder='Password' className='border border-solid px-12 py-3 bg-[#14100f] rounded-md border-gray-500' ref={password} />
                    <button type="button" className='px-3 py-3 text-base font-bold  bg-[#ff0f1f] text-white rounded-md hover:bg-red-700' onClick={buttonHandler}>Next</button>

                </form>
            </div>

        </div>
    )
}

export default SignUp