import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul id="nav">
                <li><Link to="/">Home Page</Link></li>
                <li><Link to="/comics">Comics List</Link></li>
                <li><Link to="/users/">Customer List</Link></li>
                <li><Link to="/comics/new">Create Comic</Link></li>
                <li><Link to="/users/new">Create Customer</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar