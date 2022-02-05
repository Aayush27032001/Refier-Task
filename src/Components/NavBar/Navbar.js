import React from 'react';
import "./Navbar.scss";
import logo from "../Assets/logo.svg"

const Navbar = ({setLoginModal}) => {

    const loginHandler = () => {
        setLoginModal(false);
    }

    return (
        <nav className='navbar-container'>
            <div className="container">
                <div className="navbar-holder">
                    <div className="nav-logo">
                        <img src={logo} alt="img" />
                    </div>
                    <div className="nav-elements">
                        <span onClick={loginHandler}>Login</span>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
