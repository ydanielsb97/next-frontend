//@ts-ignore
import React from 'react'

const UserContext = React.createContext({
    id: null,
    firstName: null,
    lastName: null
})

export default UserContext;