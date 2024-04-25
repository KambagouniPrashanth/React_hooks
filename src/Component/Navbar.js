import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/get-data">GetData</Link>
        <Link to="/performance">Performance</Link>
        <Link to="/memo">Memo</Link>
        <Link to="/callback">Callback</Link>





    </div>
  )
}

export default Navbar