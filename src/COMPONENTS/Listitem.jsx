import React from 'react'

const Listitem = ({text,className}) => {
  return (
    <div>
      <ul>
        <li className={`font-inter font-medium text-[18px] ${className}`}>{text}</li>
        </ul>
    </div>

  )
}

export default Listitem