import React from 'react'

const Image = ({src,alt,className}) => {
  return (
    <div>
        <img className={className}  src={src} alt={alt}></img>
    </div>
  )
}

export default Image