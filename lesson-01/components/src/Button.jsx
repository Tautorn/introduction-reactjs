import React from 'react'

function Button(props) {

  const { name, onClick } = props

  return (
    <button onClick={onClick}>{name}</button>
  )
}

export default Button
