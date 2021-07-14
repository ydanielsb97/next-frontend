import React, { ComponentProps } from 'react'

const Input = (props: any) => {

    const classDiv = props.fullWidth ? "col-12" : "col-lg-6 col-md-12 col-sm-12"

    return (
        <div className={`${classDiv} mb-3`}>
            <label className="mb-2">{props.labelText}</label>
            <input type={props.inputType} className="form-control" name={props.inputName} onChange={props.onChange} required />
        </div>
    )
}

export default Input
