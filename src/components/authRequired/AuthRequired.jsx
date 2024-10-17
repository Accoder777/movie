import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const AuthRequired = () => {
    let user = true
  return user?(
    <Outlet/>
  ):(
    <Navigate to='/login' replace='true'/>
  )
}

export default AuthRequired