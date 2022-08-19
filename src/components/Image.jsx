import React from 'react'

function Image(props) {
    console.log(props)
  return (
    <div>
        <img
            src={props.path}
            alt={`${props.name}`}
            className={`${props.classes}`}
        />
    </div>
  )
}

export default Image