import React from 'react'

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <Link to="/login">login</Link>
        <Link to="/analytics">Analtics</Link>
        <Link to="/home">home</Link>
        <Link to="/billing">billing</Link>
    </div>
  )
}

export default Navbar