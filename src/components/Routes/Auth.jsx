import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const IsLoggedIn = ({children}) =>{
    const token = useSelector(state=>state.user?.isAuthenticated)
    return token ? children : <Navigate to="/login"/>
}

export const IsAuth = ({children}) =>{
    const token =  useSelector(state=>state.user?.isAuthenticated)
    return token ?  <Navigate to="/"/> : children
}

