import React from 'react'

const Button = (props: any) => {
    const color = props.color === "primary" ? "btn-success" : "btn-ligth";
    return (
        <div className={`col-12`}>
            <button type={props.type} className={`btn w-100 ${color}`} onClick={props.onClick}>{props.text}</button>
        </div>
    )
}

export default Button
