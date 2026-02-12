import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./Login"
import Header from "./Header"
import { useState } from "react"

const Body = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login loggedIn={loggedIn}/>
    }
  ])
  return (
    <div>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body