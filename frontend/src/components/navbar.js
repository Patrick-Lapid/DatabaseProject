import React from 'react'
import { Link } from 'react-router-dom' 

function Navbar() {

    return(
        <nav className='navigation-bar'>
            <div className='navigationbar-container'>

                {/* replace with app logo in future, remove route in future */}
                <Link to='/' className='navigationbar-logo'>
                    Overview
                </Link>

                {/* Navbar Items */}
                <ul className='navigation-menu'>
                
                    <li className='navigation-item'>
                        <Link to='/data-exploration'>
                            Data Exploration    
                        </Link>
                    </li>

                    <li className='navigation-item'>
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