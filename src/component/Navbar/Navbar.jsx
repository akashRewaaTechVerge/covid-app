import React from 'react'
import './Navbar.css'
import { FaTimes } from 'react-icons/fa'
import { useState } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <header className='sticky'>
                <div className="container">
                    <div className="header-content">
                        <div className="logo-text " style={{ fontWeight: 900, fontSize: '22px' }}>

                            <h1><span>W</span>eswab</h1>

                        </div>
                        <nav classNameName='text-center'>
                            <ul>
                                <li><NavLink activeclassName="active" to="/" >Home</NavLink></li>
                                <li><NavLink to="/SouthCarolina">SouthCarolina</NavLink></li>
                                <li><NavLink to="/Illinois">Illinois</NavLink></li>
                                <li><NavLink to="/Missouri">Missouri</NavLink></li>
                                <li><NavLink to="/WorkPlace">WorkPlace-Testing</NavLink></li>
                            </ul>
                        </nav>
                        {/* <!--logo end--> */}


                        {/* <!--navigation end--> */}
                        {
                            click ? <FaTimes className="menu-btnn" size={20} onClick={closeMobileMenu} /> : <div className="menu-btnn" onClick={handleClick} >
                                <div className="menu-btn" >
                                    <span className="bar1"></span>
                                    <span className="bar2"></span>
                                    <span className="bar3"></span>
                                </div>
                                {/* <!--menu-bar end--> */}
                            </div>
                        }
                    </div>
                    {/* <!--header-content end--> */}
                </div>
            </header>

            <div className={click ? "responsive-mobile-menu active" : "responsive-mobile-menu"} onClick={closeMobileMenu}>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/SouthCarolina">SouthCarolina</NavLink></li>
                    <li><NavLink to="/Illinois">Illinois</NavLink></li>
                    <li><NavLink to="/Missouri">Missouri</NavLink></li>
                    <li><NavLink to="/WorkPlace">WorkPlace-Testing</NavLink></li>
                </ul>
            </div>
            {/* <!--responsive-mobile-menu end--> */}
        </>
    )
}

export default Navbar
