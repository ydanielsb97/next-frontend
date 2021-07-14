//@ts-ignore
import React, {useContext, useEffect} from 'react'
import Router from 'next/router'
import UserContext from '../context/UserContext'

const index = (props: any) => {



    return (
        <>
            <div>
                <h3>Welcome {props.firstName} {props.lastName}</h3>
            </div>
        </>
    )
}

export default index
