import React from 'react'
import { Link } from 'react-router-dom' 

function Navbar() {

    return(
        <nav className='navbar'>
            <div className='navbar-container'>

                {/* replace with app logo in future, remove route in future */}
                <Link to='/' className='navbar-logo'>
                    Overview
                </Link>

                {/* Navbar Items */}
                <ul className='nav-menu'>
                
                    <li className='nav-item'>
                        <Link to='/data-exploration'>
                            Data Exploration
                        </Link>
                    </li>
                    
                    <li className='nav-item'>
                        <Link to='/resources'>
                            Resources
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </nav>

    )
}

export default Navbar;