// import { useEffect } from "react"
// import { useAuth } from "../store/Auth"
// import { useNavigate } from "react-router-dom"
import { Navigate,useLocation } from "react-router-dom"

export function AuthRequired({children}){

  // const auth = useAuth()
  // const navigate = useNavigate()
  const location = useLocation()
  const auth = localStorage.getItem('user')

  if(!auth){
    // navigate('/')
    return <Navigate to='/login' state={{path: location.pathname}}></Navigate>
  }

  return(
    children
  )
}