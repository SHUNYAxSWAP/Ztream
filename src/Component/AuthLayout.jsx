import Header from './Header'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'

const AuthLayout = () => {
  const [loggedIn, setLoggedIn] = useState(true)
  return (
    <div>
        <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn}/>
        <Outlet  context={{loggedIn}}/>
    </div>
  )
}

export default AuthLayout