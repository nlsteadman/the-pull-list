import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to="/">Home Page</Link></li>
                <li><Link to="/comics">List Comics</Link></li>
                <li><Link to="/comics/new">Create Comic</Link></li>
                <li><Link to="/users/">List Customers</Link></li>
                <li><Link to="/users/new">Create Customer</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar