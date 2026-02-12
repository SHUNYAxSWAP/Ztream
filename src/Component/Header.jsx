
const Header = ({loggedIn, setLoggedIn}) => {
  return (

    <div className="px-20 py-5 fixed z-30 w-full flex justify-between text-center ">
      <img className="w-60 px-8 " src="./ztream.png" alt="logo"/>
      <button type="button" onClick={() => {
    setLoggedIn(!loggedIn)
    }} className="m-3 px-3 py-1.5 text-sm font-bold  bg-[#ff0f1f] text-white rounded-md hover:bg-red-700">{loggedIn?"Sign up":"Sign in"}</button>
    </div>
  )
}

export default Header