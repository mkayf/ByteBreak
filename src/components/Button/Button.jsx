import React from 'react'

function Button({
    text = "Button",
    type = "button",
    className = "",
    bgColor = "",
    color = "text-white",
    ...props

}) {
  return (
    <button type={type} style={{backgroundColor : bgColor}} className={`outline-none px-6 py-4 ${className} ${color}`} {...props}>{text}</button>
  )
}

export default Button