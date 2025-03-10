import React, { createContext, ReactNode, useEffect, useState } from "react"
import { LoginState } from "../interfaces/interface"

export const AuthenticationContext = createContext<LoginState>({isLogined:false,setIslogined:()=>{}})

const AuthContext:React.FC<{children:ReactNode}> = ({children}) => {
    const [isLogined,setIslogined] = useState<boolean>(sessionStorage.getItem("username")?true:false)
useEffect(()=>{
    if(sessionStorage.getItem("username")){
        setIslogined(true)
    }else{
        setIslogined(false)
    }
},[isLogined])
  return (
   <AuthenticationContext.Provider value={{isLogined,setIslogined}}>{children}</AuthenticationContext.Provider>
  )
}

export default AuthContext