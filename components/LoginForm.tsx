import React, { useState } from 'react'
import { ILoginData } from '../interfaces/loginData.interface'
import Button from './Button'
import Input from './Input'

const Login = (props: any) => {

    const initialLoginData = {
        userName: "",
        password: ""
    };
    const [loginData, setloginData] = useState(initialLoginData)

    const handleChange = ({ target }: any) => {
        const { value, name } = target
        setloginData((prev: ILoginData) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = () => {
        
    }

    return (
        <form className={`row ${props.classCss}`} onSubmit={handleSubmit}>
            <div className={`bg-light col-12 text-ligth p-5`}>
                <Input fullWidth={true} labelText={`Username`} inputType={`text`} inputName={`userName`} onChange={handleChange} />
                <Input fullWidth={true} labelText={`Password`} inputType={`password`} inputName={`password`} onChange={handleChange} />

                <Button color={`primary`} type={`submit`} text={`Sign In`} />
            </div>
        </form>
    )
}

export default Login
