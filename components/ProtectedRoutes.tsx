import { useRouter } from 'next/router';
import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const isBrower = () => typeof window !== undefined;

const ProtectedRoutes = ({children}: any) => {

    const router = useRouter()
    
    const { id } = useContext(UserContext)
 
    if (!id && isBrower() && router.pathname !== '/login' ) router.push("/access")

    
    return children
}

export default ProtectedRoutes
