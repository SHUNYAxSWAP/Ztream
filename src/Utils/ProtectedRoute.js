import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
    const user = useSelector((store) => store.user.userInfo)
    console.log(user)
    if(!user){
        return <Navigate to="/signin" replace />
    }
    return children
}

export default ProtectedRoute