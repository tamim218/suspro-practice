import React from 'react'

const Heading = ({text,className}) => {
  return (
    <h1 className={`font-bold text-4xl text-[#112F42] ${className}`}>{text}</h1>
  )
}

export default Heading