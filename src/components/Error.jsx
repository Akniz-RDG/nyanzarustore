import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div>
        <h1> Un ladrón se llevó lo que buscabas 😱</h1>
        <Link className='btn btn-dark' to='/'>Volver al Bazar</Link>
    </div>
  )
}

export default Error