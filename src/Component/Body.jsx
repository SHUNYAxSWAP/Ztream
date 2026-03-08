import { createBrowserRouter, RouterProvider, useNavigate } from "react-router-dom"
import Home from "./Home"
import SignUp from "./SignUp"
import SignIn from "./SignIn"
import Browse from "./Browse"
import AuthLayout from "./AuthLayout"
import AppLayout from "./AppLayout"
import { useEffect } from "react"
import { auth } from '../Utils/firebase';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utils/userSlice"
import { useDispatch } from "react-redux"
import ProtectedRoute from "../Utils/ProtectedRoute"

const appRouter = createBrowserRouter([
    {
      element: <AuthLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "signup",
          element: <SignUp />
        },
        {
          path: "signin",
          element: <SignIn />
        }
      ]
    },
    {
      element: <AppLayout/>,
      children: [
        {
          path: "browse",
          element: (<ProtectedRoute>
            <Browse />
          </ProtectedRoute>)
        }
      ]
    }

  ])


const Body = () => {
  const dispatch = useDispatch()
      useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      // ensure fresh data
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        console.log("User Signin")
        // ...
      } else {
        dispatch(removeUser())
        // User is signed out
        // ...
      }
    });
    return () => unsubscribe()
  }, [])
  
  return (
    <div >
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body