import React from 'react'
import './Card.css'

const Card = ({ children }) => {
  return (
    <div data-testid="card" className="card">{children}</div>
  )
}

export default Card
