import React from 'react'

const Button = ({text,className}) => {
  return (
    <button className={`w-[118px] h-[40px] border rounded-lg ${className} `}>{text}</button>
  )
}

export default Button