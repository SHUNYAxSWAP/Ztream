const Header = () => {
  return (
    <div className="px-20 py-5 fixed z-30 w-full flex justify-between text-center ">
      <img className="w-60 px-8 " src="./ztream.png" alt="logo" srcset="" />
      <button type="button" className="m-3 px-3 py-1.5 text-sm font-medium  bg-[#ff0f1f] text-white rounded-md hover:bg-red-700 transition">Sign In</button>
    </div>
  )
}

export default Header