import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navSection'>
        <ul>
            <Link to="/abc">
            <li>First Page</li>
            </Link>
            <Link to="/xyz">
            <li>Second Page</li>
            </Link> 
            <Link to="mango">           
            <li>Third Page</li>
            </Link>
            <Link to="banana">
            <li>Fourth Page</li>
            </Link>
        </ul>
      
    </div>
  )
}

export default NavBar
