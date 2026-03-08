
import {  useSelector } from "react-redux"

const Browse = () => {
  const user = useSelector((store)=> store.user.userInfo.displayName)
  console.log("Browse page loaded")
  return (
    
    <div className="w-screen h-screen flex justify-center items-center">
      <button >Signout</button>
      <h1>{user}</h1>
    </div>
  )
}

export default Browse