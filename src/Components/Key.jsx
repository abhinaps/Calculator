import React from 'react'

function Key(props) {
  return (
      <button 
      className={props.className}
      onClick={props.handler} 
      name={props.keyvalue}>
      {props.keyvalue}</button>
  )
}

export default Key
