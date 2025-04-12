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
    <button type={type} className={`outline-none  ${className} ${color} ${bgColor}`} {...props}>{text}</button>
  )
}

export default Button