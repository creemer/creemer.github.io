import React from 'react';
import '../index.css'

const Portfolio = () => {
    return (
        <React.Fragment>
            <div className="w3-content w3-container w3-padding-64" id="portfolio">
                <h3 className="w3-center">MY WORKS</h3>
                <p className="w3-center">
                    <em>You can find all my public available works on my <a href="https://github.com/creemer">Github page</a>
                    </em>
                </p>
            </div>

            {/*!--Modal for full size images on click--*/}
            <div id="modal01" className="w3-modal w3-black">
                <span className="w3-button w3-large w3-black w3-display-topright" title="Close Modal Image"><i
                    className="fa fa-remove"/></span>
                <div className="w3-modal-content w3-animate-zoom w3-center w3-transparent w3-padding-64">
                    <img id="img01" className="w3-image" alt="some image in modal"/>
                        <p id="caption" className="w3-opacity w3-large"/>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Portfolio;
