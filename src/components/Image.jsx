import React from 'react'

function Image(prop) {
    console.log(prop)
    
  return (
    <div>
        <img
            src={prop.path}
            alt={`${prop.name}`}
            className={`${prop.classes}`}
        />
    </div>
  )
}

export default Image