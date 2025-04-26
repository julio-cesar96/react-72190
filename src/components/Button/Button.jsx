import React from 'react'

const Button = ({ color, children }) => {
    const style = {
        backgroundColor: color || 'blue'
    }
  return (
    <button style={style}>
        {children}
    </button>
  )
}

export default Button
