import React, { useState } from 'react';

const Nav = () => {

    const [burger, setBurger] = useState(false);

    return (

        <nav className='navbar is-link is-fixed-top'>
            <div className='navbar-brand'>
                <div className="navbar-burger burger" onClick={() => setBurger(!burger)} data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="navbarExampleTransparentExample" className={ burger ? 'navbar-menu is-active' : 'navbar-menu'}>
                <div className="navbar-end">
                    <a className="navbar-item" href="#about">
                        <span className="icon">
                            <i className="fas fa-info"></i>
                        </span>
                        <span>About</span>
                    </a>
                    {/* <a className="navbar-item" href="#contact">
                        <span className="icon">
                            <i className="fas fa-file-alt"></i>
                        </span>
                        <span>Resume</span>
                    </a> */}
                    <a className="navbar-item" href="#portfolio">
                        <span className="icon">
                            <i className="fas fa-th-list"></i>
                        </span>
                        <span>Portfolio</span>
                    </a>
                    <a className="navbar-item" href="#contact">
                        <span className="icon">
                            <i className="fas fa-envelope"></i>
                        </span>
                        <span>Contact</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default Nav;