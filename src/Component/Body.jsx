import {createBrowserRouter,RouterProvider} from "react-router"
import Login from "./Signup"
import Header from "./Header"

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/> 
    }
  ])
  return (
<div>
  <Header/>
<RouterProvider router={appRouter}/>
</div>
  )
}

export default Body