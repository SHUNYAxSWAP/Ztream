import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useDispatch } from "react-redux"
import Home from "./Home"
import SignUp from "./SignUp"
import { useState, useEffect } from "react"
import SignIn from "./SignIn"
import Browse from "./Browse"
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../Utils/firebase';
import { addUser, removeUser } from "../Utils/userSlice"
import Layout from "./Layout"



const Body = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout loggedIn={loggedIn} setLoggedIn={setLoggedIn} />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/signup",
          element: <SignUp />
        },
        {
          path: "/signin",
          element: <SignIn />
        },
        {
          path: "/browse",
          element: <Browse />
        }
      ]
    }

  ])
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      await user.reload(); // ensure fresh data
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }))
        // ...
      } else {
        dispatch(removeUser())
        // User is signed out
        // ...
      }
    });
  }, [])

  return (
    <div >
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body