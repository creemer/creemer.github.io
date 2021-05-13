import React from 'react';
import '../index.css';

const NavBar = () => {
    const toggleFunction = () => {
        const x = document.getElementById("navMobile");
        if (x.className.indexOf("w3-show") === -1) {
            x.className += " w3-show";
        } else {
            x.className = x.className.replace(" w3-show", "");
        }
    }

    return (
        <div className="w3-top">
            <div className="w3-bar" id="myNavbar">
                <a className="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right"
                   onClick={toggleFunction}
                   title="Toggle Navigation Menu"
                >
                    <i className="fa fa-bars" />
                </a>
                <a href="#home" className="w3-bar-item w3-button">
                    HOME
                </a>
                <a href="#about" className="w3-bar-item w3-button w3-hide-small">
                    <i className="fa fa-user w3-padding-small"/>
                    ABOUT
                </a>
                <a href="#portfolio" className="w3-bar-item w3-button w3-hide-small">
                    <i className="fa fa-th w3-padding-small"/>
                    PORTFOLIO
                </a>
                <a href="#contact" className="w3-bar-item w3-button w3-hide-small">
                    <i className="fa fa-envelope w3-padding-small"/>
                    CONTACT
                </a>
            </div>

            <div id="navMobile" className="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
                <a href="#about" className="w3-bar-item w3-button" onClick={toggleFunction}>ABOUT</a>
                <a href="#portfolio" className="w3-bar-item w3-button" onClick={toggleFunction}>PORTFOLIO</a>
                <a href="#contact" className="w3-bar-item w3-button" onClick={toggleFunction}>CONTACT</a>
                <a href="#" className="w3-bar-item w3-button">SEARCH</a>
            </div>
        </div>
    );
};

export default NavBar;
