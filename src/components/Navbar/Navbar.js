import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = _ => {
  return (
    <nav className="navbar navbar-expand-lg bg-warning">
      <Link to='/' className='navbar-brand'>Google Book Search</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
      <ul class="nav navbar-right">
          <li className="nav-item active">
            <Link className='nav-link' to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link' to='/favs'>Favorites</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
