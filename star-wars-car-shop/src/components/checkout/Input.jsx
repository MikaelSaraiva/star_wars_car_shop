import React, { useState } from 'react'
import './input.css'

function Input({ type, text, name, placeholder, handleOnChange, value, errorMessage, required }) {
    const [focused, setFocused] = useState(false)

    const handleFocus = (event) => {
        setFocused(true)
    }

    return (
        <div className={name}>
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                name={text}
                id={name}
                placeholder={placeholder}
                onChange={handleOnChange}
                value={value}
                required={Boolean(required)}
                onBlur={handleFocus}
                focused={focused.toString()}
            />
            <span>{errorMessage}</span>
        </div>
    )
}

export default Input