import React from 'react'
import { Outlet } from 'react-router-dom'
import NavHeader from './NavHeader'

const AppLayout = () => {
  return (
    <div>
        <NavHeader/>
        <Outlet/>
    </div>
  )
}

export default AppLayout