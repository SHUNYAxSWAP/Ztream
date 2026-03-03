import Header from './Header'
import { Outlet } from 'react-router-dom'

const Layout = ({loggedIn,setLoggedIn}) => {
  return (
    <div>
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
        <Outlet context={{loggedIn}} />
    </div>
  )
}

export default Layout