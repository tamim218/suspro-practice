import React from 'react'

const Listitem = ({text,className}) => {
  return (
    <div>
        <li className={`font-inter font-medium text-[18px] ${className}`}>{text}</li>
    </div>
  )
}

export default Listitem