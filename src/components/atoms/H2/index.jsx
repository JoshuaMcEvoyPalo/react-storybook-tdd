import React from 'react'
import './h2.css'

const H2 = ({ children }) => {
  return (
    <h2 data-testid="h2" className="h2">{children}</h2>
  )
}

export default H2
