import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './index.css';

const App = () => {
    return (
        <React.Fragment>
            <NavBar/>

            <div className="bgimg-1 w3-display-container w3-opacity-min" id="home">
                <div className="w3-display-middle">
                    <span className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">MY <span
                        className="w3-hide-small">WEBSITE</span> LOGO</span>
                </div>
            </div>

            <About/>


            <div className="bgimg-2 w3-display-container w3-opacity-min">
                <div className="w3-display-middle">
                    <span
                        className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">PORTFOLIO</span>
                </div>
            </div>

            <Portfolio/>

            <div className="bgimg-3 w3-display-container w3-opacity-min">
                <div className="w3-display-middle">
                    <span
                        className="w3-center w3-padding-large w3-black w3-xlarge w3-wide w3-animate-opacity">CONTACT</span>
                </div>
            </div>

            <Contact/>

            <Footer/>
        </React.Fragment>
    );
};

export default App;
