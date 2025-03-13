
import { useContext } from "react"
import { LoginState } from "../interfaces/interface"
import { AuthenticationContext } from "../context/AuthContext"
import { Navigate, Outlet } from "react-router"

const ProtectedRoute = () => {
    const {isLogined} = useContext<LoginState>(AuthenticationContext)
  return (
    
        isLogined === true?<Outlet/>:<Navigate to={"/login"}/>
    
  )
}

export default ProtectedRoute