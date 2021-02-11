import React from 'react';

const Footer = () => {
    return (
        <footer className="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
            <a href="#home" className="w3-button w3-light-grey"><i className="fa fa-arrow-up w3-margin-right"/>To the
                top</a>
            <div className="w3-xlarge w3-section">
                <i className="fa fa-facebook-official w3-hover-opacity"/>
                <i className="fa fa-instagram w3-hover-opacity"/>
                <i className="fa fa-snapchat w3-hover-opacity"/>
                <i className="fa fa-pinterest-p w3-hover-opacity"/>
                <i className="fa fa-twitter w3-hover-opacity"/>
                <i className="fa fa-linkedin w3-hover-opacity"/>
            </div>
        </footer>
    );
};

export default Footer;
