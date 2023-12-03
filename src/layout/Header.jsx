

import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";
const Header = () => {
    const [toggle, SetToggle] = useState(false)

    return (
        <>

            <div className="container-fluid ps-0 pe-0 position-sticky " id="stick" style={{ backgroundColor: '#ffff', zIndex: '999999', boxShadow: ' 1px 2px 4px 0px #c5c5c5', top: 0 }}  >
                <header >
                    <nav>
                        <div className="logo">
                            <h4 className="mb-0" style={{ color: '#3b3b3b' }}>Epson</h4>
                        </div>
                        <div className="nav-link" id="menu" style={{ right: toggle === true ? '0' : '-100%' }}>
                            <div className="mid-logo p-3">
                                <IoClose style={{ width: '45px', height: '46px', fill: '#3b3b3b ' }} onClick={() => SetToggle(false)} />
                            </div>
                            <ul className="mb-0">
                                <li><Link to="/" className="links" onClick={() => SetToggle(false)}>Home</Link></li>
                                <li><Link to="/about" className="links" onClick={() => SetToggle(false)}>About us </Link></li>
                                <li><Link to="/service" className="links" onClick={() => SetToggle(false)}>Service</Link></li>
                                <li><Link to="/blog" className="links" onClick={() => SetToggle(false)}>Blog</Link></li>
                                <li><Link to="/contact" className="links" onClick={() => SetToggle(false)}>Contact</Link></li>
                            </ul>
                        </div>
                        <div className="toggle-btn">
                            <IoMdMenu style={{ width: '47px', height: '47px', fill: 'fill: #3b3b3b' }} onClick={() => SetToggle(true)} />
                        </div>
                    </nav>
                </header>
            </div>
        </>
    )
}

export default Header