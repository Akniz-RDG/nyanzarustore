import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <h1> Ups! Parece que los Zentharim se robaron lo que había aquí!</h1>
        <Link className='btn btn-dark' to='/'>Volver al bazar</Link>
    </div>
  )
}

export default Error